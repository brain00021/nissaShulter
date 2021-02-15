import React, { useState, useEffect } from "react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

import axios from "axios"
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";
import {Container,Row,Col,DropdownButton,Dropdown,Button} from 'react-bootstrap';
import 'assets/scss/filter.scss'
import AnimalCard from 'components/AnimalCard';
import useUtils from "../utils.js";

var DateDiff = function (sDate1, sDate2) { // sDate1 和 sDate2 是 2016-06-18 格式
  var oDate1 = new Date(sDate1);
  var oDate2 = new Date();
  var iDays = parseInt(Math.abs(oDate1 - oDate2) / 1000 / 60 / 60 / 24); // 把相差的毫秒數轉換為天數
  return iDays;
};

const IndexAnimalList = () => {
  const { animalList } = useUtils();
  const [fiterAnimalItem,setFilterAnimalItem] = useState([])
  useEffect(async()=>{
    const {data} = await animalList();
    const copyData = JSON.parse(JSON.stringify(data))
    const filterData = copyData.sort(function(a, b) {
      var nameA = DateDiff(a.CreateTime.slice(0,10)); // ignore upper and lowercase
      var nameB = DateDiff(b.CreateTime.slice(0,10)); // ignore upper and lowercase
      if (nameA < nameB) {
        return 1;
      }
      if (nameA > nameB) {
        return -1;
      }
      // names must be equal
      return 0;
    });
    const setCopyData = filterData.reduce((acc,cur) => {
      cur['TotalStay'] =  DateDiff(cur.AcceptDate.slice(0,10))
      return acc.concat(cur);
    },[])
    setFilterAnimalItem([...setCopyData.slice(0,20)]);
  },[])
  return (
    <Container className="IndexAnimalCard">
      <h2>待認養的毛小孩 </h2>
      <h6>讓我們不只有十二夜，還要陪你度過千千萬萬個夜。</h6>
      {fiterAnimalItem.length > 0 &&  (<Swiper
        spaceBetween={10}
        slidesPerView={4}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
      >
      <div className="swiper-button-prev"></div>
      {fiterAnimalItem.map((item,index)=>{
          console.log(item,'item')
          return(
            <SwiperSlide key={index}><Link to={`/animalDetail/${item.AcceptNum}/${item.AnimalId}`}><AnimalCard title={item?.BreedName} pic={item.pic} sex={item?.Sex} message={`入園天數${item?.TotalStay}`}></AnimalCard></Link></SwiperSlide>
          )
        })}
      <div className="swiper-button-next"></div>
    </Swiper>)}

        {/* {fiterAnimalItem.map((item,index)=>{
          return(
            <Col sm={true} md={6} lg={3}><AnimalCard></AnimalCard></Col>
          )
        })} */}
        
        {/* <Col sm={true} md={6} lg={3}><AnimalCard></AnimalCard></Col>
        <Col sm={true} md={6} lg={3}>
        <AnimalCard></AnimalCard>
        </Col>
        <Col sm={true} md={6} lg={3}>
        <AnimalCard></AnimalCard>
        </Col> */}
      <div className="btnWrapper">
        <Link to="/about" className="defaultBtn">尋找更多的狗狗</Link>
      </div>
      
    </Container>
   
  )
}
export default IndexAnimalList;