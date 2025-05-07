import React, { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const BusinessSectionRoutes = () => {
  const Naviagate = useNavigate()
  const clickhandle=()=>{
    Naviagate("/business/ScrapCollectionText")
  }
  useEffect(()=>{
    clickhandle();
  },[])
  return (
    <div>
      <div className="container-fluid pt-lg-14 pt-12 pb-lg-14 " b-8gocb8pbav="" >
        <h4 className="text-center" b-8gocb8pbav="">
          Offset your business's Carbon Footprint with us!
        </h4>
        <div className="body-lg text-center mt-lg-6 mt-5" b-8gocb8pbav="">
          The Kabadiwala helps brands to comply with the EPR rule of 2016 by
          diverting equivalent amount of post-consumer waste you generated from
          the environment to the recycling centers.
        </div>
        <div className="" b-8gocb8pbav="">
          <div className="row px-lg-12 pt-lg-10 p-3" b-8gocb8pbav="">
            <div className="d-none d-lg-block col-lg-6 pe-12" b-8gocb8pbav="">
              <div className="row row-cols-3 g-lg-6" b-8gocb8pbav="">

                <Link to="ScrapCollectionText">
                  <div
                  className="col" b-8gocb8pbav="">
                    <div
                      className="obj-bg-secondary fg-inverse-1 rounded-4 ps-5 pe-3 mw-100 d-flex flex-column"
                      style={{
                        width: "14rem",
                        height: "10rem",
                        cursor: "pointer",
                      }}
                      b-8gocb8pbav=""
                    >
                      <div className="pt-3 flex-grow-1" b-8gocb8pbav="">
                        <img
                          src="https://www.thekabadiwala.com/images/business/scrap-collection.svg"
                          alt="scrap-collection"
                          style={{ maxWidth: 80 }}
                          b-8gocb8pbav=""
                        />
                      </div>
                      <div className="label-lg pb-5" b-8gocb8pbav="">
                        Scrap Collection
                      </div>
                    </div>
                  </div>
                </Link>

                <Link to="EPRServiceText">
                  <div className="col" b-8gocb8pbav="">
                    <div
                      className="container-bg-2 rounded-4 ps-5 pe-3 mw-100 d-flex flex-column"
                      style={{
                        width: "14rem",
                        height: "10rem",
                        cursor: "pointer",
                      }}
                      b-8gocb8pbav=""
                    >
                      <div className="pt-3 flex-grow-1" b-8gocb8pbav="">
                        <img
                          src="https://www.thekabadiwala.com/images/business/extended-producer-responsibility.svg"
                          alt="extended-producer-responsibility"
                          style={{ maxWidth: 80 }}
                          b-8gocb8pbav=""
                        />
                      </div>
                      <div className="label-lg pb-5" b-8gocb8pbav="">
                        EPR Service
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to="Shreddingservice">
                  <div className="col" b-8gocb8pbav="">
                    <div
                      className="container-bg-2 rounded-4 ps-5 pe-3 mw-100 d-flex flex-column"
                      style={{
                        width: "14rem",
                        height: "10rem",
                        cursor: "pointer",
                      }}
                      b-8gocb8pbav=""
                    >
                      <div className="pt-3 flex-grow-1" b-8gocb8pbav="">
                        <img
                          src="https://www.thekabadiwala.com/images/business/paper-shredding-service.svg"
                          alt="paper-shredding-service"
                          style={{ maxWidth: 80 }}
                          b-8gocb8pbav=""
                        />
                      </div>
                      <div className="label-lg pb-5" b-8gocb8pbav="">
                        Shredding service
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to="CircularEconomyServicesText">
                  <div className="col" b-8gocb8pbav="">
                    <div
                      className="container-bg-2 rounded-4 ps-5 pe-3 mw-100 d-flex flex-column"
                      style={{
                        width: "14rem",
                        height: "10rem",
                        cursor: "pointer",
                      }}
                      b-8gocb8pbav=""
                    >
                      <div className="pt-3 flex-grow-1" b-8gocb8pbav="">
                        <img
                          src="https://www.thekabadiwala.com/images/business/circular-economy-services.svg"
                          alt="circular-economy-services"
                          style={{ maxWidth: 80 }}
                          b-8gocb8pbav=""
                        />
                      </div>
                      <div className="label-lg pb-5" b-8gocb8pbav="">
                        Circular Economy Services
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to="ZerowasteservicesText">
                  <div className="col" b-8gocb8pbav="">
                    <div
                      className="container-bg-2 rounded-4 ps-5 pe-3 mw-100 d-flex flex-column"
                      style={{
                        width: "14rem",
                        height: "10rem",
                        cursor: "pointer",
                      }}
                      b-8gocb8pbav=""
                    >
                      <div className="pt-3 flex-grow-1" b-8gocb8pbav="">
                        <img
                          src="https://www.thekabadiwala.com/images/business/zero-waste-services.svg"
                          alt="zero-waste-services"
                          style={{ maxWidth: 80 }}
                          b-8gocb8pbav=""
                        />
                      </div>
                      <div className="label-lg pb-5" b-8gocb8pbav="">
                        Zero waste services
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to="DismantlingserviceText">
                  <div className="col" b-8gocb8pbav="">
                    <div
                      className="container-bg-2 rounded-4 ps-5 pe-3 mw-100 d-flex flex-column"
                      style={{
                        width: "14rem",
                        height: "10rem",
                        cursor: "pointer",
                      }}
                      b-8gocb8pbav=""
                    >
                      <div className="pt-3 flex-grow-1" b-8gocb8pbav="">
                        <img
                          src="https://www.thekabadiwala.com/images/business/dismantling-services.svg"
                          alt="dismantling-services"
                          style={{ maxWidth: 80 }}
                          b-8gocb8pbav=""
                        />
                      </div>
                      <div className="label-lg pb-5" b-8gocb8pbav="">
                        Dismantling service
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to="CSRActivityText">
                  <div className="col" b-8gocb8pbav="">
                    <div
                      className="container-bg-2 rounded-4 ps-5 pe-3 mw-100 d-flex flex-column"
                      style={{
                        width: "14rem",
                        height: "10rem",
                        cursor: "pointer",
                      }}
                      b-8gocb8pbav=""
                    >
                      <div className="pt-3 flex-grow-1" b-8gocb8pbav="">
                        <img
                          src="https://www.thekabadiwala.com/images/business/corporate-social-responsibility.svg"
                          alt="corporate-social-responsibility"
                          style={{ maxWidth: 80 }}
                          b-8gocb8pbav=""
                        />
                      </div>
                      <div className="label-lg pb-5" b-8gocb8pbav="">
                        CSR Activity
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to="MaterialRecoveryFacilityText">
                  <div className="col" b-8gocb8pbav="">
                    <div
                      className="container-bg-2 rounded-4 ps-5 pe-3 mw-100 d-flex flex-column"
                      style={{
                        width: "14rem",
                        height: "10rem",
                        cursor: "pointer",
                      }}
                      b-8gocb8pbav=""
                    >
                      <div className="pt-3 flex-grow-1" b-8gocb8pbav="">
                        <img
                          src="https://www.thekabadiwala.com/images/business/material-social-responsibility.svg"
                          alt="material-social-responsibility"
                          style={{ maxWidth: 80 }}
                          b-8gocb8pbav=""
                        />
                      </div>
                      <div className="label-lg pb-5" b-8gocb8pbav="">
                        Material Recovery Facility
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to="IECActivityText">
                  <div className="col" b-8gocb8pbav="">
                    <div
                      className="container-bg-2 rounded-4 ps-5 pe-3 mw-100 d-flex flex-column"
                      style={{
                        width: "14rem",
                        height: "10rem",
                        cursor: "pointer",
                      }}
                      b-8gocb8pbav=""
                    >
                      <div className="pt-3 flex-grow-1" b-8gocb8pbav="">
                        <img
                          src="https://www.thekabadiwala.com/images/business/information-education-communication.svg"
                          alt="information-education-communication"
                          style={{ maxWidth: 80 }}
                          b-8gocb8pbav=""
                        />
                      </div>
                      <div className="label-lg pb-5" b-8gocb8pbav="">
                        IEC Activity
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div
              className="d-flex flex-row flex-wrap mt-7 justify-content-center d-lg-none"
              b-8gocb8pbav=""
            >
              <div
                className="container-border-success border rounded-circle p-1 me-4 mb-3"
                b-8gocb8pbav=""
              >
                 <Link to="ScrapCollectionText">
                 <img
                   src="https://www.thekabadiwala.com/images/business/scrap-collection.svg"
                  alt="scrap-collection"
                  style={{ width: 48, height: 48 }}
                  b-8gocb8pbav=""
                />
                 </Link>
                
              </div>
              <div className="rounded-circle p-1 me-4 mb-3" b-8gocb8pbav="">
              <Link to="EPRServiceText">
              <img
                   src="https://www.thekabadiwala.com/images/business/extended-producer-responsibility.svg"
                  alt="extended-producer-responsibility"
                  style={{ width: 48, height: 48 }}
                  b-8gocb8pbav=""
                />
              </Link>
               
              </div>

              <div className="rounded-circle p-1 me-4 mb-3" b-8gocb8pbav="">
              <Link to="Shreddingservice">
              <img
                  src="https://www.thekabadiwala.com/images/business/paper-shredding-service.svg"
                  alt="paper-shredding-service"
                  style={{ width: 48, height: 48 }}
                  b-8gocb8pbav=""
                />
              </Link>
               
              </div>

              <div className="rounded-circle p-1 me-4 mb-3" b-8gocb8pbav="">
              <Link to="CircularEconomyServicesText">
              <img
                    src="https://www.thekabadiwala.com/images/business/circular-economy-services.svg"
                  alt="circular-economy-services"
                  style={{ width: 48, height: 48 }}
                  b-8gocb8pbav=""
                />
              </Link>
             
              </div>

              <div className="rounded-circle p-1 me-4 mb-3" b-8gocb8pbav="">
              <Link to="ZerowasteservicesText">
              <img
                   src="https://www.thekabadiwala.com/images/business/zero-waste-services.svg"
                  alt="zero-waste-services"
                  style={{ width: 48, height: 48 }}
                  b-8gocb8pbav=""
                />
              </Link>
                

              </div>

              <div className="rounded-circle p-1 me-4 mb-3" b-8gocb8pbav="">
              <Link to="DismantlingserviceText">
              <img
                 src="https://www.thekabadiwala.com/images/business/dismantling-services.svg"
                  alt="dismantling-services"
                  style={{ width: 48, height: 48 }}
                  b-8gocb8pbav=""
                />
              </Link>
              
                
              </div>
              <div className="rounded-circle p-1 me-4 mb-3" b-8gocb8pbav="">
              <Link to="CSRActivityText">
              <img
                 src="https://www.thekabadiwala.com/images/business/corporate-social-responsibility.svg"
                  alt="corporate-social-responsibility"
                  style={{ width: 48, height: 48 }}
                  b-8gocb8pbav=""
                />
              </Link>
                
              </div>
              <div className="rounded-circle p-1 me-4 mb-3" b-8gocb8pbav="">
              <Link to="MaterialRecoveryFacilityText">
              <img
                    src="https://www.thekabadiwala.com/images/business/material-social-responsibility.svg"
                  alt="material-social-responsibility"
                  style={{ width: 48, height: 48 }}
                  b-8gocb8pbav=""
                />
              </Link>
               
              </div>
              <div className="rounded-circle p-1 me-4 mb-3" b-8gocb8pbav="">
              <Link to="IECActivityText">
              <img
                  src="https://www.thekabadiwala.com/images/business/information-education-communication.svg"
                  alt="information-education-communication"
                  style={{ width: 48, height: 48 }}
                  b-8gocb8pbav=""
                />
              </Link>
                
              </div>
            </div>
            <div
              className="col-lg-6 col-12 container-bg-2 container-border-2 rounded-4 border p-lg-8 p-7 mt-8 mt-lg-0"
              b-8gocb8pbav=""
            >
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSectionRoutes;
