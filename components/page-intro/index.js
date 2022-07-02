import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {EffectFade, Navigation} from 'swiper';

SwiperCore.use([EffectFade, Navigation]);

const PageIntro = () => {

  return (
    <section className="page-intro">  
      <Swiper navigation effect="fade" className="swiper-wrapper">
        <SwiperSlide>
          <div className="page-intro__slide" style={{ backgroundImage: "url('/images/slide-1.jpg')" }}>
            <div className="container">
              <div className="page-intro__slide__content">
                <h2>Eat Now...Pay Later</h2>
                <a href="#" className="btn-shop"><i className="icon-right"></i>View Packages</a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="page-intro__slide" style={{ backgroundImage: "url('/images/slide-2.jpg')" }}>
            <div className="container">
              <div className="page-intro__slide__content">
                <h2>Buy food items, and pay later</h2>
                <a href="#" className="btn-shop"><i className="icon-right"></i>Shop now</a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="shop-data">
        <div className="container">
          <ul className="shop-data__items">
            <li>
              <i className="icon-cash"></i>
              <div className="data-item__content">
                <h4>Select a Package</h4>
                <p>Select a package from our packages</p>
              </div>
            </li>
            
            <li>
              <i className="icon-credit-card"></i>
              <div className="data-item__content">
                <h4>Fill in your KYC information</h4>
                <p>Fill out the KYC information (for new users)</p>
              </div>
            </li>
            
            <li>
              <i className="icon-shipping"></i>
              <div className="data-item__content">
                <h4>Get items delivered</h4>
                <p>Supply delivery address and get items delivered</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
};

export default PageIntro