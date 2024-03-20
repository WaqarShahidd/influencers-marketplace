import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import {
  client01,
  client02,
  client03,
  client09,
  item1,
  item2,
  gif1,
  gif2,
  news1,
  social2,
  social3,
  social4,
  social1,
  job1,
  job2,
  job3,
} from "../../components/imageImport";
import axios from "axios";
import { BASE_URL } from "../../constants/config";
import { Backdrop, CircularProgress, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import moment from "moment";

const PitchDetail = () => {
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

  const { id } = useParams();
  const location = useLocation();
  const pitchDetailReceived = location?.state?.filter;
  console.log("textReceived", pitchDetailReceived);

  const [loading, setloading] = useState(false);

  const [jobDetails, setjobDetails] = useState({});

  //   const GetJobById = () => {
  //     setloading(true);
  //     axios
  //       .get(`${BASE_URL}/api/job/getOneJob?jobId=${id}`)
  //       .then((res) => {
  //         setloading(false);
  //         setjobDetails(res.data.jobResult);
  //       })
  //       .catch((error) => {
  //         console.log("error", error.response.data.message);
  //         setloading(false);
  //       });
  //   };

  //   useEffect(() => {
  //     GetJobById();
  //   }, []);

  //   const { allJobs } = useSelector((state) => state.jobs);

  const sendEmail = (email) => {
    const subject = `Applying for ${pitchDetailReceived?.title}`;
    const body = "";

    const gmailUrl = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${encodeURIComponent(
      email
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(gmailUrl);
  };

  const isMobile = useMediaQuery("(max-width:767px)");

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
                  src={pitchDetailReceived?.image_url}
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
                    <span className="text-gradient-primary">
                      {pitchDetailReceived?.title}
                    </span>
                    <br />
                    {/* <span className="text-gradient-primary">Illustration</span>{" "} */}
                  </h4>
                </div>

                <div className="row">
                  <div className="mt-2">
                    <h4
                      className="mb-0"
                      onClick={(e) => {
                        e.preventDefault();
                        navigate(
                          `/creator-profile/${pitchDetailReceived?.user?.id}`
                        );
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      {pitchDetailReceived?.user?.first_name}
                    </h4>
                    {/* <h6 style={{ marginTop: "10px" }}>Levant</h6> */}
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      flexDirection: "row",
                    }}
                  >
                    <div
                      className="pt-2"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <h6 style={{ margin: "0px", marginRight: "10px" }}>
                        Price Range:{" "}
                      </h6>
                      <p
                        style={{ margin: "0px", lineHeight: 1 }}
                        className="mb-0 text-muted"
                      >
                        ${pitchDetailReceived?.price_range}
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
                      onClick={(e) => {
                        e.preventDefault();
                        sendEmail(pitchDetailReceived?.user?.email);
                      }}
                    >
                      {/* <i className="mdi mdi-cart fs-5 me-2"></i> */}
                      Contact Creator
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
                          {pitchDetailReceived?.creative_idea}
                        </p>

                        <h6>Posted by:</h6>

                        <div className="creators creator-primary d-flex align-items-center">
                          <div className="position-relative">
                            <img
                              src={pitchDetailReceived?.user?.avatar}
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
                                href={`/creator-profile/${pitchDetailReceived?.user?.id}`}
                                onClick={(e) => {
                                  e.preventDefault();
                                  navigate(
                                    `/creator-profile/${pitchDetailReceived?.user?.id}`
                                  );
                                }}
                                className="text-dark name"
                              >
                                {pitchDetailReceived?.user?.first_name}
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
                        {pitchDetailReceived?.user?.facebook_url && (
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
                            <p
                              style={{
                                lineHeight: 1,
                                marginLeft: "15px",
                                cursor: "pointer",
                              }}
                              onClick={(e) => {
                                e.preventDefault();
                                window.open(
                                  pitchDetailReceived?.user?.facebook_url,
                                  "_blank"
                                );
                              }}
                            >
                              {pitchDetailReceived?.user?.facebook_url}
                            </p>
                          </div>
                        )}
                        {pitchDetailReceived?.user?.instagram_url && (
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
                            <p
                              style={{
                                lineHeight: 1,
                                marginLeft: "15px",
                                cursor: "pointer",
                              }}
                              onClick={(e) => {
                                e.preventDefault();
                                window.open(
                                  pitchDetailReceived?.user?.instagram_url,
                                  "_blank"
                                );
                              }}
                            >
                              {pitchDetailReceived?.user?.instagram_url}
                            </p>
                          </div>
                        )}
                        {pitchDetailReceived?.user?.tiktok_url && (
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
                            <p
                              style={{
                                lineHeight: 1,
                                marginLeft: "15px",
                                cursor: "pointer",
                              }}
                              onClick={(e) => {
                                e.preventDefault();
                                window.open(
                                  pitchDetailReceived?.user?.tiktok_url,
                                  "_blank"
                                );
                              }}
                            >
                              {pitchDetailReceived?.user?.tiktok_url}
                            </p>
                          </div>
                        )}
                        {pitchDetailReceived?.user?.youtube_url && (
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
                            <p
                              style={{
                                lineHeight: 1,
                                marginLeft: "15px",
                                cursor: "pointer",
                              }}
                              onClick={(e) => {
                                e.preventDefault();
                                window.open(
                                  pitchDetailReceived?.user?.youtube_url,
                                  "_blank"
                                );
                              }}
                            >
                              {pitchDetailReceived?.user?.youtube_url}{" "}
                            </p>
                          </div>
                        )}
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

export default PitchDetail;
