import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";

const ScrabRate = () => {
  return (
    <>
      <style>
        {`
      @media (width < 990px) {
        .header-main {
          display: none;
        }
      }

      .active{
        background-color : green;
        color:#fff;
      }
      `}
      </style>
      <div className="home">
        <div className="fullwidth">
          <MobileHeader />
          <div className="header-main">
            <Header />
          </div>

          <main className="content" b-sflvd4qzb0="">
    
              <h3 className="d-flex justify-content-center fg-default-1">
                Scrap Prices
              </h3>
         
           
            <div className="container pt-4 pb-lg-5">
              <div className="togtabs row">
                <button type="button" className="active col p-2 m-4 d-block">
                  <div className="d-flex align-items-center">
                    <span className="rounded-circle p-4">
                      {" "}
                      <svg
                        width="35"
                        height="35"
                        viewBox="0 0 35 35"
                        fill="currentcolor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M17.5 35C27.165 35 35 27.165 35 17.5C35 7.83502 27.165 0 17.5 0C7.83502 0 0 7.83502 0 17.5C0 27.165 7.83502 35 17.5 35ZM10 11.9686C10 11.4337 10.4337 11 10.9686 11H25.0135C25.5485 11 25.9821 11.4337 25.9821 11.9686V12.6314C25.9821 13.1663 25.5485 13.6 25.0135 13.6H10.9686C10.4337 13.6 10 13.1663 10 12.6314V11.9686ZM10 16.8114C10 16.2764 10.4337 15.8428 10.9686 15.8428H25.0135C25.5485 15.8428 25.9821 16.2764 25.9821 16.8114V17.4742C25.9821 18.0091 25.5485 18.4428 25.0135 18.4428H10.9686C10.4337 18.4428 10 18.0091 10 17.4742V16.8114ZM10 21.6551C10 21.1202 10.4337 20.6865 10.9686 20.6865H25.0135C25.5485 20.6865 25.9821 21.1202 25.9821 21.6551V22.3179C25.9821 22.8529 25.5485 23.2865 25.0135 23.2865H10.9686C10.4337 23.2865 10 22.8529 10 22.3179V21.6551Z"
                        ></path>
                      </svg>
                    </span>
                    <div>All</div>
                  </div>
                </button>
                <button type="button" className=" col p-2 m-4 d-block">
                  <div className="d-flex align-items-center">
                    <span className="rounded-circle p-4">
                      {" "}
                      <svg
                        width="35"
                        height="35"
                        viewBox="0 0 35 35"
                        fill="currentcolor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12.125 12.375H25.875V22.6875C25.875 22.8698 25.8026 23.0447 25.6736 23.1736C25.5447 23.3026 25.3698 23.375 25.1875 23.375H12.0047C12.0842 23.1545 12.1249 22.9219 12.125 22.6875V12.375ZM15.0764 16.0139C14.9474 16.1428 14.875 16.3177 14.875 16.5C14.875 16.6823 14.9474 16.8572 15.0764 16.9861C15.2053 17.1151 15.3802 17.1875 15.5625 17.1875H22.4375C22.6198 17.1875 22.7947 17.1151 22.9236 16.9861C23.0526 16.8572 23.125 16.6823 23.125 16.5C23.125 16.3177 23.0526 16.1428 22.9236 16.0139C22.7947 15.8849 22.6198 15.8125 22.4375 15.8125H15.5625C15.3802 15.8125 15.2053 15.8849 15.0764 16.0139ZM22.4375 19.9375H15.5625C15.3802 19.9375 15.2053 19.8651 15.0764 19.7361C14.9474 19.6072 14.875 19.4323 14.875 19.25C14.875 19.0677 14.9474 18.8928 15.0764 18.7639C15.2053 18.6349 15.3802 18.5625 15.5625 18.5625H22.4375C22.6198 18.5625 22.7947 18.6349 22.9236 18.7639C23.0526 18.8928 23.125 19.0677 23.125 19.25C23.125 19.4323 23.0526 19.6072 22.9236 19.7361C22.7947 19.8651 22.6198 19.9375 22.4375 19.9375Z"
                        ></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M17.5 35C27.165 35 35 27.165 35 17.5C35 7.83502 27.165 0 17.5 0C7.83502 0 0 7.83502 0 17.5C0 27.165 7.83502 35 17.5 35ZM27.25 22.6875V12.375C27.25 12.0103 27.1051 11.6606 26.8473 11.4027C26.5894 11.1449 26.2397 11 25.875 11H12.125C11.7603 11 11.4106 11.1449 11.1527 11.4027C10.8949 11.6606 10.75 12.0103 10.75 12.375V22.6875C10.75 22.8698 10.6776 23.0447 10.5486 23.1736C10.4197 23.3026 10.2448 23.375 10.0625 23.375C9.88016 23.375 9.7053 23.3026 9.57636 23.1736C9.44743 23.0447 9.375 22.8698 9.375 22.6875V14.4375C9.375 14.2552 9.30257 14.0803 9.17364 13.9514C9.0447 13.8224 8.86984 13.75 8.6875 13.75C8.50516 13.75 8.3303 13.8224 8.20136 13.9514C8.07243 14.0803 8 14.2552 8 14.4375V22.6961C8.00227 23.2416 8.22057 23.764 8.60712 24.1489C8.99367 24.5339 9.51698 24.75 10.0625 24.75H25.1875C25.7338 24.7477 26.2571 24.5297 26.6434 24.1434C27.0297 23.7571 27.2477 23.2338 27.25 22.6875Z"
                        ></path>
                      </svg>
                    </span>
                    <div>Paper</div>
                  </div>
                </button>
                <button type="button" className=" col p-2 m-4 d-block">
                  <div className="d-flex align-items-center">
                    <span className="rounded-circle p-4">
                      {" "}
                      <svg
                        width="35"
                        height="35"
                        viewBox="0 0 35 35"
                        fill="currentcolor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M21 15.0461L20.0127 14H14.9873L14 15.0461V25H21V15.0461Z"></path>
                        <path d="M19 10V11H16V10H19Z"></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M17.5 35C27.165 35 35 27.165 35 17.5C35 7.83502 27.165 0 17.5 0C7.83502 0 0 7.83502 0 17.5C0 27.165 7.83502 35 17.5 35ZM14 12.1323V8H21V12.1323L23 14.2512V27H12V14.2512L14 12.1323Z"
                        ></path>
                      </svg>
                    </span>
                    <div>Plastic</div>
                  </div>
                </button>
                <button type="button" className=" col p-2 m-4 d-block">
                  <div className="d-flex align-items-center">
                    <span className="rounded-circle p-4">
                      {" "}
                      <svg
                        width="35"
                        height="35"
                        viewBox="0 0 35 35"
                        fill="currentcolor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22.4854 16.8272L21.1931 17.074L22.2142 15.9536L22.4854 16.8272Z"
                          fill="white"
                        ></path>
                        <path d="M17.0453 10.9102L20.5023 13.649L19.276 13.8992L16.0568 11.1414L17.0453 10.9102Z"></path>
                        <path d="M18.0159 16.661L18.21 15.4001L14.3924 12.1296L13.9785 12.9798L18.0159 16.661Z"></path>
                        <path d="M10.4427 18.496L14.0072 21.8672L13.6787 23.2151L9.99572 19.607L10.4427 18.496Z"></path>
                        <path d="M18.3963 23.297L15.4036 23.8803L15.8422 22.0806L17.9069 21.7813L18.3963 23.297Z"></path>
                        <path d="M23.9038 20.8593L23.7311 22.2601L25.7429 21.8678L25.3606 20.5358L23.9038 20.8593Z"></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M17.5 35C27.165 35 35 27.165 35 17.5C35 7.83502 27.165 0 17.5 0C7.83502 0 0 7.83502 0 17.5C0 27.165 7.83502 35 17.5 35ZM17.2675 9C17.1902 9 17.1145 9.0097 17.0419 9.02814L13.9019 9.76267C13.7094 9.80212 13.5282 9.90346 13.3905 10.0642C13.3264 10.139 13.2765 10.2211 13.2405 10.3073L12.03 12.7939C11.8521 13.1595 11.9362 13.5986 12.2366 13.8725L18.0247 19.15C18.0944 19.2173 18.1755 19.2743 18.2665 19.3178C18.4237 19.393 18.5942 19.4199 18.7592 19.4022C18.7842 19.3996 18.8092 19.3959 18.8342 19.3911L23.8369 18.4355C24.0933 18.3865 24.3166 18.2306 24.4509 18.0068C24.5852 17.783 24.6177 17.5126 24.5404 17.2634L23.4908 13.8818C23.4361 13.7054 23.3293 13.5497 23.1846 13.435L17.855 9.21262C17.6952 9.07939 17.4896 9 17.2675 9ZM13.489 16.1145C13.6038 16.6075 13.2972 17.1003 12.8041 17.2152L11.9635 17.4109L15.0619 20.3413L18.2786 19.875C18.754 19.7341 19.2576 19.9978 19.4108 20.4723L20.4586 23.7173C20.5391 23.9669 20.509 24.2389 20.3757 24.4648C20.2425 24.6906 20.019 24.8486 19.7616 24.8987L14.4092 25.9419C14.1132 25.9996 13.8078 25.908 13.5923 25.697L8.27521 20.488C8.01036 20.2286 7.92789 19.8351 8.06625 19.4911L9.23357 16.5892C9.27516 16.4756 9.34004 16.3685 9.42842 16.275C9.56108 16.1347 9.72754 16.0456 9.90311 16.0083L12.3883 15.4296C12.8814 15.3148 13.3742 15.6214 13.489 16.1145ZM25.8051 18.5591C26.2781 18.454 26.7512 18.7353 26.8849 19.2011L27.7809 22.3232C27.8518 22.5702 27.8158 22.8356 27.6816 23.0547C27.5475 23.2739 27.3275 23.4266 27.0753 23.4758L22.8421 24.3013C22.5539 24.3575 22.2563 24.2722 22.0415 24.072C21.8268 23.8717 21.721 23.5808 21.7569 23.2894L22.1619 20.0058C22.2037 19.619 22.4876 19.2958 22.8745 19.2099L25.8051 18.5591Z"
                        ></path>
                      </svg>
                    </span>
                    <div>Metal</div>
                  </div>
                </button>
                <button type="button" className=" col p-2 m-4 d-block">
                  <div className="d-flex align-items-center">
                    <span className="rounded-circle p-4">
                      <svg
                        width="35"
                        height="35"
                        viewBox="0 0 35 35"
                        fill="currentcolor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M22.7308 13.6658C22.6473 13.2681 22.3838 12.9539 22.0131 12.81C21.8645 12.7523 21.484 12.7465 17.8573 12.7469L13.8649 12.7473L13.6734 12.8374C13.4269 12.9535 13.2302 13.1486 13.1038 13.4023L13.0031 13.6042L13.0039 21.8434L13.0942 22.0349C13.2093 22.279 13.4294 22.499 13.6734 22.6141L13.8649 22.7045L17.8512 22.7048C21.3916 22.7052 21.8574 22.6984 22.0158 22.6444C22.2465 22.5658 22.55 22.28 22.663 22.0349L22.7512 21.8434L22.7631 17.8599C22.7718 14.9536 22.763 13.8195 22.7308 13.6658ZM14.9949 20.905V14.8148H20.8169V20.905H14.9949Z"
                        ></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M17.5 35C27.165 35 35 27.165 35 17.5C35 7.83502 27.165 0 17.5 0C7.83502 0 0 7.83502 0 17.5C0 27.165 7.83502 35 17.5 35ZM13.8134 9.39499C13.897 9.24338 14.0265 9.12556 14.1908 9.05156C14.4683 8.92658 14.8237 9.03467 15.0483 9.31225L15.1672 9.45937L15.1788 10.3144C15.1872 10.934 15.2031 11.1742 15.2363 11.1869C15.2615 11.1966 15.7044 11.2024 16.2206 11.1999L17.159 11.1952L17.1796 10.3717C17.2032 9.43103 17.2362 9.31206 17.5268 9.11974C17.7915 8.94451 18.1943 8.97948 18.4362 9.19868C18.6369 9.38055 18.6515 9.45206 18.672 10.3526L18.6911 11.1952L19.3806 11.2077C19.7598 11.2145 20.195 11.2087 20.3477 11.1948L20.6254 11.1695V10.3669C20.6254 9.64587 20.633 9.54939 20.7003 9.41743C20.9573 8.91375 21.585 8.8607 21.9446 9.31225L22.0618 9.45934L22.1001 11.1952L22.706 11.2026C23.4385 11.2115 23.6032 11.2554 23.8751 11.5137C24.2216 11.8429 24.2431 11.9173 24.2574 12.8327L24.2697 13.6275L25.2149 13.6277C26.2863 13.6279 26.4044 13.6474 26.6038 13.8564C26.947 14.2162 26.8653 14.7868 26.4378 15.0152C26.2824 15.0982 26.2296 15.1026 25.2696 15.114L24.2642 15.1259V17.0747H26.3172L26.4799 17.18C26.9554 17.488 26.9167 18.1878 26.4101 18.444C26.2465 18.5268 26.2003 18.5302 25.2519 18.5302H24.2642V20.522L25.2505 20.5228C26.3488 20.5237 26.4431 20.5415 26.6491 20.7864C26.9403 21.1325 26.833 21.699 26.4362 21.9101C26.283 21.9916 26.2258 21.9964 25.2792 22.0067L24.2833 22.0176L24.2642 22.7157C24.2454 23.4016 24.243 23.4174 24.1314 23.6189C23.8584 24.1119 23.5809 24.2375 22.7033 24.2656L22.0809 24.2856V25.2203C22.0809 26.2489 22.064 26.3455 21.8499 26.5365C21.4861 26.8614 20.928 26.7456 20.6983 26.2976C20.6325 26.1693 20.6254 26.0642 20.6254 25.2156V24.2756H18.6767L18.6528 26.2227L18.5374 26.3887C18.2173 26.8489 17.5435 26.8198 17.2842 26.3344C17.2017 26.1799 17.1966 26.1232 17.1848 25.2236L17.1722 24.2756H15.1864V25.2153C15.1864 26.2531 15.1755 26.3137 14.9516 26.5208C14.5759 26.8682 13.9972 26.7477 13.7863 26.2782C13.7428 26.1816 13.7309 25.953 13.7309 25.2197V24.2843L13.0702 24.2663C12.3379 24.2463 12.2398 24.2234 11.9431 24.0032C11.7926 23.8916 11.7142 23.7939 11.6175 23.5977C11.4904 23.3397 11.4901 23.3381 11.4775 22.6809L11.4648 22.0225L10.5008 22.0082C9.42312 21.9922 9.3636 21.9793 9.163 21.7186C8.86539 21.3319 8.98942 20.7897 9.42025 20.594C9.55687 20.5319 9.68618 20.5235 10.523 20.5228L11.471 20.522V18.5349L10.4847 18.523C9.52382 18.5114 9.49467 18.5087 9.35233 18.4202C8.89044 18.1331 8.88244 17.4716 9.33724 17.1767L9.49459 17.0747H11.471V15.126L10.5039 15.1141C9.55377 15.1023 9.5337 15.1004 9.36551 15.0062C8.81874 14.7001 8.91174 13.8334 9.50919 13.6674C9.58859 13.6454 10.0527 13.6278 10.5579 13.6277L11.4642 13.6275L11.4795 12.8518C11.4968 11.9704 11.53 11.8448 11.8229 11.552C12.1157 11.2591 12.301 11.2063 13.0546 11.2004L13.7117 11.1952L13.7309 10.3526C13.7465 9.66598 13.7618 9.4886 13.8134 9.39499Z"
                        ></path>
                      </svg>
                    </span>
                    <div>E-Waste</div>
                  </div>
                </button>
                
                <button type="button" className=" col p-2 m-4 d-block">
                  <div className="d-flex align-items-center">
                    <span className="rounded-circle p-4">
                      <svg
                        width="35"
                        height="35"
                        viewBox="0 0 35 35"
                        fill="currentcolor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M17.5 35C27.165 35 35 27.165 35 17.5C35 7.83502 27.165 0 17.5 0C7.83502 0 0 7.83502 0 17.5C0 27.165 7.83502 35 17.5 35ZM15.7053 18.7435C16.5821 13.1877 17.6039 10.6692 19.9713 8.23C21.3843 6.77383 21.8298 6.54631 20.6284 7.89413C19.1254 9.58057 18.0727 12.2406 17.6964 15.303C17.4124 17.6138 17.8039 19.5918 18.9081 21.4249C19.7143 22.7635 19.9029 23.4734 19.6642 24.2704C18.7389 27.3584 14.4403 27.0295 14.1767 23.8507C14.1106 23.0528 14.1728 22.8228 14.7858 21.6026C15.3002 20.5785 15.5269 19.8737 15.7053 18.7435ZM8 21.0706C8 20.9074 8.04851 20.7255 8.10786 20.6663C8.22073 20.5533 14.63 20.5108 14.63 20.6232C14.63 20.6586 14.3845 21.0525 14.0845 21.4983C12.3525 24.0719 14.1117 27.1747 17.2037 27C20.0549 26.839 21.4732 23.7861 19.8041 21.4027C19.5376 21.0221 19.3194 20.6751 19.3194 20.6312C19.3194 20.5876 20.8294 20.5716 22.6748 20.5957C26.0163 20.6392 26.0304 20.6408 26.082 21.0032L26.1336 21.367H20.7913L21.0453 21.9734C21.4046 22.8313 21.3731 24.3819 20.9787 25.2598C20.5812 26.1443 19.6112 27.1338 18.7535 27.5296C17.8744 27.9354 16.0758 27.9341 15.1796 27.527C13.1448 26.6029 12.0541 23.9474 12.8986 21.9734L13.1581 21.367H10.5791C8.18596 21.367 8 21.3457 8 21.0706Z"
                        ></path>
                      </svg>
                    </span>
                    <div>Others</div>
                  </div>
                </button>
              </div>
            </div>

            <div className="mb-lg-13">
              <div className="container pt-4">
                <div className="row">
                  <div className="col-sm-3 col-lg-3">
                    <div className="d-none d-lg-block w-100 mt-6">
                      <img
                        src="/images/scrap-prices/scrap-paper.webp"
                        alt="scrap-paper"
                      />
                    </div>
                    <h4 className="pt-7">Paper</h4>
                    <img
                      src="/images/scrap-prices/scrap-paper.webp"
                      alt="scrap-paper"
                      className="w-100 d-lg-none rounded-2 pb-4"
                      style={{ objectFit: "cover", height: "100px" }}
                    />
                    <div className="body-md">
                      Paper is manufactured in thin sheets from the pulp of wood
                      or other fibrous substances. Paper scrap includes
                      newspaper, books cartons, magazines, Beverage carton etc.
                    </div>
                  </div>
                  <div className="col-sm-9 col-lg-9">
                    <div className="row">
                      <div className="col-lg-3 col-6 mb-4 pb-4 px-4">
                        <div className="container-bg-2 h-100 rounded-4 mt-6 d-flex flex-column">
                          <div className="title-lg pt-6 flex-fill px-lg-6 px-3">
                            Newspaper
                          </div>
                          <div className="px-3 px-lg-6 pb-6">
                            <span
                              className="pe-2 title-lg"
                              style={{ color: "#44B31F" }}
                            >
                              ₹13
                            </span>
                            <span className="fg-default-2 title-sm">/Kg</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-6 mb-4 pb-4 px-4">
                        <div className="container-bg-2 h-100 rounded-4 mt-6 d-flex flex-column">
                          <div className="title-lg pt-6 flex-fill px-lg-6 px-3">
                            Books
                          </div>
                          <div className="px-3 px-lg-6 pb-6">
                            <span
                              className="pe-2 title-lg"
                              style={{ color: "#44B31F" }}
                            >
                              ₹11
                            </span>
                            <span className="fg-default-2 title-sm">/Kg</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-6 mb-4 pb-4 px-4">
                        <div className="container-bg-2 h-100 rounded-4 mt-6 d-flex flex-column">
                          <div className="title-lg pt-6 flex-fill px-lg-6 px-3">
                            Carton
                          </div>
                          <div className="px-3 px-lg-6 pb-6">
                            <span
                              className="pe-2 title-lg"
                              style={{ color: "#44B31F" }}
                            >
                              ₹11
                            </span>
                            <span className="fg-default-2 title-sm">/Kg</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-6 mb-4 pb-4 px-4">
                        <div className="container-bg-2 h-100 rounded-4 mt-6 d-flex flex-column">
                          <div className="title-lg pt-6 flex-fill px-lg-6 px-3">
                            Magazines
                          </div>
                          <div className="px-3 px-lg-6 pb-6">
                            <span
                              className="pe-2 title-lg"
                              style={{ color: "#44B31F" }}
                            >
                              ₹8
                            </span>
                            <span className="fg-default-2 title-sm">/Kg</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-6 mb-4 pb-4 px-4">
                        <div className="container-bg-2 h-100 rounded-4 mt-6 d-flex flex-column">
                          <div className="title-lg pt-6 flex-fill px-lg-6 px-3">
                            Grey Board
                          </div>
                          <div className="px-3 px-lg-6 pb-6">
                            <span
                              className="pe-2 title-lg"
                              style={{ color: "#44B31F" }}
                            >
                              ₹2
                            </span>
                            <span className="fg-default-2 title-sm">/Kg</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-6 mb-4 pb-4 px-4">
                        <div className="container-bg-2 h-100 rounded-4 mt-6 d-flex flex-column">
                          <div className="title-lg pt-6 flex-fill px-lg-6 px-3">
                            Copy
                          </div>
                          <div className="px-3 px-lg-6 pb-6">
                            <span
                              className="pe-2 title-lg"
                              style={{ color: "#44B31F" }}
                            >
                              ₹10
                            </span>
                            <span className="fg-default-2 title-sm">/Kg</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-6 mb-4 pb-4 px-4">
                        <div className="container-bg-2 h-100 rounded-4 mt-6 d-flex flex-column">
                          <div className="title-lg pt-6 flex-fill px-lg-6 px-3">
                            Used Beverage Carton (Tetra Pak)
                          </div>
                          <div className="px-3 px-lg-6 pb-6">
                            <span
                              className="pe-2 title-lg"
                              style={{ color: "#44B31F" }}
                            >
                              ₹5
                            </span>
                            <span className="fg-default-2 title-sm">/Kg</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-lg-5 my-8 my-lg-0 mb-lg-8">
                  <span className="body-md">
                    Note: For Bulk scrap (Commercial) prices may vary.
                  </span>{" "}
                  <a href="/contact-us" className="title-md fg-success-2">
                    {" "}
                    Contact us to know more <i className="icon-arrow-right"></i>
                  </a>
                </div>
                <div className="pt-8 border-top container-border-3"></div>
              </div>
              <div className="container pt-4">
                <div className="row">
                  <div className="col-sm-3 col-lg-3 p-6">
                    <div className="w-100 d-none d-lg-block">
                      <img
                        src="/images/scrap-prices/scrap-plastic.webp"
                        alt="scrap-plastic"
                      />
                    </div>
                    <h4 className="pt-lg-7">Plastic</h4>
                    <img
                      src="/images/scrap-prices/scrap-plastic.webp"
                      alt="scrap-plastic"
                      className="w-100 d-lg-none rounded-2 pb-4"
                      style={{ objectFit: "cover", height: "100px" }}
                    />
                    <div className="body-md">
                      Plastics are a wide range of synthetic or semi-synthetic
                      materials that use polymers as a main ingredient. HDPE,
                      LDPE, MLP, PVC, PP, PET etc. are types of plastics used
                      for different purposes.
                    </div>
                  </div>
                  <div className="col-sm-9 col-lg-9">
                    <div className="row">
                      <div className="col-lg-3 col-6 mb-4 pb-4 px-4">
                        <div className="container-bg-2 h-100 rounded-4 mt-6 d-flex flex-column">
                          <div className="title-lg pt-6 flex-fill px-lg-6 px-3">
                            Soft Plastic
                          </div>
                          <div className="px-3 px-lg-6 pb-6">
                            <span
                              className="pe-2 title-lg"
                              style={{ color: "#44B31F" }}
                            >
                              {" "}
                              ₹12
                            </span>
                            <span className="fg-default-2 title-sm">/Kg</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-6 mb-4 pb-4 px-4">
                        <div className="container-bg-2 h-100 rounded-4 mt-6 d-flex flex-column">
                          <div className="title-lg pt-6 flex-fill px-lg-6 px-3">
                            Hard Plastic
                          </div>
                          <div className="px-3 px-lg-6 pb-6">
                            <span
                              className="pe-2 title-lg"
                              style={{ color: "#44B31F" }}
                            >
                              {" "}
                              ₹3
                            </span>
                            <span className="fg-default-2 title-sm">/Kg</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-6 mb-4 pb-4 px-4">
                        <div className="container-bg-2 h-100 rounded-4 mt-6 d-flex flex-column">
                          <div className="title-lg pt-6 flex-fill px-lg-6 px-3">
                            Mix Plastic
                          </div>
                          <div className="px-3 px-lg-6 pb-6">
                            <span
                              className="pe-2 title-lg"
                              style={{ color: "#44B31F" }}
                            >
                              {" "}
                              ₹6
                            </span>
                            <span className="fg-default-2 title-sm">/Kg</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-6 mb-4 pb-4 px-4">
                        <div className="container-bg-2 h-100 rounded-4 mt-6 d-flex flex-column">
                          <div className="title-lg pt-6 flex-fill px-lg-6 px-3">
                            Water/Oil Covers
                          </div>
                          <div className="px-3 px-lg-6 pb-6">
                            <span
                              className="pe-2 title-lg"
                              style={{ color: "#44B31F" }}
                            >
                              {" "}
                              ₹3
                            </span>
                            <span className="fg-default-2 title-sm">/Kg</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-6 mb-4 pb-4 px-4">
                        <div className="container-bg-2 h-100 rounded-4 mt-6 d-flex flex-column">
                          <div className="title-lg pt-6 flex-fill px-lg-6 px-3">
                            Polythene (Mix)
                          </div>
                          <div className="px-3 px-lg-6 pb-6">
                            <span
                              className="pe-2 title-lg"
                              style={{ color: "#44B31F" }}
                            >
                              {" "}
                              ₹8
                            </span>
                            <span className="fg-default-2 title-sm">/Kg</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-6 mb-4 pb-4 px-4">
                        <div className="container-bg-2 h-100 rounded-4 mt-6 d-flex flex-column">
                          <div className="title-lg pt-6 flex-fill px-lg-6 px-3">
                            Plastic Jar (15ltr)
                          </div>
                          <div className="px-3 px-lg-6 pb-6">
                            <span
                              className="pe-2 title-lg"
                              style={{ color: "#44B31F" }}
                            >
                              {" "}
                              ₹10
                            </span>
                            <span className="fg-default-2 title-sm">/Piece</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-6 mb-4 pb-4 px-4">
                        <div className="container-bg-2 h-100 rounded-4 mt-6 d-flex flex-column">
                          <div className="title-lg pt-6 flex-fill px-lg-6 px-3">
                            Plastic Jar (5ltr)
                          </div>
                          <div className="px-3 px-lg-6 pb-6">
                            <span
                              className="pe-2 title-lg"
                              style={{ color: "#44B31F" }}
                            >
                              {" "}
                              ₹2
                            </span>
                            <span className="fg-default-2 title-sm">/Piece</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-6 mb-4 pb-4 px-4">
                        <div className="container-bg-2 h-100 rounded-4 mt-6 d-flex flex-column">
                          <div className="title-lg pt-6 flex-fill px-lg-6 px-3">
                            Plastic Bori
                          </div>
                          <div className="px-3 px-lg-6 pb-6">
                            <span
                              className="pe-2 title-lg"
                              style={{ color: "#44B31F" }}
                            >
                              {" "}
                              ₹4
                            </span>
                            <span className="fg-default-2 title-sm">/Kg</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-6 mb-4 pb-4 px-4">
                        <div className="container-bg-2 h-100 rounded-4 mt-6 d-flex flex-column">
                          <div className="title-lg pt-6 flex-fill px-lg-6 px-3">
                            Fugga
                          </div>
                          <div className="px-3 px-lg-6 pb-6">
                            <span
                              className="pe-2 title-lg"
                              style={{ color: "#44B31F" }}
                            >
                              {" "}
                              ₹18
                            </span>
                            <span className="fg-default-2 title-sm">/Kg</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-6 mb-4 pb-4 px-4">
                        <div className="container-bg-2 h-100 rounded-4 mt-6 d-flex flex-column">
                          <div className="title-lg pt-6 flex-fill px-lg-6 px-3">
                            Polythene (LD){" "}
                          </div>
                          <div className="px-3 px-lg-6 pb-6">
                            <span
                              className="pe-2 title-lg"
                              style={{ color: "#44B31F" }}
                            >
                              {" "}
                              ₹15
                            </span>
                            <span className="fg-default-2 title-sm">/Kg</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-6 mb-4 pb-4 px-4">
                        <div className="container-bg-2 h-100 rounded-4 mt-6 d-flex flex-column">
                          <div className="title-lg pt-6 flex-fill px-lg-6 px-3">
                            Polythene (PP)
                          </div>
                          <div className="px-3 px-lg-6 pb-6">
                            <span
                              className="pe-2 title-lg"
                              style={{ color: "#44B31F" }}
                            >
                              {" "}
                              ₹8
                            </span>
                            <span className="fg-default-2 title-sm">/Kg</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-6 mb-4 pb-4 px-4">
                        <div className="container-bg-2 h-100 rounded-4 mt-6 d-flex flex-column">
                          <div className="title-lg pt-6 flex-fill px-lg-6 px-3">
                            Polythene (HM)
                          </div>
                          <div className="px-3 px-lg-6 pb-6">
                            <span
                              className="pe-2 title-lg"
                              style={{ color: "#44B31F" }}
                            >
                              {" "}
                              ₹6
                            </span>
                            <span className="fg-default-2 title-sm">/Kg</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-lg-5 my-8 my-lg-0 mb-lg-8">
                  <span className="body-md">
                    Note: For Bulk scrap (Commercial) prices may vary.
                  </span>{" "}
                  <a href="/contact-us" className="title-md fg-success-2">
                    {" "}
                    Contact us to know more <i className="icon-arrow-right"></i>
                  </a>
                </div>
                <div className="pt-8 border-top container-border-3"></div>
              </div>
              <div className="container pt-4">
                <div className="row">
                  {" "}
                  <div className="col-sm-3 col-lg-3 p-6">
                    <div className="w-100 d-none d-lg-block">
                      <img
                        src="/images/scrap-prices/scrap-metal.webp"
                        alt="scrap-metal"
                      />
                    </div>
                    <h4 className="pt-lg-7">Metal</h4>
                    <img
                      src="/images/scrap-prices/scrap-metal.webp"
                      alt="scrap-metal"
                      className="w-100 d-lg-none rounded-2 pb-4"
                      style={{ objectFit: "cover", height: "100px" }}
                    />
                    <div className="body-md">
                      Scrap metal are an important source of industrial metals
                      and alloys, particularly in the production of steel,
                      copper, lead, aluminum, and zinc. Smaller amounts of tin,
                      nickel, magnesium, and precious metals are also recovered
                      from scrap.
                    </div>
                  </div>
                  <div className="col-sm-9 col-lg-9">
                    <div className="row">
                      <div className="col-lg-3 col-6 mb-4 pb-4 px-4">
                        <div className="container-bg-2 h-100 rounded-4 mt-6 d-flex flex-column">
                          <div className="title-lg pt-6 flex-fill px-lg-6 px-3">
                            Iron
                          </div>
                          <div className="px-3 px-lg-6 pb-6">
                            <span
                              className="pe-2 title-lg"
                              style={{ color: "#44B31F" }}
                            >
                              {" "}
                              ₹25
                            </span>
                            <span className="fg-default-2 title-sm">/Kg</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-6 mb-4 pb-4 px-4">
                        <div className="container-bg-2 h-100 rounded-4 mt-6 d-flex flex-column">
                          <div className="title-lg pt-6 flex-fill px-lg-6 px-3">
                            Tin
                          </div>
                          <div className="px-3 px-lg-6 pb-6">
                            <span
                              className="pe-2 title-lg"
                              style={{ color: "#44B31F" }}
                            >
                              {" "}
                              ₹20
                            </span>
                            <span className="fg-default-2 title-sm">/Kg</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-6 mb-4 pb-4 px-4">
                        <div className="container-bg-2 h-100 rounded-4 mt-6 d-flex flex-column">
                          <div className="title-lg pt-6 flex-fill px-lg-6 px-3">
                            Steel
                          </div>
                          <div className="px-3 px-lg-6 pb-6">
                            <span
                              className="pe-2 title-lg"
                              style={{ color: "#44B31F" }}
                            >
                              {" "}
                              ₹47
                            </span>
                            <span className="fg-default-2 title-sm">/Kg</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-6 mb-4 pb-4 px-4">
                        <div className="container-bg-2 h-100 rounded-4 mt-6 d-flex flex-column">
                          <div className="title-lg pt-6 flex-fill px-lg-6 px-3">
                            Brass
                          </div>
                          <div className="px-3 px-lg-6 pb-6">
                            <span
                              className="pe-2 title-lg"
                              style={{ color: "#44B31F" }}
                            >
                              {" "}
                              ₹320
                            </span>
                            <span className="fg-default-2 title-sm">/Kg</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-6 mb-4 pb-4 px-4">
                        <div className="container-bg-2 h-100 rounded-4 mt-6 d-flex flex-column">
                          <div className="title-lg pt-6 flex-fill px-lg-6 px-3">
                            Copper
                          </div>
                          <div className="px-3 px-lg-6 pb-6">
                            <span
                              className="pe-2 title-lg"
                              style={{ color: "#44B31F" }}
                            >
                              {" "}
                              ₹420
                            </span>
                            <span className="fg-default-2 title-sm">/Kg</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-6 mb-4 pb-4 px-4">
                        <div className="container-bg-2 h-100 rounded-4 mt-6 d-flex flex-column">
                          <div className="title-lg pt-6 flex-fill px-lg-6 px-3">
                            Aluminium
                          </div>
                          <div className="px-3 px-lg-6 pb-6">
                            <span
                              className="pe-2 title-lg"
                              style={{ color: "#44B31F" }}
                            >
                              {" "}
                              ₹100
                            </span>
                            <span className="fg-default-2 title-sm">/Kg</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-6 mb-4 pb-4 px-4">
                        <div className="container-bg-2 h-100 rounded-4 mt-6 d-flex flex-column">
                          <div className="title-lg pt-6 flex-fill px-lg-6 px-3">
                            Casting Aluminium
                          </div>
                          <div className="px-3 px-lg-6 pb-6">
                            <span
                              className="pe-2 title-lg"
                              style={{ color: "#44B31F" }}
                            >
                              {" "}
                              ₹90
                            </span>
                            <span className="fg-default-2 title-sm">/Kg</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-6 mb-4 pb-4 px-4">
                        <div className="container-bg-2 h-100 rounded-4 mt-6 d-flex flex-column">
                          <div className="title-lg pt-6 flex-fill px-lg-6 px-3">
                            SS 204
                          </div>
                          <div className="px-3 px-lg-6 pb-6">
                            <span
                              className="pe-2 title-lg"
                              style={{ color: "#44B31F" }}
                            >
                              {" "}
                              ₹45
                            </span>
                            <span className="fg-default-2 title-sm">/Kg</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-6 mb-4 pb-4 px-4">
                        <div className="container-bg-2 h-100 rounded-4 mt-6 d-flex flex-column">
                          <div className="title-lg pt-6 flex-fill px-lg-6 px-3">
                            Aluminum Cable{" "}
                          </div>
                          <div className="px-3 px-lg-6 pb-6">
                            <span
                              className="pe-2 title-lg"
                              style={{ color: "#44B31F" }}
                            >
                              {" "}
                              ₹25
                            </span>
                            <span className="fg-default-2 title-sm">/Kg</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-6 mb-4 pb-4 px-4">
                        <div className="container-bg-2 h-100 rounded-4 mt-6 d-flex flex-column">
                          <div className="title-lg pt-6 flex-fill px-lg-6 px-3">
                            Copper Cable
                          </div>
                          <div className="px-3 px-lg-6 pb-6">
                            <span
                              className="pe-2 title-lg"
                              style={{ color: "#44B31F" }}
                            >
                              {" "}
                              ₹60
                            </span>
                            <span className="fg-default-2 title-sm">/Kg</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-6 mb-4 pb-4 px-4">
                        <div className="container-bg-2 h-100 rounded-4 mt-6 d-flex flex-column">
                          <div className="title-lg pt-6 flex-fill px-lg-6 px-3">
                            oil filter
                          </div>
                          <div className="px-3 px-lg-6 pb-6">
                            <span
                              className="pe-2 title-lg"
                              style={{ color: "#44B31F" }}
                            >
                              {" "}
                              ₹10
                            </span>
                            <span className="fg-default-2 title-sm">/Kg</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-6 mb-4 pb-4 px-4">
                        <div className="container-bg-2 h-100 rounded-4 mt-6 d-flex flex-column">
                          <div className="title-lg pt-6 flex-fill px-lg-6 px-3">
                            Beverage Cans (Aluminum)
                          </div>
                          <div className="px-3 px-lg-6 pb-6">
                            <span
                              className="pe-2 title-lg"
                              style={{ color: "#44B31F" }}
                            >
                              {" "}
                              ₹80
                            </span>
                            <span className="fg-default-2 title-sm">/Kg</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-lg-5 my-8 my-lg-0 mb-lg-8">
                  <span className="body-md">
                    Note: For Bulk scrap (Commercial) prices may vary.
                  </span>{" "}
                  <a href="/contact-us" className="title-md fg-success-2">
                    {" "}
                    Contact us to know more <i className="icon-arrow-right"></i>
                  </a>
                </div>
                <div className="pt-8 border-top container-border-3"></div>
              </div>
              <div className="container pt-4">
                <div className="row">
                  {" "}
                  <div className="col-sm-3 col-lg-3 p-6">
                    <div className="mw-100 d-none d-lg-block">
                      <img
                        src="/images/scrap-prices/scrap-e-waste.webp"
                        alt="scrap-e-waste"
                      />
                    </div>
                    <h4 className="pt-lg-7">E-Waste</h4>
                    <img
                      src="/images/scrap-prices/scrap-e-waste.webp"
                      alt="scrap-e-waste"
                      className="w-100 d-lg-none rounded-2 pb-4"
                      style={{ objectFit: "cover", height: "100px" }}
                    />
                    <div className="body-md">
                      E-waste is electronic products that are unwanted, not
                      working, and nearing or at the end of their “useful life.”
                      It includes TV, refrigerator, mobile phones, printers etc.
                    </div>
                  </div>
                  <div className="col-sm-9 col-lg-9">
                    <div className="row">
                      <div className="col-lg-3 col-6 mb-4 pb-4 px-4">
                        <div className="container-bg-2 h-100 rounded-4 mt-6 d-flex flex-column">
                          <div className="title-lg pt-6 flex-fill px-lg-6 px-3">
                            E-waste
                          </div>
                          <div className="px-3 px-lg-6 pb-6">
                            <span
                              className="pe-2 title-lg"
                              style={{ color: "#44B31F" }}
                            >
                              {" "}
                              ₹12
                            </span>
                            <span className="fg-default-2 title-sm">/Kg</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-6 mb-4 pb-4 px-4">
                        <div className="container-bg-2 h-100 rounded-4 mt-6 d-flex flex-column">
                          <div className="title-lg pt-6 flex-fill px-lg-6 px-3">
                            Washing Machine
                          </div>
                          <div className="px-3 px-lg-6 pb-6">
                            <span
                              className="pe-2 title-lg"
                              style={{ color: "#44B31F" }}
                            >
                              {" "}
                              ₹200
                            </span>
                            <span className="fg-default-2 title-sm">/Piece</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-6 mb-4 pb-4 px-4">
                        <div className="container-bg-2 h-100 rounded-4 mt-6 d-flex flex-column">
                          <div className="title-lg pt-6 flex-fill px-lg-6 px-3">
                            Fridge
                          </div>
                          <div className="px-3 px-lg-6 pb-6">
                            <span
                              className="pe-2 title-lg"
                              style={{ color: "#44B31F" }}
                            >
                              {" "}
                              ₹300
                            </span>
                            <span className="fg-default-2 title-sm">/Piece</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-6 mb-4 pb-4 px-4">
                        <div className="container-bg-2 h-100 rounded-4 mt-6 d-flex flex-column">
                          <div className="title-lg pt-6 flex-fill px-lg-6 px-3">
                            Laptop
                          </div>
                          <div className="px-3 px-lg-6 pb-6">
                            <span
                              className="pe-2 title-lg"
                              style={{ color: "#44B31F" }}
                            >
                              {" "}
                              ₹100
                            </span>
                            <span className="fg-default-2 title-sm">/Piece</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-6 mb-4 pb-4 px-4">
                        <div className="container-bg-2 h-100 rounded-4 mt-6 d-flex flex-column">
                          <div className="title-lg pt-6 flex-fill px-lg-6 px-3">
                            Air Conditioner
                          </div>
                          <div className="px-3 px-lg-6 pb-6">
                            <span
                              className="pe-2 title-lg"
                              style={{ color: "#44B31F" }}
                            >
                              {" "}
                              ₹800
                            </span>
                            <span className="fg-default-2 title-sm">/Piece</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-6 mb-4 pb-4 px-4">
                        <div className="container-bg-2 h-100 rounded-4 mt-6 d-flex flex-column">
                          <div className="title-lg pt-6 flex-fill px-lg-6 px-3">
                            Printer
                          </div>
                          <div className="px-3 px-lg-6 pb-6">
                            <span
                              className="pe-2 title-lg"
                              style={{ color: "#44B31F" }}
                            >
                              {" "}
                              ₹15
                            </span>
                            <span className="fg-default-2 title-sm">/Kg</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-6 mb-4 pb-4 px-4">
                        <div className="container-bg-2 h-100 rounded-4 mt-6 d-flex flex-column">
                          <div className="title-lg pt-6 flex-fill px-lg-6 px-3">
                            Laptop Battery
                          </div>
                          <div className="px-3 px-lg-6 pb-6">
                            <span
                              className="pe-2 title-lg"
                              style={{ color: "#44B31F" }}
                            >
                              {" "}
                              ₹75
                            </span>
                            <span className="fg-default-2 title-sm">/Kg</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-6 mb-4 pb-4 px-4">
                        <div className="container-bg-2 h-100 rounded-4 mt-6 d-flex flex-column">
                          <div className="title-lg pt-6 flex-fill px-lg-6 px-3">
                            Mobile Battery
                          </div>
                          <div className="px-3 px-lg-6 pb-6">
                            <span
                              className="pe-2 title-lg"
                              style={{ color: "#44B31F" }}
                            >
                              {" "}
                              ₹20
                            </span>
                            <span className="fg-default-2 title-sm">/Kg</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-lg-5 my-8 my-lg-0 mb-lg-8">
                  <span className="body-md">
                    Note: For Bulk scrap (Commercial) prices may vary.
                  </span>{" "}
                  <a href="/contact-us" className="title-md fg-success-2">
                    {" "}
                    Contact us to know more <i className="icon-arrow-right"></i>
                  </a>
                </div>
                <div className="pt-8 border-top container-border-3"></div>
              </div>
              <div className="container pt-4">
                <div className="row">
                  {" "}
                  <div className="col-sm-3 col-lg-3 p-6">
                    <div className="mw-100 d-none d-lg-block">
                      <img
                        src="/images/scrap-prices/scrap-others.webp"
                        alt="scrap-others"
                      />
                    </div>
                    <h4 className="pt-lg-7">Others</h4>
                    <img
                      src="/images/scrap-prices/scrap-others.webp"
                      alt="scrap-others"
                      className="w-100 d-lg-none rounded-2 pb-4"
                      style={{ objectFit: "cover", height: "100px" }}
                    />
                    <div className="body-md">
                      It Includes, beer bottles, women’s hair, mix-waste, tyre,
                      mattresses etc.
                    </div>
                  </div>
                  <div className="col-sm-9 col-lg-9">
                    <div className="row">
                      <div className="col-lg-3 col-6 mb-4 pb-4 px-4">
                        <div className="container-bg-2 h-100 rounded-4 mt-6 d-flex flex-column">
                          <div className="title-lg pt-6 flex-fill px-lg-6 px-3">
                            Beer Bottles
                          </div>
                          <div className="px-3 px-lg-6 pb-6">
                            <span
                              className="pe-2 title-lg"
                              style={{ color: "#44B31F" }}
                            >
                              {" "}
                              ₹0.5
                            </span>
                            <span className="fg-default-2 title-sm">/Piece</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-6 mb-4 pb-4 px-4">
                        <div className="container-bg-2 h-100 rounded-4 mt-6 d-flex flex-column">
                          <div className="title-lg pt-6 flex-fill px-lg-6 px-3">
                            Mix-Waste
                          </div>
                          <div className="px-3 px-lg-6 pb-6">
                            <span
                              className="pe-2 title-lg"
                              style={{ color: "#44B31F" }}
                            >
                              {" "}
                              ₹4
                            </span>
                            <span className="fg-default-2 title-sm">/Kg</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-6 mb-4 pb-4 px-4">
                        <div className="container-bg-2 h-100 rounded-4 mt-6 d-flex flex-column">
                          <div className="title-lg pt-6 flex-fill px-lg-6 px-3">
                            Battery{" "}
                          </div>
                          <div className="px-3 px-lg-6 pb-6">
                            <span
                              className="pe-2 title-lg"
                              style={{ color: "#44B31F" }}
                            >
                              {" "}
                              ₹80
                            </span>
                            <span className="fg-default-2 title-sm">/Kg</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-6 mb-4 pb-4 px-4">
                        <div className="container-bg-2 h-100 rounded-4 mt-6 d-flex flex-column">
                          <div className="title-lg pt-6 flex-fill px-lg-6 px-3">
                            Tyre
                          </div>
                          <div className="px-3 px-lg-6 pb-6">
                            <span
                              className="pe-2 title-lg"
                              style={{ color: "#44B31F" }}
                            >
                              {" "}
                              ₹5
                            </span>
                            <span className="fg-default-2 title-sm">/Kg</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-6 mb-4 pb-4 px-4">
                        <div className="container-bg-2 h-100 rounded-4 mt-6 d-flex flex-column">
                          <div className="title-lg pt-6 flex-fill px-lg-6 px-3">
                            Women hair
                          </div>
                          <div className="px-3 px-lg-6 pb-6">
                            <span
                              className="pe-2 title-lg"
                              style={{ color: "#44B31F" }}
                            >
                              {" "}
                              ₹1000
                            </span>
                            <span className="fg-default-2 title-sm">/Kg</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-6 mb-4 pb-4 px-4">
                        <div className="container-bg-2 h-100 rounded-4 mt-6 d-flex flex-column">
                          <div className="title-lg pt-6 flex-fill px-lg-6 px-3">
                            Old Clothes{" "}
                          </div>
                          <div className="px-3 px-lg-6 pb-6">
                            <span
                              className="pe-2 title-lg"
                              style={{ color: "#44B31F" }}
                            >
                              {" "}
                              ₹0
                            </span>
                            <span className="fg-default-2 title-sm">/Kg</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-6 mb-4 pb-4 px-4">
                        <div className="container-bg-2 h-100 rounded-4 mt-6 d-flex flex-column">
                          <div className="title-lg pt-6 flex-fill px-lg-6 px-3">
                            Old Clothes
                          </div>
                          <div className="px-3 px-lg-6 pb-6">
                            <span
                              className="pe-2 title-lg"
                              style={{ color: "#44B31F" }}
                            >
                              {" "}
                              ₹0
                            </span>
                            <span className="fg-default-2 title-sm">/Kg</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-lg-5 my-8 my-lg-0 mb-lg-8">
                  <span className="body-md">
                    Note: For Bulk scrap (Commercial) prices may vary.
                  </span>{" "}
                  <a href="/contact-us" className="title-md fg-success-2">
                    {" "}
                    Contact us to know more <i className="icon-arrow-right"></i>
                  </a>
                </div>
                <div className="pt-8 border-top container-border-3"></div>
              </div>
            </div>

          </main>
        </div>
      </div>
    </>
  );
};
export default ScrabRate;
