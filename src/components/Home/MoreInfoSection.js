import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported globally

const MoreInfoSection = (props) => {
  const items = [
    { id: 1, imgSrc: "/images/moreInfo/leaf.png", title: "Service Areas", desc: "We are online scrap buyers in Hyderabad and Secunderabad serving key areas including KONDAPUR, Madhapur, Gachibowli, Jubilee Hills, Begumpet, Banjara Hills, Punjagutta, Manikonda,etc." },
    { id: 2, imgSrc: "/images/moreInfo/globe.png", title: "Sustainability", desc: "Our scrap waste management activities at crapbin can assist you to devise an overall environmental strategy so you can achieve sustainability goals without give up financial objectives..." },
    { id: 3, imgSrc: "/images/moreInfo/recycle.png", title: "Recycling Services", desc: "We provide scrap pickup service for house hold, communities and industries based in Hyderabad; buy all kinds of scrap materials such as electronic waste, Iron scrap, aluminium, plastic scrap, steel scrap, old newspapers, books, electronic appliances, e waste, old/dead washing machine, fridge, AC's, etc." },
    { id: 4, imgSrc: "/images/moreInfo/trash.png", title: "Waste Management", desc: "Crapbin provides outstanding WASTE MANAGEMENT/SCRAP DISPOSAL services in Hyderabad. This includes collecting, segregating, disposal of dry waste, along with monitoring the waste management process. " },
  ];

  return (
    <section className="py-5" ref={props.ref}>
      <Container fluid className="px-3 px-md-5">
        <Row className="w-100 d-flex justify-content-center text-center" style={{marginLeft:"10px"}}>
          {items.map((item) => (
            <Col key={item.id} xs={12} sm={6} md={3} className="d-flex justify-content-center mb-4">
              <div className="MoreInfoSection-col">
                <img
                  src={item.imgSrc}
                  alt={item.title}
                  className="MoreInfoSection-img img-fluid rounded"
                />
                <div style={{margin:"10px"}}>
                <h6 className="mt-2">{item.title}</h6>
                <p>{item.desc}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Custom CSS */}
      <style>
        {`
          .MoreInfoSection-col {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          .MoreInfoSection-img {
            width: 120px;
            height: 120px;
            object-fit: cover;
            border-radius: 10px;
          }
        `}
      </style>
    </section>
  );
};

export default MoreInfoSection;
