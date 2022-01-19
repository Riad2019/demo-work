import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './home.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
//import 'swiper/swiper.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
//import 'swiper/components/navigation/navigation.scss';
//import 'swiper/components/pagination/pagination.scss';
//import 'swiper/components/scrollbar/scrollbar.scss';
import locations from '../../fakeData/index';
import LocationItem from './LocationItem'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);
const Home =()=>{
    

    const [slideIndex, setSlideIndex] = useState(0)
    const [booking, setBooking] = useState({})

     useEffect(() => {
    const activeItem = locations.find((loctaion, index) => index.toString() === slideIndex.toString())
    setBooking(activeItem)
  }, [slideIndex])


  const onClickHandler = swiper => {
    if (swiper.clickedSlide) {
      if (swiper.clickedSlide.attributes) {
        var a = swiper.clickedSlide.attributes.getNamedItem('data-swiper-slide-index').value;
        setSlideIndex(a);
      }
    }
  }


    return(
<Container className="pr-0 mt-5 pt-5">
    <Row>
        <Col sm={4} xl={4}>
        
           <h1 className="font-weight-bold">{booking.name}</h1>
          <img src={booking.image2} />


        
        
        </Col>
        <Col sm={8} xl={8}>
          <Swiper
            spaceBetween={15}
            slidesPerView={3}
            navigation
            autoplay={{
              delay: 2000,
              disableOnInteraction: false
            }}
            loop={true}
            onClick={(swiper) => onClickHandler(swiper)}
            onSlideChange={(swiper) => setSlideIndex(swiper.realIndex)}
          >
            {locations.map(location => {
              return (<SwiperSlide key={location.id}>
                {({ isActive }) => (
                  <LocationItem isActive={isActive} location={location} />
                )}
              </SwiperSlide>)
            })}
          </Swiper>
        
        
        
        
        </Col>

    </Row>


</Container>

    );
};
export default  Home;