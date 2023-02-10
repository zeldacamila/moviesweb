import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";

import rightbutton from '../../images/der.jpg';
import leftbutton from '../../images/izq.jpg'

const ThirdBanner = () => {

  return (
    <div className='ThirdBanner-container'>
      <div className="ManageCategory-container2">
        <div className="ManageCategory-title">
       
          <div className="category-title">
            <p className='titlecategoryL'>Funniest Comedy Movies of 2018</p>
          </div>
          </div>
        <div className="ManageCategory-buttons">
          <div className="arrow-buttons-container">
            <button className='arrowbutton'><img id='imgarrowbutton' src={leftbutton} alt=''/></button>
            <button className='arrowbutton'><img id='imgarrowbutton' src={rightbutton} alt=''/></button>
          </div>
          <div className='viewall-button'>  
            <button className='viewallbutton'>VIEW ALL  ></button>
          </div>
        </div>

      </div>
      <div className="Tabs-container">
        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Today</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">This week</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Last 30 days</button>
          </li>
        </ul>
        <div class="tab-content" id="pills-tabContent">
          <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
          <Swiper
              slidesPerView={6}
              centeredSlides={false}
              slidesPerGroupSkip={3}
              grabCursor={true}
              keyboard={{
                enabled: true,
              }}
              breakpoints={{
                769: {
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                },
              }}
              navigation={true}
              modules={[Keyboard, Scrollbar, Navigation, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src="https://portadascreativas.com/wp-content/uploads/psicosis-portada-original-257x300.jpg" />
                <p className='info-slide'>Action, 2016</p>
                <p className='title-slide'>Den of Thieves</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://cdn.magloft.com/github/swiper/images/page-002.jpg" />
                <p className='info-slide'>Action, 2016</p>
                <p className='title-slide'>Den of Thieves</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://cdn.magloft.com/github/swiper/images/page-003.jpg" />
                <p className='info-slide'>Action, 2016</p>
                <p className='title-slide'>Den of Thieves</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://cdn.magloft.com/github/swiper/images/page-004.jpg" />
                <p className='info-slide'>Action, 2016</p>
                <p className='title-slide'>Den of Thieves</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://cdn.magloft.com/github/swiper/images/page-005.jpg" />
                <p className='info-slide'>Action, 2016</p>
                <p className='title-slide'>Den of Thieves</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://cdn.magloft.com/github/swiper/images/page-006.jpg" />
                <p className='info-slide'>Action, 2016</p>
                <p className='title-slide'>Den of Thieves</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://cdn.magloft.com/github/swiper/images/page-007.jpg" />
                <p className='info-slide'>Action, 2016</p>
                <p className='title-slide'>Den of Thieves</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://cdn.magloft.com/github/swiper/images/page-008.jpg" />
                <p className='info-slide'>Action, 2011</p>
                <p className='title-slide'>Begin Again</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://cdn.magloft.com/github/swiper/images/page-009.jpg" />
                <p className='info-slide'>Action, 2016</p>
                <p className='title-slide'>Spiderman 3</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://cdn.magloft.com/github/swiper/images/page-007.jpg" />
                <p className='info-slide'>Action, 2016</p>
                <p className='title-slide'>Den of Thieves</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://cdn.magloft.com/github/swiper/images/page-007.jpg" />
                <p className='info-slide'>Action, 2016</p>
                <p className='title-slide'>Den of Thieves</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://cdn.magloft.com/github/swiper/images/page-007.jpg" />
                <p className='info-slide'>Action, 2016</p>
                <p className='title-slide'>Den of Thieves</p>
              </SwiperSlide>
            </Swiper>
          </div>
          <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
          <Swiper
              slidesPerView={6}
              centeredSlides={false}
              slidesPerGroupSkip={3}
              grabCursor={true}
              keyboard={{
                enabled: true,
              }}
              breakpoints={{
                769: {
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                },
              }}
              navigation={true}
              modules={[Keyboard, Scrollbar, Navigation, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src="https://m.media-amazon.com/images/I/41WMFqes1iL._AC_.jpg" alt=''/>
                <p className='info-slide'>Action, 2016</p>
                <p className='title-slide'>Den of Thieves</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://cdn.magloft.com/github/swiper/images/page-002.jpg" />
                <p className='info-slide'>Action, 2016</p>
                <p className='title-slide'>Den of Thieves</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://cdn.magloft.com/github/swiper/images/page-003.jpg" />
                <p className='info-slide'>Action, 2016</p>
                <p className='title-slide'>Den of Thieves</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://cdn.magloft.com/github/swiper/images/page-004.jpg" />
                <p className='info-slide'>Action, 2016</p>
                <p className='title-slide'>Den of Thieves</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://cdn.magloft.com/github/swiper/images/page-005.jpg" />
                <p className='info-slide'>Action, 2016</p>
                <p className='title-slide'>Den of Thieves</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://cdn.magloft.com/github/swiper/images/page-006.jpg" />
                <p className='info-slide'>Action, 2016</p>
                <p className='title-slide'>Den of Thieves</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://cdn.magloft.com/github/swiper/images/page-007.jpg" />
                <p className='info-slide'>Action, 2016</p>
                <p className='title-slide'>Den of Thieves</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://cdn.magloft.com/github/swiper/images/page-008.jpg" />
                <p className='info-slide'>Action, 2011</p>
                <p className='title-slide'>Begin Again</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://cdn.magloft.com/github/swiper/images/page-009.jpg" />
                <p className='info-slide'>Action, 2016</p>
                <p className='title-slide'>Spiderman 3</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://cdn.magloft.com/github/swiper/images/page-007.jpg" />
                <p className='info-slide'>Action, 2016</p>
                <p className='title-slide'>Den of Thieves</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://cdn.magloft.com/github/swiper/images/page-007.jpg" />
                <p className='info-slide'>Action, 2016</p>
                <p className='title-slide'>Den of Thieves</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://cdn.magloft.com/github/swiper/images/page-007.jpg" />
                <p className='info-slide'>Action, 2016</p>
                <p className='title-slide'>Den of Thieves</p>
              </SwiperSlide>
            </Swiper>
          </div>
          <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">
          <Swiper
              slidesPerView={6}
              centeredSlides={false}
              slidesPerGroupSkip={3}
              grabCursor={true}
              keyboard={{
                enabled: true,
              }}
              breakpoints={{
                769: {
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                },
              }}
              navigation={true}
              modules={[Keyboard, Scrollbar, Navigation, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src="https://cdn.magloft.com/github/swiper/images/page-001.jpg" />
                <p className='info-slide'>Action, 2016</p>
                <p className='title-slide'>Den of Thieves</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://cdn.magloft.com/github/swiper/images/page-002.jpg" />
                <p className='info-slide'>Action, 2016</p>
                <p className='title-slide'>Den of Thieves</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://cdn.magloft.com/github/swiper/images/page-003.jpg" />
                <p className='info-slide'>Action, 2016</p>
                <p className='title-slide'>Den of Thieves</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://cdn.magloft.com/github/swiper/images/page-004.jpg" />
                <p className='info-slide'>Action, 2016</p>
                <p className='title-slide'>Den of Thieves</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://cdn.magloft.com/github/swiper/images/page-005.jpg" />
                <p className='info-slide'>Action, 2016</p>
                <p className='title-slide'>Den of Thieves</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://cdn.magloft.com/github/swiper/images/page-006.jpg" />
                <p className='info-slide'>Action, 2016</p>
                <p className='title-slide'>Den of Thieves</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://cdn.magloft.com/github/swiper/images/page-007.jpg" />
                <p className='info-slide'>Action, 2016</p>
                <p className='title-slide'>Den of Thieves</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://cdn.magloft.com/github/swiper/images/page-008.jpg" />
                <p className='info-slide'>Action, 2011</p>
                <p className='title-slide'>Begin Again</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://cdn.magloft.com/github/swiper/images/page-009.jpg" />
                <p className='info-slide'>Action, 2016</p>
                <p className='title-slide'>Spiderman 3</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://cdn.magloft.com/github/swiper/images/page-007.jpg" />
                <p className='info-slide'>Action, 2016</p>
                <p className='title-slide'>Den of Thieves</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://cdn.magloft.com/github/swiper/images/page-007.jpg" />
                <p className='info-slide'>Action, 2016</p>
                <p className='title-slide'>Den of Thieves</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://cdn.magloft.com/github/swiper/images/page-007.jpg" />
                <p className='info-slide'>Action, 2016</p>
                <p className='title-slide'>Den of Thieves</p>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThirdBanner