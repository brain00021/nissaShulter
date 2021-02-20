import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
// import { resolveMotionValue } from "framer-motion";
// import FormData from "form-data";
var DateDiff = function (sDate1, sDate2) {
  // sDate1 和 sDate2 是 2016-06-18 格式
  var oDate1 = new Date(sDate1);
  var oDate2 = new Date();
  var iDays = parseInt(Math.abs(oDate1 - oDate2) / 1000 / 60 / 60 / 24); // 把相差的毫秒數轉換為天數
  return iDays;
};
const useStore = () => {
  let history = useHistory();

  const animalList = async () => {
    try {
      const url =
        "https://asms.coa.gov.tw/Asms/api/ViewNowAnimal?sortFields=CreateTime";
      const config = { headers: { "Access-Control-Allow-Origin": "*" } };
      const res = await axios.get(url, config);
      const copyData = JSON.parse(JSON.stringify(res.data));
      const copyDataCustom = copyData.reduce((acc, cur) => {
        cur["IsFav"] = false;
        cur["TotalStay"] = DateDiff(cur.CreateTime.slice(0, 10));
        return acc.concat(cur);
      }, []);
      return copyDataCustom;
    } catch (e) {
      console.log("animalList", e);
    }
  };

  const animalFilterList = async (filterUrl) => {
    try {
      const url = `https://asms.coa.gov.tw/Asms/api/ViewNowAnimal${filterUrl}`;
      const config = { headers: { "Access-Control-Allow-Origin": "*" } };
      const res = await axios.get(url, config);
      const copyData = JSON.parse(JSON.stringify(res.data));
      const copyDataCustom = copyData.reduce((acc, cur) => {
        cur["IsFav"] = false;
        cur["TotalStay"] = DateDiff(cur.CreateTime.slice(0, 10));
        return acc.concat(cur);
      }, []);
      return copyDataCustom;
    } catch (e) {
      console.log("animalFilterList", e);
    }
  };
  const animalAllShelter = async () => {
    try {
      const url = "https://asms.coa.gov.tw/Asms/api/Shelter?UserType=G";
      const config = { headers: { "Access-Control-Allow-Origin": "*" } };
      const res = await axios.get(url, config);
      return res;
    } catch (e) {
      console.log("animalList", e);
    }
  };
  const getAnimalTotal = async () => {
    // 要先打開 https://cors-anywhere.herokuapp.com 的伺服器才能執行這段
    try {
      const url =
        "https://cors-anywhere.herokuapp.com/https://asms.coa.gov.tw/amlapp/Handler_ENRF/App/getAnimalCount.ashx";
      const headers = {
        data: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
          "Sec-Fetch-Site": "same-origin",
        },
      };
      let forData = new FormData();
      forData.append(
        "Data",
        '{"TableName":"Adopt","Breed":"","ChipID":"","AcceptNum":"","Unit":""}'
      );
      const res = await axios.post(url, forData, headers);
      return res;
    } catch (e) {
      console.log("totalError", e);
    }
  };
  const animalDetail = async (acceptNum, id) => {
    try {
      const config = { headers: { "Access-Control-Allow-Origin": "*" } };
      const url = `https://asms.coa.gov.tw/Asms/api/Animals?AcceptNum=${acceptNum}&keyNo=${id}&stChk=Y`;
      const res = await axios.get(url, config);
      return res;
    } catch (e) {
      console.log("animalDetail", e);
    }
  };
  const shulterInfomation = async (unit) => {
    try {
      const config = { headers: { "Access-Control-Allow-Origin": "*" } };
      const url = `https://asms.coa.gov.tw/Asms/api/Shelter?UserTag=${unit}`;
      const res = await axios.get(url, config);
      return res;
    } catch (e) {
      console.log("shulterInfomation", e);
    }
  };

  const checkIsFav = async (arr) => {
    try {
      const isFavorite =
        JSON.parse(localStorage.getItem("animalFavList")) || [];
      if (isFavorite.length > 0) {
        const checkFavoriteList = arr.reduce((acc, cur) => {
          const isFavItem = isFavorite.find((item) => {
            return item.AnimalId === cur.AnimalId;
          });
          if (isFavItem) {
            cur["IsFav"] = isFavItem.IsFav;
            return acc.concat(cur);
          } else {
            cur["IsFav"] = false;
            return acc.concat(cur);
          }
        }, []);
        return checkFavoriteList;
      } else {
        return [];
      }
    } catch (e) {
      console.log("checkIsFav", e);
    }
  };
  return {
    animalList,
    animalDetail,
    shulterInfomation,
    checkIsFav,
    getAnimalTotal,
    animalAllShelter,
    animalFilterList,
  };
};

export default useStore;
