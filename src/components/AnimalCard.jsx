import { Button ,Card } from 'react-bootstrap';
// import axios from 'axios';
import 'assets/scss/card.scss'
// import pic2 from 'assets/img/banner/banner2.jpg';
import defaultImg from 'assets/img/smallPetIcon.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faVenus, faMars } from "@fortawesome/free-solid-svg-icons";

library.add(faMars,faVenus);
const amialPic = "https://asms.coa.gov.tw/Amlapp/Upload/Pic/"
const AnimalCard = ({pic , message='相關資訊',title ,sex}) => {
  return(
    <Card>
      <div className="imgWrapper">
      <Card.Img variant="top" src={amialPic+pic ||defaultImg} />
      </div>
      
      <Card.Body>
        <Card.Title>
          <h5>{title}</h5>
          <span>{sex === 1? (<FontAwesomeIcon icon={faMars} size="sm"/>) : (<FontAwesomeIcon icon={faVenus} size="sm"/>) }</span>
        </Card.Title>
        <Card.Text>
          {message}
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  )
}

export default AnimalCard