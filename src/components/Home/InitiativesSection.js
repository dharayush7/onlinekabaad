import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const initiatives = [
  {
    link:"tetraPakInitiative",
    title: "Tetra Pak Initiative",
    description: "The Kabadiwala collaborated with TetraPak India to increase the collection of used beverage cartons for recycling and diverting them from landfills.",
    imageUrl: "/images/landing/our-initiative/tetra-pak-initiative.webp",
    link: "initiatives/tetra-pak-campaign.html",
  },
  {
    link:"mattressCircularJourneyInitiative",
    title: "Mattress Circular Journey",
    description: "ISPF, IPUA and The Kabadiwala came together to initiate India’s first mattress recycling campaign named 'Feko Nahi Recycle Karo'.",
    imageUrl: "/images/landing/our-initiative/mattress-circular-economy.webp",
    link: "initiatives/mattress-circular-journey-initiative.html",
  },
  {
    link:"treePlantationInitiative",
    title: "Tree Plantation Initiative",
    description: "The Kabadiwala has been planting trees on Mahatma Gandhi's Birthday, encouraging customers to make Bhopal greener.",
    imageUrl: "/images/landing/our-initiative/tree-plantation-initiative.webp",
    link: "initiatives/tree-plantation-initiative.html",
  },
  {
    link:"kitabGharInitiatives",
    title: "Kitab Ghar",
    description: "Kitab Ghar is a combined effort to provide second-hand books to underprivileged children by acquiring them from people who no longer need them.",
    imageUrl: "/images/landing/our-initiative/kitab-ghar.webp",
    link: "initiatives/kitab-ghar-initiative.html",
  },
  {
    link:"plasticWallExperiment",
    title: "Plastic Wall Experiment",
    description: "On International Plastic Bag Free day, The Kabadiwala placed a wall made of polythene bags to raise awareness about plastic waste.",
    imageUrl: "/images/landing/our-initiative/plastic-wall-experiment.webp",
    link: "initiatives/plastic-wall-experiment.html",
  },
];

const InitiativesSection = () => {


<div className="truncate">
  Yeh ek example text hai jo do lines ke baad truncate ho jayega, chahe text jitna bhi lamba ho.
</div>



  return (

    <section className="container-fluid px-0 py-5">
      <h3 className="text-center pb-1">Our Initiatives</h3>
      <h6 className="text-center body-lg mb-4 text-secondary">
        Small steps towards <span style={{ color: "#01A1ff" }}>sustainability.</span>
      </h6>

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
      >
        {initiatives.map((initiative, index) => (
          <SwiperSlide key={index}>
            <Card className="mx-3 card-media-top rounded-5">
              <Card.Img
                variant="top"
                src={initiative.imageUrl}
                alt={initiative.title}
                style={{ width: "100%", height: "auto" }}
              />
              <Card.Body>
                <Card.Title className="title-lg text-dark">{initiative.title}</Card.Title>
                <Card.Text className="text-secondary truncate">{initiative.description}</Card.Text>
                <Button variant="link" href={initiative.link}>
                  Learn more
                </Button>
              </Card.Body>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default InitiativesSection;

        