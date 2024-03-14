import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Countdown from "react-countdown";
import StyleSwitcher from "../../components/StyleSwitcher";
import {
  bg01,
  MetaMask_Fox,
  aave,
  Airswap,
  Compound,
  DDEX,
  defiSaver,
  dYdX,
  IDEX,
  Kyber,
  Maker,
  NUO,
  PoolTogether,
  Sablier,
  set,
  Uniswap,
  Zerion,
  logoDark,
  client06,
  client05,
  client08,
  item10,
  item9,
  item8,
  item7,
  gif6,
  item6,
  gif5,
  item5,
  gif4,
  item4,
  gif3,
  item3,
  item2,
  gif2,
  item1,
  gif1,
  news1,
  news2,
  news3,
  news4,
} from "../../components/imageImport";

const Jobs = () => {
  const navigate = useNavigate();

  const AuctionData = [
    {
      image: news1,
      title: "Brand X",
      id: "May 29, 2022 6:0:0",
      type: "Full-time",
    },
    {
      image: news2,
      title: "Brand Y",
      id: "",
      type: "Part-time",
    },
    {
      image: news3,
      title: "Brand Z",
      id: "",
      type: "Internship",
    },
    {
      image: news4,
      title: "Brand W",
      id: "June 03, 2022 5:3:1",
      type: "Freelance",
    },
  ];
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Start Home */}
      <section
        className="bg-half-170 d-table w-100"
        style={{ background: `url(${bg01}) bottom` }}
      >
        <div className="bg-overlay bg-gradient-overlay-2"></div>
        <div className="container">
          <div className="row mt-5 justify-content-center">
            <div className="col-12">
              <div className="title-heading text-center">
                <h5 className="heading fw-semibold sub-heading text-white title-dark">
                  Job Marketplace
                </h5>
                <p className="text-white-50 para-desc mx-auto mb-0">
                  Find the best job for you and get hired by the top brands
                  around the world.
                </p>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}

          <div className="position-middle-bottom">
            <nav aria-label="breadcrumb" className="d-block">
              <ul
                className="breadcrumb breadcrumb-muted mb-0 p-0"
                style={{ backgroundColor: "transparent" }}
              >
                <li className="breadcrumb-item">
                  <a
                    href="/"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/");
                    }}
                  >
                    Faimos
                  </a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Jobs
                </li>
              </ul>
            </nav>
          </div>
        </div>
        {/*end container*/}
      </section>
      {/*end section*/}
      <div className="position-relative">
        <div className="shape overflow-hidden text-white">
          <svg
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
      {/* End Home */}

      {/* Start Wallet */}
      {/* <section className="section">
        <div className="container">
          <div className="row row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1 g-4">
            {walletData?.map((wallet, index) => {
              return (
                <div className="col" key={index}>
                  <div className="card wallet wallet-primary rounded-md shadow">
                    {wallet?.popular && (
                      <div className="ribbon ribbon-right ribbon-primary overflow-hidden">
                        <span className="text-center d-block shadow small fw-bold">
                          Popular
                        </span>
                      </div>
                    )}
                    <div
                      className={`${wallet?.background} p-5 rounded-md`}
                    ></div>
                    <div className="position-relative">
                      <div className="position-absolute top-0 start-50 translate-middle">
                        <img
                          src={wallet?.image}
                          className="avatar avatar-md-md rounded-pill shadow-sm p-3 bg-light"
                          alt=""
                        />
                      </div>

                      <div className="content text-center p-4">
                        <h5 className="mt-4 pt-2 mb-0">{wallet?.title}</h5>
                        <p className="text-muted mt-3 mb-0">
                          {wallet?.description}
                          <a
                            href=""
                            onClick={(e) => e.preventDefault()}
                            data-bs-toggle="modal"
                            data-bs-target="#LoginForm"
                            className="link fw-semibold"
                          >
                            here <i className="uil uil-arrow-right"></i>
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
              {
              }
            })}
          </div>
        </div>
      </section> */}

      {/* Modal Login Start */}
      <div
        className="modal fade"
        id="LoginForm"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-sm modal-dialog-centered"
          role="document"
        >
          <div className="modal-content rounded shadow border-0">
            <div className="modal-header border-bottom">
              <h5 className="modal-title">
                <img src={logoDark} alt="" />
              </h5>
              <button
                type="button"
                className="btn-close d-flex align-items-center text-dark"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="uil uil-times fs-4"></i>
              </button>
            </div>
            <div className="modal-body p-4">
              <form>
                <div className="form-floating mb-2">
                  <input
                    type="email"
                    className="form-control"
                    id="LoginEmail"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="LoginEmail">Email Address:</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="LoginPassword"
                    placeholder="Password"
                  />
                  <label htmlFor="LoginPassword">Password:</label>
                </div>

                <div className="d-flex justify-content-between">
                  <div className="mb-3">
                    <div className="form-check align-items-center d-flex mb-0">
                      <input
                        className="form-check-input mt-0"
                        type="checkbox"
                        value=""
                        id="RememberMe"
                      />
                      <label
                        className="form-check-label text-muted ms-2"
                        htmlFor="RememberMe"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <small className="text-muted mb-0">
                    <a
                      href="/reset-password"
                      onClick={(e) => {
                        e.preventDefault();
                        navigate("/reset-password");
                      }}
                      data-bs-toggle="modal"
                      data-bs-target="#LoginForm"
                      className="text-muted fw-semibold"
                    >
                      Forgot password ?
                    </a>
                  </small>
                </div>

                <button
                  className="btn btn-primary rounded-md w-100"
                  type="submit"
                  data-bs-toggle="modal"
                  data-bs-target="#LoginForm"
                  onClick={(e) => e.preventDefault()}
                >
                  Sign in
                </button>

                <div className="col-12 text-center mt-4">
                  <small>
                    <span className="text-muted me-2">
                      Don't have an account ?
                    </span>{" "}
                    <a
                      href="/signup"
                      onClick={(e) => {
                        e.preventDefault();
                        navigate("/signup");
                      }}
                      data-bs-toggle="modal"
                      data-bs-target="#LoginForm"
                      className="text-dark fw-bold"
                    >
                      Sign Up
                    </a>
                  </small>
                </div>
                {/*end col*/}
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Login End */}

      {/* Start */}
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="sticky-bar">
                <h5 className="mb-0">Filters</h5>
                <div className="p-4 rounded-md shadow mt-4">
                  <div>
                    <h6>Orders By:</h6>
                    <form>
                      <div className="form-check align-items-center d-flex mb-0">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="NewOrder"
                        />
                        <label
                          className="form-check-label fw-bold ms-2"
                          htmlFor="NewOrder"
                        >
                          Newest
                        </label>
                      </div>
                      <div className="form-check align-items-center d-flex mb-0">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="TrendOrder"
                        />
                        <label
                          className="form-check-label fw-bold ms-2"
                          htmlFor="TrendOrder"
                        >
                          Trending
                        </label>
                      </div>
                      <div className="form-check align-items-center d-flex mb-0">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="OldOrder"
                        />
                        <label
                          className="form-check-label fw-bold ms-2"
                          htmlFor="OldOrder"
                        >
                          Oldest
                        </label>
                      </div>
                    </form>
                  </div>

                  <div className="mt-4">
                    <h6>Catagories By:</h6>
                    <form>
                      <div className="form-check align-items-center d-flex mb-0">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="GamesCatagory"
                        />
                        <label
                          className="form-check-label fw-bold ms-2"
                          htmlFor="GamesCatagory"
                        >
                          Fashion
                        </label>
                      </div>
                      <div className="form-check align-items-center d-flex mb-0">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="ArtCatagory"
                        />
                        <label
                          className="form-check-label fw-bold ms-2"
                          htmlFor="ArtCatagory"
                        >
                          Food & Drink
                        </label>
                      </div>
                      <div className="form-check align-items-center d-flex mb-0">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="MusicCatagory"
                        />
                        <label
                          className="form-check-label fw-bold ms-2"
                          htmlFor="MusicCatagory"
                        >
                          Music
                        </label>
                      </div>
                      <div className="form-check align-items-center d-flex mb-0">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="VideoCatagory"
                        />
                        <label
                          className="form-check-label fw-bold ms-2"
                          htmlFor="VideoCatagory"
                        >
                          Video
                        </label>
                      </div>
                      <div className="form-check align-items-center d-flex mb-0">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="MemesCatagory"
                        />
                        <label
                          className="form-check-label fw-bold ms-2"
                          htmlFor="MemesCatagory"
                        >
                          Memes
                        </label>
                      </div>
                      <div className="form-check align-items-center d-flex mb-0">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="IllustrationCatagory"
                        />
                        <label
                          className="form-check-label fw-bold ms-2"
                          htmlFor="IllustrationCatagory"
                        >
                          Illustration
                        </label>
                      </div>
                    </form>
                  </div>

                  <div className="mt-4">
                    <h6>Creators By:</h6>
                    <form>
                      <div className="form-check align-items-center d-flex mb-0">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="AllCreators"
                        />
                        <label
                          className="form-check-label fw-bold ms-2"
                          htmlFor="AllCreators"
                        >
                          All Creators
                        </label>
                      </div>
                      <div className="form-check align-items-center d-flex mb-0">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="VerifyCreators"
                        />
                        <label
                          className="form-check-label fw-bold ms-2"
                          htmlFor="VerifyCreators"
                        >
                          Verified Creators
                        </label>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/*end col*/}

            <div className="col-lg-9 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div className="row row-cols-xl-3 row-cols-lg-2 row-cols-1">
                {AuctionData?.map((data, index) => {
                  return (
                    <div
                      className={index < 3 ? "col" : "col pt-2 mt-4"}
                      key={index}
                    >
                      <div className="card nft-items nft-primary rounded-md shadow overflow-hidden mb-1 p-3">
                        {/* <div className="d-flex justify-content-between">
                          <div className="img-group">
                            <a
                              href="/creator-profile"
                              onClick={(e) => {
                                e.preventDefault();
                                navigate("/creator-profile");
                              }}
                              className="user-avatar"
                            >
                              <img
                                src={client08}
                                alt="user"
                                className="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle"
                              />
                            </a>
                            <a
                              href="/creator-profile"
                              onClick={(e) => {
                                e.preventDefault();
                                navigate("/creator-profile");
                              }}
                              className="user-avatar ms-n3"
                            >
                              <img
                                src={client05}
                                alt="user"
                                className="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle"
                              />
                            </a>
                            <a
                              href="/creator-profile"
                              onClick={(e) => {
                                e.preventDefault();
                                navigate("/creator-profile");
                              }}
                              className="user-avatar ms-n3"
                            >
                              <img
                                src={client06}
                                alt="user"
                                className="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle"
                              />
                            </a>
                          </div>

                          <span className="like-icon shadow-sm">
                            <a
                              href=""
                              onClick={(e) => e.preventDefault()}
                              className="text-muted icon"
                            >
                              <i className="mdi mdi-18px mdi-heart mb-0"></i>
                            </a>
                          </span>
                        </div> */}

                        <div className="nft-image rounded-md position-relative overflow-hidden">
                          <a
                            href="/item-detail-one"
                            onClick={(e) => {
                              e.preventDefault();
                              navigate("/item-detail-one");
                            }}
                          >
                            <img
                              src={data?.image}
                              className="img-fluid"
                              alt=""
                            />
                          </a>
                          {data?.type && (
                            <div className="position-absolute top-0 start-0 m-2">
                              <a
                                href=""
                                onClick={(e) => e.preventDefault()}
                                className="badge badge-link bg-primary"
                              >
                                {data?.type}
                              </a>
                            </div>
                          )}
                          <div
                            className={`${
                              data?.id ? "" : "hide-data"
                            } position-absolute bottom-0 start-0 m-2 bg-gradient-primary text-white title-dark rounded-pill px-3`}
                          >
                            <i className="uil uil-clock"></i>{" "}
                            <Countdown
                              date={data?.id}
                              renderer={({ days, hours, minutes, seconds }) => (
                                <span>Urgently Hiring</span>
                              )}
                            />
                          </div>
                        </div>

                        <div className="card-body content position-relative p-0 mt-3">
                          <a
                            href="/item-detail-one"
                            onClick={(e) => {
                              e.preventDefault();
                              navigate("/item-detail-one");
                            }}
                            className="title text-dark h6"
                          >
                            Job Title
                          </a>
                          <p style={{ fontSize: "15px" }}>{data?.title}</p>

                          <div className="d-flex justify-content-between mt-2">
                            <small className="rate fw-bold">Mesopotamia</small>
                            <small className="text-dark fw-bold">
                              $30,000 USD
                              {/* <span className="text-muted">($50,000)</span> */}
                            </small>
                          </div>
                          <div>
                            <span
                              className="text-muted"
                              style={{
                                display: "-webkit-box",
                                WebkitBoxOrient: "vertical",
                                WebkitLineClamp: 3,
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                marginTop: "10px",
                              }}
                            >
                              {" "}
                              We are seeking a Social Media Scheduler to join
                              our team. In this role, you will primarily focus
                              on Posting design post to correctly via Meta Suite
                              or any third party software for our social media
                              channels for multiple clients. Social media
                              management tools like Meta (formerly Facebook
                              Business Suite) is a must to know. Training will
                              be provided for Specific software's but Meta
                              (previously Facebook) posting knowledge is
                              required.
                            </span>
                            <span style={{ fontSize: "10px", color: "grey" }}>
                              Posted 2 days ago
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
                {/*end col*/}
              </div>
              {/*end row*/}

              <div className="row justify-content-center mt-4">
                <div className="col">
                  <div className="text-center">
                    <a
                      href=""
                      onClick={(e) => e.preventDefault()}
                      className="btn btn-primary rounded-md"
                    >
                      <i className="uil uil-process mdi-spin me-1"></i> Load
                      More
                    </a>
                  </div>
                </div>
                {/*end col*/}
              </div>
              {/*end row*/}
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}
      </section>
      {/*end section*/}
      {/* End */}

      {/*end section*/}
      {/* CTA End */}
      {/* footer */}
      <Footer />
    </>
  );
};

export default Jobs;
