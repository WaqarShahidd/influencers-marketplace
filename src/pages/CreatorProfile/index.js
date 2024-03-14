/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FiArrowRight, FiCamera } from "react-icons/fi";
import Countdown from "react-countdown";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import StyleSwitcher from "../../components/StyleSwitcher";
import {
  client01,
  client02,
  client03,
  client04,
  client05,
  client06,
  client08,
  client10,
  client12,
  client13,
  gif1,
  gif2,
  gif3,
  gif4,
  gif5,
  gif6,
  item1,
  item2,
  item3,
  item4,
  item5,
  item6,
  item7,
  item8,
  item9,
  item10,
  single,
  ofcDesk,
  prodToCard,
  work1,
  profileIcon1,
  profileIcon2,
  profileIcon3,
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

const CreateProfile = () => {
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
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllWork(userData?.id));
  }, []);

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Start Home */}
      <section className="bg-creator-profile">
        {/* Profile View */}
        <div className="container">
          <div className="row">
            <div
              style={{ width: "35%" }}
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

                    {parseInt(id) !== userData?.id && (
                      <div className="mt-3">
                        <a
                          href=""
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                          className="btn btn-pills btn-soft-primary"
                        >
                          Follow
                        </a>
                      </div>
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
                    }}
                  >
                    <img src={profileIcon2} style={{ height: 20, width: 20 }} />
                    <p
                      style={{
                        lineHeight: 1,
                        fontWeight: "600",
                        marginLeft: "5px",
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

            {allWorks?.length > 0 && (
              <div
                style={{
                  width: "65%",
                  borderRadius: "10px",
                  padding: "20px",
                  paddingTop: "0px",
                }}
                className="col-lg-9 col-md-8 order-1 order-md-2"
              >
                <h2 className="title" style={{ fontWeight: "bold" }}>
                  Your Work
                </h2>
                {allWorks?.map((data, index) => (
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
                            {data?.type}
                          </p>
                          <li className="list-inline-item text-muted small me-3">
                            <i className="uil uil-calendar-alt text-dark h6 me-1"></i>
                            {moment(data?.created_at).format("DD MMM YYYY")}
                          </li>
                        </div>
                        <h5 className="mb-0">{data?.title}</h5>
                        <p className="text-muted mt-3 mb-0">
                          {data?.description}
                        </p>
                        <p style={{ marginTop: "10px" }}>
                          Audience Engagement:{"  "}
                          <a className="link fw-semibold">
                            {data?.audience_enagagement}
                          </a>
                        </p>
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
            {/*end col*/}
          </div>
        </div>

        {/* Extra */}
        {/* <div className="container">
          <div className="profile-banner">
            <input
              id="pro-banner"
              name="profile-banner"
              type="file"
              className="d-none"
              onChange={(e) => loadFile(e)}
            />
            <div className="position-relative d-inline-block">
              <img
                src={single}
                className="rounded-md shadow-sm img-fluid"
                id="profile-banner"
                alt=""
              />
              <label
                className="icons position-absolute bottom-0 end-0"
                htmlFor="pro-banner"
              >
                <span className="btn btn-icon btn-sm btn-pills btn-primary">
                  <FiCamera className="icons" />
                </span>
              </label>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col">
              <div className="text-center mt-n80">
                <div className="profile-pic">
                  <input
                    id="pro-img"
                    name="profile-image"
                    type="file"
                    className="d-none"
                    onChange={(e) => loadFile(e)}
                  />
                  <div className="position-relative d-inline-block">
                    <img
                      src={client01}
                      className="avatar avatar-medium img-thumbnail rounded-pill shadow-sm"
                      id="profile-image"
                      alt=""
                    />
                    <label
                      className="icons position-absolute bottom-0 end-0"
                      htmlFor="pro-img"
                    >
                      <span className="btn btn-icon btn-sm btn-pills btn-primary">
                        <FiCamera className="icons" />
                      </span>
                    </label>
                  </div>
                </div>

                <div className="content mt-3">
                  <h5 className="mb-3">streetboyyy</h5>
                  <small className="text-muted px-2 py-1 rounded-lg shadow">
                    bhcedeh5sdijuj-husac4saiu{" "}
                    <a
                      href=""
                      onClick={(e) => e.preventDefault()}
                      className="text-primary h5 ms-1"
                    >
                      <i className="uil uil-copy"></i>
                    </a>
                  </small>

                  <h6 className="mt-3 mb-0">
                    Artist, UX / UI designer, and Entrepreneur
                  </h6>

                  <div className="mt-4">
                    <a
                      href="/creator-profile-edit"
                      onClick={(e) => {
                        e.preventDefault();
                        navigate("/creator-profile-edit");
                      }}
                      className="btn btn-pills btn-outline-primary mx-1"
                    >
                      Edit Profile
                    </a>
                    <a
                      href="/upload-work"
                      onClick={(e) => {
                        e.preventDefault();
                        navigate("/upload-work");
                      }}
                      className="btn btn-pills btn-icon btn-outline-primary mx-1"
                    >
                      <i className="uil uil-folder-upload"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-100 mt-60">
          <div className="row">
            <div className="col-12">
              <ul
                className="nav nav-tabs border-bottom"
                id="myTab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="Create-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#CreateItem"
                    type="button"
                    role="tab"
                    aria-controls="CreateItem"
                    aria-selected="true"
                  >
                    Created
                  </button>
                </li>

                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="Liked-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#Liked"
                    type="button"
                    role="tab"
                    aria-controls="Liked"
                    aria-selected="false"
                  >
                    Liked
                  </button>
                </li>

                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="Sale-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#Sale"
                    type="button"
                    role="tab"
                    aria-controls="Sale"
                    aria-selected="false"
                  >
                    On Sale
                  </button>
                </li>

                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="Collection-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#Collection"
                    type="button"
                    role="tab"
                    aria-controls="Collection"
                    aria-selected="false"
                  >
                    Collection
                  </button>
                </li>

                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="Activites-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#Activites"
                    type="button"
                    role="tab"
                    aria-controls="Activites"
                    aria-selected="false"
                  >
                    Activites
                  </button>
                </li>

                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="Followers-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#Followers"
                    type="button"
                    role="tab"
                    aria-controls="Followers"
                    aria-selected="false"
                  >
                    Followers
                  </button>
                </li>

                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="About-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#About"
                    type="button"
                    role="tab"
                    aria-controls="About"
                    aria-selected="false"
                  >
                    About
                  </button>
                </li>
              </ul>

              <div className="tab-content mt-4 pt-2" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="CreateItem"
                  role="tabpanel"
                  aria-labelledby="Create-tab"
                >
                  <div className="row row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1 g-4">
                    {createdData?.map((data) => (
                      <div className="col" key={data?.title}>
                        <div className="card nft-items nft-primary rounded-md shadow overflow-hidden mb-1 p-3">
                          <div className="d-flex justify-content-between">
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
                          </div>

                          <div className="nft-image rounded-md mt-3 position-relative overflow-hidden">
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
                                  GIFs
                                </a>
                              </div>
                            )}
                            <div
                              className={`${
                                data?.id ? "" : "hide-data"
                              } position-absolute bottom-0 start-0 m-2 bg-gradient-primary text-white title-dark rounded-pill px-3`}
                            >
                              <i className="uil uil-clock"></i>
                              <Countdown
                                date={data?.id}
                                renderer={({
                                  days,
                                  hours,
                                  minutes,
                                  seconds,
                                }) => (
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

                            <div className="d-flex justify-content-between mt-2">
                              <small className="rate fw-bold">20.5 ETH</small>
                              <small className="text-dark fw-bold">
                                1 out of 10
                              </small>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="Liked"
                  role="tabpanel"
                  aria-labelledby="Liked-tab"
                >
                  <div className="row justify-content-center">
                    <div className="col-lg-5 col-md-8 text-center">
                      <img src={ofcDesk} className="img-fluid" alt="" />

                      <div className="content">
                        <h5 className="mb-4">No Items</h5>
                        <p className="text-muted">
                          Show your appreciation for other's work by liking the
                          shots you love. We'll collect all of your likes here
                          for you to revisit anytime.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="Sale"
                  role="tabpanel"
                  aria-labelledby="Sale-tab"
                >
                  <div className="row row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1 g-4">
                    {onSaleData?.map((onSale, index) => (
                      <div className="col" key={index}>
                        <div className="card nft-items nft-primary nft-auction rounded-md shadow overflow-hidden mb-1 p-3">
                          <div className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                              <img
                                src={client01}
                                alt="user"
                                className="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle"
                              />
                              <a
                                href=""
                                onClick={(e) => e.preventDefault()}
                                className="text-dark small creator-name h6 mb-0 ms-2"
                              >
                                @StreetBoyyy
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
                              <img
                                src={onSale?.image}
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                            <div className="position-absolute top-0 start-0 m-2">
                              <a
                                href=""
                                onClick={(e) => e.preventDefault()}
                                className="badge badge-link bg-primary"
                              >
                                {onSale?.type}
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
                              {onSale?.title}
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
                    ))}
                  </div>
                </div>
                <div
                  className="tab-pane fade "
                  id="Collection"
                  role="tabpanel"
                  aria-labelledby="Collection-tab"
                >
                  <div className="row justify-content-center">
                    <div className="col-lg-5 col-md-8 text-center">
                      <img src={prodToCard} className="img-fluid" alt="" />

                      <div className="content mt-4">
                        <h5 className="mb-4">No Collection</h5>
                        <p className="text-muted">
                          Save interesting shots into personalized collections,
                          and discover new and interesting recommendations along
                          the way.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="Followers"
                  role="tabpanel"
                  aria-labelledby="Followers-tab"
                >
                  <h5 className="mb-4">{followerData?.length} Followers</h5>
                  <div className="row g-4">
                    {followerData?.map((data) => {
                      return (
                        <div className="col-md-6" key={data?.name}>
                          <div className="p-4 rounded-md shadow users user-primary">
                            <div className="d-flex align-items-center">
                              <div className="position-relative">
                                <img
                                  src={data?.image}
                                  className="avatar avatar-md-md rounded-pill shadow-sm img-thumbnail"
                                  alt=""
                                />
                                <div className="position-absolute bottom-0 end-0">
                                  <a
                                    href=""
                                    onClick={(e) => e.preventDefault()}
                                    className="btn btn-icon btn-pills btn-sm btn-primary"
                                  >
                                    <i className="uil uil-plus"></i>
                                  </a>
                                </div>
                              </div>

                              <div className="content ms-3">
                                <h6 className="mb-0">
                                  <a
                                    href="/creator-profile"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      navigate("/creator-profile");
                                    }}
                                    className="text-dark name"
                                  >
                                    CutieGirl
                                  </a>
                                </h6>
                                <small className="text-muted d-flex align-items-center">
                                  <i className="uil uil-map-marker fs-5 me-1"></i>{" "}
                                  {data?.location}
                                </small>
                              </div>
                            </div>

                            <div className="border-top my-4"></div>
                            <div className="row row-cols-xl-6 g-3">
                              {data?.subMenu?.map((sub, index) => (
                                <div className="col" key={index * 10}>
                                  <a
                                    href="/item-detail-one"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      navigate("/item-detail-one");
                                    }}
                                    className="user-item"
                                  >
                                    <img
                                      src={sub}
                                      className="img-fluid rounded-md shadow-sm"
                                      alt=""
                                    />
                                  </a>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="Activites"
                  role="tabpanel"
                  aria-labelledby="Activites-tab"
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
                                  {data?.favorite === "Started Following" ? (
                                    <i className="mdi mdi-account-check mdi-18px text-success"></i>
                                  ) : data?.favorite === "Liked by" ? (
                                    <i className="mdi mdi-heart mdi-18px text-danger"></i>
                                  ) : (
                                    <i className="mdi mdi-format-list-bulleted mdi-18px text-warning"></i>
                                  )}
                                </div>
                                <div className="position-absolute top-0 start-0 translate-middle px-1 rounded-lg shadow-md bg-white"></div>
                                <div className="position-absolute top-0 start-0 translate-middle px-1 rounded-lg shadow-md bg-white"></div>
                              </div>

                              <span className="content ms-3">
                                <a
                                  href=""
                                  onClick={(e) => e.preventDefault()}
                                  className="text-dark title mb-0 h6 d-block"
                                >
                                  {data?.title}
                                </a>
                                <small className="text-muted d-block mt-1">
                                  {data?.favorite}
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
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="About"
                  role="tabpanel"
                  aria-labelledby="About-tab"
                >
                  <h5 className="mb-4">Calvin Carlo</h5>

                  <p className="text-muted mb-0">
                    I have started my career as a trainee and prove my self and
                    achieve all the milestone with good guidance and reach up to
                    the project manager. In this journey, I understand all the
                    procedure which make me a good developer, team leader, and a
                    project manager.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* Popular Content */}
        <div className="container">
          <h1
            className="title"
            style={{
              marginTop: "45px",
              textAlign: "center",
              fontWeight: "bolder",
              marginBottom: "20px",
            }}
          >
            Popular Content
          </h1>

          <div className="row justify-content-center mb-4 pb-2">
            <div className="col filters-group-wrap">
              <div className="filters-group">
                <ul className="container-filter mb-0 categories-filter text-center list-unstyled">
                  <li
                    className={`list-inline-item categories position-relative text-dark ${
                      type === "all" ? "active" : ""
                    }`}
                    // data-group="all"
                    onClick={() => setFilter("all")}
                  >
                    <i className="uil uil-browser"></i> All
                  </li>
                  <li
                    className={`list-inline-item categories position-relative text-dark ${
                      type === "games" ? "active" : ""
                    }`}
                    // data-group="games"
                    onClick={() => setFilter("games")}
                  >
                    <i className="uil uil-facebook-f"></i> Facebook
                  </li>
                  <li
                    className={`list-inline-item categories position-relative text-dark ${
                      type === "art" ? "active" : ""
                    }`}
                    // data-group="art"
                    onClick={() => setFilter("art")}
                  >
                    <i className="uil uil-instagram"></i> Instagram
                  </li>
                  <li
                    className={`list-inline-item categories position-relative text-dark ${
                      type === "music" ? "active" : ""
                    }`}
                    // data-group="music"
                    onClick={() => setFilter("music")}
                  >
                    <i className="uil uil-twitter"></i> Twitter
                  </li>
                  <li
                    className={`list-inline-item categories position-relative text-dark ${
                      type === "video" ? "active" : ""
                    }`}
                    // data-group="video"
                    onClick={() => setFilter("video")}
                  >
                    <i className="uil uil-youtube"></i> Youtube
                  </li>
                </ul>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}

          <div
            className="row row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 g-4"
            id="grid"
          >
            {allData?.map((data) => {
              return (
                <div className="col picture-item" key={data?.title}>
                  <div className="card nft-items nft-primary rounded-md shadow overflow-hidden mb-1">
                    <div className="nft-image position-relative overflow-hidden">
                      <img src={data?.image} className="img-fluid" alt="" />
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
                          href="/item-detail-one"
                          onClick={(e) => {
                            e.preventDefault();
                            navigate("/item-detail-one");
                          }}
                          className="title text-dark h6"
                        >
                          Content Title
                        </a>

                        <div className="d-flex justify-content-between mt-2">
                          <small
                            className="rate fw-bold"
                            style={{
                              letterSpacing: 2,
                              fontSize: "14px",
                            }}
                          >
                            Influencer
                          </small>
                          <small
                            className=" fw-bold"
                            style={{ fontSize: "12px" }}
                          >
                            <i className="uil uil-calendar-alt text-dark h6 me-1"></i>
                            20th January, 2022
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
            {blogList?.map((data, index) => {
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
      </section>
      {/*end section*/}
      {/* End Home */}
      {/* footer */}
      <Footer />
    </>
  );
};

export default CreateProfile;
