import React, { useState, useEffect } from "react";
import axios from "axios"
import {Container,Row,Col,DropdownButton,Dropdown,Button} from 'react-bootstrap';
import 'assets/scss/filter.scss'
// import AnimalCard from 'components/AnimalCard';

const InformationItem = () => {
  return (
    <div>i hate my life</div>
  )
}
const IndexInformation = () => {
  return (
    <Container className="IndexAnimalCard">
      <h2>待認養的毛小孩 </h2>
      <h6>讓我們不只有十二夜，還要陪你度過千千萬萬個夜。</h6>
      <Row>
        <Col sm={true} md={4} ><InformationItem></InformationItem></Col>
        <Col sm={true} md={4} ><InformationItem></InformationItem></Col>
        <Col sm={true} md={4} >
        <InformationItem></InformationItem>
        </Col>
      </Row>
      
    </Container>
   
  )
}
export default IndexInformation;