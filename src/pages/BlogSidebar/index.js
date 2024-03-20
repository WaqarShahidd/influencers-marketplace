/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { bg02, news1, news3, news4, set } from "../../components/imageImport";
import { useDispatch, useSelector } from "react-redux";
import { getAllNews } from "../../redux/dispatchers/news.dispatch";
import moment from "moment";
import { useMediaQuery } from "@mui/material";

const newsTypes = [
  {
    name: "Social Media News",
    value: "socialMediaNews",
    id: 1,
  },
  {
    name: "Event News",
    value: "eventNews",
    id: 2,
  },
  {
    name: "Creator News",
    value: "InfluencerNews",
    id: 3,
  },
];

const NewsComp = ({ title, filter, filteredNews, search }) => {
  const navigate = useNavigate();

  const isMobile = useMediaQuery("(max-width:984px)");
  return (
    <div className="row" style={{ marginBottom: "20px" }}>
      <div className="title-heading">
        <h5 className="heading fw-semibold sub-heading text-white title-dark">
          {title}
        </h5>
      </div>
      {filteredNews
        ?.filter((blog) => blog?.title?.toLowerCase()?.includes(search))
        ?.map((blog, index) => (
          <div className="col-12" key={blog?.title}>
            <div
              className="card activity activity-primary rounded-md shadow p-4"
              style={{ marginBottom: "20px" }}
            >
              <div className="d-flex align-items-center">
                <div
                  className="position-relative"
                  style={{
                    alignSelf: "flex-start",
                    marginTop: "7.5px",
                  }}
                >
                  <img
                    src={blog?.image_url}
                    className="avatar avatar-md-md rounded-md shadow-md"
                    alt=""
                    style={{
                      width: isMobile ? "100px" : "125px",
                      height: isMobile ? "100px" : "125px",
                      objectFit: "cover",
                    }}
                  />
                  <div className="position-absolute top-0 start-0 translate-middle px-1 rounded-lg shadow-md bg-white"></div>
                  <div className="position-absolute top-0 start-0 translate-middle px-1 rounded-lg shadow-md bg-white"></div>
                </div>

                <span className="content" style={{ marginLeft: "30px" }}>
                  <a
                    href={`/blog-detail/${blog?.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(`/blog-detail/${blog?.id}`);
                    }}
                    className="text-dark title d-block"
                    style={{
                      fontSize: "24px",
                      marginBottom: "10px",
                      cursor: "pointer",
                    }}
                  >
                    {blog?.title}
                  </a>
                  {/* <small
                    className="text-muted d-block"
                    style={{
                      marginTop: "10px",
                      marginBottom: "10px",
                    }}
                  >
                    Category:{" "}
                    {blog?.category === "InfluencerNews"
                      ? "Creator News"
                      : blog?.category === "socialMediaNews"
                      ? "Social Media News"
                      : "Event News"}
                  </small> */}
                  {/* <span
                              className="creative-idea"
                              style={{
                                marginTop: "10px",
                              }}
                            >
                              {blog?.creative_idea}
                            </span> */}

                  {/* <small className="text-muted d-block mt-3 mb-3">
                    {blog?.user?.first_name}
                    {"   "}

                    {moment(blog?.createdAt).fromNow()}
                  </small> */}
                </span>
              </div>
            </div>
          </div>
        ))}
      {/*end col*/}
    </div>
  );
};

const BlogSidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const [newsType, setnewsType] = useState("");
  const [categorySelected, setcategorySelected] = useState("");

  useEffect(() => {
    document.getElementById("theme-opt").href = "./css/style-dark.min.css";
  }, []);

  useEffect(() => {
    dispatch(getAllNews());
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);

  const { allNews } = useSelector((state) => state.news);

  const filteredNews = (type) =>
    allNews?.filter((blog) => blog?.category.includes(type));

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Start Home */}
      <section
        className="bg-half-170 d-table w-100"
        style={{
          // background: `url(${bg02}) bottom`,
          backgroundColor: "#120b2f",
        }}
      >
        <div className="bg-overlay bg-gradient-overlay-2"></div>
        <div className="container">
          <div className="row mt-5 justify-content-center">
            <div className="col-12">
              <div className="title-heading text-center">
                <h5 className="heading fw-semibold sub-heading text-white title-dark">
                  News
                </h5>
                <p className="text-white-50 para-desc mx-auto mb-0">
                  Our Latest News
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
                  News
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

      {/* Start Blog */}
      <section className="section">
        <div className="container">
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
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <NewsComp
                title="Creator News"
                filteredNews={filteredNews("InfluencerNews")}
                search={search}
              />
              <br /> <br /> <br />
              <NewsComp
                title="Social Media News"
                filteredNews={filteredNews("socialMediaNews")}
                search={search}
              />
              <br /> <br /> <br />
              <NewsComp
                title="Event News"
                filteredNews={filteredNews("eventNews")}
                search={search}
              />
              {/*end row*/}
              {/* <div className="row">
                <div className="col mt-4">
                  <div className="text-center">
                    <a
                      href=""
                      onClick={(e) => e.preventDefault()}
                      className="btn btn-primary rounded-md"
                    >
                      Load More{" "}
                      <i className="uil uil-process mdi-spin ms-1"></i>
                    </a>
                  </div>
                </div>
              </div> */}
              {/*end row*/}
            </div>
            {/*end col*/}

            {/* <div className="col-lg-4 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
              <div className="sidebar sticky-bar ms-lg-4 p-4 rounded-md shadow">
                
                <div className="widget">
                  <h6
                    style={{ color: "#fff" }}
                    className="widget-title font-weight-bold pt-2 pb-2 bg-light rounded text-center"
                  >
                    Search
                  </h6>
                  <div id="search2" className="widget-search mt-4 mb-0">
                    <form
                      role="search"
                      method="get"
                      id="searchform"
                      className="searchform"
                    >
                      <div>
                        <input
                          type="text"
                          className="border rounded"
                          name="s"
                          id="s"
                          placeholder="Search Keywords..."
                          onChange={(e) => setSearch(e.target.value)}
                        />
                        <input type="submit" id="searchsubmit" value="Search" />
                      </div>
                    </form>
                  </div>
                </div>

                
              </div>
            </div> */}
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}
      </section>
      {/*end section*/}
      {/* End Blog */}

      {/* footer */}
      <Footer />
    </>
  );
};

export default BlogSidebar;
