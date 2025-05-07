import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
const Gallery = ({images}) => {
  return (
    <div>
      <div
        className="carousel-container gap-4"
        style={{ transform: "translateX(-0px)" }}
      >
        <Swiper
          slidesPerView={1}
          // centeredSlides={false}
          slidesPerGroupSkip={2}
          grabCursor={true}
          keyboard={{
            enabled: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              // slidesPerGroup: 2,
              spaceBetween: 10,
            },
            600: {
              slidesPerView: 1,
              // slidesPerGroup: 2,
              spaceBetween: 50,
            },
            768: {
              slidesPerView: 2,
              // slidesPerGroup: 2,
              spaceBetween: 50,
            },
            1024: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 200,
            },
            1354: {
              slidesPerView: 3,
              slidesPerGroup: 2,
              spaceBetween: 200,
            },
          }}
          // scrollbar={true}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Keyboard, Scrollbar, Navigation, Pagination]}
          className="mySwiper"
        >
            {images.map((img,index)=>{
                return(
                    <SwiperSlide key={index}>
                    <div
                      className="col-lg-6"
                      style={{ minWidth: "24rem", maxWidth: "24rem" }}
                    >
                      <img
                        className="py-6"
                        src={img.image}
                        alt={img.alt}
                        style={{ minWidth: "22rem", maxWidth: "22rem" }}
                      />
                      {img.title ?
                       <div className="title-lg fg-default-2 text-center ">
                      Less plastic waste
                    </div> 
                      : null}
                      
                    </div>
                  </SwiperSlide>  
                )
            })}
          
        </Swiper>
      </div>
    </div>
  );
};

export default Gallery;
