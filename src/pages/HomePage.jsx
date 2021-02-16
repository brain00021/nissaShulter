import React, { useState, useEffect } from "react";
import Banner from 'components/banner.jsx'
import HomePageFilter from 'components/Filter.jsx';
import IndexAnimalList from 'components/IndexAnimalList.jsx';
import IndexInformation from 'components/IndexInformation.jsx';
import "assets/scss/index.scss";
// import fontawesome from '@fortawesome/fontawesome'
import pic from 'assets/img/banner/banner1.jpg';
import pic2 from 'assets/img/banner/banner2.jpg';
const bannerGroup = [pic,pic2]

function HomePage(){
  return(
    <div>
      <Banner bannerGroup={bannerGroup}></Banner>
      <div className="indexBg" >
        <HomePageFilter></HomePageFilter>
        <IndexAnimalList/>
        <IndexInformation/>
      </div>
     
    </div>
  )

}

export default HomePage