import React, { useState, useEffect } from "react";
import axios from "axios"
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";
import {Container,Row,Col,DropdownButton,Dropdown,Button} from 'react-bootstrap';
import 'assets/scss/filter.scss'
import AnimalCard from 'components/AnimalCard';


const IndexAnimalList = () => {
  return (
    <Container className="IndexAnimalCard">
      <h2>待認養的毛小孩 </h2>
      <h6>讓我們不只有十二夜，還要陪你度過千千萬萬個夜。</h6>
      <Row>
        <Col sm={true} md={6} lg={3}><AnimalCard></AnimalCard></Col>
        <Col sm={true} md={6} lg={3}><AnimalCard></AnimalCard></Col>
        <Col sm={true} md={6} lg={3}>
        <AnimalCard></AnimalCard>
        </Col>
        <Col sm={true} md={6} lg={3}>
        <AnimalCard></AnimalCard>
        </Col>
      </Row>
      <div className="btnWrapper">
        <Link to="/about" className="defaultBtn">尋找更多的狗狗</Link>
      </div>
      
    </Container>
   
  )
}
export default IndexAnimalList;