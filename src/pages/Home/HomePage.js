/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { tns } from "tiny-slider/src/tiny-slider";
import Choices from "choices.js";
import Countdown from "react-countdown";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import {
  client01,
  client02,
  client03,
  client04,
  client05,
  client06,
  client07,
  client08,
  client09,
  client10,
  client11,
  client12,
  item1,
  item2,
  item3,
  item4,
  item5,
  item6,
  gif1,
  gif2,
  gif3,
  gif4,
  gif5,
  gif6,
  c1,
  c2,
  c3,
  c4,
  c5,
  c6,
  c7,
  c8,
  c9,
  c10,
  c11,
  c12,
  work1,
  work2,
  work3,
  work4,
  work5,
  work6,
  work7,
  work8,
  work9,
  work10,
  work11,
  work12,
  bg3,
  bg2,
  bg1,
  client13,
  banner,
  united,
  community,
  news1,
  news2,
  news3,
  news4,
  job1,
  job2,
  job3,
  defaultImage,
} from "../../components/imageImport";
import { FiArrowRight } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { getAllInfluencers } from "../../redux/dispatchers/influencers.dispatch";
import {
  getAllNews,
  getAllNewsByCategory,
} from "../../redux/dispatchers/news.dispatch";
import { getUpcomingBirthdays } from "../../redux/dispatchers/birthdays.dispatch";
import moment from "moment";

