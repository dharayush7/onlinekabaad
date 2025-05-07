import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const CustomerReviewCard = ({ review }) => {
  return (
    <Card
      className="card-media-top rounded-7 position-relative"
      style={{ width: "100%", height: "400px" }}
    >
      <a href={review.link} target="_blank" rel="noopener noreferrer">
        <Card.Img
          variant="top"
          src={review.image}
          alt={review.alt}
          className=" w-100"
          style={{ objectFit: "cover", height: "400px" }}
        />
        <Card.Body className="position-absolute end-0 bottom-0">
          <svg
            width="62"
            height="62"
            viewBox="0 0 62 62"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="31" cy="31" r="31" fill="#01a1ff" />
            <path
              d="M41.5 30.134C42.1667 30.5189 42.1667 31.4811 41.5 31.866L26.5 40.5263C25.8333 40.9112 25 40.4301 25 39.6603L25 22.3397C25 21.5699 25.8333 21.0888 26.5 21.4737L41.5 30.134Z"
              fill="white"
            ></path>
          </svg>
        </Card.Body>
      </a>
    </Card>
  );
};

const CustomerReviews = () => {
  const reviewsData = [
    {
      image: "/images/landing/customer-review-mr-hiresh-gupta.webp",
      alt: "customer-review-mr-hiresh-gupta",
      link: "https://youtu.be/P9ZtWkVWkBc",
    },
    {
      image: "/images/landing/customer-review-mr-raj-kumar-rai.webp",
      alt: "customer-review-mr-raj-kumar-rai",
      link: "https://youtu.be/rX9-IHY6g3o",
    },
    {
      image: "/images/landing/customer-review-mr-vikas-saxena.webp",
      alt: "customer-review-mr-vikas-saxena",
      link: "https://youtu.be/mCtLt-F_L-w",
    },
    {
      image: "/images/landing/customer-review-ms-kalpana-kekre.webp",
      alt: "customer-review-ms-kalpana-kekre",
      link: "https://youtu.be/zwUIO6fz5J4",
    },
  ];

  return (
    <section className="py-5">
      <Container fluid>
        <Row className="text-center">
          <Col>
            <h3>
              Why <span style={{ color: "#01A1ff" }}>1,00,000+</span> customers
              love us
            </h3>
            <p className="label-lg">
              Hear out what our clients have to say about us.
            </p>
          </Col>
        </Row>

        {/* <div className="d-grid gap-5 px-5 px-lg-8" style={{ gridAutoFlow: "column", gridTemplateRows: "7rem 7rem 7rem" }}> */}
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
          export default CustomerReviews;
          {reviewsData.map((review, index) => (
            <SwiperSlide key={index}>
              <CustomerReviewCard review={review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default CustomerReviews;
