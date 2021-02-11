import React, { useState, useEffect } from "react";
import Banner from '../components/banner.jsx'
import HomePageFilter from '../components/Filter.jsx';
import "assets/scss/index.scss";
function HomePage(){
  return(
    <div>
      <Banner></Banner>
      <div className="indexBg" >
      <HomePageFilter></HomePageFilter>
      </div>
     
    </div>
  )

}

export default HomePage