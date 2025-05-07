import React from 'react'
import "../../clientStyle/TKWWebsite.Client.styles.css"
import "../../clientStyle/contentStylemain.css"
import Testimonials from '../testimonials/Testimonials'
import Contact from "../company/Contact"
import { Link } from 'react-router-dom'
import AppreciatedFeatured from '../../components/AppreciatedFeatured/AppreciatedFeatured'
import BusinessSectionRoutes from '../BusinessSectionRoute/BusinessSectionRoutes'
import InitiativesSection from '../../components/Home/InitiativesSection'
const Business = () => {
  const Testimonal =[
    {
      // Titlename:"Testimonials",
      // title:" Don’t believe us, hear it our from our clients and partners...",
      content:" I am happy to state that KABADIWALA team has associated themselves very nicely with the ISPF Mattress Recycling  Program. They are quite committed to the objective and extend  their best cooperation and services. Despite many hurdles they carried out our Pilot run successfully. We wish them All the best in their future ventures",
      name:" S. Sundaresan",
      post:"Secretary - ISPF"
    },
    {
      content:' During our order execution with M/s The kabadiwala , we have  experienced that M/s Kabadiwala provided customized scrap collection service to DB Group wherein they collected scrap  from our units in 10 + cities across India and the entireprocess was very hassel free with timely pick ups and bestscrap rates.',
      name:'  Sanjeev Pandey',
      post:' Manager Supply Chain Management at DB Corp Ltd. (DainikBhaskar Group)'
    },
    {
      content:'The Kabadiwala team is the perfect example of Technology for a  purpose. During our partnership, they’ve smashed through theircommitted waste collections much ahead of time, building strong consumer awareness along the way through a young, contemporary &amp; engaging communications approach. A  wonderful partner for anyone looking to create tangible impact.',
      name:' Nirjhara Rastogi',
      post:'  Director and Head of Communication - Tetra Pak South Asia'
    },
    {
      content:' The Kabadiwala has truly fitted in our strategy to set-up the ecosystem for carton collection in India. Their approach to business is dynamic, feasible and socially inclusive and we admire their efforts.',
      name:' Sumit Jugran',
      post:'Sustainability Manager South Asia at Tetra Pak'
    }
  ]
  return (
    <div>

      <main className="content pt-13" b-sflvd4qzb0="" style={{overflow:"hidden"}}>
  <div
    className="container-fluid px-lg-10 pt-lg-10 pb-lg-14 pb-12"
    b-8gocb8pbav=""
  >
    <div className="row align-items-center" b-8gocb8pbav="">
      <div className="col-lg-5 order-lg-1 order-2 col-12" b-8gocb8pbav="">
        <h2 className="pt-lg-6 pt-8 pt-lg-0" b-8gocb8pbav="">
          Your{" "}
          <span className="fg-success-2" b-8gocb8pbav="">
            Waste.
          </span>
          <br b-8gocb8pbav="" />
          Our
          <span className="fg-success-2" b-8gocb8pbav="">
            Business.
          </span>
        </h2>
        <div className="label-lg pt-lg-5 pt-3" b-8gocb8pbav="">
          Helping brands go
          <span className="fg-success-2" b-8gocb8pbav="">
            Plastic-Neutral
          </span>
          and offset their
          <span className="fg-success-2" b-8gocb8pbav="">
            carbon footprint
          </span>
          .
        </div>
        <div className="pt-lg-8 pt-6" b-8gocb8pbav="">
          <a className="btn-primary btn-lg" href="business.html#contact-form">
            <span className="label-lg" b-8gocb8pbav="">
              Contact Us
            </span>
          </a>
        </div>
      </div>
      <div
        className="col-lg-7 col-12 d-none d-lg-block order-lg-2 order-1"
        b-8gocb8pbav=""
      >
        <img
          src="https://www.thekabadiwala.com/images/business/business-hero.webp"
          alt="business-hero"
          className="mw-100 rounded-6"
          b-8gocb8pbav=""
        />
      </div>
      <div className="d-lg-none col-12 order-lg-2 order-1" b-8gocb8pbav="">
        <img
          src="https://www.thekabadiwala.com/images/business/business-hero.webp"
          alt="business-hero-mobile"
          className="mw-100 w-100 rounded-4"
          b-8gocb8pbav=""
        />
      </div>
    </div>
  </div>

      <AppreciatedFeatured/>

{/* Nexted route Use pass data Outlet  */}
      <BusinessSectionRoutes/>

  



  <div
    className="mx-auto px-lg-6 py-8 mt-10 mb-10 mt-lg-0 mb-lg-14"
    style={{ maxWidth: 1682 }}
    b-8gocb8pbav=""
  >
    <div
      className="d-flex flex-column flex-lg-row section-4 container-bg-2 mt-6 align-items-center"
      b-8gocb8pbav=""
    >
      <div className="ps-lg-10 px-4 pt-lg-0 pt-10" b-8gocb8pbav="">
        <h3 b-8gocb8pbav="">
          We assist you in enabling your business's sustainable growth
        </h3>
        <div className="label-lg mt-7 fg-inverse-3" b-8gocb8pbav="">
          Let's join hands to redefine the waste management sector of India by
          formally organizing it.
        </div>
        <div className="mt-7" b-8gocb8pbav="">
          <Link to="/Contact" className="nav-btn-primary" >
            Schedule a consultation call today
          </Link>
        </div>
      </div>
      <div className="d-none d-lg-block" b-8gocb8pbav="">
        <img
          className="w-auto rounded-8"
          src="https://www.thekabadiwala.com/images/business/consult-tkw.webp"
          alt="consult-tkw"
          b-8gocb8pbav=""
        />
      </div>
      <div className="d-block d-lg-none mt-lg-11 mt-8" b-8gocb8pbav="">
        <img
          className="mw-100"
          src="https://www.thekabadiwala.com/images/business/consult-tkw.webp"
          alt="consult-tkw"
          b-8gocb8pbav=""
        />
      </div>
    </div>
  </div>
  <div className="container d-flex align-items-center h-100">
    <div className="row align-items-center">
      <div className="col-lg-6 col-12 order-2 order-lg-1 p-lg-12">
        <div className="row row-cols-3 g-lg-8 g-4">
          <div className="col">
            <div
              className="rounded-4 p-6 d-flex align-items-center"
              style={{
                backgroundColor: "#f4f4f4",
                maxWidth: "30vw",
                maxHeight: "30vw",
                width: "7rem",
                height: "7rem"
              }}
            >
              <img
                src="https://www.thekabadiwala.com/images/partners/partners-paytm.png"
                alt="partners-paytm"
                className="w-100"
              />
            </div>
          </div>
          <div className="col">
            <div
              className="rounded-4 p-6 d-flex align-items-center"
              style={{
                backgroundColor: "#f4f4f4",
                maxWidth: "30vw",
                maxHeight: "30vw",
                width: "7rem",
                height: "7rem"
              }}
            >
              <img
                src="https://www.thekabadiwala.com/images/partners/partners-dominos.png"
                alt="partners-dominos"
                className="w-100"
              />
            </div>
          </div>
          <div className="col">
            <div
              className="rounded-4 p-6 d-flex align-items-center"
              style={{
                backgroundColor: "#f4f4f4",
                maxWidth: "30vw",
                maxHeight: "30vw",
                width: "7rem",
                height: "7rem"
              }}
            >
              <img
                src="https://www.thekabadiwala.com/images/partners/partners-tetrapak.png"
                alt="partners-tetrapak"
                className="w-100"
              />
            </div>
          </div>
          <div className="col">
            <div
              className="rounded-4 p-6 d-flex align-items-center"
              style={{
                backgroundColor: "#f4f4f4",
                maxWidth: "30vw",
                maxHeight: "30vw",
                width: "7rem",
                height: "7rem"
              }}
            >
              <img
               src="https://www.thekabadiwala.com/images/partners/partners-larsen_tourbo.png"
                alt="partners-larsen_tourbo"
                className="w-100"
              />
            </div>
          </div>
          <div className="col">
            <div
              className="rounded-4 p-6 d-flex align-items-center"
              style={{
                backgroundColor: "#f4f4f4",
                maxWidth: "30vw",
                maxHeight: "30vw",
                width: "7rem",
                height: "7rem"
              }}
            >
              <img
               src="https://www.thekabadiwala.com/images/partners/partners-icici-bank.png"
                alt="partners-icici-bank"
                className="w-100"
              />
            </div>
          </div>
          <div className="col">
            <div
              className="rounded-4 p-6 d-flex align-items-center"
              style={{
                backgroundColor: "#f4f4f4",
                maxWidth: "30vw",
                maxHeight: "30vw",
                width: "7rem",
                height: "7rem"
              }}
            >
              <img
                src="https://www.thekabadiwala.com/images/partners/partners-decathlon.png"
                alt="partners-decathlon"
                className="w-100"
              />
            </div>
          </div>
          <div className="col">
            <div
              className="rounded-4 p-6 d-flex align-items-center"
              style={{
                backgroundColor: "#f4f4f4",
                maxWidth: "30vw",
                maxHeight: "30vw",
                width: "7rem",
                height: "7rem"
              }}
            >
              <img
                src="https://www.thekabadiwala.com/images/partners/partners-hersheys.png"
                alt="partners-hersheys"
                className="w-100"
              />
            </div>
          </div>
          <div className="col">
            <div
              className="rounded-4 p-6 d-flex align-items-center"
              style={{
                backgroundColor: "#f4f4f4",
                maxWidth: "30vw",
                maxHeight: "30vw",
                width: "7rem",
                height: "7rem"
              }}
            >
              <img
                src="https://www.thekabadiwala.com/images/partners/partners-godrej.png"
                alt="partners-godrej"
                className="w-100"
              />
            </div>
          </div>
          <div className="col">
            <div
              className="rounded-4 p-6 d-flex align-items-center"
              style={{
                backgroundColor: "#f4f4f4",
                maxWidth: "30vw",
                maxHeight: "30vw",
                width: "7rem",
                height: "7rem"
              }}
            >
              <img
               src="https://www.thekabadiwala.com/images/partners/partners-reliance.png"
                alt="partners-reliance"
                className="w-100"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-12 order-1 order-lg-2 border-start container-border-3 p-lg-12 p-6 pt-8 text-center text-lg-start">
        <h3>
          Trusted by <span className="fg-success-2">500+ </span> global partners
        </h3>
        <p className="body-lg py-5">
          The Kabadiwala is an official waste management partner with the
          world’s greatest organization.
        </p>
      </div>
    </div>
  </div>
  <div
    className="container-fluid px-lg-7 py-8 mt-10 my-lg-14 mb-10"
    style={{ maxWidth: 1682 }}
    b-8gocb8pbav=""
  >
    <div
      className="row px-lg-10 section-6 align-items-center light-theme"
      style={{ backgroundColor: "#1b1b1b" }}
      b-8gocb8pbav=""
    >
      <div className="col-lg-8 col-12 px-lg-0 pt-lg-5 pt-8" b-8gocb8pbav="">
        
        <Link to="/" className="d-flex align-items-center">
          <div style={{ color: "#01a1ff" }} className="rounded-circle">
            <span className="fw-bold fs-5" style={{ color: "#01a1ff" }}>
              Go
            </span>
          </div>
          <span className="text-white fw-semibold fs-4">Easy</span>
        </Link>

       
        <h3 className="fg-inverse-1 mt-7" b-8gocb8pbav="">
          Let’s grow together with The Kabadiwala official franchise!
        </h3>
        <div className="body-lg mt-7 fg-inverse-1" b-8gocb8pbav="">
          We believe in expanding not only for us but for recycling to adopt
          nationwide to achieve a circular economy.
        </div>
        <div className="dark-theme mt-7 pb-5" b-8gocb8pbav="">
          <Link to="/Contact" className="nav-btn-primary" >
            Enquire Now
          </Link>
        </div>
      </div>
      <div
        className="col-lg-4 col-12 pt-lg-10 pb-6 pb-lg-0 text-center"
        b-8gocb8pbav=""
      >
        <img
          src="https://www.thekabadiwala.com/images/business/franchise-grow-graph.webp"
          alt="franchise-grow-graph"
          className="mw-100 h-100"
          b-8gocb8pbav=""
        />
      </div>
    </div>
  </div>
  <div className="py-lg-8" b-8gocb8pbav="">
    <div className="container-fluid px-0 d-flex flex-column h-100 justify-content-around py-10 py-lg-0">
                <InitiativesSection/>
    </div>
  </div>
  <div
          className="container-fluid pt-lg-14 pb-lg-8 pt-12 pb-12"
          b-c9s2b9qmjt=""
        >

          <h2 className="text-center" b-c9s2b9qmjt="">
          Testimonials
          </h2>
          <div
            className="body-lg mt-lg-6 mt-3 pb-lg-8 pb-9 text-center"
            b-c9s2b9qmjt=""
          >
           Don’t believe us, hear it our from our clients and partners...
          </div>
          <div className="carousel">
          <Testimonials items={Testimonal}/>

          </div>
          </div>
  
  <div className="row mb-5">
  <Contact/>
  </div>
</main>

    </div>
  )
}

export default Business
