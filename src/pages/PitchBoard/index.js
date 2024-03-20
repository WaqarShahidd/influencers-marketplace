/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { bg01 } from "../../components/imageImport";
import { useDispatch, useSelector } from "react-redux";
import { getAllPitches } from "../../redux/dispatchers/pitch.dispatch";
import moment from "moment";
import { Backdrop, CircularProgress, useMediaQuery } from "@mui/material";

const PitchBoard = () => {
  const navigate = useNavigate();

  const isMobile = useMediaQuery("(max-width:767px)");

  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  const { allJobs } = useSelector((state) => state.jobs);
  const { allPitches } = useSelector((state) => state.pitch);

  useEffect(() => {
    dispatch(getAllPitches());
  }, []);

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
                  Pitch Board
                </h5>
                <p className="text-white-50 para-desc mx-auto mb-0">
                  Post your pitch board. Let the world know about your project.
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
                    href="/index"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/index");
                    }}
                  >
                    Faimos
                  </a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Explore
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

      {/* Start */}
      <section className="section">
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
                                  value={search}
                                  onChange={(e) => setSearch(e.target.value)}
                                />
                              </div>
                            </div>
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
        <div
          className="row g-4"
          style={{ marginRight: "5%", marginLeft: "5%" }}
        >
          {allPitches
            ?.filter((val) =>
              val?.title.toLowerCase().includes(search.toLowerCase())
            )
            ?.map((data) => {
              return (
                <div className="col-12" key={data?.title}>
                  <div className="card activity activity-primary rounded-md shadow p-4">
                    <div className="d-flex align-items-center">
                      <div
                        className="position-relative"
                        style={{ alignSelf: "flex-start", marginTop: "7.5px" }}
                      >
                        <img
                          src={data?.image_url}
                          className="avatar avatar-md-md rounded-md shadow-md"
                          alt=""
                          style={{
                            width: isMobile ? "175px" : "250px",
                            height: "175px",
                            objectFit: "cover",
                          }}
                        />

                        {/* <div className="position-absolute top-0 start-0 translate-middle px-1 rounded-lg shadow-md bg-white">
                        {data?.favorite === "Started Following" ? (
                          <i className="mdi mdi-account-check mdi-18px text-success"></i>
                        ) : data?.favorite === "Liked by" ? (
                          <i className="mdi mdi-heart mdi-18px text-danger"></i>
                        ) : (
                          <i className="mdi mdi-format-list-bulleted mdi-18px text-warning"></i>
                        )}
                      </div> */}
                        <div className="position-absolute top-0 start-0 translate-middle px-1 rounded-lg shadow-md bg-white"></div>
                        <div className="position-absolute top-0 start-0 translate-middle px-1 rounded-lg shadow-md bg-white"></div>
                      </div>

                      <span className="content" style={{ marginLeft: "30px" }}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <a
                            // href="/item-detail-one"
                            onClick={(e) => {
                              e.preventDefault();
                              navigate("/pitch-detail", {
                                state: { filter: data },
                              });
                            }}
                            className="text-dark title d-block"
                            style={{
                              fontSize: "24px",
                              marginBottom: "10px",
                              cursor: "pointer",
                            }}
                          >
                            {data?.title}
                          </a>
                          <a
                            href=""
                            className="badge tag pitch-gradient rounded-md fw-bold"
                          >
                            Pitch
                          </a>
                        </div>
                        <small
                          className="text-muted d-block"
                          style={{
                            marginTop: "10px",
                            marginBottom: "10px",
                          }}
                        >
                          Price Range:{" "}
                          <a
                            href=""
                            onClick={(e) => e.preventDefault()}
                            className="link fw-bold"
                            style={{ cursor: "default" }}
                          >
                            {data?.price_range}
                          </a>
                        </small>
                        <span
                          className="creative-idea"
                          style={{
                            marginTop: "10px",
                            display: "-webkit-box",
                            WebkitBoxOrient: "vertical",
                            WebkitLineClamp: 2,
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {data?.creative_idea}
                        </span>

                        <small className="text-muted d-block mt-3 mb-3">
                          {data?.user?.first_name}
                          {"   "}
                          <a
                            href=""
                            onClick={(e) => {
                              e.preventDefault();
                              navigate(`/creator-profile/${data?.user?.id}`);
                            }}
                            className="link fw-bold"
                          >
                            @{data?.user?.display_name}
                          </a>
                          {"  "}&#8226;{"     "}
                          {"  "}
                          {moment(data?.createdAt).fromNow()}
                        </small>
                        <div className="social-icons">
                          {data?.user?.facebook_url && (
                            <a
                              href="#"
                              className="social-icon facebook"
                              onClick={(e) => {
                                e.preventDefault();
                                window.open(data?.user?.facebook_url, "_blank");
                              }}
                            >
                              <i className="uil uil-facebook-f"></i>
                            </a>
                          )}
                          {data?.user?.instagram_url && (
                            <a
                              href="#"
                              className="social-icon instagram"
                              onClick={(e) => {
                                e.preventDefault();
                                window.open(
                                  data?.user?.instagram_url,
                                  "_blank"
                                );
                              }}
                            >
                              <i className="uil uil-instagram"></i>
                            </a>
                          )}
                          {data?.user?.snapchat_url && (
                            <a
                              href="#"
                              className="social-icon snapchat"
                              onClick={(e) => {
                                e.preventDefault();
                                window.open(data?.user?.snapchat_url, "_blank");
                              }}
                            >
                              <i className="uil uil-snapchat-ghost"></i>
                            </a>
                          )}
                          {data?.user?.youtube_url && (
                            <a
                              href="#"
                              className="social-icon youtube"
                              onClick={(e) => {
                                e.preventDefault();
                                window.open(data?.user?.youtube_url, "_blank");
                              }}
                            >
                              <i className="uil uil-youtube"></i>
                            </a>
                          )}
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          {allJobs
            ?.filter((val) =>
              val?.title.toLowerCase().includes(search.toLowerCase())
            )
            ?.map((data) => {
              return (
                <div className="col-12" key={data?.title}>
                  <div className="card activity activity-primary rounded-md shadow p-4">
                    <div className="d-flex align-items-center">
                      <div
                        className="position-relative"
                        style={{ alignSelf: "flex-start", marginTop: "7.5px" }}
                      >
                        <img
                          src={data?.image_url}
                          className="avatar avatar-md-md rounded-md shadow-md"
                          alt=""
                          style={{
                            width: isMobile ? "175px" : "250px",
                            height: "175px",
                            objectFit: "cover",
                          }}
                        />

                        {/* <div className="position-absolute top-0 start-0 translate-middle px-1 rounded-lg shadow-md bg-white">
                        {data?.favorite === "Started Following" ? (
                          <i className="mdi mdi-account-check mdi-18px text-success"></i>
                        ) : data?.favorite === "Liked by" ? (
                          <i className="mdi mdi-heart mdi-18px text-danger"></i>
                        ) : (
                          <i className="mdi mdi-format-list-bulleted mdi-18px text-warning"></i>
                        )}
                      </div> */}
                        <div className="position-absolute top-0 start-0 translate-middle px-1 rounded-lg shadow-md bg-white"></div>
                        <div className="position-absolute top-0 start-0 translate-middle px-1 rounded-lg shadow-md bg-white"></div>
                      </div>

                      <span className="content" style={{ marginLeft: "30px" }}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <a
                            // href="/item-detail-one"
                            onClick={(e) => {
                              e.preventDefault();
                              navigate(`/job-detail/${data?.id}`);
                            }}
                            className="text-dark title d-block"
                            style={{
                              fontSize: "24px",
                              marginBottom: "10px",
                              cursor: "pointer",
                            }}
                          >
                            {data?.title}
                          </a>
                          <a
                            href=""
                            className="badge tag pitch-gradient rounded-md fw-bold"
                          >
                            Job
                          </a>
                        </div>
                        <small
                          className="text-muted d-block"
                          style={{
                            marginTop: "10px",
                            marginBottom: "10px",
                          }}
                        >
                          Job Type:{" "}
                          <a
                            href=""
                            onClick={(e) => e.preventDefault()}
                            className="link fw-bold"
                            style={{ cursor: "default" }}
                          >
                            {data?.job_type}
                          </a>
                        </small>

                        <small
                          className="text-muted d-block"
                          style={{
                            marginTop: "10px",
                            marginBottom: "10px",
                          }}
                        >
                          Salary Range:{" "}
                          <a
                            href=""
                            onClick={(e) => e.preventDefault()}
                            className="link fw-bold"
                            style={{ cursor: "default" }}
                          >
                            {data?.salary}
                          </a>
                        </small>
                        <span
                          className="creative-idea"
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
                        </span>

                        <small className="text-muted d-block mt-3 mb-3">
                          {data?.user?.first_name}
                          {"   "}
                          <a
                            href=""
                            onClick={(e) => {
                              e.preventDefault();
                              navigate(`/creator-profile/${data?.user?.id}`);
                            }}
                            className="link fw-bold"
                          >
                            @{data?.user?.display_name}
                          </a>
                          {"  "}&#8226;{"     "}
                          {"  "}
                          {moment(data?.createdAt).fromNow()}
                        </small>
                        <div className="social-icons">
                          {data?.user?.facebook_url && (
                            <a
                              href="#"
                              className="social-icon facebook"
                              onClick={(e) => {
                                e.preventDefault();
                                window.open(data?.user?.facebook_url, "_blank");
                              }}
                            >
                              <i className="uil uil-facebook-f"></i>
                            </a>
                          )}
                          {data?.user?.instagram_url && (
                            <a
                              href="#"
                              className="social-icon instagram"
                              onClick={(e) => {
                                e.preventDefault();
                                window.open(
                                  data?.user?.instagram_url,
                                  "_blank"
                                );
                              }}
                            >
                              <i className="uil uil-instagram"></i>
                            </a>
                          )}
                          {data?.user?.snapchat_url && (
                            <a
                              href="#"
                              className="social-icon snapchat"
                              onClick={(e) => {
                                e.preventDefault();
                                window.open(data?.user?.snapchat_url, "_blank");
                              }}
                            >
                              <i className="uil uil-snapchat-ghost"></i>
                            </a>
                          )}
                          {data?.user?.youtube_url && (
                            <a
                              href="#"
                              className="social-icon youtube"
                              onClick={(e) => {
                                e.preventDefault();
                                window.open(data?.user?.youtube_url, "_blank");
                              }}
                            >
                              <i className="uil uil-youtube"></i>
                            </a>
                          )}
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </section>
      {/*end section*/}
      {/* End */}

      {/* footer */}
      <Footer />
    </>
  );
};

export default PitchBoard;
