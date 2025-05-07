import React from "react";
import "../../clientStyle/TKWWebsite.Client.styles.css";
import "../../clientStyle/contentStylemain.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
const Testimonials = (props) => {
  const { items } = props;

  return (
    <div>
      <div
        className="container-fluid pt-lg-0 pt-10 pb-lg-14 pb-12"
        b-8gocb8pbav=""
      >
        <div>
          <h2 className="text-center" b-8gocb8pbav="">
            {/* Testimonials */}
          </h2>
          <div
            className="body-lg mt-6 pb-lg-12 pb-10 text-center"
            b-8gocb8pbav=""
          >
            {/* Don’t believe us, hear it our from our clients and partners...  */}
          </div>
        </div>

        {/* <div className="carousel"> */}
        <div
          className="carousel-container"
          style={{ transform: "translateX(-0px)", overflowX: "hidden" }}
        >
          <Swiper
            slidesPerView={1}
            centeredSlides={false}
            slidesPerGroupSkip={3}
            grabCursor={true}
            keyboard={{
              enabled: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                slidesPerGroup: 1,
              },
              768: {
                slidesPerView: 1,
                slidesPerGroup: 1,
              },
              950: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
              // 1024: {
              //   slidesPerView: 2,
              //   slidesPerGroup: 2,
              // },
              1319: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                // spaceBetween:50
              },
            }}
            // scrollbar={true}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[Keyboard, Scrollbar, Navigation, Pagination]}
            className="mySwiper"
          >
            {items.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div
                    className="d-inline-block mx-5"
                    style={{ minWidth: 453, minHeight: 412 }}
                    b-8gocb8pbav=""
                  >
                    <div className="card card-media-top pt-6 px-7">
                      <div className="card-body">
                        <div
                          className="d-flex flex-column"
                          style={{ height: "27rem" }}
                          b-8gocb8pbav=""
                        >
                          <svg
                            width={30}
                            height={23}
                            viewBox="0 0 30 23"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            b-8gocb8pbav=""
                          >
                            <path
                              d="M13.312 15.708C13.312 12.096 10.96 9.912 7.936 9.912C7.012 9.912 6.256 10.08 5.584 10.332C5.584 7.39199 8.104 5.124 11.716 4.452V0.419995C4.996 1.26 0.292 6.72 0.292 13.776C0.292 18.816 3.148 22.008 7.096 22.008C10.792 22.008 13.312 19.404 13.312 15.708ZM29.944 15.708C29.944 12.096 27.508 9.912 24.484 9.912C23.56 9.912 22.804 10.08 22.132 10.416C22.132 7.39199 24.736 5.124 28.348 4.452V0.419995C21.628 1.26 16.924 6.72 16.924 13.776C16.924 18.816 19.78 22.008 23.728 22.008C27.424 22.008 29.944 19.404 29.944 15.708Z"
                              fill="currentcolor"
                              b-8gocb8pbav=""
                            />
                          </svg>
                          <div
                            className="body-lg mt-8 flex-grow-1"
                            b-8gocb8pbav=""
                          >
                            {item.content}
                          </div>
                          <h6 className="mt-5" b-8gocb8pbav="">
                            {item.name}
                          </h6>
                          {item.name === "Atharva Kulkarni" ||
                          "Arpit Gupta" ||
                          "Sunny Singh" ||
                          "Apratim Chatterjee" ? (
                            <div>
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
                          ) : (
                            <div>
                              <div className="body-md mb-5" b-8gocb8pbav="">
                                {item.post}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Testimonials;
