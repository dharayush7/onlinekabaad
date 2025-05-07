import React from "react";
import { Container, Card } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const successStories = [
  {
    title: "The Kabadiwala",
    image: "/images/landing/our-success-story-the-kabadiwala.webp",
    videoUrl: "https://youtu.be/zVmOiBDBeJI",
  },
  {
    title: "WhatsApp Business",
    image: "/images/landing/our-success-story-whatsapp-business.webp",
    videoUrl: "https://www.youtube.com/watch?v=-AE5N2urRQo",
  },
];

const SuccessStoryCard = ({ story }) => (
  <Card className="card-media-top rounded-7 position-relative">
    <a href={story.videoUrl} target="_blank" rel="noopener noreferrer">
      <div className="media">
        <img src={story.image} alt={story.title} className="w-100 h-100" />
      </div>
      <Card.Body className="position-absolute end-0 bottom-0">
        <svg
          width="62"
          height="62"
          viewBox="0 0 62 62"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="31" cy="31" r="31" fill="#01a1ff"></circle>
          <path
            d="M41.5 30.134C42.1667 30.5189 42.1667 31.4811 41.5 31.866L26.5 40.5263C25.8333 40.9112 25 40.4301 25 39.6603L25 22.3397C25 21.5699 25.8333 21.0888 26.5 21.4737L41.5 30.134Z"
            fill="white"
          ></path>
        </svg>
      </Card.Body>
    </a>
  </Card>
);

const SuccessStoryCarousel = () => {
  return (
    <section>
      <Container fluid className="text-center mb-10">
        <div className="py-lg-8 py-6">
          <h2>
            Our <span style={{ color: "#01A1ff" }}>Success</span> Story
          </h2>
          <p className="fg-default-2 body-lg">
            To take a glimpse of our journey{" "}
            <a href="journey.html" style={{ color: "#01A1ff" }}>
              click here →
            </a>
          </p>
        </div>
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="my-5"
        >
          {successStories.map((story, index) => (
            <SwiperSlide key={index}>
              <SuccessStoryCard story={story} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default SuccessStoryCarousel;
