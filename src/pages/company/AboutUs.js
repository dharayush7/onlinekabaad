import React from "react";
import Header from '../../components/Header'
const AboutUs = () => {
  return (
    <>
      <Header/>
      <main className="content pt-13">
        <div className="container">
          <h3 className="m-2 text-center mb-4">About Us</h3>
          <div className="pt-4 body-lg m-2">
            GoEasy is your one-stop destination for all home care needs. Whether
            you require a plumber, electrician, carpenter, or any other
            professional service, we make it easy for you to find trusted
            experts with just a few taps on your mobile device.
          </div>
        </div>
        <div className="container">
          {/* <h4 className="pt-10 m-2 fg-default-2">Founders Message</h4> */}
          <h5 className="pt-4 m-2 fg-success-2">
            {/* “Waste is never a waste, it’s rather an opportunity to something new” */}
            Our Mission
          </h5>
          <div className="pt-6 row">
            <div className="col">
              <div className="body-lg">
                Our mission is to bridge the gap between skilled professionals
                and customers, delivering reliable and timely home care services
                right at your doorstep. We aim to bring convenience, trust, and
                quality to your daily life
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          {/* <h4 className="pt-10 m-2 fg-default-2">Founders Message</h4> */}
          <h5 className="pt-4 m-2 fg-success-2">
            {/* “Waste is never a waste, it’s rather an opportunity to something new” */}
            How It Works
          </h5>
          <div className="pt-6 row">
            <div className="col">
              <div className="body-lg">
                <ul>
                  <li>rowse a wide range of professional services.</li>
                  <li>Select the service you need.</li>
                  Book a professional at a time that suits you.
                  <li></li>
                  <li>Enjoy hassle-free service at your doorstep!</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <h4 className="pt-10 m-2 fg-default-2">What Makes Us Unique</h4>
          <div className="pt-4 m-2 row d-flex justify-content-between">
            <div className="me-lg-7 mt-4 p-8 col-lg-3 col-12 flex-grow-1 rounded-6 container-bg-2">
              <h5 className="pt-6 px-4 fg-success-2">Verified Professionals</h5>
              <div className="px-4 body-lg">
                At GoEasy, every service provider is thoroughly vetted through
                background checks and skill certifications. We ensure only
                reliable, experienced professionals join our platform,
                delivering high-quality services you can trust with confidence
                and peace of mind.
              </div>
            </div>
            <div className="me-lg-7 mt-4 p-8 col-lg-3 col-12 flex-grow-1 rounded-6 container-bg-2">
              <h5 className="pt-4 px-4 fg-success-2">Transparant Pricing</h5>
              <div className="px-4 body-lg">
                We prioritize honesty by providing upfront, clear pricing
                without hidden charges. Our detailed cost estimates ensure
                transparency, balancing affordability for you and fair
                compensation for professionals. With GoEasy, you’ll always know
                what to expect—no surprises.
              </div>
            </div>
            <div className="me-lg-4 mt-4 p-8 col-lg-3 col-12 flex-grow-1 rounded-6 container-bg-2">
              <h5 className="pt-4 px-4 fg-success-2">Real-Time Support</h5>
              <div className="px-4 body-lg">
                Our 24/7 support team is always ready to assist, from booking
                guidance to addressing concerns. Whether for emergencies or
                routine help, we ensure seamless communication and quick
                resolutions, making your experience stress-free and satisfying.
              </div>
            </div>
          </div>
        </div>
        {/* <div className="container">
    <h4 className="pt-10 m-2 fg-default-2">Our Belief</h4>
    <div className="pt-4 m-2 body-lg">
      We believe that India can be a greener and cleaner country, as every
      household commits to getting their dry scrap recycled, not only resources
      can be saved from over-exploitation, but the landfills with mixed harmful
      garbage can be eradicated.
    </div>
    <div className="pt-4 m-2 row position-relative">
      <div className="pt-4 pb-4">
        <img
          src="images/aboutus/about-us-waste-dump.webp"
          className="rounded-6 d-lg-none mw-100 h-auto w-auto"
          alt="About us"
        />
      </div>
      <div className="mt-lg-12 p-lg-8 top-0 end-0 d-none d-lg-block mw-100 position-absolute text-end">
        <img
          src="images/aboutus/about-us-waste-dump.webp"
          className="rounded-6 mw-100 h-auto w-auto"
          alt="About us"
        />
      </div>
      <div className="pt-6 m-lg-2 p-lg-10 col-lg-8 col-12 rounded-6 container-bg-2">
        <h5 className="fg-success-2 p-4 pt-lg-4">Minimizing landfills</h5>
        <div className="container-bg-2">
          <ul>
            <li className="pe-lg-14 me-lg-10 body-lg">
              Landfills are spreading across India at a fast pace making it more
              complex each day to manage the waste management value chain.
            </li>
            <li className="pt-4 pt-lg-8 pe-lg-14 me-lg-10 body-lg">
              But, this can be tackled only when we start waste management from
              our homes in the way of waste segregation. Waste segregation is
              the process of differentiating dry and wet waste and disposing of
              it into two different bins.
            </li>
            <li className="pt-4 pt-lg-8 pe-lg-14 me-lg-10 body-lg">
              We get the dry segregated waste recycled as you sell your scrap to
              us. If we inculcate the habits of “avoiding tossing trash
              anywhere” and “adopting daily waste segregation”, remember we’re
              coming one step ahead in reducing landfills.
            </li>
          </ul>
        </div>
        <h5 className="fg-success-2 pt-8">Maximizing Recycling</h5>
        <div className="container-bg-2">
          <ul>
            <li className="pt-4 pe-lg-14 me-lg-10 body-lg">
              To mark a larger impact, along with serving households, The
              Kabadiwala is a recycling partner to small to big businesses and
              corporates to institutions with the aim to build a conscious
              ecosystem on a societal level.
            </li>
            <li className="pt-4 pt-lg-8 pe-lg-14 me-lg-10 body-lg">
              To accelerate recycling, The Kabadiwala manages Bhopal city’s huge
              garbage dumps at 4 Material Recovery Facilities commonly known as
              MRF centers. Where every day, more than 50 kgs of waste are
              segregated by our waste workers.
            </li>
            <li className="pt-4 pt-lg-8 pe-lg-14 me-lg-10 body-lg">
              The Kabadiwala’s campaigns with big organizations like Tetra Pak
              India and Indian Sleep products Federations (ISPF) based on
              recycling of daily utility products like Used beverage cartons and
              used mattresses respectively helps us maximize recycling
              extensively.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div> */}
        <div className="container">
          <h4 className="pt-10 fg-default-2">GoEasy Brings You</h4>
          <div className="pt-4 m-2 row">
            <div className="col-sm-4">
              <div className="pt-8 pb-6">
                <img
                  src="images/aboutus/1.svg"
                  className="mw-100 h-auto w-auto"
                  alt="About us"
                />
              </div>
              <h6 className="pb-2 pt-7 fg-success-2">Convenience</h6>
              <div className="body-lg">
                With GoEasy, booking home services has never been easier. Our
                user-friendly app allows you to find, book, and manage services
                with just a few taps, saving you time and eliminating hassle.
              </div>
            </div>
            <div className="col-sm-4">
              <div className="pt-8 pb-6">
                <img
                  src="images/aboutus/2.svg"
                  className="mw-100 h-auto w-auto"
                  alt="About us"
                />
              </div>
              <h6 className="pb-2 pt-7 fg-success-2">Reliability</h6>
              <div className="body-lg">
                Trust is at the core of GoEasy. We connect you with verified
                professionals who are skilled, punctual, and dedicated to
                delivering top-notch service every time you need them.
              </div>
            </div>
            <div className="col-sm-4">
              <div className="pt-8 pb-6">
                <img
                  src="images/aboutus/3.svg"
                  className="mw-100 h-auto w-auto"
                  alt="About us"
                />
              </div>
              <h6 className="pt-7 pb-2 fg-success-2">Affordability</h6>
              <div className="pb-10 body-lg">
                Enjoy high-quality services at competitive prices. With
                transparent pricing and no hidden fees, GoEasy ensures you get
                excellent value for your money without compromising on quality.
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div
            className="row m-2  rounded-6"
            style={{ backgroundColor: "#01a1ff" }}
          >
            <div className="p-9 col flex-grow-1">
              <h4 className="fg-inverse-1">Our Commitment</h4>
              <div className="p-4 pt-2 fg-inverse-1 body-lg">
                At GoEasy, we are committed to delivering unparalleled
                convenience, trust, and quality. Our platform is designed to
                bridge the gap between users and skilled professionals, ensuring
                quick, reliable, and stress-free solutions for all your home
                service needs. By combining technology with a customer-centric
                approach, we strive to enhance your everyday life, one service
                at a time.
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AboutUs;
