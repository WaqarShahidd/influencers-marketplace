import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import StyleSwitcher from "../../components/StyleSwitcher";
import Countdown from "react-countdown";
import {
  client01,
  client02,
  client03,
  client08,
  client09,
  client10,
  item1,
  item2,
  gif1,
  gif2,
  itemDetail1,
  news3,
  news2,
  news1,
  social2,
  social3,
  social4,
  social1,
  job1,
  job2,
  job3,
} from "../../components/imageImport";

const ItemDetailOne = () => {
  const navigate = useNavigate();

  const activityData = [
    {
      title: "Digital Art Collection",
      author: "Panda",
      time: "1 hours ago",
      favorite: "Started Following",
      image: item1,
    },
    {
      title: "Skrrt Cobain Official",
      author: "ButterFly",
      time: "2 hours ago",
      favorite: "Liked by",
      image: gif1,
    },
    {
      title: "Wow! That Brain Is Floating",
      author: "ButterFly",
      time: "2 hours ago",
      favorite: "Liked by",
      image: item2,
    },
  ];
  const createdData = [
    {
      image: gif1,
      title: "Deep Sea Phantasy",
      id: "May 29, 2022 6:0:0",
      type: "GIFs",
      client: client01,
      author: "StreetBoy",
    },
    {
      image: item1,
      title: "CyberPrimal 042 LAN",
      id: "June 03, 2022 5:3:1",
      type: "Arts",
      client: client09,
      author: "PandaOne",
    },
    {
      image: gif2,
      title: "Crypto Egg Stamp #5",
      id: "June 10, 2022 1:0:1",
      type: "GIFs",
      client: client02,
      author: "CutieGirl",
    },
    {
      image: item2,
      title: "Colorful Abstract Painting",
      id: "June 18, 2022 1:2:1",
      type: "Memes",
      client: client03,
      author: "NorseQueen",
    },
  ];

  const relatedJobs = [
    {
      image: job1,
      title: "Fashion Leader Inspiring Change.",
      createdBy: "@callyjoe",
      type: "Job Category",
    },
    {
      image: job2,
      title: "Fashion Leader Inspiring Change.",
      createdBy: "@kristyhoney",
      type: "Job Category",
    },
    {
      image: job3,
      title: "Fashion Leader Inspiring Change.",
      createdBy: "@pandaone",
      type: "Job Category",
    },
  ];

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Start */}
      <section className="bg-item-detail d-table w-100">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="sticky-bar">
                <img
                  src={news1}
                  className="img-fluid rounded-md shadow"
                  alt=""
                  style={{ width: "100%" }}
                />
              </div>
            </div>

            <div className="col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
              <div className="ms-lg-5">
                <div className="title-heading">
                  <h4 className="h3 fw-bold mb-0">
                    Social Media Scheduler -{" "}
                    <span className="text-gradient-primary">
                      Work From Home
                    </span>
                    <br />
                    {/* <span className="text-gradient-primary">Illustration</span>{" "} */}
                  </h4>
                </div>

                <div className="row">
                  <div className="mt-2">
                    <h4 className="mb-0">Brand X</h4>
                    <h6 style={{ marginTop: "10px" }}>Levant</h6>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div
                      className="pt-2"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <h6 style={{ margin: "0px", marginRight: "10px" }}>
                        Job Type:{" "}
                      </h6>
                      <p
                        style={{ margin: "0px", lineHeight: 1 }}
                        className="mb-0 text-muted"
                      >
                        Full-time
                      </p>
                    </div>
                    <div
                      className="pt-2"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <h6 style={{ margin: "0px", marginRight: "10px" }}>
                        Pay:{" "}
                      </h6>
                      <p
                        style={{ margin: "0px", lineHeight: 1 }}
                        className="mb-0 text-muted"
                      >
                        $450 - $500 per post
                      </p>
                    </div>
                  </div>
                  <div className="col-12 mt-4 pt-2">
                    {/* <a
                      href="#"
                      className="btn btn-l btn-pills btn-primary me-2"
                      data-bs-toggle="modal"
                      data-bs-target="#NftBid"
                    >
                      <i className="mdi mdi-gavel fs-5 me-2"></i> Place a Bid
                    </a> */}
                    <a
                      href="#"
                      className="btn btn-l btn-pills btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#NftBuynow"
                    >
                      {/* <i className="mdi mdi-cart fs-5 me-2"></i> */}
                      Apply Now
                    </a>
                  </div>
                </div>

                <div className="row mt-4 pt-2">
                  <div className="col-12">
                    <ul
                      className="nav nav-tabs border-bottom"
                      id="myTab"
                      role="tablist"
                    >
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active"
                          id="detail-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#detailItem"
                          type="button"
                          role="tab"
                          aria-controls="detailItem"
                          aria-selected="true"
                        >
                          Details
                        </button>
                      </li>

                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="bids-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#bids"
                          type="button"
                          role="tab"
                          aria-controls="bids"
                          aria-selected="false"
                        >
                          Socials
                        </button>
                      </li>

                      {/* <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="activity-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#activity"
                          type="button"
                          role="tab"
                          aria-controls="activity"
                          aria-selected="false"
                        >
                          Activity
                        </button>
                      </li> */}
                    </ul>

                    <div className="tab-content mt-4 pt-2" id="myTabContent">
                      {/* Details */}
                      <div
                        className="tab-pane fade show active"
                        id="detailItem"
                        role="tabpanel"
                        aria-labelledby="detail-tab"
                      >
                        <p className="text-muted">
                          This is a work from home position working USA Hours
                          from 7:00a.m. CST to 3:30p.m Central Standard Time
                          USA. We are seeking a Social Media Scheduler to join
                          our team. In this role, you will primarily focus on
                          Posting design post to correctly via Meta Suite or any
                          third party software for our social media channels for
                          multiple clients. Social media management tools like
                          Meta (formerly Facebook Business Suite) is a must to
                          know. Training will be provided for Specific
                          software's but Meta (previously Facebook) posting
                          knowledge is required. <br />
                          <br />
                          Responsibilities: Research Content and learn about
                          client. Schedule and publish posts across different
                          social media platforms using Meta's scheduling tools
                          as well as other scheduling software's (training
                          material will be provided for other platforms besides
                          Meta). Making Accurate posts on accurate clients.
                          Double checking all work. Monitor and analyze the
                          performance of social media graphics and campaigns,
                          making data-driven improvements. Stay updated on
                          industry trends and best practices in graphic design,
                          Reels, stories, and social media management. Properly
                          know how to review and validate your own work, as well
                          as that of others, to ensure accuracy and compliance
                          with the specific guidelines set by each unique client
                          base. <br />
                          <br />
                          Qualifications: Proven experience as a social media
                          scheduling. In-depth knowledge of social media
                          platforms and their respective image size and
                          formatting requirements. Experience with social media
                          management tools, especially Meta (Facebook Business
                          Suite). Strong attention to detail and the ability to
                          meet deadlines. Excellent communication and teamwork
                          skills. Creative thinking and a passion for staying
                          up-to-date with social media trends.
                        </p>

                        <h6>Owner</h6>

                        <div className="creators creator-primary d-flex align-items-center">
                          <div className="position-relative">
                            <img
                              src={client09}
                              className="avatar avatar-md-sm shadow-md rounded-pill"
                              alt=""
                            />
                            <span className="verified text-primary">
                              <i className="mdi mdi-check-decagram"></i>
                            </span>
                          </div>

                          <div className="ms-3">
                            <h6 className="mb-0">
                              <a
                                href="/creators"
                                onClick={(e) => {
                                  e.preventDefault();
                                  navigate("/creators");
                                }}
                                className="text-dark name"
                              >
                                Brand X
                              </a>
                            </h6>
                          </div>
                        </div>
                      </div>

                      {/* Socials */}
                      <div
                        className="tab-pane fade"
                        id="bids"
                        role="tabpanel"
                        aria-labelledby="bids-tab"
                      >
                        {/* <div className="creators creator-primary d-flex align-items-center">
                          <div className="position-relative">
                            <img
                              src={client01}
                              className="avatar avatar-md-sm shadow-md rounded-pill"
                              alt=""
                            />
                          </div>

                          <div className="ms-3">
                            <h6 className="mb-0">
                              2 WETH <span className="text-muted">by</span>{" "}
                              <a
                                href="/creator-profile"
                                onClick={(e) => {
                                  e.preventDefault();
                                  navigate("/creator-profile");
                                }}
                                className="text-dark name"
                              >
                                0xe849fa28a...ea14
                              </a>
                            </h6>
                            <small className="text-muted">6 hours ago</small>
                          </div>
                        </div>

                        <div className="creators creator-primary d-flex align-items-center mt-4">
                          <div className="position-relative">
                            <img
                              src={client08}
                              className="avatar avatar-md-sm shadow-md rounded-pill"
                              alt=""
                            />
                          </div>

                          <div className="ms-3">
                            <h6 className="mb-0">
                              0.001 WETH <span className="text-muted">by</span>{" "}
                              <a
                                href="/creator-profile"
                                onClick={(e) => {
                                  e.preventDefault();
                                  navigate("/creator-profile");
                                }}
                                className="text-dark name"
                              >
                                VOTwear
                              </a>
                            </h6>
                            <small className="text-muted">6 hours ago</small>
                          </div>
                        </div>

                        <div className="creators creator-primary d-flex align-items-center mt-4">
                          <div className="position-relative">
                            <img
                              src={client10}
                              className="avatar avatar-md-sm shadow-md rounded-pill"
                              alt=""
                            />
                          </div>

                          <div className="ms-3">
                            <h6 className="mb-0">
                              1.225 WETH <span className="text-muted">by</span>{" "}
                              <a
                                href="/creator-profile"
                                onClick={(e) => {
                                  e.preventDefault();
                                  navigate("/creator-profile");
                                }}
                                className="text-dark name"
                              >
                                PandaOne
                              </a>
                            </h6>
                            <small className="text-muted">6 hours ago</small>
                          </div>
                        </div> */}
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                          }}
                        >
                          <img
                            src={social1}
                            style={{ height: 20, width: 20 }}
                          />
                          <p style={{ lineHeight: 1, marginLeft: "15px" }}>
                            facebook.com/lizhales_5864
                          </p>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                          }}
                        >
                          <img
                            src={social4}
                            style={{ height: 20, width: 20 }}
                          />
                          <p style={{ lineHeight: 1, marginLeft: "15px" }}>
                            instagram.com/lizhales_5864
                          </p>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                          }}
                        >
                          <img
                            src={social3}
                            style={{ height: 20, width: 20 }}
                          />
                          <p style={{ lineHeight: 1, marginLeft: "15px" }}>
                            tiktok.com/lizhales_5864
                          </p>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                          }}
                        >
                          <img
                            src={social2}
                            style={{ height: 20, width: 20 }}
                          />
                          <p style={{ lineHeight: 1, marginLeft: "15px" }}>
                            youtube.com/lizhales_5864
                          </p>
                        </div>
                      </div>

                      {/* Activity */}
                      <div
                        className="tab-pane fade"
                        id="activity"
                        role="tabpanel"
                        aria-labelledby="activity-tab"
                      >
                        <div className="row g-4">
                          {activityData?.map((data) => {
                            return (
                              <div className="col-12" key={data?.title}>
                                <div className="card activity activity-primary rounded-md shadow p-4">
                                  <div className="d-flex align-items-center">
                                    <div className="position-relative">
                                      <img
                                        src={data?.image}
                                        className="avatar avatar-md-md rounded-md shadow-md"
                                        alt=""
                                      />

                                      <div className="position-absolute top-0 start-0 translate-middle px-1 rounded-lg shadow-md bg-white">
                                        {data?.favorite ===
                                        "Started Following" ? (
                                          <i className="mdi mdi-account-check mdi-18px text-success"></i>
                                        ) : data?.favorite === "Liked by" ? (
                                          <i className="mdi mdi-heart mdi-18px text-danger"></i>
                                        ) : (
                                          <i className="mdi mdi-format-list-bulleted mdi-18px text-warning"></i>
                                        )}
                                      </div>
                                    </div>
                                    <span className="content ms-3">
                                      <a
                                        href=""
                                        onClick={(e) => e.preventDefault()}
                                        className="text-dark title mb-0 h6 d-block"
                                      >
                                        {data?.time}
                                      </a>
                                      <small className="text-muted d-block mt-1">
                                        {data?.favorite}{" "}
                                        <a
                                          href=""
                                          onClick={(e) => e.preventDefault()}
                                          className="link fw-bold"
                                        >
                                          @{data?.author}
                                        </a>
                                      </small>

                                      <small className="text-muted d-block mt-1">
                                        {data?.time}
                                      </small>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                          {/*end col*/}
                        </div>
                        {/*end row*/}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}

        <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
            <div className="col">
              <h1
                className="title"
                style={{
                  marginTop: "45px",
                  textAlign: "center",
                  fontWeight: "bolder",
                  marginBottom: "50px",
                }}
              >
                Related Jobs
              </h1>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}

          <div className="row g-4">
            {relatedJobs?.map((data, index) => {
              return (
                <div className="col-lg-4 col-md-6" key={data?.title}>
                  <div className="card blog blog-primary shadow rounded-md overflow-hidden">
                    <div className="position-relative">
                      <img
                        src={data?.image}
                        className="img-fluid rounded-md"
                        alt=""
                      />
                      {/* <div className="position-absolute top-0 end-0 m-3">
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
                    </div>
                    <div className="card-body position-relative p-4">
                      <a
                        href=""
                        className="badge tag gradient rounded-md fw-bold"
                      >
                        {data?.type}
                      </a>

                      <ul className="list-unstyled mt-2">
                        <li className="list-inline-item text-muted small me-3">
                          <i className="uil uil-calendar-alt text-dark h6 me-1"></i>
                          20th January, 2022
                        </li>
                      </ul>
                      <a
                        href="/blog-detail"
                        onClick={(e) => {
                          e.preventDefault();
                          navigate("/blog-detail");
                        }}
                        className="text-dark title h5 mt-3"
                      >
                        {data?.title}
                      </a>

                      <div className="mt-3 d-flex justify-content-between align-items-center">
                        {/* <a
                          href="/blog-detail"
                          onClick={(e) => {
                            e.preventDefault();
                            navigate("/blog-detail");
                          }}
                          className="btn btn-link text-muted"
                        >
                          Read more <FiArrowRight className="fea icon-sm" />
                        </a> */}

                        <a
                          href=""
                          onClick={(e) => e.preventDefault()}
                          className="btn btn-pills btn-soft-primary"
                        >
                          View Job
                        </a>

                        <span className="text-muted fs-6">
                          by{" "}
                          <a
                            href="/creator-profile"
                            onClick={(e) => {
                              e.preventDefault();
                              navigate("/creator-profile");
                            }}
                            className="link"
                          >
                            {data?.createdBy}
                          </a>
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
        </div>

        {/* <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
            <div className="col">
              <div className="section-title text-center mb-4 pb-2">
                <h4 className="title mb-4">Related Auction Items</h4>
                <p className="text-muted para-desc mb-0 mx-auto">
                  We are a huge marketplace dedicated to connecting great
                  artists of all Superex with their fans and unique token
                  collectors!
                </p>
              </div>
            </div>
          </div>

          <div className="row row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1">
            {createdData?.map((data) => {
              return (
                <div className="col mt-4 pt-2" key={data?.title}>
                  <div className="card nft-items nft-primary nft-auction rounded-md shadow overflow-hidden mb-1 p-3">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <img
                          src={data?.client}
                          alt="user"
                          className="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle"
                        />
                        <a
                          href=""
                          onClick={(e) => e.preventDefault()}
                          className="text-dark small creator-name h6 mb-0 ms-2"
                        >
                          @{data?.author}
                        </a>
                      </div>
                    </div>

                    <div className="nft-image rounded-md mt-3 position-relative overflow-hidden">
                      <a
                        href="/item-detail-one"
                        onClick={(e) => {
                          e.preventDefault();
                          navigate("/item-detail-one");
                        }}
                      >
                        <img src={data?.image} className="img-fluid" alt="" />
                      </a>
                      <div className="position-absolute top-0 start-0 m-2">
                        <a
                          href=""
                          onClick={(e) => e.preventDefault()}
                          className="badge badge-link bg-primary"
                        >
                          {data?.type}
                        </a>
                      </div>
                      <div className="position-absolute top-0 end-0 m-2">
                        <span className="like-icon shadow-sm">
                          <a
                            href=""
                            onClick={(e) => e.preventDefault()}
                            className="text-muted icon"
                          >
                            <i className="mdi mdi-18px mdi-heart mb-0"></i>
                          </a>
                        </span>
                      </div>

                      <div className="position-absolute bottom-0 start-0 m-2 h5 bg-gradient-primary text-white title-dark rounded-pill px-3">
                        <i className="uil uil-clock"></i>{" "}
                        <Countdown
                          date={data?.id}
                          renderer={({ days, hours, minutes, seconds }) => (
                            <span>
                              {days}:{hours}:{minutes}:{seconds}
                            </span>
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
                        {data?.title}
                      </a>

                      <div className="d-flex align-items-center justify-content-between mt-3">
                        <div className="">
                          <small className="mb-0 d-block fw-semibold">
                            Current Bid:
                          </small>
                          <small className="rate fw-bold">20.5 ETH</small>
                        </div>
                        <a
                          href="/item-detail-one"
                          onClick={(e) => {
                            e.preventDefault();
                            navigate("/item-detail-one");
                          }}
                          className="btn btn-icon btn-pills btn-primary"
                        >
                          <i className="uil uil-shopping-bag"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div> */}
      </section>
      {/*end section*/}
      {/* End */}

      {/* Place Bid Modal */}
      <div
        className="modal fade"
        id="NftBid"
        aria-hidden="true"
        aria-labelledby="bidtitle"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content border-0 shadow-md rounded-md">
            <div className="modal-header">
              <h5 className="modal-title" id="bidtitle">
                Place a Bid
              </h5>
              <button
                type="button"
                className="btn btn-close"
                data-bs-dismiss="modal"
                id="close-modal"
              >
                <i className="uil uil-times fs-4"></i>
              </button>
            </div>
            <div className="modal-body p-4">
              <form>
                <div className="row">
                  <div className="col-12">
                    <div className="mb-4">
                      <label className="form-label fw-bold">
                        Your Bid Price <span className="text-danger">*</span>
                      </label>
                      <input
                        name="name"
                        id="name"
                        type="text"
                        className="form-control"
                        placeholder="00.00 ETH"
                      />
                      <small className="text-muted">
                        <span className="text-dark">Note:</span> Bid price at
                        least 1 ETH
                      </small>
                    </div>
                  </div>
                  {/*end col*/}
                  <div className="col-12">
                    <div className="mb-4">
                      <label className="form-label fw-bold">
                        Enter Your QTY <span className="text-danger">*</span>
                      </label>
                      <input
                        name="email"
                        id="email"
                        type="email"
                        className="form-control"
                        placeholder="0"
                      />
                      <small className="text-muted">
                        <span className="text-dark">Note:</span> Max. Qty 5
                      </small>
                    </div>
                  </div>
                  {/*end col*/}
                </div>
              </form>

              <div className="pt-3 border-top">
                <div className="d-flex justify-content-between">
                  <p className="fw-bold small"> You must bid at least:</p>
                  <p className="text-primary"> 1.22 ETH </p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="fw-bold small"> Service free:</p>
                  <p className="text-primary"> 0.05 ETH </p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="fw-bold small"> Total bid amount:</p>
                  <p className="text-primary mb-0"> 1.27 ETH </p>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-pills btn-primary"
                data-bs-target="#placebid"
                data-bs-toggle="modal"
              >
                <i className="mdi mdi-gavel fs-5 me-2"></i> Place a Bid
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="placebid"
        aria-hidden="true"
        aria-labelledby="bidsuccess"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content border-0 shadow-md rounded-md">
            <div className="modal-header">
              <h5 className="modal-title" id="bidsuccess">
                Bidding Successful
              </h5>
              <button
                type="button"
                className="btn btn-close"
                data-bs-dismiss="modal"
                id="close-modal"
              >
                <i className="uil uil-times fs-4"></i>
              </button>
            </div>
            <div className="modal-body p-4">
              your bid (1.27ETH) has been listing to our database
            </div>
            <div className="modal-footer">
              <a
                href="/activity"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/activity");
                }}
                data-bs-toggle="modal"
                className="btn btn-pills btn-primary"
              >
                <i className="mdi mdi-basket-plus fs-5 me-2"></i> View Your Bid
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Place Bid Modal */}

      {/* Buy Now NFt Modal */}
      <div
        className="modal fade"
        id="NftBuynow"
        aria-hidden="true"
        aria-labelledby="buyNft"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content border-0 shadow-md rounded-md">
            <div className="modal-header">
              <h5 className="modal-title" id="buyNft">
                Checkout
              </h5>
              <button
                type="button"
                className="btn btn-close"
                data-bs-dismiss="modal"
                id="close-modal"
              >
                <i className="uil uil-times fs-4"></i>
              </button>
            </div>
            <div className="modal-body p-4">
              <form>
                <div className="row">
                  <div className="col-12">
                    <div className="mb-4">
                      <label className="form-label fw-bold">
                        Your Price <span className="text-danger">*</span>
                      </label>
                      <input
                        name="name"
                        id="name"
                        type="text"
                        className="form-control"
                        defaultValue="1.5ETH"
                      />
                    </div>
                  </div>
                  {/*end col*/}
                </div>
              </form>

              <div className="py-3 border-top">
                <div className="d-flex justify-content-between">
                  <p className="fw-bold small"> You must bid at least:</p>
                  <p className="text-primary"> 1.22 ETH </p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="fw-bold small"> Service free:</p>
                  <p className="text-primary"> 0.05 ETH </p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="fw-bold small"> Total bid amount:</p>
                  <p className="text-primary mb-0"> 1.27 ETH </p>
                </div>
              </div>

              <div className="bg-soft-danger p-3 rounded shadow">
                <div className="d-flex align-items-center">
                  <i className="uil uil-exclamation-circle h2 mb-0 me-2"></i>
                  <div className="flex-1">
                    <h6 className="mb-0">This creator is not verified</h6>
                    <small className="mb-0">
                      Purchase this item at your own risk
                    </small>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <button
                  className="btn btn-pills btn-primary w-100"
                  data-bs-target="#buyNftSuccess"
                  data-bs-toggle="modal"
                >
                  <i className="mdi mdi-cart fs-5 me-2"></i> Continue
                </button>
                <form>
                  <div className="form-check align-items-center d-flex mt-2">
                    <input
                      className="form-check-input mt-0"
                      type="checkbox"
                      id="AcceptT&C"
                    />
                    <label
                      className="form-check-label text-muted ms-2"
                      htmlFor="AcceptT&C"
                    >
                      I Accept{" "}
                      <a
                        href=""
                        onClick={(e) => e.preventDefault()}
                        className="text-primary"
                      >
                        Terms And Condition
                      </a>
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="buyNftSuccess"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content border-0 shadow-md rounded-md">
            <div className="position-absolute top-0 start-100 translate-middle z-index-1">
              <button
                type="button"
                className="btn btn-icon btn-pills btn-sm btn-light btn-close opacity-10"
                data-bs-dismiss="modal"
                id="close-modal"
              >
                <i className="uil uil-times fs-4"></i>
              </button>
            </div>
            <div className="modal-body text-center p-4">
              <h3>Yahhhoooo! 🎉</h3>
              <h6 className="text-muted mb-0">
                You successfully purchased{" "}
                <a href="" className="text-reset">
                  <u>XYZ nft</u>
                </a>{" "}
                from Superex
              </h6>

              <ul className="rounded-md shadow p-4 border list-unstyled mt-4">
                <li className="d-flex justify-content-between">
                  <span className="fw-bold me-5">Status:</span>
                  <span className="text-warning">Processing</span>
                </li>

                <li className="d-flex justify-content-between mt-2">
                  <span className="fw-bold me-5">Transaction ID:</span>
                  <span className="text-muted">qhut0...hfteh45</span>
                </li>
              </ul>

              <ul className="list-unstyled social-icon mb-0 mt-4">
                {[
                  "uil uil-facebook-f",
                  "uil uil-instagram",
                  "uil uil-linkedin",
                  "uil uil-dribbble",
                  "uil uil-twitter",
                ]?.map((data, index) => {
                  return (
                    <li className="list-inline-item lh-1 mr-1" key={index}>
                      <a href="" className="rounded">
                        <i className={data}></i>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Buy Now NFt Modal */}
      {/* footer */}
      <Footer />
    </>
  );
};

export default ItemDetailOne;
