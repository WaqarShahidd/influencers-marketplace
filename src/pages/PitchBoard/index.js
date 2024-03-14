/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import {
  bg01,
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
  popular1,
  popular2,
  news4,
  job3,
  news1,
} from "../../components/imageImport";
import { useDispatch, useSelector } from "react-redux";
import { getAllPitches } from "../../redux/dispatchers/pitch.dispatch";
import moment from "moment";

const PitchBoard = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  const { userData } = useSelector((state) => state.user);
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
                            <div
                              className="col-lg-3 col-md-6"
                              style={{ width: "70%" }}
                            >
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

                            <div
                              className="col-lg-3 col-md-6 mt-3 mt-lg-0"
                              style={{ width: "25%" }}
                            >
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
          style={{ marginRight: "100px", marginLeft: "100px" }}
        >
          {allPitches
            ?.filter((val) => val?.title.includes(search))
            ?.map((data) => {
              return (
                <div className="col-12" key={data?.title}>
                  <div className="card activity activity-primary rounded-md shadow p-4">
                    <div className="d-flex align-items-center">
                      <div className="position-relative">
                        <img
                          src={data?.image_url}
                          className="avatar avatar-md-md rounded-md shadow-md"
                          alt=""
                          style={{
                            width: "175px",
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
                        <a
                          // href="/item-detail-one"
                          onClick={(e) => {
                            e.preventDefault();
                            // navigate("/item-detail-one");
                          }}
                          className="text-dark title d-block"
                          style={{ fontSize: "24px", marginBottom: "10px" }}
                        >
                          {data?.title}
                        </a>
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

                        <div className="social-icons">
                          {data?.user?.twitter_url && (
                            <a href="#" className="social-icon facebook">
                              <i className="uil uil-facebook-f"></i>
                            </a>
                          )}
                          {data?.user?.instagram_url && (
                            <a href="#" className="social-icon instagram">
                              <i className="uil uil-instagram"></i>
                            </a>
                          )}
                          {data?.user?.snapchat_url && (
                            <a href="#" className="social-icon snapchat">
                              <i className="uil uil-snapchat-ghost"></i>
                            </a>
                          )}
                          {data?.user?.youtube_url && (
                            <a href="#" className="social-icon youtube">
                              <i className="uil uil-youtube"></i>
                            </a>
                          )}
                        </div>

                        <small className="text-muted d-block mt-3">
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
