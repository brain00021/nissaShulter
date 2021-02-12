import { Button ,Card } from 'react-bootstrap';
// import axios from 'axios';
import 'assets/scss/card.scss'
// import pic2 from 'assets/img/banner/banner2.jpg';
import defaultImg from 'assets/img/smallPetIcon.jpg'
const AnimalCard = ({pic , message='相關資訊'}) => {
  return(
    <Card>
      <div className="imgWrapper">
      <Card.Img variant="top" src={pic ||defaultImg} />
      </div>
      
      <Card.Body>
        <Card.Title>
          <h5>寵物名稱</h5>
          <span>性別</span>
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