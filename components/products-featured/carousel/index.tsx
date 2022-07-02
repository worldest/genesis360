import ProductItem from './../../product-item';

// import Swiper core and required components
import { Swiper, SwiperSlide } from 'swiper/react';

let slidesPerView = 1.3;
let centeredSlides = true;
let spaceBetween = 30;
if (process.browser) {
  if(window.innerWidth > 768) {
    slidesPerView = 3;
    spaceBetween = 35;
    centeredSlides = false;
  }
  if(window.innerWidth > 1024) {
    slidesPerView = 4;
    spaceBetween = 65;
    centeredSlides = false;
  }
}


const ProductsCarousel = ({ products }) => {
  if (!products) return <div>Loading</div>;

  return (
    <div className="products-carousel">
      <Swiper 
      spaceBetween={spaceBetween} 
      loop={true} 
      centeredSlides={centeredSlides} 
      watchOverflow={true} 
      slidesPerView={slidesPerView} 
      className="swiper-wrapper">
        {products.map(item => ( 
          <SwiperSlide key={item.id}>
            <ProductItem 
              id={item.id} 
              name={item.product_name}
              price={item.price}
              color={item.color}
              discount={item.discount}
              currentPrice={item.price}
              key={item.id}
              images={item.image} 
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ProductsCarousel