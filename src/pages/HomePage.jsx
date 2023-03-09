import React, { useState, useEffect } from "react";
import Banner from 'components/banner.jsx'
import HomePageFilter from 'components/Filter.jsx';
import IndexAnimalList from 'components/IndexAnimalList.jsx';
import IndexInformation from 'components/IndexInformation.jsx';
import "assets/scss/index.scss";
// import fontawesome from '@fortawesome/fontawesome'
import pic from 'assets/img/banner/banner1.jpg';
import picMob from 'assets/img/banner/banner1_mob.jpg';
import picMob2 from 'assets/img/banner/banner2_mob.jpg';
import pic2 from 'assets/img/banner/banner2.jpg';
const bannerGroup = [{web:pic,mob:picMob},{web:pic2,mob:picMob2}]

function HomePage() {

  return(
    <div className="indexWrapper">
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