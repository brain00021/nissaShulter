import React, { useState, useEffect } from "react";
import Banner from 'components/banner.jsx'
import HomePageFilter from 'components/Filter.jsx';
import IndexAnimalList from 'components/IndexAnimalList.jsx';
import IndexInformation from 'components/IndexInformation.jsx';
import "assets/scss/index.scss";
function HomePage(){
  return(
    <div>
      <Banner></Banner>
      <div className="indexBg" >
      <HomePageFilter></HomePageFilter>
      <IndexAnimalList/>
      <IndexInformation/>
      </div>
     
    </div>
  )

}

export default HomePage