const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      document.getElementsByClassName("tiny-five-item-nav-arrow").length > 0
    ) {
      var slider6 = tns({
        container: ".tiny-five-item-nav-arrow",
        controls: true,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        controlsText: [
          '<i class="mdi mdi-chevron-left "></i>',
          '<i class="mdi mdi-chevron-right"></i>',
        ],
        nav: false,
        speed: 400,
        gutter: 10,
        responsive: {
          992: {
            items: 5,
          },

          767: {
            items: 3,
          },

          320: {
            items: 1,
          },
        },
      });
    }
  }, []);

  const [type, setType] = useState("All");

  const setFilter = (type) => {
    setType(type);
  };

  useEffect(() => {
    dispatch(getAllInfluencers());
    dispatch(getAllNewsByCategory("socialMediaNews"));
    dispatch(getAllNews());
    dispatch(getUpcomingBirthdays());
  }, []);

  const { allInfluencers } = useSelector((state) => state.influencer);
  const { allNewsByCategory, allNews } = useSelector((state) => state.news);
  const { upcomingBirthday } = useSelector((state) => state.upcoming);

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Start Home */}
      <section className="bg-half-100 d-table w-100 pb-0">
        <div className="container position-relative" style={{ zIndex: 1 }}>
          <div className="bg-half-100 rounded-md shadow-sm position-relative overflow-hidden">
            <div className="bg-video-wrapper">
              {/* <iframe src="https://www.youtube.com/watch?v=2zgNE31UUCs"></iframe> */}
              {/*Note: Vimeo Embed Background Video*/}

              {/* <iframe
                src="https://www.youtube.com/embed/2zgNE31UUCs?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1"
                allow="autoplay; loop; encrypted-media"
                allowfullscreen
              ></iframe> */}
              {/*Note: Youtube Embed Background Video*/}
              <img
                src={banner}
                style={{ height: "100%", width: "100%", objectFit: "contain" }}
              />
            </div>
            <div className="bg-overlay bg-linear-gradient-2"></div>
            <div className="row justify-content-center my-5">
              <div className="col-12">
                <div
                  className="title-heading text-center px-4"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    height: "150px",
                  }}
                >
                  {/* <h4
                    className="display-6 text-white title-dark fw-medium mb-3"
                    style={{ color: "tran" }}
                  >
                    Discover the perfect <br />
                    <span className="text-gradient-primary">
                      Influencer
                    </span>{" "}
                    for your brand.
                  </h4>
                  <p
                    className="text-white title-dark mb-0"
                    style={{ maxWidth: "50%" }}
                  >
                    Discover the perfect influencer for your brand. We help you
                    to connect with the right influencer for your brand.
                  </p> */}
                </div>
              </div>
              {/*end col*/}
            </div>
            {/*end row*/}
          </div>
        </div>
        {/*end container*/}
      </section>
      {/*end section*/}
      {/* End Home */}

      {/* Start */}
      <section className="section">
        {/* Banner & Search */}
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="features-absolute">
                <div className="row justify-content-center" id="reserve-form">
                  <div className="col-xl-10 mt-lg-5">
                    <div className="card bg-white feature-top border-0 shadow rounded p-3">
                      <form>
                        <div className="registration-form text-dark text-start">
                          <div
                            className="row g-lg-0"
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "flex-end",
                            }}
                          >
                            <div className="col-lg-3 col-md-6 search-bar-homepage">
                              <div className="filter-search-form position-relative filter-border">
                                <i className="uil uil-search icons"></i>
                                <input
                                  name="name"
                                  type="text"
                                  id="search-keyword"
                                  className="form-control filter-input-box bg-light border-0"
                                  placeholder="Search here..."
                                  style={{ borderRadius: "8px" }}
                                />
                              </div>
                            </div>
                            {/*end col*/}

                            {/* <div className="col-lg-3 col-md-6 mt-3 mt-md-0">
                              <div className="filter-search-form position-relative filter-border">
                                <i className="uil uil-usd-circle icons"></i>
                                <select
                                  className="form-select"
                                  data-trigger
                                  name="choices-criteria"
                                  id="choices-criteria"
                                  aria-label="Default select example"
                                  defaultValue={"Auction Product"}
                                >
                                  <option value="1">Auction Product</option>
                                  <option value="2">On Sale</option>
                                  <option value="3">Offers</option>
                                </select>
                              </div>
                            </div> */}
                            {/*end col*/}

                            {/* <div className="col-lg-3 col-md-6 mt-3 mt-lg-0">
                              <div className="filter-search-form position-relative filter-border">
                                <i className="uil uil-window icons"></i>
                                <select
                                  className="form-select "
                                  data-trigger
                                  name="choices-type"
                                  id="choices-type"
                                  aria-label="Default select example"
                                  defaultValue={"Art"}
                                >
                                  <option value="1">Art</option>
                                  <option value="2">Games</option>
                                  <option value="3">Music</option>
                                  <option value="4">Videos</option>
                                  <option value="5">Memes</option>
                                </select>
                              </div>
                            </div> */}
                            {/*end col*/}

                            <div className="col-lg-3 col-md-6 mt-3 mt-lg-0 search-btn-homepage">
                              <input
                                type="submit"
                                id="search"
                                name="search"
                                style={{ height: 60 }}
                                className="btn btn-primary rounded-md searchbtn submit-btn w-100"
                                value="Search"
                              />
                            </div>
                            {/*end col*/}
                          </div>
                          {/*end row*/}
                        </div>
                        {/*end container*/}
                      </form>
                    </div>
                  </div>
                  {/*ed col*/}
                </div>
                {/*end row*/}
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}

        {/* Trending */}
        <div className="container mt-50 mt-60">
          <div className="row align-items-end mb-4 pb-2">
            <div className="col-md-8">
              <div className="section-title">
                <h4 className="title mb-2">Trending Creators & Influencers</h4>
                <p className="text-muted mb-0">Best influencers of the week</p>
              </div>
            </div>
            {/*end slide*/}

            <div className="col-md-4">
              <div className="text-end d-md-block d-none">
                <a
                  href="/creators"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/creators");
                  }}
                  className="btn btn-link primary text-dark"
                >
                  See More <i className="uil uil-arrow-right"></i>
                </a>
              </div>
            </div>
            {/*end slide*/}
          </div>
          {/*end row*/}

          <div className="row">
            <div className="col-12 mt-3">
              <div className="tiny-five-item-nav-arrow">
                {allInfluencers?.map((data, index) => {
                  return (
                    <div
                      className="tiny-slide"
                      key={index}
                      style={{ cursor: "pointer" }}
                    >
                      <div className="card creators creators-two creator-primary rounded-md shadow overflow-hidden mx-2 my-3">
                        <div
                          className="py-5"
                          style={{ background: `url(${work8})` }}
                        ></div>
                        <div className="position-relative mt-n5">
                          {data?.avatar === null ? (
                            <img
                              src={defaultImage}
                              className="avatar avatar-md-md rounded-pill shadow-sm bg-light img-thumbnail mx-auto d-block"
                              alt=""
                              onClick={(e) => {
                                e.preventDefault();
                                navigate("/creator-profile");
                              }}
                            />
                          ) : (
                            <img
                              src={data?.avatar}
                              className="avatar avatar-md-md rounded-pill shadow-sm bg-light img-thumbnail mx-auto d-block"
                              alt=""
                              onClick={(e) => {
                                e.preventDefault();
                                navigate("/creator-profile");
                              }}
                              style={{ objectFit: "contain" }}
                            />
                          )}

                          <div className="content text-center pt-2 p-2">
                            <a
                              href="/creator-profile"
                              onClick={(e) => {
                                e.preventDefault();
                                navigate("/creator-profile");
                              }}
                              className="text-dark h6 name d-block mb-0"
                            >
                              {data?.first_name}
                            </a>
                            {data?.display_name && (
                              <small className="text-muted">
                                @{data?.display_name}
                              </small>
                            )}
                            <br />
                            <p
                              style={{
                                marginTop: "10px",
                                color: "#b5bdc9",
                                display: "-webkit-box",
                                WebkitBoxOrient: "vertical",
                                WebkitLineClamp: 2,
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                              }}
                            >
                              {data?.bio}
                            </p>

                            {/* <div className="mt-3">
                              <a
                                href=""
                                onClick={(e) => e.preventDefault()}
                                className="btn btn-pills btn-soft-primary"
                              >
                                Follow
                              </a>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
                {/*end slide*/}
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}

          <div className="row">
            <div className="col">
              <div className="text-center d-md-none d-block">
                <a
                  href="/creators"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/creators");
                  }}
                  className="btn btn-link primary text-dark"
                >
                  See More <i className="uil uil-arrow-right"></i>
                </a>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}

        {/* <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="section-title text-center mb-4 pb-2">
                <h4 className="title mb-2">Popular Brands</h4>
                <p className="text-muted mb-0">
                  Explore the popular brands and their collections
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            {collectionData?.map((data, index) => {
              return (
                <div className="col-lg-4 col-md-6 mt-4 pt-2" key={data?.title}>
                  <div className="card bg-white collections collection-primary rounded-md shadow p-2 pb-0">
                    <div className="row g-2">
                      <div className="col-12">
                        <img
                          src={data?.img1}
                          className="img-fluid shadow-sm rounded-md"
                          alt=""
                        />
                      </div>

                      <div className="col-4">
                        <img
                          src={data?.img2}
                          className="img-fluid shadow-sm rounded-md"
                          alt=""
                        />
                      </div>

                      <div className="col-4">
                        <img
                          src={data?.img3}
                          className="img-fluid shadow-sm rounded-md"
                          alt=""
                        />
                      </div>

                      <div className="col-4">
                        <img
                          src={data?.img4}
                          className="img-fluid shadow-sm rounded-md"
                          alt=""
                        />
                      </div>
                    </div>

                    <div className="content text-center p-4 mt-n5">
                      <div className="position-relative d-inline-flex">
                        <img
                          src={data?.client}
                          className="avatar avatar-small rounded-pill img-thumbnail shadow-md"
                          alt=""
                        />
                        <span className="verified text-primary">
                          <i className="mdi mdi-check-decagram"></i>
                        </span>
                      </div>

                      <div className="mt-2">
                        <a
                          href="/explore-four"
                          onClick={(e) => {
                            e.preventDefault();
                            navigate("/explore-four");
                          }}
                          className="text-dark title h5"
                        >
                          {data?.title}
                        </a>

                        <p className="text-muted mb-0 small">27 Items</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div> */}
        {/*end container*/}

        {/* Creator News */}
        {allNews?.filter((data) => data?.category === "InfluencerNews")
          ?.length > 0 && (
          <div className="container mt-100 mt-60">
            <div className="row justify-content-center">
              <div className="col">
                <div className="section-title mb-5 pb-3">
                  <h4 className="title mb-4">Creator News</h4>
                  <p
                    className="text-muted para-desc mb-0 mx-auto"
                    style={{ maxWidth: "100%" }}
                  >
                    Influencer Is a Real Job. It’s Time to Act Like It and own
                    it
                  </p>
                </div>
              </div>
              {/*end col*/}
            </div>
            {/*end row*/}

            <div className="row g-4">
              {allNews
                ?.filter((data) => data?.category === "InfluencerNews")
                ?.map((data) => {
                  return (
                    <div className="col-lg-4 col-md-6" key={data?.type}>
                      <div className="card blog blog-primary shadow rounded-md overflow-hidden">
                        <div className="position-relative">
                          <img
                            src={data?.image_url}
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
                            onClick={(e) => e.preventDefault()}
                            className="badge tag gradient rounded-md fw-bold"
                          >
                            Influencer
                          </a>

                          <ul className="list-unstyled mt-2">
                            <li className="list-inline-item text-muted small me-3">
                              <i className="uil uil-calendar-alt text-dark h6 me-1"></i>
                              {moment(data?.date).format("DD MMMM, YYYY")}
                            </li>
                            <li className="list-inline-item text-muted small">
                              <i className="uil uil-clock text-dark h6 me-1"></i>
                              5 min read
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
                            <a
                              href={`/blog-detail/${data?.id}`}
                              onClick={(e) => {
                                e.preventDefault();
                                navigate(`/blog-detail/${data?.id}`);
                              }}
                              className="btn btn-link text-muted"
                            >
                              Read more <FiArrowRight className="fea icon-sm" />
                            </a>
                            {/* <span className="text-muted fs-6">
                            by{" "}
                            <a
                              href="/creator-profile"
                              onClick={(e) => {
                                e.preventDefault();
                                navigate("/creator-profile");
                              }}
                              className="link"
                            >
                              @{data?.createdBy}
                            </a>
                          </span> */}
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
        )}
        {/*end container*/}

        {/* Social Media News */}
        {allNewsByCategory?.length > 0 && (
          <div className="container mt-100 mt-60">
            <div className="row justify-content-center">
              <div className="col">
                <div className="section-title mb-4 pb-2">
                  <h4 className="title mb-4">Social Media News</h4>
                  <p className="text-muted para-desc mb-0 ">
                    Check out the latest news and updates from our social media
                  </p>
                </div>
              </div>
              {/*end col*/}
            </div>
            {/*end row*/}

            <div className="row justify-content-center mb-5">
              <div className="col filters-group-wrap">
                <div className="filters-group">
                  <ul className="container-filter mb-0 categories-filter list-unstyled">
                    <li
                      className={`list-inline-item categories position-relative text-dark ${
                        type === "All" ? "active" : ""
                      }`}
                      // data-group="games"
                      onClick={() => setFilter("All")}
                    >
                      All
                    </li>
                    <li
                      className={`list-inline-item categories position-relative text-dark ${
                        type === "Facebook" ? "active" : ""
                      }`}
                      onClick={() => setFilter("Facebook")}
                    >
                      <i className="uil uil-facebook-f"></i> Facebook
                    </li>
                    <li
                      className={`list-inline-item categories position-relative text-dark ${
                        type === "Instagram" ? "active" : ""
                      }`}
                      onClick={() => setFilter("Instagram")}
                    >
                      <i className="uil uil-instagram"></i> Instagram
                    </li>
                    <li
                      className={`list-inline-item categories position-relative text-dark ${
                        type === "TikTok" ? "active" : ""
                      }`}
                      onClick={() => setFilter("TikTok")}
                    >
                      <i className="uil uil-music"></i> TikTok
                    </li>
                    <li
                      className={`list-inline-item categories position-relative text-dark ${
                        type === "Twitter" ? "active" : ""
                      }`}
                      onClick={() => setFilter("Twitter")}
                    >
                      <i className="uil uil-twitter"></i> Twitter
                    </li>
                  </ul>
                </div>
              </div>
              {/*end col*/}
            </div>
            {/*end row*/}

            <div className="row g-4">
              {allNewsByCategory
                ?.filter((data) => data?.socialMediaNewsType?.includes(type))
                ?.map((data, index) => {
                  return (
                    <div className="col-lg-4 col-md-6" key={index}>
                      <div className="card blog blog-primary shadow rounded-md overflow-hidden">
                        <div className="position-relative">
                          <img
                            src={data?.image_url}
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
                          {/* <a
                          href=""
                          className="badge tag gradient rounded-md fw-bold"
                        >
                          {data?.type[1]}
                        </a> */}

                          <ul className="list-unstyled mt-2">
                            <li className="list-inline-item text-muted small me-3">
                              <i className="uil uil-calendar-alt text-dark h6 me-1"></i>
                              {moment(data?.date).format("DD MMMM, YYYY")}
                            </li>
                            <li className="list-inline-item text-muted small">
                              <i className="uil uil-clock text-dark h6 me-1"></i>
                              5 min read
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
                            <a
                              href={`/blog-detail/${data?.id}`}
                              onClick={(e) => {
                                e.preventDefault();
                                navigate(`/blog-detail/${data?.id}`);
                              }}
                              className="btn btn-link text-muted"
                            >
                              Read more <FiArrowRight className="fea icon-sm" />
                            </a>
                            {/* <span className="text-muted fs-6">
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
                          </span> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}

              {/*end col*/}
            </div>
          </div>
        )}
        {/*end container*/}

        {/* Event News */}
        <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
            <div className="col">
              <div className="col">
                <div className="section-title mb-4 pb-2">
                  <h4 className="title mb-4">Event News</h4>
                  <p className="text-muted para-desc mb-0 ">
                    Check out the latest news and updates from our events
                  </p>
                </div>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}

          <div className="row g-4">
            {allNews
              ?.filter((data) => data?.category === "eventNews")
              ?.map((data, index) => {
                return (
                  <div className="col-lg-4 col-md-6" key={index}>
                    <div className="card blog blog-primary shadow rounded-md overflow-hidden">
                      <div
                        className="position-relative"
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <img
                          src={data?.image_url}
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
                        <ul className="list-unstyled mt-2">
                          <li className="list-inline-item text-muted small me-3">
                            <i className="uil uil-calendar-alt text-dark h6 me-1"></i>

                            {moment(data?.date).format("DD MMMM, YYYY")}
                          </li>
                          <li className="list-inline-item text-muted small">
                            <i className="uil uil-clock text-dark h6 me-1"></i>5
                            min read
                          </li>
                        </ul>
                        <a
                          href={`/blog-detail/${data?.id}`}
                          onClick={(e) => {
                            e.preventDefault();
                            navigate(`/blog-detail/${data?.id}`);
                          }}
                          className="text-dark title h5 mt-3"
                        >
                          {data?.title}
                        </a>

                        <div className="mt-3 d-flex justify-content-between align-items-center">
                          <a
                            href={`/blog-detail/${data?.id}`}
                            onClick={(e) => {
                              e.preventDefault();
                              navigate(`/blog-detail/${data?.id}`);
                            }}
                            className="btn btn-link text-muted"
                          >
                            Read more <FiArrowRight className="fea icon-sm" />
                          </a>
                          {/* <span className="text-muted fs-6">
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
                        </span> */}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

            {/*end col*/}
          </div>

          {/* <div className="row ">
            <div className="col-md-6 mt-4 pt-2">
              <div
                className="card p-4 rounded-md shadow bg-white"
                style={{ textAlign: "left !important" }}
              >import { getAllNews } from './../../redux/dispatchers/news.dispatch';
import { getUpcomingBirthdays } from './../../redux/dispatchers/birthdays.dispatch';

                <h4 className="mb-4">Join our community</h4>
                <p className="text-muted mb-0">
                  We are a huge marketplace dedicated to connecting great
                  artists of all Superex.
                </p>
                <div className="mt-3">
                  <a
                    href="/aboutus"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/aboutus");
                    }}
                    className="btn btn-link primary text-dark"
                  >
                    Read More <i className="uil uil-arrow-right"></i>
                  </a>
                </div>
                <div className="py-4"></div>
                <div className="position-absolute bottom-0 end-0">
                  <img
                    src={community}
                    className="avatar avatar-medium opacity-05"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="col-md-6 mt-4 pt-2">
              <div className="card p-4 rounded-md shadow bg-white">
                <h4 className="mb-4">Learn more about Superex</h4>
                <p className="text-muted mb-0">
                  We are a huge marketplace dedicated to connecting great
                  artists of all Superex.
                </p>

                <div className="mt-3">
                  <a
                    href="/aboutus"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/aboutus");
                    }}
                    className="btn btn-link primary text-dark"
                  >
                    Read More <i className="uil uil-arrow-right"></i>
                  </a>
                </div>
                <div className="py-4"></div>
                <div className="position-absolute bottom-0 end-0">
                  <img
                    src={united}
                    className="avatar avatar-medium opacity-05"
                    alt=""
                  />
                </div>
              </div>
            </div>       
          </div> */}
        </div>

        {/* Upcoming Bd */}
        <div className="container mt-100 mt-60">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <h4 className="title mb-2">Upcoming Birthdays</h4>
                <p className="text-muted mb-0">
                  upcoming birthdays of the creators and influencers
                </p>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}

          <div className="row">
            {upcomingBirthday?.map((data, index) => {
              return (
                <div className="col-lg-3 col-md-4 mt-5" key={data?.name}>
                  <div className="creators creator-primary d-flex align-items-center">
                    <span className="fw-bold text-muted">{index + 1}.</span>

                    <div className="d-flex align-items-center ms-3">
                      <div className="position-relative d-inline-flex">
                        <img
                          src={data?.avatar}
                          className="avatar avatar-md-sm shadow-md rounded-pill"
                          alt=""
                          style={{ objectFit: "contain" }}
                        />
                        {data?.verified && (
                          <>
                            <span className="verified text-primary">
                              <i className="mdi mdi-check-decagram"></i>
                            </span>
                            {/* <span className="online text-success">
                              <i className="mdi mdi-circle"></i>
                            </span> */}
                          </>
                        )}
                      </div>

                      <div className="ms-3">
                        <h6 className="mb-0">
                          <a
                            href={`/creator-profile/${data?.id}`}
                            onClick={(e) => {
                              e.preventDefault();
                              navigate(`/creator-profile/${data?.id}`);
                            }}
                            className="text-dark name"
                          >
                            {data?.first_name}
                          </a>
                        </h6>
                        <small className="text-muted">
                          {moment(data?.dob).format("DD MMMM YYYY")}
                        </small>
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
      {/* End */}
      {/* footer */}
      <Footer />

      {/* Style switcher  */}
      {/* <StyleSwitcher /> */}
    </>
  );
};

export default HomePage;
