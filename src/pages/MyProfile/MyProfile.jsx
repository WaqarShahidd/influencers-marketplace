/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import {
  work1,
  profileIcon2,
  social1,
  social3,
  social4,
  social2,
  news3,
  news1,
  popular1,
  popular2,
  popular3,
  job1,
  job2,
  job3,
  defaultImage,
} from "../../components/imageImport";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { getAllWork } from "../../redux/dispatchers/work.dispatch";
import { Backdrop, CircularProgress, useMediaQuery } from "@mui/material";
import axios from "axios";
import { BASE_URL } from "../../constants/config";

const MyProfile = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const relatedNews = [
    {
      image: news3,
      title: "Influencer Is a Real Job. It’s Time to Act Like It and own it",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: news1,
      title: "Influencer Is a Real Job. It’s Time to Act Like It and own it",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  const AuctionData = [
    {
      image: popular1,
      title: "Deep Sea Phantasy",
      type: "GIFs",
      filter: ["all", "games"],
    },
    {
      image: popular2,
      title: "CyberPrimal 042 LAN",
      time: "",
      type: "Arts",
      filter: ["all", "art"],
    },
    {
      image: popular3,
      title: "Crypto Egg Stamp #5",
      time: "",
      type: "Games",
      filter: ["all", "music", "meme"],
    },
    {
      image: popular1,
      title: "Colorful Abstract Painting",
      type: "",
      filter: ["all", "video"],
    },
  ];

  const blogList = [
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

  const [allData, setAllData] = useState(AuctionData);
  const [type, setType] = useState("all");

  const setFilter = (type) => {
    setType(type);
    const newOne = AuctionData?.filter((data) => data?.filter?.includes(type));
    setAllData(newOne);
  };

  const { userData } = useSelector((state) => state.user);
  const { allWorks } = useSelector((state) => state.work);
  const { allInfluencers } = useSelector((state) => state.influencer);
  const { allJobs } = useSelector((state) => state.jobs);

  const influencerNews = allInfluencers?.find(
    (user) => user?.id === userData?.id
  )?.influencer_news;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllWork(userData?.id));
  }, []);

  const isMobile = useMediaQuery("(max-width:767px)");
  const isSmall = useMediaQuery("(max-width:980px)");

  const [loading, setloading] = useState(false);

  const [workDetails, setworkDetails] = useState([]);
  const [creatorPitches, setcreatorPitches] = useState([]);
  const [brandJobs, setbrandJobs] = useState([]);

  const CreatorWork = () => {
    setloading(true);
    axios
      .get(`${BASE_URL}/api/work/getOneWorkByUserId?user_id=${userData?.id}`)
      .then((res) => {
        setloading(false);
        setworkDetails(res.data.workResult);
      })
      .catch((error) => {
        console.log("error", error.response.data.message);
        setloading(false);
      });
  };

  const CreatorPitch = () => {
    setloading(true);
    axios
      .get(`${BASE_URL}/api/pitch/getOnePitchByUserId?user_id=${userData?.id}`)
      .then((res) => {
        setloading(false);
        setcreatorPitches(res.data.pitchResult);
      })
      .catch((error) => {
        console.log("error", error.response.data.message);
        setloading(false);
      });
  };

  const BrandJobs = () => {
    setloading(true);
    axios
      .get(`${BASE_URL}/api/job/getOneJobByUserId?user_id=${userData?.id}`)
      .then((res) => {
        setloading(false);
        setbrandJobs(res.data.jobResult);
      })
      .catch((error) => {
        console.log("error", error.response.data.message);
        setloading(false);
      });
  };

  useEffect(() => {
    CreatorWork();
    CreatorPitch();
    BrandJobs();
  }, []);

  return (
    <>
      {/* Navbar */}
      <Navbar />
      <Backdrop
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      {/* Start Home */}
      <section className="bg-creator-profile">
        {/* Profile View */}
        <div className="container">
          <div
            className="row"
            style={{ flexDirection: isMobile ? "column" : "row" }}
          >
            <div
              style={{ width: isMobile ? "100%" : "35%" }}
              className="col-lg-3 col-md-4 order-2 order-md-1 mt-4 pt-2 mt-sm-0 pt-sm-0"
            >
              <div
                style={{ backgroundColor: "#261A5A", paddingBottom: "20px" }}
                className="card creators creators-two creator-primary rounded-md shadow overflow-hidden"
              >
                <div
                  className="py-5"
                  style={{ background: `url(${work1})` }}
                ></div>
                <div className="position-relative mt-n5">
                  {userData?.avatar === null ? (
                    <img
                      src={defaultImage}
                      className="avatar avatar-md-md rounded-pill shadow-sm bg-light img-thumbnail mx-auto d-block"
                      alt=""
                    />
                  ) : (
                    <img
                      src={userData?.avatar}
                      className="avatar avatar-md-md rounded-pill shadow-sm bg-light img-thumbnail mx-auto d-block"
                      alt=""
                      style={{ objectFit: "contain" }}
                    />
                  )}

                  <div className="content text-center pt-2 p-4">
                    <a
                      href="/creator-profile"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                      className="text-dark h6 name d-block mb-0"
                    >
                      {userData?.first_name}
                    </a>
                    {userData?.display_name && (
                      <small className="text-muted">
                        @{userData?.display_name}
                      </small>
                    )}
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    {/* <img src={profileIcon1} style={{ height: 20, width: 20 }} />
                    <p
                      style={{
                        lineHeight: 1,
                        fontWeight: "600",
                        marginLeft: "5px",
                      }}
                    >
                      2.3M
                    </p> */}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <img src={profileIcon2} style={{ height: 20, width: 20 }} />
                    <p
                      style={{
                        lineHeight: 1,
                        fontWeight: "600",
                        marginLeft: "5px",
                        marginBottom: "0px",
                      }}
                    >
                      {moment(userData?.dob).format("DD MMM")}
                    </p>
                  </div>
                  {/* <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <img src={profileIcon3} style={{ height: 20, width: 20 }} />
                    <p
                      style={{
                        lineHeight: 1,
                        fontWeight: "600",
                        marginLeft: "5px",
                      }}
                    >
                      Fashion
                    </p>
                  </div> */}
                </div>
                {userData?.bio && (
                  <div
                    style={{
                      paddingTop: "20px",
                      borderTopWidth: "1px",
                      borderTopStyle: "groove",
                      borderTopColor: "#3310A4",
                      marginLeft: "30px",
                      marginRight: "30px",
                      marginTop: "20px",
                    }}
                  >
                    <h5 style={{ fontWeight: "700" }}>Bio</h5>
                    <p style={{ fontSize: "14px" }}>{userData?.bio}</p>
                  </div>
                )}

                <div
                  style={{
                    paddingTop: "20px",
                    borderTopWidth: "1px",
                    borderTopStyle: "groove",
                    borderTopColor: "#3310A4",
                    marginLeft: "30px",
                    marginRight: "30px",
                    marginTop: "20px",
                  }}
                >
                  <h5 style={{ fontWeight: "700", marginBottom: "25px" }}>
                    Social Channels
                  </h5>
                  {userData?.facebook_url && (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      <img src={social1} style={{ height: 20, width: 20 }} />
                      <p style={{ lineHeight: 1, marginLeft: "15px" }}>
                        {userData?.facebook_url}
                      </p>
                    </div>
                  )}
                  {userData?.instagram_url && (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      <img src={social4} style={{ height: 20, width: 20 }} />
                      <p style={{ lineHeight: 1, marginLeft: "15px" }}>
                        {userData?.instagram_url}
                      </p>
                    </div>
                  )}
                  {userData?.tiktok_url && (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      <img src={social3} style={{ height: 20, width: 20 }} />
                      <p style={{ lineHeight: 1, marginLeft: "15px" }}>
                        {userData?.tiktok_url}
                      </p>
                    </div>
                  )}
                  {userData?.youtube_url && (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      <img src={social2} style={{ height: 20, width: 20 }} />
                      <p style={{ lineHeight: 1, marginLeft: "15px" }}>
                        youtube.com/lizhales_5864
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            {/*end col*/}

            {userData?.role === "brands" ? (
              <>
                {brandJobs?.length > 0 && (
                  <div
                    style={{
                      width: isMobile ? "100%" : "65%",
                      borderRadius: "10px",
                      padding: "20px",
                      paddingTop: "0px",
                    }}
                    className="col-lg-9 col-md-8 order-1 order-md-2"
                  >
                    <h2 className="title" style={{ fontWeight: "bold" }}>
                      Jobs Posted
                    </h2>
                    {brandJobs?.map((data, index) => (
                      <div
                        key={index}
                        className=""
                        style={{
                          paddingBottom: "25px",
                          paddingTop: "25px",
                          borderBottomWidth: "1px",
                          borderBottomStyle: "groove",
                          borderBottomColor: "#888595",
                        }}
                      >
                        <div
                          className="card wallet wallet-primary rounded-md"
                          style={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                        >
                          <img
                            src={data?.image_url}
                            style={{
                              height: "175px",
                              width: "200px",
                              borderRadius: "8px",
                              objectFit: "cover",
                            }}
                          />
                          <div className="" style={{ marginLeft: "25px" }}>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                marginBottom: "10px",
                              }}
                            >
                              <p
                                style={{
                                  lineHeight: 1,
                                  marginTop: "0px",
                                  marginBottom: "0px",
                                  marginRight: "30px",
                                  letterSpacing: 2,
                                }}
                              >
                                {data?.job_type}
                              </p>
                              <li className="list-inline-item text-muted small me-3">
                                <i className="uil uil-calendar-alt text-dark h6 me-1"></i>
                                {moment(data?.createdAt).format("DD MMM YYYY")}
                              </li>
                            </div>
                            <h5
                              onClick={(e) => {
                                e.preventDefault();
                                navigate(`/job-detail/${data?.id}`);
                              }}
                              style={{ cursor: "pointer" }}
                              className="mb-0"
                            >
                              {data?.title}
                            </h5>
                            <p
                              className="text-muted mt-3 mb-0"
                              style={{
                                marginTop: "10px",
                                display: "-webkit-box",
                                WebkitBoxOrient: "vertical",
                                WebkitLineClamp: 2,
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                              }}
                            >
                              {data?.description}
                            </p>
                            <p className="text-muted mt-3 mb-0">
                              <a
                                href=""
                                onClick={(e) => {
                                  e.preventDefault();
                                  navigate(`/blog-detail/${data?.id}`);
                                }}
                                data-bs-toggle="modal"
                                data-bs-target="#LoginForm"
                                className="link fw-semibold"
                              >
                                Read here{" "}
                                <i className="uil uil-arrow-right"></i>
                              </a>
                            </p>
                            {/* <p style={{ marginTop: "10px" }}>
                          Audience Engagement:{"  "}
                          <a className="link fw-semibold">
                            {data?.news?.audience_enagagement}
                          </a>
                        </p> */}
                          </div>
                          {/* <div className="position-relative">
                        <div className="position-absolute top-0 start-50 translate-middle">
                          <img
                            src={client01}
                            className="avatar avatar-md-md rounded-pill shadow-sm p-3 bg-light"
                            alt=""
                          />
                        </div>

                        <div className="content text-center p-4">
                          <h5 className="mt-4 pt-2 mb-0">Title</h5>
                          <p className="text-muted mt-3 mb-0">
                            wallet?.description
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
                      </div> */}
                        </div>
                      </div>
                    ))}

                    {/*end row*/}
                  </div>
                )}
              </>
            ) : (
              <>
                {influencerNews?.length > 0 && (
                  <div
                    style={{
                      width: isMobile ? "100%" : "65%",
                      borderRadius: "10px",
                      padding: "20px",
                      paddingTop: "0px",
                    }}
                    className="col-lg-9 col-md-8 order-1 order-md-2"
                  >
                    <h2 className="title" style={{ fontWeight: "bold" }}>
                      Related News
                    </h2>
                    {influencerNews?.map((data, index) => (
                      <div
                        key={index}
                        className=""
                        style={{
                          paddingBottom: "25px",
                          paddingTop: "25px",
                          borderBottomWidth: "1px",
                          borderBottomStyle: "groove",
                          borderBottomColor: "#888595",
                        }}
                      >
                        <div
                          className="card wallet wallet-primary rounded-md"
                          style={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                        >
                          <img
                            src={data?.news?.image_url}
                            style={{
                              height: isSmall ? "100px" : "175px",
                              width: isSmall ? "175px" : "200px",
                              borderRadius: "8px",
                              objectFit: "cover",
                            }}
                          />
                          <div className="" style={{ marginLeft: "25px" }}>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                marginBottom: "10px",
                              }}
                            >
                              <p
                                style={{
                                  lineHeight: 1,
                                  marginTop: "0px",
                                  marginBottom: "0px",
                                  marginRight: "30px",
                                  letterSpacing: 2,
                                }}
                              >
                                Influencer
                              </p>
                              <li className="list-inline-item text-muted small me-3">
                                <i className="uil uil-calendar-alt text-dark h6 me-1"></i>
                                {moment(data?.news?.createdAt).format(
                                  "DD MMM YYYY"
                                )}
                              </li>
                            </div>
                            <h5
                              onClick={(e) => {
                                e.preventDefault();
                                navigate(`/blog-detail/${data?.news?.id}`);
                              }}
                              style={{ cursor: "pointer" }}
                              className="mb-0"
                            >
                              {data?.news?.title}
                            </h5>
                            <p
                              className="text-muted mt-3 mb-0"
                              style={{
                                marginTop: "10px",
                                display: "-webkit-box",
                                WebkitBoxOrient: "vertical",
                                WebkitLineClamp: 2,
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                              }}
                            >
                              {data?.news?.text}
                            </p>
                            <p className="text-muted mt-3 mb-0">
                              <a
                                href=""
                                onClick={(e) => {
                                  e.preventDefault();
                                  navigate(`/blog-detail/${data?.news?.id}`);
                                }}
                                data-bs-toggle="modal"
                                data-bs-target="#LoginForm"
                                className="link fw-semibold"
                              >
                                Read here{" "}
                                <i className="uil uil-arrow-right"></i>
                              </a>
                            </p>
                            {/* <p style={{ marginTop: "10px" }}>
                          Audience Engagement:{"  "}
                          <a className="link fw-semibold">
                            {data?.news?.audience_enagagement}
                          </a>
                        </p> */}
                          </div>
                          {/* <div className="position-relative">
                        <div className="position-absolute top-0 start-50 translate-middle">
                          <img
                            src={client01}
                            className="avatar avatar-md-md rounded-pill shadow-sm p-3 bg-light"
                            alt=""
                          />
                        </div>

                        <div className="content text-center p-4">
                          <h5 className="mt-4 pt-2 mb-0">Title</h5>
                          <p className="text-muted mt-3 mb-0">
                            wallet?.description
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
                      </div> */}
                        </div>
                      </div>
                    ))}

                    {/*end row*/}
                  </div>
                )}
              </>
            )}
            {/*end col*/}
          </div>
        </div>

        {/* Work */}
        {workDetails?.length > 0 && (
          <div className="container" style={{ marginBottom: "100px" }}>
            <h1
              className="title"
              style={{
                marginTop: "45px",
                textAlign: "center",
                fontWeight: "bolder",
                marginBottom: "20px",
              }}
            >
              {userData?.first_name}'s Work
            </h1>

            <div
              className="row row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 g-4 mt-4 mb-4 pb-2"
              id="grid"
            >
              {workDetails?.map((data, index) => {
                return (
                  <div className="col picture-item" key={data?.id}>
                    <div className="card nft-items nft-primary rounded-md shadow overflow-hidden mb-1">
                      <div className="nft-image position-relative overflow-hidden">
                        <img
                          src={data?.image_url}
                          className="img-fluid"
                          alt=""
                          style={{
                            height: "200px",
                            objectFit: "cover",
                            borderRadius: "8px",
                          }}
                        />
                        {/* <div className="position-absolute top-0 end-0 m-2">
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

                        {/* <div className="bid-btn">
                        <a
                          href="/item-detail-one"
                          onClick={(e) => {
                            e.preventDefault();
                            navigate("/item-detail-one");
                          }}
                          className="btn btn-pills"
                        >
                          <i className="mdi mdi-gavel fs-5 align-middle me-1"></i>{" "}
                          Bid
                        </a>
                      </div> */}
                      </div>

                      <div
                        className="card-body content position-relative"
                        style={{ padding: "10px" }}
                      >
                        {/* <div className="img-group">
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
                            className="avatar avatar-sm-sm img-thumbnail border-0 shadow-md rounded-circle"
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
                            className="avatar avatar-sm-sm img-thumbnail border-0 shadow-md rounded-circle"
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
                            className="avatar avatar-sm-sm img-thumbnail border-0 shadow-md rounded-circle"
                          />
                        </a>
                      </div> */}

                        <div className="">
                          <a
                            href=""
                            onClick={(e) => {
                              e.preventDefault();
                            }}
                            style={{ cursor: "default" }}
                            className="title text-dark h6"
                          >
                            {data?.title}
                          </a>

                          <div
                            className="d-flex justify-content-between mt-2"
                            style={{ alignItems: "baseline" }}
                          >
                            <small
                              style={{
                                letterSpacing: 2,
                                fontSize: "12px",
                              }}
                            >
                              Engagement:
                              <small className="rate fw-bold">
                                {" "}
                                {data?.audience_enagagement}
                              </small>
                            </small>
                            <small
                              className=" fw-bold"
                              style={{ fontSize: "12px" }}
                            >
                              <i className="uil uil-calendar-alt text-dark h6 me-1"></i>
                              {moment(data?.createdAt).format("DD MMM YYYY")}
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              {/*end col*/}
            </div>
            {/*end row*/}

            {/*end row*/}
          </div>
        )}

        {/* Pitches */}
        {creatorPitches?.length > 0 && (
          <div className="container">
            <h1
              className="title"
              style={{
                marginTop: "45px",
                textAlign: "center",
                fontWeight: "bolder",
              }}
            >
              {userData?.first_name}'s Pitches
            </h1>

            <div
              className="row row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 g-4 mt-4 mb-4 pb-2"
              id="grid"
            >
              {creatorPitches?.map((data, index) => {
                return (
                  <div className="col picture-item" key={data?.id}>
                    <div className="card nft-items nft-primary rounded-md shadow overflow-hidden mb-1">
                      <div className="nft-image position-relative overflow-hidden">
                        <img
                          src={data?.image_url}
                          className="img-fluid"
                          alt=""
                          style={{
                            height: "200px",
                            objectFit: "cover",
                            borderRadius: "8px",
                          }}
                        />
                        {/* <div className="position-absolute top-0 end-0 m-2">
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

                        {/* <div className="bid-btn">
                        <a
                          href="/item-detail-one"
                          onClick={(e) => {
                            e.preventDefault();
                            navigate("/item-detail-one");
                          }}
                          className="btn btn-pills"
                        >
                          <i className="mdi mdi-gavel fs-5 align-middle me-1"></i>{" "}
                          Bid
                        </a>
                      </div> */}
                      </div>

                      <div
                        className="card-body content position-relative"
                        style={{ padding: "10px" }}
                      >
                        {/* <div className="img-group">
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
                            className="avatar avatar-sm-sm img-thumbnail border-0 shadow-md rounded-circle"
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
                            className="avatar avatar-sm-sm img-thumbnail border-0 shadow-md rounded-circle"
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
                            className="avatar avatar-sm-sm img-thumbnail border-0 shadow-md rounded-circle"
                          />
                        </a>
                      </div> */}

                        <div className="">
                          <a
                            href=""
                            onClick={(e) => {
                              e.preventDefault();
                              navigate("/pitch-detail", {
                                state: { filter: data },
                              });
                            }}
                            className="title text-dark h6"
                          >
                            {data?.title}
                          </a>

                          <div
                            className="d-flex justify-content-between mt-2"
                            style={{ alignItems: "baseline" }}
                          >
                            <small
                              style={{
                                letterSpacing: 2,
                                fontSize: "12px",
                              }}
                            >
                              Price Range:
                              <small className="rate fw-bold">
                                {" "}
                                {data?.price_range}
                              </small>
                            </small>
                            <small
                              className=" fw-bold"
                              style={{ fontSize: "12px" }}
                            >
                              <i className="uil uil-calendar-alt text-dark h6 me-1"></i>
                              {moment(data?.createdAt).format("DD MMM YYYY")}
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              {/*end col*/}
            </div>
            {/*end row*/}

            {/*end row*/}
          </div>
        )}

        {/* Related Jobs */}
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
            {allJobs?.map((data, index) => {
              return (
                index < 3 && (
                  <div className="col-lg-4 col-md-6" key={data?.title}>
                    <div className="card blog blog-primary shadow rounded-md overflow-hidden">
                      <div
                        className="position-relative"
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <img
                          src={data?.image_url}
                          className="img-fluid rounded-md"
                          alt=""
                          style={{ height: "200px" }}
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
                          {data?.job_type}
                        </a>

                        <ul className="list-unstyled mt-2">
                          <li className="list-inline-item text-muted small me-3">
                            <i className="uil uil-calendar-alt text-dark h6 me-1"></i>
                            {moment(data?.createdAt).format("DD MMM YYYY")}
                          </li>
                        </ul>
                        <a
                          href={`/job-detail/${data?.id}`}
                          onClick={(e) => {
                            e.preventDefault();
                            navigate(`/job-detail/${data?.id}`);
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
                            href={`/job-detail/${data?.id}`}
                            onClick={(e) => {
                              e.preventDefault();
                              navigate(`/job-detail/${data?.id}`);
                            }}
                            className="btn btn-pills btn-soft-primary"
                          >
                            View Job
                          </a>

                          <span className="text-muted fs-6">
                            by{" "}
                            <a
                              href={`/creator-profile/${data?.user?.id}`}
                              onClick={(e) => {
                                e.preventDefault();
                                navigate(`/creator-profile/${data?.user?.id}`);
                              }}
                              className="link"
                            >
                              {data?.user?.first_name}
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              );
            })}

            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
      </section>
      {/*end section*/}
      {/* End Home */}
      {/* footer */}
      <Footer />
    </>
  );
};

export default MyProfile;
