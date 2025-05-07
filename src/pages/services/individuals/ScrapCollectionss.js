import React, { useRef, useEffect } from "react";
import "../../../clientStyle/contentStylemain.css";
import "../../../clientStyle/TKWWebsite.Client.styles.css";
import { Link } from "react-router-dom";
import Testimonials from "../../testimonials/Testimonials";

const ScrapCollectionss = () => {
  const videoRef = useRef(null);
  // const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    // Start playing the video when the component mounts
    if (!videoRef.current) {
      videoRef.current.play();
    }
  }, []);
  const Reviewss=[
    {
    
      content:'The service is amazing. The experience is like an e commerce platform and the best part is that you get paid for selling your stuff. The app is very smooth. Highly recommended.',
      name:'Atharva Kulkarni',
    },
    {
      
      content:'Very well organised and systematic process, impressive work. I got instant payment for my waste material. behaviour of pickup boys was very humble.',
      name:'Arpit Gupta',
    },
    {
      content:'Superb, Fast & Fantastic service. Sold kabad within 24 hours of booking an appointment. Good work guys keep it up 👌',
      name:'Sunny Singh',
    }
    ,{
      content:"Awesome platform. I gave 25 kg kabad and they gave me Rs. 250. Digital weighing machine and transparent charges... Loved it 😍😍😍",
      name:"Apratim Chatterjee"
    }
  ]
  return (
    <div>
      <main className="content pt-13" b-sflvd4qzb0="">
        <div className="hero-image" b-c9s2b9qmjt="">
          <div className="container-fluid" b-c9s2b9qmjt="">
            <div className="row pt-lg-12" b-c9s2b9qmjt="">
              <div className="col-lg-6 col-12 ps-lg-12" b-c9s2b9qmjt="">
                <h2 className="mt-lg-10" b-c9s2b9qmjt="">
                  Sell your scrap in just few clicks!
                </h2>
                <div className="body-lg mt-lg-7 mt-4" b-c9s2b9qmjt="">
                GoEasyServices provides reliable, doorstep home services like plumbing, carpentry, and more, anytime you need
                </div>
                <div
                  className="mt-lg-7 mt-8 text-center text-lg-start mb-10 mb-lg-0"
                  b-c9s2b9qmjt=""
                >
                  <Link to="https://play.google.com/store/apps/details?id=in.goeasyservices.application">
                  <button
                    style={{ border: "none" }}
                    type="button"
                    className="btn-primary btn-lg app-download-modal-btn"
                    b-c9s2b9qmjt=""
                  >
                    Download the app
                  </button>
                  </Link>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="d-lg-none" b-c9s2b9qmjt="">
            <img
              src="https://www.thekabadiwala.com/images/individual/individual-mobile-screen-hero-mobile.webp"
              alt="individual-mobile-screen-hero-mobile"
              className="w-100"
            />
          </div>
        </div>
        <div
          className="container-fluid light-theme"
          style={{ backgroundColor: "#1b1b1b" }}
          b-c9s2b9qmjt=""
        >
          <h3
            className="pt-12 pt-lg-13 pb-lg-11 text-lg-center fg-inverse-1"
            b-c9s2b9qmjt=""
          >
            3{" "}
            <span className="fg-success-1" b-c9s2b9qmjt="">
              easy steps
            </span>{" "}
            to sell your Scrap
          </h3>
          <div
            className="text-center pb-lg-11 d-none d-lg-block"
            b-c9s2b9qmjt=""
          >
            <img
              src="https://www.thekabadiwala.com/images/individual/arrow.svg"
              className="mw-100 h-auto w-auto"
              alt="arrow"
              b-c9s2b9qmjt=""
            />
          </div>

          <div className="container row p-0 pb-14" b-c9s2b9qmjt="">
            <div
              className="col-lg-4 col-12 pe-lg-11 mt-10 mt-lg-0"
              b-c9s2b9qmjt=""
            >
              <h4 className="fg-success-1" b-c9s2b9qmjt="">
                Step 1
              </h4>
              <div className="d-none d-lg-block" b-c9s2b9qmjt="">
                <div
                  className="px-12 py-12 border rounded-8 mt-7"
                  style={{ backgroundColor: "var(--background)" }}
                  b-c9s2b9qmjt=""
                >
                  <video
                    loop="500"
                    className="mw-100 "
                    ref={videoRef}
                    playsinline="true"
                    webkit-playsinline="true"
                    autoplay="true"
                    poster="https://www.thekabadiwala.com/images/individual/check.mp4"
                    //  style={{ height: "35vh" }}
                  >
                    <source
                      // onClick={togglePlayPause}
                      src="https://www.thekabadiwala.com/images/individual/check.mp4"
                      type="video/mp4"
                    />
                    <source
                      src="https://www.thekabadiwala.com/images/individual/check.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
                <h4 className="fg-inverse-1 mt-lg-10 mt-7" b-c9s2b9qmjt="">
                  Choose material
                </h4>
                <div
                  className="body-lg fg-inverse-1 mt-lg-6 mt-3"
                  b-c9s2b9qmjt=""
                >
                  Out of our 40+ scrap categories choose the scrap you want to
                  sell.
                </div>
              </div>
              <div className="d-lg-none row" b-c9s2b9qmjt="">
                <div className="col-6" b-c9s2b9qmjt="">
                  <div
                    className="px-5 py-5 border rounded-6 mt-7"
                    style={{ backgroundColor: "var(--background)" }}
                    b-c9s2b9qmjt=""
                  >
                    <video
                      loop="500"
                      className="mw-100 "
                      autoPlay
                      poster="https://www.thekabadiwala.com/images/individual/check.mp4"
                      //  style={{ height: "35vh" }}
                    >
                      <source
                        src="https://www.thekabadiwala.com/images/individual/check.mp4"
                        type="video/mp4"
                      />
                      <source
                      src="https://www.thekabadiwala.com/images/individual/check.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>
                <div className="col-6 p-0" b-c9s2b9qmjt="">
                  <h4 className="fg-inverse-1 mt-lg-10 mt-7" b-c9s2b9qmjt="">
                    Schedule Pickup
                  </h4>
                  <div
                    className="body-lg fg-inverse-1 mt-lg-6 mt-3"
                    b-c9s2b9qmjt=""
                  >
                    Select your date and add the location from where the scrap
                    will be picked up.
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-12 pe-lg-11 mt-10 mt-lg-0"
              b-c9s2b9qmjt=""
            >
              <h4 className="fg-success-1" b-c9s2b9qmjt="">
                Step 2
              </h4>
              <div className="d-none d-lg-block" b-c9s2b9qmjt="">
                <div
                  className="px-12 py-12 border rounded-8 mt-7"
                  style={{ backgroundColor: "var(--background)" }}
                  b-c9s2b9qmjt=""
                >
                  <video
                    loop="500"
                    className="mw-100 "
                    autoPlay
                    poster="https://www.thekabadiwala.com/images/individual/calender.mp4"
                    //  style={{ height: "35vh" }}
                  >
                    <source
                      src="https://www.thekabadiwala.com/images/individual/calender.mp4"
                      type="video/mp4"
                    />
                    <source
                      src="https://www.thekabadiwala.com/images/individual/calender.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
                <h4 className="fg-inverse-1 mt-lg-10 mt-7" b-c9s2b9qmjt="">
                  Schedule Pickup
                </h4>
                <div
                  className="body-lg fg-inverse-1 mt-lg-6 mt-3"
                  b-c9s2b9qmjt=""
                >
                  Select your preferred date and add the scrap pick-up location.
                </div>
              </div>
              <div className="d-lg-none row" b-c9s2b9qmjt="">
                <div className="col-6" b-c9s2b9qmjt="">
                  <div
                    className="px-5 py-5 border rounded-6 mt-7"
                    style={{ backgroundColor: "var(--background)" }}
                    b-c9s2b9qmjt=""
                  >
                    <video
                      loop="500"
                      className="mw-100 "
                      autoPlay
                      poster="https://www.thekabadiwala.com/images/individual/calender.mp4"
                      //  style={{ height: "35vh" }}
                    >
                      <source
                        src="https://www.thekabadiwala.com/images/individual/calender.mp4"
                        type="video/mp4"
                      />
                      <source
                        src="https://www.thekabadiwala.com/images/individual/calender.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>
                <div className="col-6 p-0" b-c9s2b9qmjt="">
                  <h4 className="fg-inverse-1 mt-lg-10 mt-7" b-c9s2b9qmjt="">
                    Schedule Pickup
                  </h4>
                  <div
                    className="body-lg fg-inverse-1 mt-lg-6 mt-3"
                    b-c9s2b9qmjt=""
                  >
                    Select your date and add the location from where the scrap
                    will be picked up.
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-12 pe-lg-11 mt-10 mt-lg-0"
              b-c9s2b9qmjt=""
            >
              <h4 className="fg-success-1" b-c9s2b9qmjt="">
                Step 3
              </h4>
              <div className="d-none d-lg-block" b-c9s2b9qmjt="">
                <div
                  className="px-12 py-12 border rounded-8 mt-7"
                  style={{ backgroundColor: "var(--background)" }}
                  b-c9s2b9qmjt=""
                >
                  <video
                    loop="500"
                    className="mw-100 "
                    autoPlay
                    poster="https://www.thekabadiwala.com/images/individual/billing.mp4"
                    //  style={{ height: "35vh" }}
                  >
                    <source
                      src="https://www.thekabadiwala.com/images/individual/billing.mp4"
                      type="video/mp4"
                    />
                    <source
                      src="https://www.thekabadiwala.com/images/individual/billing.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
                <div b-c9s2b9qmjt="">
                  <h4 className="fg-inverse-1 mt-lg-10 mt-7" b-c9s2b9qmjt="">
                    Recieve Payment
                  </h4>
                  <div
                    className="body-lg fg-inverse-1 mt-lg-6 mt-3"
                    b-c9s2b9qmjt=""
                  >
                    Recieve payment in any one of the three payment modes via
                    cash or UPI or IMPS.
                  </div>
                </div>
              </div>
              <div className="d-lg-none row" b-c9s2b9qmjt="">
                <div className="col-6" b-c9s2b9qmjt="">
                  <div
                    className="px-5 py-5 border rounded-6 mt-7"
                    style={{ backgroundColor: "var(--background)" }}
                    b-c9s2b9qmjt=""
                  >
                    <video
                      loop="500"
                      className="mw-100 "
                      autoPlay
                      poster="https://www.thekabadiwala.com/images/individual/billing.mp4"
                      //  style={{ height: "35vh" }}
                    >
                      <source
                        src="https://www.thekabadiwala.com/images/individual/billing.mp4"
                        type="video/mp4"
                      />
                      <source
                        src="https://www.thekabadiwala.com/images/individual/billing.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>
                <div className="col-6 p-0" b-c9s2b9qmjt="">
                  <h4 className="fg-inverse-1 mt-7" b-c9s2b9qmjt="">
                    Recieve Payment
                  </h4>
                  <div className="body-lg fg-inverse-1 mt-3" b-c9s2b9qmjt="">
                    Recieve payment in any one of the three payment modes via
                    cash or UPI or IMPS.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section
          className="container mt-lg-14 mb-lg-14 mt-12 mb-12 text-center"
          b-c9s2b9qmjt=""
        >
          <div
            className="d-flex flex-column vh-100 position-sticky top-0"
            style={{ backgroundColor: "var(--background)" }}
            b-c9s2b9qmjt=""
          >
            <h3 className="mt-10" b-c9s2b9qmjt="">
              Raise Pickup
              <span className="fg-success-2" b-c9s2b9qmjt="">
                Request
              </span>
            </h3>
            <div className="body-lg mt-lg-7 mt-5 mx-lg-14" b-c9s2b9qmjt="">
              Raise a request from the comfort of your home with The
              Kabadiwala’s easy &amp; flexible pickup scheduling.
            </div>
            <div
              className="position-relative mt-lg-12 mt-8 flex-fill bottom-0"
              b-c9s2b9qmjt=""
            >
              <img
                src="images/individual/mobile-screen-half.svg"
                className="h-100 w-auto"
                alt="mobile-screen-half"
                style={{ maxWidth: "min(90vw, 500px)" }}
                b-c9s2b9qmjt=""
              />
              <div
                className="position-absolute top-0 start-50 translate-x-n50 mt-lg-14 mt-14"
                b-c9s2b9qmjt=""
              >
                <video
                  loop="500"
                  playsinline="true"
                  webkit-playsinline="true"
                  autoplay="true"
                  className="mw-100 video-play"
                  style={{ height: "35vh", maxwidth: "270px" }}
                  b-c9s2b9qmjt=""
                >
                  <source
                    src="https://www.thekabadiwala.com/images/individual/location.mp4"
                    type="video/m4v"
                    b-c9s2b9qmjt=""
                  />
                  <source
                    src="https://www.thekabadiwala.com/images/individual/location.mp4"
                    type="video/mp4"
                    b-c9s2b9qmjt=""
                  />
                </video>
              </div>
            </div>
          </div>
          <div
            className="d-flex flex-column vh-100 position-sticky top-0"
            style={{ backgroundColor: "var(--background)" }}
            b-c9s2b9qmjt=""
          >
            <h3 className="mt-10" b-c9s2b9qmjt="">
              <span className="fg-success-2" b-c9s2b9qmjt="">
                Recycle
              </span>{" "}
              Your Scrap
            </h3>
            <div className="body-lg mt-lg-7 mt-5 mx-lg-14" b-c9s2b9qmjt="">
              Don't know where to get your dry scrap recycled? Find us at your
              service.
            </div>
            <div
              className="position-relative mt-lg-12 mt-8 flex-fill bottom-0"
              b-c9s2b9qmjt=""
            >
              <img
                src="/images/individual/mobile-screen-half.svg"
                className="h-100 w-auto"
                alt="mobile-screen-half"
                style={{ maxWidth: "min(90vw, 500px)" }}
                b-c9s2b9qmjt=""
              />
              <div
                className="position-absolute top-0 start-50 translate-x-n50 mt-lg-14 mt-14"
                b-c9s2b9qmjt=""
              >
                <video
                  loop="500"
                  playsinline="true"
                  webkit-playsinline="true"
                  autoplay="true"
                  //    controls
                  className="mw-100 video-play"
                  style={{ height: "35vh", maxwidth: "270px" }}
                >
                  <source
                    src="https://www.thekabadiwala.com/images/individual/recycle.mp4"
                    type="video/m4v"
                    b-c9s2b9qmjt=""
                  />
                  <source
                    src="https://www.thekabadiwala.com/images/individual/recycle.mp4"
                    type="video/mp4"
                    b-c9s2b9qmjt=""
                  />
                </video>
              </div>
            </div>
          </div>
          <div
            className="d-flex flex-column vh-100 position-sticky top-0"
            style={{ backgroundColor: "var(--background)" }}
            b-c9s2b9qmjt=""
          >
            <h3 className="mt-12" b-c9s2b9qmjt="">
              Get Exciting
              <span className="fg-success-2" b-c9s2b9qmjt="">
                Rewards
              </span>
            </h3>
            <div className="body-lg mt-lg-7 mt-5 mx-lg-14" b-c9s2b9qmjt="">
              Get a chance to win exciting rewards like coupons and gift cards
              &amp; much more.
            </div>
            <div
              className="position-relative mt-lg-12 mt-8 flex-fill bottom-0"
              b-c9s2b9qmjt=""
            >
              <img
                src="/images/individual/mobile-screen-half.svg"
                alt="mobile-screen-half"
                className="h-100 w-auto"
                style={{ maxWidth: "min(90vw, 500px)" }}
                b-c9s2b9qmjt=""
              />
              <div
                className="position-absolute top-0 start-50 translate-x-n50 mt-lg-14 mt-14"
                b-c9s2b9qmjt=""
              >
                <video
                  loop="500"
                  //    muted
                  playsinline="true"
                  webkit-playsinline="true"
                  autoplay="true"
                  //    controls
                  className="mw-100 video-play"
                  style={{ height: "35vh", maxwidth: "270px" }}
                >
                  <source
                    src="https://www.thekabadiwala.com/images/individual/rewards.mp4"
                    type="video/m4v"
                    b-c9s2b9qmjt=""
                  />
                  <source
                    src="https://www.thekabadiwala.com/images/individual/rewards.mp4"
                    type="video/mp4"
                    b-c9s2b9qmjt=""
                  />
                </video>
              </div>
            </div>
          </div>
        </section>
        <div className="container pt-lg-14 pb-lg-14" b-c9s2b9qmjt="">
          <div className="row align-items-center" b-c9s2b9qmjt="">
            <div className="col-lg-5 col-12" b-c9s2b9qmjt="">
              <img
                src="https://www.thekabadiwala.com/images/individual/plant.webp"
                className="rounded-5 mw-100"
                //   b-c9s2b9qmjt=""
                alt="img pata nhi"
              />
            </div>
            <div className="col-lg-7 ps-lg-8 col-12" b-c9s2b9qmjt="">
              <h3 className="pt-6 pt-lg-0" b-c9s2b9qmjt="">
                Know your
                <span className="fg-success-2" b-c9s2b9qmjt="">
                  Contribution
                </span>{" "}
                to the environment
              </h3>
              <div className="body-lg pt-lg-5 pt-2" b-c9s2b9qmjt="">
                The Kabadiwala app allows you to check your environmental impact
                for the amount of scrap you sold to us. The impact is shown in
                terms of the natural resources you saved from over-exploitation
                or the units of energy you preserved for a sustainable future.
              </div>
            </div>
          </div>
        </div>
        <div
          className="container-fluid light-theme vehicle-scrapping ps-lg-12 mt-lg-14 mb-lg-14 mt-12 mb-12"
          b-c9s2b9qmjt=""
        >
          <div className="row" b-c9s2b9qmjt="">
            <div className="col-lg-6 col-12" b-c9s2b9qmjt="">
              <h2 className="pt-8" b-c9s2b9qmjt="">
                <span className="fg-inverse-1" b-c9s2b9qmjt="">
                  Want to get rid of your{" "}
                </span>
                old vehicle?
              </h2>
              <div
                className="body-lg mt-7 mb-8 mt-lg-5 fg-inverse-1"
                b-c9s2b9qmjt=""
              >
                Let go of your age old unfit motor that doesn't serve its
                purpose neither to you nor to the environment &amp; help bring
                circularity in the Indian automobile sector.
              </div>
            </div>
          </div>
          <div className="pb-8 fg-inverse-1" b-c9s2b9qmjt="">
            <div className="carousel">
              <div
                className="carousel-container"
                style={{ transform: "translateX(-0px)" }}
              >
                <div
                  className="d-block me-5"
                  style={{ minWidth: 316, maxWidth: 375 }}
                  b-c9s2b9qmjt=""
                >
                  <div
                    className="card old-vehicle-card rounded-5 h-100"
                    b-c9s2b9qmjt=""
                  >
                    <div className="card-body" b-c9s2b9qmjt="">
                      <div className="d-flex flex-column" b-c9s2b9qmjt="">
                        <div className="p-lg-3 p-6" b-c9s2b9qmjt="">
                          <div
                            className="d-flex align-items-center"
                            b-c9s2b9qmjt=""
                          >
                            <h4
                              className="fg-inverse-1 flex-grow-1"
                              b-c9s2b9qmjt=""
                            >
                              Why
                            </h4>
                            <div
                              className="d-flex flex-row px-7 py-5 align-items-center justify-content-center title-lg rounded-circle"
                              style={{
                                backgroundColor: "#003066",
                                color: "white",
                              }}
                              b-c9s2b9qmjt=""
                            >
                              1
                            </div>
                          </div>
                          <div
                            style={{ color: "white" }}
                            className="body-lg mt-3"
                            b-c9s2b9qmjt=""
                          >
                            A vehicle as old as 10 to 15 years becomes unfit to
                            drive on roads due to its decreased efficiency and
                            increased carbon emissions, making it prone to road
                            accidents, requires high maintenance, and causes
                            extensive harm to the environment.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="d-block me-5"
                  style={{ minWidth: 316, maxWidth: 375 }}
                  b-c9s2b9qmjt=""
                >
                  <div
                    className="card old-vehicle-card rounded-5 h-100"
                    b-c9s2b9qmjt=""
                  >
                    <div className="card-body" b-c9s2b9qmjt="">
                      <div className="d-flex flex-column" b-c9s2b9qmjt="">
                        <div className="p-lg-3 p-6" b-c9s2b9qmjt="">
                          <div
                            className="d-flex align-items-center"
                            b-c9s2b9qmjt=""
                          >
                            <h4
                              className="fg-inverse-1 flex-grow-1"
                              b-c9s2b9qmjt=""
                            >
                              Benefits
                            </h4>
                            <div
                              className="d-flex flex-row px-7 py-5 align-items-center justify-content-center title-lg rounded-circle"
                              style={{
                                backgroundColor: "#003066",
                                color: "white",
                              }}
                              b-c9s2b9qmjt=""
                            >
                              2
                            </div>
                          </div>
                          <div
                            style={{ color: "white" }}
                            className="body-lg mt-3"
                            b-c9s2b9qmjt=""
                          >
                            Adhering to the Vehicle Scrappage Policy of 2021,
                            the right disposal of the scrapped vehicle is
                            streamlined, thus helping to establish a circular
                            economy in the automobile sector. While you enjoy
                            perks like no registration fee on your new purchase
                            &amp; few road taxes waiver.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="d-block me-5"
                  style={{ minWidth: 316, maxWidth: 375 }}
                  b-c9s2b9qmjt=""
                >
                  <div
                    className="card old-vehicle-card rounded-5 h-100"
                    b-c9s2b9qmjt=""
                  >
                    <div className="card-body" b-c9s2b9qmjt="">
                      <div className="d-flex flex-column" b-c9s2b9qmjt="">
                        <div className="p-lg-3 p-6" b-c9s2b9qmjt="">
                          <div
                            className="d-flex align-items-center"
                            b-c9s2b9qmjt=""
                          >
                            <h4
                              className="fg-inverse-1 flex-grow-1"
                              b-c9s2b9qmjt=""
                            >
                              Our Solution
                            </h4>
                            <div
                              className="d-flex flex-row px-7 py-5 align-items-center justify-content-center title-lg rounded-circle"
                              style={{
                                backgroundColor: "#003066",
                                color: "white",
                              }}
                              b-c9s2b9qmjt=""
                            >
                              3
                            </div>
                          </div>
                          <div
                            style={{ color: "white" }}
                            className="body-lg mt-3"
                            b-c9s2b9qmjt=""
                          >
                            When your vehicle becomes unfit to be on roads, The
                            Kabadiwala provides solutions for its right disposal
                            while giving fair value against it. We also issue a
                            vehicle scrapping certificate so that you can avail
                            the benefits stated under the Vehicle Scrappage
                            Policy 2021.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-controls" />
            </div>
          </div>
        </div>
        <div className="container pt-lg-14 pb-lg-14" b-c9s2b9qmjt="">
          <div className="row align-items-center" b-c9s2b9qmjt="">
            <div className="col-lg-6 col-12 order-lg-1 order-2" b-c9s2b9qmjt="">
              <h2 className="mt-5 mt-lg-0" b-c9s2b9qmjt="">
                Know your{" "}
                <span className="fg-success-2" b-c9s2b9qmjt="">
                  waste
                </span>
              </h2>
              <div className="body-lg mt-5 mt-lg-7 pe-lg-8" b-c9s2b9qmjt="">
                Did you know? More than half of our household waste is kitchen
                waste and the rest consists of dry &amp; hazardous waste. Each
                waste type has to be segregated at source to enable its right
                disposal so that a circular economy can be formed. Click the
                button below to know about your waste.
              </div>
            </div>
            <div
              className="col-lg-6 col-12 order-lg-2 order-1 p-lg-0"
              b-c9s2b9qmjt=""
            >
              <img
                className="mw-100 rounded-5"
                src="/images/individual/know-your-waste.webp"
                alt="know-your-waste"
                b-c9s2b9qmjt=""
              />
            </div>
          </div>
        </div>
        <div
          className="container-fluid light-theme fg-inverse-1 ps-lg-12 zero-waste-society mt-lg-14 mb-lg-14 mt-12 mb-12"
          b-c9s2b9qmjt=""
        >
          <div className="row" b-c9s2b9qmjt="">
            <div className="col-lg-7 col-12" b-c9s2b9qmjt="">
              <h2 className="fg-inverse-1 pt-8" b-c9s2b9qmjt="">
                Zero Waste Societies
              </h2>
              <div className="body-lg mt-7 mb-8 me-lg-14" b-c9s2b9qmjt="">
                With our zero waste management services we help your society to
                turn zero waste by incorporating zero waste practices within its
                residents &amp; stakeholders.
              </div>
            </div>
          </div>
          <div className="pb-8" b-c9s2b9qmjt="">
            <div className="carousel">
              <div
                className="carousel-container"
                style={{ transform: "translateX(-0px)" }}
              >
                <div
                  className="d-block me-5"
                  style={{ minWidth: 316, maxWidth: 375 }}
                  b-c9s2b9qmjt=""
                >
                  <div
                    className="card zero-waste-card rounded-5 h-100"
                    b-c9s2b9qmjt=""
                  >
                    <div className="card-body" b-c9s2b9qmjt="">
                      <div className="d-flex flex-column" b-c9s2b9qmjt="">
                        <div className="p-6 p-lg-3" b-c9s2b9qmjt="">
                          <div
                            className="d-flex align-items-center"
                            b-c9s2b9qmjt=""
                          >
                            <h4
                              className="fg-inverse-1 flex-grow-1"
                              b-c9s2b9qmjt=""
                            >
                              Why
                            </h4>
                            <div
                              className="d-flex flex-row px-7 py-5 align-items-center justify-content-center title-lg rounded-circle"
                              style={{
                                backgroundColor: "#46521e",
                                color: "white",
                              }}
                              b-c9s2b9qmjt=""
                            >
                              1
                            </div>
                          </div>
                          <div
                            style={{ color: "white" }}
                            className="body-lg mt-3"
                            b-c9s2b9qmjt=""
                          >
                            To promote the circular flow of materials to reduce
                            the need for landfill space.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="d-block me-5"
                  style={{ minWidth: 316, maxWidth: 375 }}
                  b-c9s2b9qmjt=""
                >
                  <div
                    className="card zero-waste-card rounded-5 h-100"
                    b-c9s2b9qmjt=""
                  >
                    <div className="card-body" b-c9s2b9qmjt="">
                      <div className="d-flex flex-column" b-c9s2b9qmjt="">
                        <div className="p-6 p-lg-3" b-c9s2b9qmjt="">
                          <div
                            className="d-flex align-items-center"
                            b-c9s2b9qmjt=""
                          >
                            <h4
                              className="fg-inverse-1 flex-grow-1"
                              b-c9s2b9qmjt=""
                            >
                              Benefits
                            </h4>
                            <div
                              className="d-flex flex-row px-7 py-5 align-items-center justify-content-center title-lg rounded-circle"
                              style={{
                                backgroundColor: "#46521e",
                                color: "white",
                              }}
                              b-c9s2b9qmjt=""
                            >
                              2
                            </div>
                          </div>
                          <div
                            style={{ color: "white" }}
                            className="body-lg mt-3"
                            b-c9s2b9qmjt=""
                          >
                            Establishing circular economy benefits in reducing
                            climate impact, conserving resources and minimizing
                            pollution.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="d-block me-5"
                  style={{ minWidth: 316, maxWidth: 375 }}
                  b-c9s2b9qmjt=""
                >
                  <div
                    className="card zero-waste-card rounded-5 h-100"
                    b-c9s2b9qmjt=""
                  >
                    <div className="card-body" b-c9s2b9qmjt="">
                      <div className="d-flex flex-column" b-c9s2b9qmjt="">
                        <div className="p-6 p-lg-3" b-c9s2b9qmjt="">
                          <div
                            className="d-flex align-items-center"
                            b-c9s2b9qmjt=""
                          >
                            <h4
                              className="fg-inverse-1 flex-grow-1"
                              b-c9s2b9qmjt=""
                            >
                              Our Solution
                            </h4>
                            <div
                              className="d-flex flex-row px-7 py-5 align-items-center justify-content-center title-lg rounded-circle"
                              style={{
                                backgroundColor: "#46521e",
                                color: "white",
                              }}
                              b-c9s2b9qmjt=""
                            >
                              3
                            </div>
                          </div>
                          <div
                            style={{ color: "white" }}
                            className="body-lg mt-3"
                            b-c9s2b9qmjt=""
                          >
                            Our services help you prevent wasteful practices by
                            reducing, reusing, and recycling waste to become a
                            zero waste society.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-controls" />
            </div>
          </div>
        </div>
        <div className="container pb-10 pb-lg-14 pt-lg-14" b-c9s2b9qmjt="">
          <div className="row align-items-center" b-c9s2b9qmjt="">
            <div
              className="col-lg-6 col-12 d-flex flex-column justify-content-center order-2 order-lg-1"
              b-c9s2b9qmjt=""
            >
              <h2 className="pt-5 pt-lg-0" b-c9s2b9qmjt="">
                What we do with your
                <span className="fg-success-2" b-c9s2b9qmjt="">
                  Waste
                </span>
              </h2>
              <div className="body-lg pt-lg-7 pe-lg-6" b-c9s2b9qmjt="">
                After you sell your dry recyclable waste to us, they are
                collected in The Kabadiwala's facility to be segregated, baled
                and then transported to the authorized recyclers to take new
                forms so as to enter back into the economy to achieve
                circularity.
              </div>
            </div>
            <div className="col-lg-6 col-12 order-lg-2" b-c9s2b9qmjt="">
              <a href="https://youtu.be/A24YmdTL35E" target="_blank">
                <div className="card card-media-bg">
                  <div className="media">
                    <img
                      src="images/individual/what-we-do-with-your-waste-img.png"
                      className="mw-100"
                      alt="what-we-do-with-your-waste-img"
                      b-c9s2b9qmjt=""
                    />
                  </div>
                  <div className="card-body position-absolute top-50 start-50 translate-n50">
                    <svg
                      width={62}
                      height={62}
                      viewBox="0 0 62 62"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      b-c9s2b9qmjt=""
                    >
                      <circle
                        cx={31}
                        cy={31}
                        r={31}
                        fill="#44B31F"
                        b-c9s2b9qmjt=""
                      />
                      <path
                        d="M41.5 30.134C42.1667 30.5189 42.1667 31.4811 41.5 31.866L26.5 40.5263C25.8333 40.9112 25 40.4301 25 39.6603L25 22.3397C25 21.5699 25.8333 21.0888 26.5 21.4737L41.5 30.134Z"
                        fill="white"
                        b-c9s2b9qmjt=""
                      />
                    </svg>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-lg-14" b-c9s2b9qmjt="">
          <div className="container-fluid px-0 d-flex flex-column h-100 justify-content-around py-10 py-lg-0">
            <h3 className="text-center pb-1">Our Initiatives</h3>
            <h6 className="text-center body-lg mb-lg-10 fg-default-2">
              Small steps towards
              <span className="fg-success-2"> sustainability. </span>
            </h6>
            <div className="carousel">
              <div
                className="carousel-container"
                style={{ transform: "translateX(-0px)" }}
              >
                <div className="d-block mx-5" style={{ maxWidth: "20rem" }}>
                  <div className="card card-media-top rounded-5">
                    <div className="media">
                      <img
                        src="images/landing/our-initiative/tetra-pak-initiative.webp"
                        alt="tetra-pak-initiative"
                        style={{ minWidth: "20rem", maxWidth: "20rem" }}
                      />
                    </div>
                    <div className="card-body">
                      <div
                        className="d-flex flex-column"
                        style={{ height: "15rem" }}
                      >
                        <span className="title-lg fg-default-1 pb-3">
                          Tetra Pak Initiative
                        </span>
                        <div className="fg-default-2 pb-5 body-md flex-fill overflow-hidden">
                          The Kabadiwala collaborated with TetraPak India
                          (World’s Leading Beverage Carton Manufacturer) to
                          increase the collection of used beverage cartons
                          (UBC’s) for recycling and diverting them from
                          landfills.
                        </div>
                        <div className="pt-4">
                          <a
                            href="initiatives/tetra-pak-campaign.html"
                            className="title-sm fg-success-2"
                          >
                            Learn more
                            <span className="px-4">
                              <svg
                                width={9}
                                height={17}
                                viewBox="0 0 9 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M1 1.99463L8 8.99463L1 15.9946"
                                  stroke="#44B31F"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-block mx-5" style={{ maxWidth: "20rem" }}>
                  <div className="card card-media-top rounded-5">
                    <div className="media">
                      <img
                        // src="images/landing/our-initiative/mattress-circular-economy.webp"
                        src=" /images/landing/our-initiative/mattress-circular-economy.webp"
                        alt="mattress-circular-economy"
                        style={{ minWidth: "20rem", maxWidth: "20rem" }}
                      />
                    </div>
                    <div className="card-body">
                      <div
                        className="d-flex flex-column"
                        style={{ height: "15rem" }}
                      >
                        <span className="title-lg fg-default-1 pb-3">
                          Mattress Circular Journey
                        </span>
                        <div className="fg-default-2 pb-5 body-md flex-fill overflow-hidden">
                          ISPF, IPUA and The Kabadiwala came together to
                          initiate India’s first mattress recycling campaign
                          which is named as ‘Feko Nahi Recycle Karo’. The
                          objective is to encourage the community to practise
                          sustainable disposal of Mattress.
                        </div>
                        <div className="pt-4">
                          <a
                            href="initiatives/mattress-circular-journey-initiative.html"
                            className="title-sm fg-success-2"
                          >
                            Learn more
                            <span className="px-4">
                              <svg
                                width={9}
                                height={17}
                                viewBox="0 0 9 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M1 1.99463L8 8.99463L1 15.9946"
                                  stroke="#44B31F"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-block mx-5" style={{ maxWidth: "20rem" }}>
                  <div className="card card-media-top rounded-5">
                    <div className="media">
                      <img
                        // src="images/landing/our-initiative/tree-plantation-initiative.webp"
                        src=" /images/landing/our-initiative/tree-plantation-initiative.webp"
                        alt="tree-plantation-initiative"
                        style={{ minWidth: "20rem", maxWidth: "20rem" }}
                      />
                    </div>
                    <div className="card-body">
                      <div
                        className="d-flex flex-column"
                        style={{ height: "15rem" }}
                      >
                        <span className="title-lg fg-default-1 pb-3">
                          Tree Plantation Initiative
                        </span>
                        <div className="fg-default-2 pb-5 body-md flex-fill overflow-hidden">
                          Since the last two years, The Kabadiwala has been
                          following a tradition of planting trees on the
                          occasion of Mahatma Gandhi's Birthday. In which, our
                          customers also take part in our mission to turn Bhopal
                          greener.
                        </div>
                        <div className="pt-4">
                          <a
                            href="initiatives/tree-plantation-initiative.html"
                            className="title-sm fg-success-2"
                          >
                            Learn more
                            <span className="px-4">
                              <svg
                                width={9}
                                height={17}
                                viewBox="0 0 9 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M1 1.99463L8 8.99463L1 15.9946"
                                  stroke="#44B31F"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-block mx-5" style={{ maxWidth: "20rem" }}>
                  <div className="card card-media-top rounded-5">
                    <div className="media">
                      <img
                        // src="images/landing/our-initiative/kitab-ghar.webp"
                        src=" /images/landing/our-initiative/kitab-ghar.webp"
                        alt="kitab-ghar"
                        style={{ minWidth: "20rem", maxWidth: "20rem" }}
                      />
                    </div>
                    <div className="card-body">
                      <div
                        className="d-flex flex-column"
                        style={{ height: "15rem" }}
                      >
                        <span className="title-lg fg-default-1 pb-3">
                          Kitab Ghar
                        </span>
                        <div className="fg-default-2 pb-5 body-md flex-fill overflow-hidden">
                          Kitab Ghar initiative is a combined effort of The
                          Kabadiwala &amp; Bhopal Municipal Corporation that
                          aims at providing second hand books to the
                          underprivileged children by acquiring them from the
                          people who no longer need them.
                        </div>
                        <div className="pt-4">
                          <a
                            href="initiatives/kitab-ghar-initiative.html"
                            className="title-sm fg-success-2"
                          >
                            Learn more
                            <span className="px-4">
                              <svg
                                width={9}
                                height={17}
                                viewBox="0 0 9 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M1 1.99463L8 8.99463L1 15.9946"
                                  stroke="#44B31F"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-block mx-5" style={{ maxWidth: "20rem" }}>
                  <div className="card card-media-top rounded-5">
                    <div className="media">
                      <img
                        src="images/landing/our-initiative/plastic-wall-experiment.webp"
                        alt="plastic-wall-experiment"
                        style={{ minWidth: "20rem", maxWidth: "20rem" }}
                      />
                    </div>
                    <div className="card-body">
                      <div
                        className="d-flex flex-column"
                        style={{ height: "15rem" }}
                      >
                        <span className="title-lg fg-default-1 pb-3">
                          Plastic Wall Experiment
                        </span>
                        <div className="fg-default-2 pb-5 body-md flex-fill overflow-hidden">
                          On International Plastic Bag Free day, The Kabadiwala
                          placed a wall made up of polythene bags, wrappers, and
                          plastic packing material, in a busy market area to
                          block people’s way. Click below to learn why we did
                          this.
                        </div>
                        <div className="pt-4">
                          <a
                            href="initiatives/plastic-wall-experiment.html"
                            className="title-sm fg-success-2"
                          >
                            Learn more
                            <span className="px-4">
                              <svg
                                width={9}
                                height={17}
                                viewBox="0 0 9 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M1 1.99463L8 8.99463L1 15.9946"
                                  stroke="#44B31F"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-controls" />
            </div>
          </div>
        </div>
        <div
          className="container-fluid pt-lg-14 pb-lg-14 pt-12 pb-12"
          b-c9s2b9qmjt=""
        >

          <h2 className="text-center" b-c9s2b9qmjt="">
            Reviews
          </h2>
          <div
            className="body-lg mt-lg-6 mt-3 pb-lg-12 pb-9 text-center"
            b-c9s2b9qmjt=""
          >
            Check out our customer's scrap selling experiences!
          </div>
          <div className="carousel">


            <Testimonials items={Reviewss}/>


            {/* <div
              className="carousel-container"
              style={{ transform: "translateX(-0px)" }}
            >
              <div
                className="d-inline-block mx-5"
                style={{ minWidth: 394, minHeight: 412 }}
                b-c9s2b9qmjt=""
              >
                <div className="card card-media-top pt-6 px-7">
                  <div className="card-body">
                    <div
                      className="d-flex flex-column"
                      style={{ height: "22rem" }}
                      b-c9s2b9qmjt=""
                    >
                      <svg
                        width={30}
                        height={23}
                        viewBox="0 0 30 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        b-c9s2b9qmjt=""
                      >
                        <path
                          d="M13.312 15.708C13.312 12.096 10.96 9.912 7.936 9.912C7.012 9.912 6.256 10.08 5.584 10.332C5.584 7.39199 8.104 5.124 11.716 4.452V0.419995C4.996 1.26 0.292 6.72 0.292 13.776C0.292 18.816 3.148 22.008 7.096 22.008C10.792 22.008 13.312 19.404 13.312 15.708ZM29.944 15.708C29.944 12.096 27.508 9.912 24.484 9.912C23.56 9.912 22.804 10.08 22.132 10.416C22.132 7.39199 24.736 5.124 28.348 4.452V0.419995C21.628 1.26 16.924 6.72 16.924 13.776C16.924 18.816 19.78 22.008 23.728 22.008C27.424 22.008 29.944 19.404 29.944 15.708Z"
                          fill="currentcolor"
                          b-c9s2b9qmjt=""
                        />
                      </svg>
                      <div className="body-lg mt-8 flex-grow-1" b-c9s2b9qmjt="">
                        The service is amazing. The experience is like an e
                        commerce platform and the best part is that you get paid
                        for selling your stuff. The app is very smooth. Highly
                        recommended.
                      </div>
                      <h6 className="mb-5" b-c9s2b9qmjt="">
                        Atharva Kulkarni
                      </h6>
                      <svg
                        width={144}
                        height={24}
                        viewBox="0 0 144 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        b-c9s2b9qmjt=""
                      >
                        <path
                          d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z"
                          fill="#E4B81D"
                          b-c9s2b9qmjt=""
                        />
                        <path
                          d="M42 0L44.6942 8.2918H53.4127L46.3593 13.4164L49.0534 21.7082L42 16.5836L34.9466 21.7082L37.6407 13.4164L30.5873 8.2918H39.3058L42 0Z"
                          fill="#E4B81D"
                          b-c9s2b9qmjt=""
                        />
                        <path
                          d="M72 0L74.6942 8.2918H83.4127L76.3593 13.4164L79.0534 21.7082L72 16.5836L64.9466 21.7082L67.6407 13.4164L60.5873 8.2918H69.3058L72 0Z"
                          fill="#E4B81D"
                          b-c9s2b9qmjt=""
                        />
                        <path
                          d="M102 0L104.694 8.2918H113.413L106.359 13.4164L109.053 21.7082L102 16.5836L94.9466 21.7082L97.6407 13.4164L90.5873 8.2918H99.3058L102 0Z"
                          fill="#E4B81D"
                          b-c9s2b9qmjt=""
                        />
                        <path
                          d="M132 0L134.694 8.2918H143.413L136.359 13.4164L139.053 21.7082L132 16.5836L124.947 21.7082L127.641 13.4164L120.587 8.2918H129.306L132 0Z"
                          fill="#E4B81D"
                          b-c9s2b9qmjt=""
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="d-inline-block mx-5"
                style={{ minWidth: 394, minHeight: 412 }}
                b-c9s2b9qmjt=""
              >
                <div className="card card-media-top pt-6 px-7">
                  <div className="card-body">
                    <div
                      className="d-flex flex-column"
                      style={{ height: "22rem" }}
                      b-c9s2b9qmjt=""
                    >
                      <svg
                        width={30}
                        height={23}
                        viewBox="0 0 30 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        b-c9s2b9qmjt=""
                      >
                        <path
                          d="M13.312 15.708C13.312 12.096 10.96 9.912 7.936 9.912C7.012 9.912 6.256 10.08 5.584 10.332C5.584 7.39199 8.104 5.124 11.716 4.452V0.419995C4.996 1.26 0.292 6.72 0.292 13.776C0.292 18.816 3.148 22.008 7.096 22.008C10.792 22.008 13.312 19.404 13.312 15.708ZM29.944 15.708C29.944 12.096 27.508 9.912 24.484 9.912C23.56 9.912 22.804 10.08 22.132 10.416C22.132 7.39199 24.736 5.124 28.348 4.452V0.419995C21.628 1.26 16.924 6.72 16.924 13.776C16.924 18.816 19.78 22.008 23.728 22.008C27.424 22.008 29.944 19.404 29.944 15.708Z"
                          fill="currentcolor"
                          b-c9s2b9qmjt=""
                        />
                      </svg>
                      <div className="body-lg mt-8 flex-grow-1" b-c9s2b9qmjt="">
                        Very well organised and systematic process, impressive
                        work. I got instant payment for my waste material.
                        behaviour of pickup boys was very humble.
                      </div>
                      <h6 className="mb-5" b-c9s2b9qmjt="">
                        Arpit Gupta
                      </h6>
                      <svg
                        width={144}
                        height={24}
                        viewBox="0 0 144 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        b-c9s2b9qmjt=""
                      >
                        <path
                          d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z"
                          fill="#E4B81D"
                          b-c9s2b9qmjt=""
                        />
                        <path
                          d="M42 0L44.6942 8.2918H53.4127L46.3593 13.4164L49.0534 21.7082L42 16.5836L34.9466 21.7082L37.6407 13.4164L30.5873 8.2918H39.3058L42 0Z"
                          fill="#E4B81D"
                          b-c9s2b9qmjt=""
                        />
                        <path
                          d="M72 0L74.6942 8.2918H83.4127L76.3593 13.4164L79.0534 21.7082L72 16.5836L64.9466 21.7082L67.6407 13.4164L60.5873 8.2918H69.3058L72 0Z"
                          fill="#E4B81D"
                          b-c9s2b9qmjt=""
                        />
                        <path
                          d="M102 0L104.694 8.2918H113.413L106.359 13.4164L109.053 21.7082L102 16.5836L94.9466 21.7082L97.6407 13.4164L90.5873 8.2918H99.3058L102 0Z"
                          fill="#E4B81D"
                          b-c9s2b9qmjt=""
                        />
                        <path
                          d="M132 0L134.694 8.2918H143.413L136.359 13.4164L139.053 21.7082L132 16.5836L124.947 21.7082L127.641 13.4164L120.587 8.2918H129.306L132 0Z"
                          fill="#E4B81D"
                          b-c9s2b9qmjt=""
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="d-inline-block mx-5"
                style={{ minWidth: 394, minHeight: 412 }}
                b-c9s2b9qmjt=""
              >
                <div className="card card-media-top pt-6 px-7">
                  <div className="card-body">
                    <div
                      className="d-flex flex-column"
                      style={{ height: "22rem" }}
                      b-c9s2b9qmjt=""
                    >
                      <svg
                        width={30}
                        height={23}
                        viewBox="0 0 30 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        b-c9s2b9qmjt=""
                      >
                        <path
                          d="M13.312 15.708C13.312 12.096 10.96 9.912 7.936 9.912C7.012 9.912 6.256 10.08 5.584 10.332C5.584 7.39199 8.104 5.124 11.716 4.452V0.419995C4.996 1.26 0.292 6.72 0.292 13.776C0.292 18.816 3.148 22.008 7.096 22.008C10.792 22.008 13.312 19.404 13.312 15.708ZM29.944 15.708C29.944 12.096 27.508 9.912 24.484 9.912C23.56 9.912 22.804 10.08 22.132 10.416C22.132 7.39199 24.736 5.124 28.348 4.452V0.419995C21.628 1.26 16.924 6.72 16.924 13.776C16.924 18.816 19.78 22.008 23.728 22.008C27.424 22.008 29.944 19.404 29.944 15.708Z"
                          fill="currentcolor"
                          b-c9s2b9qmjt=""
                        />
                      </svg>
                      <div className="body-lg mt-8 flex-grow-1" b-c9s2b9qmjt="">
                        Superb, Fast &amp; Fantastic service. Sold kabad within
                        24 hours of booking an appointment. Good work guys keep
                        it up 👌
                      </div>
                      <h6 className="mb-5" b-c9s2b9qmjt="">
                        Sunny Singh
                      </h6>
                      <svg
                        width={144}
                        height={24}
                        viewBox="0 0 144 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        b-c9s2b9qmjt=""
                      >
                        <path
                          d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z"
                          fill="#E4B81D"
                          b-c9s2b9qmjt=""
                        />
                        <path
                          d="M42 0L44.6942 8.2918H53.4127L46.3593 13.4164L49.0534 21.7082L42 16.5836L34.9466 21.7082L37.6407 13.4164L30.5873 8.2918H39.3058L42 0Z"
                          fill="#E4B81D"
                          b-c9s2b9qmjt=""
                        />
                        <path
                          d="M72 0L74.6942 8.2918H83.4127L76.3593 13.4164L79.0534 21.7082L72 16.5836L64.9466 21.7082L67.6407 13.4164L60.5873 8.2918H69.3058L72 0Z"
                          fill="#E4B81D"
                          b-c9s2b9qmjt=""
                        />
                        <path
                          d="M102 0L104.694 8.2918H113.413L106.359 13.4164L109.053 21.7082L102 16.5836L94.9466 21.7082L97.6407 13.4164L90.5873 8.2918H99.3058L102 0Z"
                          fill="#E4B81D"
                          b-c9s2b9qmjt=""
                        />
                        <path
                          d="M132 0L134.694 8.2918H143.413L136.359 13.4164L139.053 21.7082L132 16.5836L124.947 21.7082L127.641 13.4164L120.587 8.2918H129.306L132 0Z"
                          fill="#E4B81D"
                          b-c9s2b9qmjt=""
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="d-inline-block mx-5"
                style={{ minWidth: 394, minHeight: 412 }}
                b-c9s2b9qmjt=""
              >
                <div className="card card-media-top pt-6 px-7">
                  <div className="card-body">
                    <div
                      className="d-flex flex-column"
                      style={{ height: "22rem" }}
                      b-c9s2b9qmjt=""
                    >
                      <svg
                        width={30}
                        height={23}
                        viewBox="0 0 30 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        b-c9s2b9qmjt=""
                      >
                        <path
                          d="M13.312 15.708C13.312 12.096 10.96 9.912 7.936 9.912C7.012 9.912 6.256 10.08 5.584 10.332C5.584 7.39199 8.104 5.124 11.716 4.452V0.419995C4.996 1.26 0.292 6.72 0.292 13.776C0.292 18.816 3.148 22.008 7.096 22.008C10.792 22.008 13.312 19.404 13.312 15.708ZM29.944 15.708C29.944 12.096 27.508 9.912 24.484 9.912C23.56 9.912 22.804 10.08 22.132 10.416C22.132 7.39199 24.736 5.124 28.348 4.452V0.419995C21.628 1.26 16.924 6.72 16.924 13.776C16.924 18.816 19.78 22.008 23.728 22.008C27.424 22.008 29.944 19.404 29.944 15.708Z"
                          fill="currentcolor"
                          b-c9s2b9qmjt=""
                        />
                      </svg>
                      <div className="body-lg mt-8 flex-grow-1" b-c9s2b9qmjt="">
                        Awesome platform. I gave 25 kg kabad and they gave me
                        Rs. 250. Digital weighing machine and transparent
                        charges... Loved it 😍😍😍
                      </div>
                      <h6 className="mb-5" b-c9s2b9qmjt="">
                        Apratim Chatterjee
                      </h6>
                      <svg
                        width={144}
                        height={24}
                        viewBox="0 0 144 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        b-c9s2b9qmjt=""
                      >
                        <path
                          d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z"
                          fill="#E4B81D"
                          b-c9s2b9qmjt=""
                        />
                        <path
                          d="M42 0L44.6942 8.2918H53.4127L46.3593 13.4164L49.0534 21.7082L42 16.5836L34.9466 21.7082L37.6407 13.4164L30.5873 8.2918H39.3058L42 0Z"
                          fill="#E4B81D"
                          b-c9s2b9qmjt=""
                        />
                        <path
                          d="M72 0L74.6942 8.2918H83.4127L76.3593 13.4164L79.0534 21.7082L72 16.5836L64.9466 21.7082L67.6407 13.4164L60.5873 8.2918H69.3058L72 0Z"
                          fill="#E4B81D"
                          b-c9s2b9qmjt=""
                        />
                        <path
                          d="M102 0L104.694 8.2918H113.413L106.359 13.4164L109.053 21.7082L102 16.5836L94.9466 21.7082L97.6407 13.4164L90.5873 8.2918H99.3058L102 0Z"
                          fill="#E4B81D"
                          b-c9s2b9qmjt=""
                        />
                        <path
                          d="M132 0L134.694 8.2918H143.413L136.359 13.4164L139.053 21.7082L132 16.5836L124.947 21.7082L127.641 13.4164L120.587 8.2918H129.306L132 0Z"
                          fill="#E4B81D"
                          b-c9s2b9qmjt=""
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="d-inline-block mx-5"
                style={{ minWidth: 394, minHeight: 412 }}
                b-c9s2b9qmjt=""
              >
                <div className="card card-media-top pt-6 px-7">
                  <div className="card-body">
                    <div
                      className="d-flex flex-column"
                      style={{ height: "22rem" }}
                      b-c9s2b9qmjt=""
                    >
                      <svg
                        width={30}
                        height={23}
                        viewBox="0 0 30 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        b-c9s2b9qmjt=""
                      >
                        <path
                          d="M13.312 15.708C13.312 12.096 10.96 9.912 7.936 9.912C7.012 9.912 6.256 10.08 5.584 10.332C5.584 7.39199 8.104 5.124 11.716 4.452V0.419995C4.996 1.26 0.292 6.72 0.292 13.776C0.292 18.816 3.148 22.008 7.096 22.008C10.792 22.008 13.312 19.404 13.312 15.708ZM29.944 15.708C29.944 12.096 27.508 9.912 24.484 9.912C23.56 9.912 22.804 10.08 22.132 10.416C22.132 7.39199 24.736 5.124 28.348 4.452V0.419995C21.628 1.26 16.924 6.72 16.924 13.776C16.924 18.816 19.78 22.008 23.728 22.008C27.424 22.008 29.944 19.404 29.944 15.708Z"
                          fill="currentcolor"
                          b-c9s2b9qmjt=""
                        />
                      </svg>
                      <div className="body-lg mt-8 flex-grow-1" b-c9s2b9qmjt="">
                        Very Good App. Its so easy to sell Scrap now with this
                        app. I did a appointment and the pick up guy came the
                        same day as scheduled. The Pick up people were polite
                        and professional towards us. And in just a few time my
                        useless scrap turned into Countable money!
                      </div>
                      <h6 className="mb-5" b-c9s2b9qmjt="">
                        Khan
                      </h6>
                      <svg
                        width={144}
                        height={24}
                        viewBox="0 0 144 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        b-c9s2b9qmjt=""
                      >
                        <path
                          d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z"
                          fill="#E4B81D"
                          b-c9s2b9qmjt=""
                        />
                        <path
                          d="M42 0L44.6942 8.2918H53.4127L46.3593 13.4164L49.0534 21.7082L42 16.5836L34.9466 21.7082L37.6407 13.4164L30.5873 8.2918H39.3058L42 0Z"
                          fill="#E4B81D"
                          b-c9s2b9qmjt=""
                        />
                        <path
                          d="M72 0L74.6942 8.2918H83.4127L76.3593 13.4164L79.0534 21.7082L72 16.5836L64.9466 21.7082L67.6407 13.4164L60.5873 8.2918H69.3058L72 0Z"
                          fill="#E4B81D"
                          b-c9s2b9qmjt=""
                        />
                        <path
                          d="M102 0L104.694 8.2918H113.413L106.359 13.4164L109.053 21.7082L102 16.5836L94.9466 21.7082L97.6407 13.4164L90.5873 8.2918H99.3058L102 0Z"
                          fill="#E4B81D"
                          b-c9s2b9qmjt=""
                        />
                        <path
                          d="M132 0L134.694 8.2918H143.413L136.359 13.4164L139.053 21.7082L132 16.5836L124.947 21.7082L127.641 13.4164L120.587 8.2918H129.306L132 0Z"
                          fill="#E4B81D"
                          b-c9s2b9qmjt=""
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            <div className="carousel-controls" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ScrapCollectionss;
