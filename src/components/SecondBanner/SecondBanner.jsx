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

const SecondBanner = () => {

  return (
    <div className='SecondBanner-container'>
      <div className="Tabs-container">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Today</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">This week</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Last 30 days</button>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
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
                <img src="https://portadascreativas.com/wp-content/uploads/15687194713882-682x1024.jpg" alt=''/>
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
          <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
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
                <img src="https://portadascreativas.com/wp-content/uploads/pulp-fiction-cover-i1288-200x300.jpg" alt=''/>
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
          <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
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
                <img src="https://blocs.xtec.cat/quevolsllegir/files/2016/04/Sense-t%c3%adtol.png" alt=''/>
                <p className='info-slide'>Action, 2016</p>
                <p className='title-slide'>Den of Thieves</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://cdn.magloft.com/github/swiper/images/page-002.jpg" alt=''/>
                <p className='info-slide'>Action, 2016</p>
                <p className='title-slide'>Den of Thieves</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://cdn.magloft.com/github/swiper/images/page-003.jpg" alt=''/>
                <p className='info-slide'>Action, 2016</p>
                <p className='title-slide'>Den of Thieves</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://cdn.magloft.com/github/swiper/images/page-004.jpg" alt=''/>
                <p className='info-slide'>Action, 2016</p>
                <p className='title-slide'>Den of Thieves</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://cdn.magloft.com/github/swiper/images/page-005.jpg" alt=''/>
                <p className='info-slide'>Action, 2016</p>
                <p className='title-slide'>Den of Thieves</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://cdn.magloft.com/github/swiper/images/page-006.jpg" alt=''/>
                <p className='info-slide'>Action, 2016</p>
                <p className='title-slide'>Den of Thieves</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://cdn.magloft.com/github/swiper/images/page-007.jpg" alt=''/>
                <p className='info-slide'>Action, 2016</p>
                <p className='title-slide'>Den of Thieves</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://cdn.magloft.com/github/swiper/images/page-008.jpg" alt=''/>
                <p className='info-slide'>Action, 2011</p>
                <p className='title-slide'>Begin Again</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://cdn.magloft.com/github/swiper/images/page-009.jpg" alt=''/>
                <p className='info-slide'>Action, 2016</p>
                <p className='title-slide'>Spiderman 3</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://cdn.magloft.com/github/swiper/images/page-007.jpg" alt=''/>
                <p className='info-slide'>Action, 2016</p>
                <p className='title-slide'>Den of Thieves</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://cdn.magloft.com/github/swiper/images/page-007.jpg" alt=''/>
                <p className='info-slide'>Action, 2016</p>
                <p className='title-slide'>Den of Thieves</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://blocs.xtec.cat/quevolsllegir/files/2016/04/Sense-t%c3%adtol.png" alt=''/>
                <p className='info-slide'>Action, 2016</p>
                <p className='title-slide'>Den of Thieves</p>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <div className="ManageCategory-container">
        <div className="ManageCategory-title">
       
          <div className="category-title">
            <p className='titlecategory'>Action & Drama Movies</p>
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
    </div>
  )
}

export default SecondBanner