
import React from 'react'
import Contact from './Contact'
import { Link } from 'react-router-dom'
// import Header from '../../components/Header'

const Franchise = () => {
  return (
    <>
    {/* <Header/> */}

    <main className="content pt-13" b-sflvd4qzb0="">
  <div className="container-fluid">
    <div className="row px-lg-12">
      <div className="col-lg-8 col-12 p-0 order-2 order-lg-1">
        <div className="d-none d-lg-block">
          <img
            src="images/franchise/tkw-workers-hero.webp"
            alt="tkw-workers-hero"
            className="mw-100"
            style={{ height: 450, width: "100%", objectFit: "cover" }}
          />
        </div>
        <div className="d-lg-none">
          <img
            src="images/franchise/tkw-workers-hero.webp"
            alt="tkw-workers-hero"
            className="mw-100"
          />
        </div>
      </div>
      <div className="col-lg-4 col-12 p-0 ps-lg-4 order-2 order-lg-1">
        <div className="d-flex flex-column">
          <div>
            <div className="d-none d-lg-block">
              <img
                src="images/franchise/plastic-wall-day-hero.webp"
                alt="plastic-wall-day-hero"
                className="mw-100 mt-lg-0 mt-3"
                style={{ height: 219, width: "100%", objectFit: "cover" }}
              />
            </div>
            <div className="d-lg-none">
              <img
                src="images/franchise/plastic-wall-day-hero.webp"
                alt="plastic-wall-day-hero"
                className="mw-100 mt-4"
              />
            </div>
          </div>
          <div>
            <div className="d-none d-lg-block">
              <img
                src="images/franchise/tkw-jumping-hero.webp"
                alt="tkw-jumping-hero"
                className="mw-100 mt-lg-4"
                style={{ height: 219, width: "100%", objectFit: "cover" }}
              />
            </div>
            <div className="d-lg-none">
              <img
                src="images/franchise/tkw-jumping-hero.webp"
                alt="tkw-jumping-hero"
                className="mw-100 mt-4"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-0 col-12 order-1 order-lg-2">
        <h3 className="text-center mt-lg-10">The Kabadiwala Franchise</h3>
        <div className="body-lg px-lg-0 mb-lg-0 mb-5 text-lg-center">
          The Kabadiwala is central India’s leading waste management company
          thriving on a mission to make India waste-free.
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="body-lg mt-lg-0 mt-5 text-lg-center">
      Completed 8 years of consistent hard work &amp; commitment to resilience,
      accomplishing a plethora of eco-friendly goals and carbon-neutral
      objectives. With people’s growing awareness and inclination toward
      sustainable life, and Government’s ceaseless contribution in providing
      coherent policies to regulate the bulk waste generators, we have
      successfully diverted 81,10,504 kilograms of waste from landfills &amp;
      incinerators while conserving an impeccable amount of our nature’s wealth.
    </div>
    <div className="row align-items-center px-lg-10 mt-lg-12">
      <div className="col-lg-6 col-12 text-center mt-lg-0 mt-8">
        <img
          src="images/franchise/handshake.webp"
          alt="individual-mobile-screen-hero-mobile"
          className="mw-100"
        />
      </div>
      <div className="col-lg-6 col-12 body-lg">
        <div className="mt-lg-0 mt-8">
          After gaining an unequalled presence in
          <span className="title-lg">5 cities, 500+ global partners,</span>
          and countless happy customers, we are now intending to branch out
          further by providing motivated entrepreneurs with local ownership
          opportunities in markets throughout the country. The Kabadiwala’s
          franchising models offer two less-walked and rewarding paths to
          business ownership.
        </div>
        <div className="mt-7">
          <Link to="/OurJourney" className="btn-primary btn-lg" >
            <span className="label-lg">Our Journey →</span>
          </Link>
        </div>
      </div>
    </div>
    <div>
      <h5 className="mt-lg-12 mt-12 text-lg-center fg-default-3">
        When you couple our team with this accelerating industry that provides
        recurring revenue and feel-good motives, you get a franchise model you
        can believe in.
      </h5>
      <div className="mt-lg-11 mt-8 row justify-content-center">
        <div
          className="col-lg-6 col-12 m-5 container-bg-flash-2 d-flex align-items-center text-center container-border-flash border rounded-4"
          style={{ width: 293, height: 311 }}
        >
          <div>
            <h3>FOFO</h3>
            <span className="body-lg">
              (Franchise Owned Franchise Operated)
            </span>
          </div>
        </div>
        <div
          className="col-lg-6 col-12 d-flex align-items-center ms-lg-12 m-5 container-bg-flash-2 text-center container-border-flash border rounded-4"
          style={{ width: 293, height: 311 }}
        >
          <div>
            <h3>FOCO</h3>
            <span className="body-lg">(Franchise Owned Company Operated)</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Contact/>
</main>

    </>
  )
}

export default Franchise