import React, { useState, useEffect } from "react";
import axios from "axios"
import "assets/scss/footer.scss";
import {Container} from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
    <div className="footer">
      <Container>
      <i className="fas fa-camera"></i> 
      本站所有資訊來源為政府資料開放平台及會員自行刊登，本站對資訊內容無法確實檢查，僅就一般正常情理做審核，如有遺漏或侵犯它人權益由刊登者自行負擔相關責任。 如有任何疑問請與我們聯絡 © 2020 毛小孩不想流浪 prototype view 
      </Container>
    </div>
  )
}
export default Footer;