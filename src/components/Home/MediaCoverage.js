import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const MediaCoverage = () => {
  const mediaCoverageData = [
    {
      image: '/images/landing/media-coverage-whatsapp-business-cover.webp',
      credit: 'Whatsapp Business',
      description: 'The Kabadiwala was launched in 2014 and after the initial struggle, Anurag and his co-founder...',
      logo: '/images/landing/media-coverage-whatsapp-business-logo.png',
      link: 'https://www.whatsapp.com/stories/business/India/the-kabadiwala/',
    },
    {
      image: '/images/landing/media-coverage-world-economic-forum-cover.webp',
      credit: 'World Economic forum',
      description: 'Kabadiwala is redefining the waste management value chain by bringing in efficiency, transparency...',
      logo: '/images/landing/media-coverage-world-economic-forum-logo.png',
      link: 'https://www.weforum.org/agenda/2021/06/innovators-indonesia-waste-informal-sector/',
    },
    {
      image: '/images/landing/media-coverage-world-economic-forum-cover.webp',
      credit: 'World Economic forum',
      description: 'Kabadiwala is redefining the waste management value chain by bringing in efficiency, transparency...',
      logo: '/images/landing/media-coverage-world-economic-forum-logo.png',
      link: 'https://www.weforum.org/agenda/2021/06/innovators-indonesia-waste-informal-sector/',
    },
    {
      image: '/images/landing/media-coverage-world-economic-forum-cover.webp',
      credit: 'World Economic forum',
      description: 'Kabadiwala is redefining the waste management value chain by bringing in efficiency, transparency...',
      logo: '/images/landing/media-coverage-world-economic-forum-logo.png',
      link: 'https://www.weforum.org/agenda/2021/06/innovators-indonesia-waste-informal-sector/',
    },
    {
      image: '/images/landing/media-coverage-world-economic-forum-cover.webp',
      credit: 'World Economic forum',
      description: 'Kabadiwala is redefining the waste management value chain by bringing in efficiency, transparency...',
      logo: '/images/landing/media-coverage-world-economic-forum-logo.png',
      link: 'https://www.weforum.org/agenda/2021/06/innovators-indonesia-waste-informal-sector/',
    },
    {
      image: '/images/landing/media-coverage-world-economic-forum-cover.webp',
      credit: 'World Economic forum',
      description: 'Kabadiwala is redefining the waste management value chain by bringing in efficiency, transparency...',
      logo: '/images/landing/media-coverage-world-economic-forum-logo.png',
      link: 'https://www.weforum.org/agenda/2021/06/innovators-indonesia-waste-informal-sector/',
    },
  ];



  return (
    <section>
      <Container>
        <Row className="justify-content-start">
          <Col md={8} className="text-start">
            <h3 className="mb-4">They love talking <br /> about us!</h3>
            <p>Know The Kabadiwala from another side of the table.</p>
          </Col>
        </Row>

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
          {mediaCoverageData.map((data, index) => (
            <SwiperSlide key={index}>
              <a href={data.link} target="_blank" rel="noopener noreferrer">
                <Card className="h-100">
                  <Card.Img variant="top" src={data.image} />
                  <Card.Body>
                    <p className="text-muted">{data.credit}</p>
                    <p className="mb-4 text-white">{data.description}</p>
                    <img src={data.logo} alt={data.credit} className="w-10 h-auto" />
                  </Card.Body>
                </Card>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default MediaCoverage;
