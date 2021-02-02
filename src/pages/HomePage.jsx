import React, { useState, useEffect } from "react";
import Banner from '../components/banner.jsx'
import HomePageFilter from '../components/Filter.jsx';
function HomePage(){
  return(
    <div>
      <Banner></Banner>
      <HomePageFilter></HomePageFilter>
    </div>
  )

}

export default HomePage