import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'assets/scss/banner.scss'
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y,Autoplay]);
const bannerSwiper = ({bannerGroup}) => {
  return (
    
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={{ delay: 3000 }}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
    >
      <div className="swiper-button-prev"></div>
      {bannerGroup.map((item) =>{
        return( <SwiperSlide><div className="web_view"><img src={item.web} /></div><div className="mob_view"><img src={item.mob} /></div></SwiperSlide>)
      })}
      
      {/* <SwiperSlide><img src={pic2} /></SwiperSlide> */}
      <div className="swiper-button-next"></div>
    </Swiper>
  );
};
export default bannerSwiper;