import "./style/Home.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import features from "../assets/jsonData/FeatureCard.json";
import FeatureCard from "../components/FeatureCard";
import AppreciatedFeatured from "../components/AppreciatedFeatured/AppreciatedFeatured";
import HeroSection from "../components/Home/HeroSection";
import PresenceSection from "../components/Home/PresenceSection";
import InitiativesSection from "../components/Home/InitiativesSection";
import ServicesSection from "../components/Home/ServicesSection";
import PartnersSection from "../components/Home/PartnersSection";
import FarakPadtaHaiSection from "../components/Home/FarakPadtaHaiSection";
import ContactSection from "../components/Home/ContactSection";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import MediaCoverage from "../components/Home/MediaCoverage";
import CustomerReviews from "../components/Home/CustomerReviews";
import SuccessStoryCarousel from "../components/Home/SuccessStoryCarousel";
import SustainabilitySection from "../components/Home/SustainabilitySection";
import MoreInfoSection from "../components/Home/MoreInfoSection";
import GardenParallex from "../components/Home/GardenParallex";
import { useRef } from "react";

export default function Home() {


  const nextSectionRef = useRef(null);

  const handleClick = () => {
    nextSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <style>
        {`
      @media (width < 990px) {
        .header-main {
          display: none;
        }
      }
      .background-image {
        height: 100vh;
        width: 100vw;
        background-size: cover;
        background-position: center;
        filter: brightness(50%);
        background-image: url("./images/garden.jpg"); /* Default for desktop */
      }
      
      @media (max-width: 768px) {
        .background-image {
          background-image: url("./images/gardenMobile.jpg"); /* Mobile version */
        }
      }
      `}
      </style>
      <div className="home">
        <div className="fullwidth">
          <MobileHeader />

          <div className="header-main">
            <Header />
          </div>

          {/* <MobileHeader/> */}
          <div className="video-background">
            <div className="background-image"></div>
            {/* <video autoPlay loop muted>
              <source
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video> */}
          </div>

          <Container
          id ="home"
            fluid
            className="d-flex flex-column  align-items-center justify-content-center m-0 h-100 w-100 border-2"
            style={{ minHeight: "100vh", zIndex: "0" }}
          >
            <Col
              md={6}
              className="rounded  text-center d-flex flex-column justify-content-center align-items-center"
            >
              <span
                className="display-1 fw-bold"
                style={{
                  color: "white",
                  fontSize: "clamp(3rem, 4rem, 8rem)",
                }}
              > Scrap it,{" "}
                <span style={{ backgroundColor: "#009c1a", color: "white" }}>
                  {" "}
                  Online,
                </span><br/>
               
              </span>
              <span
                className="display-1 fw-bold"
                style={{
                  fontSize: "clamp(2rem, 5vw, 6rem)",
                  color: "white",
                }}
              >
                <span style={{ backgroundColor: "#009c1a", color: "white" }}>
                  {" "}
                  Profit,
                </span>
                {" "}in No Time!
              </span>
              <p
                style={{
                  marginTop:"1.5rem",
                  color: "#fff",
                  fontSize: "clamp(1rem, 1.2rem, 1.5rem)",
                }}
              >
               <span style={{fontWeight:"bolder", color:"#009c1a"}}>OnlineKabaad.com</span> provides reliable, doorstep scrap collection services for metals, electronics, plastics, and more<br/> — turning your clutter into cash, anytime you need!
              </p>
              <Row className="justify-content-center mt-3">
                <Col xs="auto">
                  {/* <Button  size="lg" style={{ backgroundColor: "#009c1a" ,border:"none",color:"white" }}>
                Download the app
              </Button> */}
                </Col>
                <Col xs="auto">
                  {/* <Button variant="outline-dark" size="lg" color="light" outline>
                For Business
              </Button> */}
                </Col>
              </Row>
              <div
                style={{
                  fontSize: "clamp(1.5rem, 5vw, 2em)",
                  color: "#fff",
                  marginTop: "20px",
                  cursor: "pointer",
                  animation: "bounce 1.5s infinite",
                }}
                onClick={handleClick}
              >
                ↓
              </div>

              <style>
        {`
          @keyframes bounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(10px);
            }
          }
        `}
      </style>
            </Col>
          </Container>
        </div>

        {/* <AppreciatedFeatured /> */}
        <br />
        <br />
        {/* <Container
          fluid
          className="h-200  d-flex flex-column justify-content-center mx-auto px-6 py-8 "
          style={{ maxWidth: "900px" }}
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              heading={feature.heading}
              description={feature.description}
              link={feature.link}
              imgSrc={feature.imgSrc}
              alt={feature.alt}
              reverse={feature.reverse}
            />
          ))}
        </Container> */}

        <MoreInfoSection  ref={nextSectionRef} />
       
        <SustainabilitySection />

        <GardenParallex />

        {/* <HeroSection /> */}

        <PresenceSection />
         {/* <InitiativesSection />  */}
        <ServicesSection />
        {/* <PartnersSection /> */}
        {/* <FarakPadtaHaiSection /> */}
        {/* <MediaCoverage /> */}
        {/* <CustomerReviews />
      <SuccessStoryCarousel /> */}
        <ContactSection />
      </div>
    </>
  );
}
