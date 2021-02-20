import React, { useState, useEffect } from "react";
import {Container,Row,Col,ListGroup ,Image,Button} from 'react-bootstrap';
import "assets/scss/index.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import useUtils from "../utils.js";
import "assets/scss/animalDetail.scss";
import Banner from 'components/banner.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMars, faVenus ,faPhoneVolume ,faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import dogIcon from 'assets/img/icon/pawIcon.png'
import lineIcon  from 'assets/img/icon/lineIcon.png'
import facebookIcon from 'assets/img/icon/facebookIcon.png'
library.add(faVenus,faMars,faPhoneVolume,faMapMarkerAlt);
function AnimalDetail(){
  const {animalAcceptNum,anmialId} =  useParams();
  const {animalDetail,shulterInfomation} = useUtils();
  const [detailData ,setDetailData] =useState({});
  const [infomation,setInfomation] = useState({});
  
  useEffect(async() => {
    const  origiData =  await animalDetail(animalAcceptNum,anmialId);
    const  getOrigiAnimalData = origiData?.data?.[0];
    const  origiInfomation = await shulterInfomation(getOrigiAnimalData.Unit)
    const getContactInfomation = origiInfomation?.data?.[0];
    
    setDetailData({...getOrigiAnimalData});
    setInfomation({...getContactInfomation})
    // debugger;
  },[])
  console.log(detailData,'detailData')
  const animalPic = "https://asms.coa.gov.tw/Amlapp/Upload/Pic/" + detailData.InImage
  // const animalPic = 'https://asms.coa.gov.tw/Amlapp/Upload/Pic/8903a339-f20f-47c4-b61a-058b7329710c_org.JPG';
  const bannerGroup = [{web:animalPic,mob:animalPic}]
  const animalDetailInfo = {
    CreateTime: '入所日期',
    AdoptionName:'開放認養',
    Age2Name:'年齡',
    CoatName :'毛色',
    AcceptNum:'收容編號',
    ChipNum: '晶片號碼',
    CageName: '籠舍'
  }
  return(
    <div className="animalDetailWrapper">
      <Container>
      <Banner bannerGroup={bannerGroup}></Banner>
      <Row className="detailWrapper">
        <Col span={6}>
          <div  className="detailColWrapper">

          <div className="detail">
            <h5>浪浪資料</h5>
            <div className="smallTitle">
            <h6>{detailData.VarietyName || '未知'}</h6>
            <span>{detailData.sex === 1? (<FontAwesomeIcon icon={faMars} size="sm"/>) : (<FontAwesomeIcon icon={faVenus} size="sm"/>) }</span>
            </div>
            <div className="smallDtail">
              <ListGroup variant="flush">
                {Object.entries(animalDetailInfo).map((item,index)=>{
                  // console.log(item,'item Detail')
                  const [key,value] = item;
                  return(
                    <ListGroup.Item>
                    <i><Image src={dogIcon}/></i>
                    
                    {value}: {detailData[key]}</ListGroup.Item>
                  )

                })}
              </ListGroup>
            </div>


          </div>
          <div className="detail">
              <h5>聯絡資訊</h5>
              <div className="smallTitle">
                <h6>{infomation.ShelterName || '未知'}</h6>
              </div>
              <div className="smallDtail">
              <ListGroup variant="flush">
                    <ListGroup.Item>
                    <i><FontAwesomeIcon icon={faPhoneVolume} size="sm"/></i>
                    {infomation.Tel}
                    </ListGroup.Item>
                    <ListGroup.Item>
                    <i><FontAwesomeIcon icon={faMapMarkerAlt} size="sm"/></i>
                    {infomation.Address}
                    </ListGroup.Item>
              </ListGroup>
              </div>
            </div> 
          </div>
        </Col>
        <Col span={6}>
          <div className="detailColWrapper">
          <div className="infomationArea">
            <a href={infomation.Link} className="defaultBtn">聯繫收容所</a>
            <div className="defaultDetailBtnGroup">
              <Button className="defaultDetailBtn" style={{flex:2, maxWidth:325}}>
              <i className="favoriteIcon"></i>
              我要追蹤
              </Button>
              <a className="defaultDetailBtn" style={{flexBasis:30}}>
              <i><Image src={lineIcon}/></i>
              </a>
              <a className="defaultDetailBtn" style={{flexBasis:30}}>
              <i><Image src={facebookIcon}/></i>
              </a>
            </div>
          </div>
          </div>
          <div className="detailColWrapper" style={{marginTop:20}}>
          <div className="memo">
            <p>️＊如有任何領養問題請直接與收容所聯繫。
領養前請謹慎考慮，不隨意棄養。</p>
          </div>
          </div>
        </Col>
      </Row>
      </Container>
    </div>
  )

}

export default AnimalDetail