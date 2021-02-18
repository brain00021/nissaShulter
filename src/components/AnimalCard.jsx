import { Button ,Card } from 'react-bootstrap';
// import axios from 'axios';
import 'assets/scss/card.scss'
// import pic2 from 'assets/img/banner/banner2.jpg';
import defaultImg from 'assets/img/smallPetIcon.jpg'
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faVenus, faMars } from "@fortawesome/free-solid-svg-icons";
import { useLocalStorage } from 'useLocalStorage';
library.add(faMars,faVenus);
const amialPic = "https://asms.coa.gov.tw/Amlapp/Upload/Pic/"
const AnimalCard = ({pic , Message='相關資訊',BreedName ,Sex, AcceptNum , AnimalId,IsFav = false,handleFavor}) => {
  // const [animalFavList, setAnimalFavList] = useLocalStorage('animalFavList');
  
  const addFavorite = ()=>{
    
    const favoriteAnimal = JSON.parse(localStorage.getItem('animalFavList')) || [];
    const checkFavorite =  favoriteAnimal?.find(item => item?.AnimalId === AnimalId);
    
    const Favorite = {
      pic,
      Message,
      BreedName,
      Sex,
      AcceptNum,
      AnimalId,
      IsFav: true
    }
    
    // setAnimalFavList(favoriteAnimal)
    if(!checkFavorite){
      favoriteAnimal.push(Favorite)
      localStorage.setItem('animalFavList',JSON.stringify(favoriteAnimal))
      handleFavor();
    }
  }
  const cancelFavorite = ()=>{
    console.log('cancelFavorite')
    const favoriteAnimal = JSON.parse(localStorage.getItem('animalFavList')) || [];
    const checkDeletFavorNum =  favoriteAnimal?.findIndex(item => item?.AnimalId === AnimalId);
    // debugger;
    if(checkDeletFavorNum !== -1){
      const filterFavoriteAnimal = [...favoriteAnimal.slice(0,checkDeletFavorNum),...favoriteAnimal.slice(checkDeletFavorNum+1)]
      localStorage.setItem('animalFavList',JSON.stringify(filterFavoriteAnimal))
      handleFavor();
    }
  }
  
  return(
    <Card>
      {IsFav ? (<Button onClick={cancelFavorite} className="isFavorite">不是我的最愛</Button>) : (<Button onClick={addFavorite} className="isFavorite">我的最愛</Button>)}
      
      
       <Link to={`/animalDetail/${AcceptNum}/${AnimalId}`}>
      <div className="imgWrapper">
      <Card.Img variant="top" src={amialPic+pic ||defaultImg} />
      </div>
      
      <Card.Body>
        <Card.Title>
          <h5>{BreedName}</h5>
          <span>{Sex === 1? (<FontAwesomeIcon icon={faMars} size="sm"/>) : (<FontAwesomeIcon icon={faVenus} size="sm"/>) }</span>
        </Card.Title>
        <Card.Text>
          {Message}
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
      </Link>
    </Card>
  )
}

export default AnimalCard