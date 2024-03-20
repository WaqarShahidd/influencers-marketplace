/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { bg01, work1, defaultImage, work8 } from "../../components/imageImport";
import { useDispatch, useSelector } from "react-redux";
import { getAllInfluencers } from "../../redux/dispatchers/influencers.dispatch";
import { tns } from "tiny-slider";

const Creator = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const textReceived = location?.state?.filter;
  console.log("textReceived", textReceived);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllInfluencers());
  }, []);

  const { allInfluencers, allTrendingInfluencers } = useSelector(
    (state) => state.influencer
  );
  const { userData } = useSelector((state) => state.user);
  const [search, setsearch] = useState(
    textReceived === undefined ? "" : textReceived
  );

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

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/*- Start Home */}
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
                  Creators
                </h5>
                <p className="text-white-50 para-desc mx-auto mb-0">
                  All Featured Creators
                </p>
              </div>
            </div>
            {/*-end col*/}
          </div>
          {/*-end row*/}

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
                  Creators
                </li>
              </ul>
            </nav>
          </div>
        </div>
        {/*-end container*/}
      </section>
      {/*-end section*/}
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
      {/*- End Home */}

      {/*- Start Section */}
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
                                  onChange={(e) => setsearch(e.target.value)}
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

          <div className="container mt-50 mt-60">
            <div className="title-heading">
              <h5 className="heading fw-semibold sub-heading text-white title-dark">
                Trending Creators
              </h5>
            </div>
            <div className="row">
              <div className="col-12 mt-3">
                <div className="tiny-five-item-nav-arrow">
                  {allTrendingInfluencers?.map((data, index) => {
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
                                  navigate(`/creator-profile/${data?.id}`);
                                }}
                              />
                            ) : (
                              <img
                                src={data?.avatar}
                                className="avatar avatar-md-md rounded-pill shadow-sm bg-light img-thumbnail mx-auto d-block"
                                alt=""
                                onClick={(e) => {
                                  e.preventDefault();
                                  navigate(`/creator-profile/${data?.id}`);
                                }}
                                style={{ objectFit: "contain" }}
                              />
                            )}

                            <div className="content text-center pt-2 p-2">
                              <a
                                href={`/creator-profile/${data?.id}`}
                                onClick={(e) => {
                                  e.preventDefault();
                                  navigate(`/creator-profile/${data?.id}`);
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
                                  maxWidth: "95%",
                                  textAlign: "center",
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
          </div>
          <div
            className="title-heading"
            style={{ marginBottom: "50px", marginTop: "30px" }}
          >
            <h5 className="heading fw-semibold sub-heading text-white title-dark">
              All Creators
            </h5>
          </div>
          <div className="row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 g-4 justify-content-center">
            {allInfluencers
              ?.filter(
                (val) =>
                  val.first_name
                    ?.toLowerCase()
                    .includes(search?.toLowerCase()) ||
                  val.display_name
                    ?.toLowerCase()
                    .includes(search?.toLowerCase())
              )
              ?.map((creator, index) => {
                return (
                  <div className="col" key={index}>
                    <div className="card creators creators-two creator-primary rounded-md shadow overflow-hidden">
                      <div
                        className="py-5"
                        style={{ background: `url(${work1})` }}
                      ></div>
                      <div className="position-relative mt-n5">
                        {creator?.avatar === null ? (
                          <img
                            src={defaultImage}
                            className="avatar avatar-md-md rounded-pill shadow-sm bg-light img-thumbnail mx-auto d-block"
                            alt=""
                          />
                        ) : (
                          <img
                            src={creator?.avatar}
                            className="avatar avatar-md-md rounded-pill shadow-sm bg-light img-thumbnail mx-auto d-block"
                            alt=""
                            style={{ objectFit: "contain" }}
                          />
                        )}

                        <div className="content text-center pt-2 p-4">
                          <a
                            href={`/creator-profile/${creator?.id}`}
                            onClick={(e) => {
                              e.preventDefault();
                              navigate(`/creator-profile/${creator?.id}`);
                            }}
                            className="text-dark h6 name d-block mb-0"
                          >
                            {creator?.first_name}
                          </a>
                          {creator?.display_name && (
                            <small className="text-muted">
                              @{creator?.display_name}
                            </small>
                          )}
                          <p
                            style={{
                              marginTop: "10px",
                              color: "#b5bdc9",
                              display: "-webkit-box",
                              WebkitBoxOrient: "vertical",
                              WebkitLineClamp: 2,
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              maxWidth: "95%",
                              textAlign: "center",
                            }}
                          >
                            {creator?.bio}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            {/*-end col*/}
          </div>
          {/*-end row*/}

          <div className="row">
            <div className="col-12 mt-4 pt-2">
              <ul className="pagination justify-content-center mb-0">
                <li className="page-item">
                  <a className="page-link" aria-label="Previous">
                    <span aria-hidden="true">
                      <i className="uil uil-arrow-left fs-5"></i>
                    </span>
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link">1</a>
                </li>
                {/* <li className="page-item active">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li> */}
                <li className="page-item">
                  <a className="page-link" aria-label="Next">
                    <span aria-hidden="true">
                      <i className="uil uil-arrow-right fs-5"></i>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            {/*-end col*/}
          </div>
          {/*-end row*/}
        </div>
        {/*-end container*/}
      </section>
      {/*-end section*/}
      {/*- End Section */}
      {/* footer */}
      <Footer />
    </>
  );
};

export default Creator;
