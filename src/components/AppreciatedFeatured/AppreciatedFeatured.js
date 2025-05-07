import React from 'react';
import { Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const appreciatedData = [
  // { src: '/images/appreciated-and-featured/featured-forbes.png', alt: 'featured-forbes' },
  // { src: '/images/appreciated-and-featured/featured-whatsapp-business.png', alt: 'featured-whatsapp-business' },
  // { src: '/images/appreciated-and-featured/featured-ted-x.png', alt: 'featured-ted-x' },
  // { src: '/images/appreciated-and-featured/featured-world-economic-forum.png', alt: 'featured-world-economic-forum' },
  // { src: '/images/appreciated-and-featured/featured-yahoo.png', alt: 'featured-yahoo' },
  { src: '/images/appreciated-and-featured/featured-zee-news.png', alt: 'featured-zee-news' },
  { src: '/images/appreciated-and-featured/featured-abp-news.png', alt: 'featured-abp-news' },
  // { src: '/images/appreciated-and-featured/featured-brand-ambassador-of-madhya%20pradesh.png', alt: 'featured-brand-ambassador-of-madhya-pradesh' },
  // { src: '/images/appreciated-and-featured/featured-your-story.png', alt: 'featured-your-story' },
  // { src: '/images/appreciated-and-featured/featured-financial-express.png', alt: 'featured-financial-express' },
  // { src: '/images/appreciated-and-featured/featured-business-standard.png', alt: 'featured-business-standard' },
  { src: '/images/appreciated-and-featured/featured-startup-india.png', alt: 'featured-startup-india' },
  { src: '/images/appreciated-and-featured/featured-patrika.png', alt: 'featured-patrika' },
  // { src: '/images/appreciated-and-featured/featured-the-better-india.png', alt: 'featured-the-better-india' },
  // { src: '/images/appreciated-and-featured/featured-the-telegraph-online.png', alt: 'featured-the-telegraph-online' },
  // { src: '/images/appreciated-and-featured/featured-inshorts.png', alt: 'featured-inshorts' },
  { src: '/images/appreciated-and-featured/bajaj_finance.png', alt: 'featured-dd-news' },
  { src: '/images/appreciated-and-featured/Dominospizza.png', alt: 'featured-red-fm-93.5' },
  { src: '/images/appreciated-and-featured/kotak-mahindra-bank.png', alt: 'featured-dainik-bhaskar' },
  { src: '/images/appreciated-and-featured/removebg-preview-modified.png', alt: 'featured-news-nation' },
];
const AppreciatedFeatured = () => {
  return (
    <section
      className="h-auto p-0 m-0"
      id="section-2"
      style={{ backgroundColor: '#545454', overflow: 'hidden' }}
    >
      <Container fluid className="container-bg-2">
        <h2 className="text-center headline-md pt-10 pb-3 fg-default-3">
          Appreciated & Featured by
        </h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={5}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 10 },
            768: { slidesPerView: 3, spaceBetween: 15 },
            1024: { slidesPerView: 5, spaceBetween: 20 },
          }}
        >
          {appreciatedData.map((item, index) => (
             <SwiperSlide key={index}>
             <div
             style={{
               width: '40%',
               aspectRatio: '3 / 4', 
              //  backgroundColor: '#ffffff',
               borderRadius: '8px',
               overflow: 'hidden',
              //  mixBlendMode: 'multiply', 
             }}
           >
             <img
               src={item.src}
               alt={item.alt}
               style={{
                 width: '100%',
                 height: '100%',
                 objectFit: 'contain', 
                 mixBlendMode: 'multiply', 
               }}
             />
           </div>

            </SwiperSlide>
          ))}
        </Swiper>
        {/* <button style={{ backgroundColor: 'red', color: 'white' }}>Click Me</button> */}

      </Container>
    </section>
  );
};

export default AppreciatedFeatured;
