import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

const servicesData = [
    {
        title: "Scrap Collection",
        description: "Digitised solution for the door-to-door free pickup of 40+ recyclables",
        imgSrc: "/images/services/scrap-collection.png",
        alt: "scrap-collection",
        category: "individual",
    },
    {
        title: "Zero Waste Society",
        description: "Serving the Residential Societies in achieving their zero waste goals.",
        imgSrc: "/images/services/zero-waste-society.png",
        alt: "zero-waste-society",
        category: "individual",
    },
    {
        title: "Vehicle Scrapping Service",
        description: "Assisting people in getting rid of their old vehicles sustainably",
        imgSrc: "/images/services/vehicle-scrapping-service.png",
        alt: "vehicle-scrapping-service",
        category: "individual",
    },
    {
        title: "Shredding service",
        description: "Aiding Businesses in the safe & secure disposal of their confidential documents.",
        imgSrc: "/images/services/shredding-service.png",
        alt: "shredding-service",
        category: "society",
    },
    {
        title: "Zero waste services",
        description: "Serving the Institutes/Offices/Events in achieving their zero waste goals.",
        imgSrc: "/images/services/zero-waste-services.png",
        alt: "zero-waste-services",
        category: "society",
    },
    {
        title: "Material Recovery Facility",
        description: "Collaborating to provide waste management services to ULB owned Material Recovery Facilities.",
        imgSrc: "/images/services/material-recovery-facility.png",
        alt: "material-recovery-facility",
        category: "society",
    }
];
const ServiceCard = ({ title, description, imgSrc, alt }) => (
  <div className="d-flex align-items-center p-4 container-bg-1 rounded-4 h-100">
    <div className="me-4">
      <img src={imgSrc} alt={alt} height="50" />
    </div>
    <div>
      <span className="title-lg d-block fg-default-2">{title}</span>
      <div className="fg-default-2 body-md pt-2">{description}</div>
    </div>
  </div>
);

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [translateX, setTranslateX] = useState(0);
  const [containerWidth, setContainerWidth] = useState(window.innerWidth);

  const itemWidth = 215;

  const filteredServices =
    activeTab === "all"
      ? servicesData
      : servicesData.filter((service) => service.category === activeTab);

  const maxTranslateX = -(filteredServices.length * itemWidth - containerWidth);

  const handleMoveLeft = () => {
    setTranslateX((prev) => Math.min(prev + itemWidth, 0));
  };

  const handleMoveRight = () => {
    if (filteredServices.length * itemWidth > containerWidth) {
      setTranslateX((prev) => Math.max(prev - itemWidth, maxTranslateX));
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setContainerWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setTranslateX(0);
  }, [activeTab]);

  return (
    <section>
<style jsx>
        {`
          .tab-button {
            background-color: black;
            color: white;

            cursor: pointer;
          }
          
          .tab-button.active {
            background-color: #009c1a !important;
            color: white;
          }
          
          .container-bg-1 {
            
          background-color: var(--container-bg-2) !important;
          padding: 1rem;
        }
        
        .btn-primary {
          padding: 10px 20px;
          // color: white;
           color: var(--fg-default-1);
          background-color:var(--container-bg-3);
          text-decoration: none;
          border-radius: 5px;
        }
        
        .btn-primary:hover {
          background-color: #009c1a !important;
          color: white;
        }
        
        .carousel-container {
          display: flex;
          transition: transform 0.3s ease-in-out;
        }

        .services{
          grid-auto-flow: column;
          grid-template-rows: 7rem 7rem;
          overflow: hidden;
          margin-top: 2rem;
          gap: 2rem;
          padding-left: 1.25rem; 
          padding-right: 1.25rem; 
        }

        @media (max-width: 991px) { /* Tablet view */
          .services {
            grid-template-columns: repeat(2, 1fr); 
            grid-template-rows: 7rem 7rem 7rem;
          }
        }

        @media (max-width: 575px) { /* Mobile view */
          .services {
          
            grid-template-columns: 1fr;
            grid-template-rows: 7rem 7rem 7rem 7rem 7rem 7rem;
          }
        }
        `
      }
      </style>



      <div id="services"   className="text-center mt-6">
        <h3>Our Services</h3>
        <div className="label-lg fg-default-2">
          Attaining <span style={{ color: "#009c1a" }}>sustainable solutions</span> with ease.
        </div>
      </div>

      <div className="container overflow-auto my-6" style={{ maxWidth: "600px" }}>
        {/* <div className="d-flex gap-3 justify-content-center">
          {["all"
          // "individual", "society", "business"
        ].map((tab) => (
            <Button
              key={tab}
              className={`tab-button ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === "all" ? "All Services" : `For ${tab.charAt(0).toUpperCase() + tab.slice(1)}`}
            </Button>
          ))}
        </div> */}
      </div>

      <div className="carousel">
        <div
          className="carousel-container"
          style={{ transform: `translateX(${translateX}px)`, transition: "transform 0.3s ease-in-out" }}
        >
          <div className="container">
  <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4 px-5 px-lg-8">
    {filteredServices.map((service, index) => (
      <div key={index} className="col">
        <ServiceCard {...service} />
      </div>
    ))}
  </div>
</div>
        </div>
      </div>

      {/* <div className="d-flex justify-content-center gap-3 mt-3">
        <Button onClick={handleMoveLeft} variant="primary">
          Prev
        </Button>
        <Button onClick={handleMoveRight} variant="secondary">
          Next
        </Button>
      </div> */}
    </section>
  );
};

export default ServicesSection;
