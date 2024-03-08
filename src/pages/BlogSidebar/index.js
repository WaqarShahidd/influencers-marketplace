import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import StyleSwitcher from "../../components/StyleSwitcher";
import {
  bg02,
  bg1,
  bg2,
  bg3,
  bg4,
  bg5,
  bg6,
  bg7,
  bg8,
  bg9,
  bg10,
  bg11,
  bg12,
  news1,
  news2,
  news3,
  news4,
} from "../../components/imageImport";

const BlogSidebar = () => {
  const navigate = useNavigate();

  const blogList = [
    {
      image: news1,
      title: "Influencer Is a Real Job. It’s Time to Act Like It and own it",
      createdBy: "@callyjoe",
      type: "Social Media News",
    },
    {
      image: news1,
      title: "How Brands Can Break Barriers and Empower Creators",
      createdBy: "@kristyhoney",
      type: "Event News",
    },
    {
      image: news3,
      title: "90% of Social Media Influencers Are Active on Instagram",
      createdBy: "@pandaone",
      type: "Creator News",
    },
    {
      image: news4,
      title: "The Cost of Living Crisis Is Changing Creator Strategies",
      createdBy: "@streetboy",
      type: "Social Media News",
    },
  ];

  useEffect(() => {
    document.getElementById("theme-opt").href = "./css/style-dark.min.css";
  }, []);
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Start Home */}
      <section
        className="bg-half-170 d-table w-100"
        style={{
          background: `url(${bg02}) bottom`,
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
                  Blogs
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
          <div className="row">
            <div className="col-lg-8 col-md-6">
              <div className="row g-4">
                {blogList?.map((blog, index) => (
                  <div className="col-lg-6" key={index}>
                    <div className="card blog blog-primary shadow rounded-md overflow-hidden">
                      <div className="position-relative">
                        <img
                          src={blog?.image}
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
                          {blog?.type}
                        </a>

                        <ul className="list-unstyled mt-2">
                          <li className="list-inline-item text-muted small me-3">
                            <i className="uil uil-calendar-alt text-dark h6 me-1"></i>
                            20th January, 2022
                          </li>
                          <li className="list-inline-item text-muted small">
                            <i className="uil uil-clock text-dark h6 me-1"></i>5
                            min read
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
                          {blog?.title}
                        </a>

                        <div className="mt-3 d-flex justify-content-between align-items-center">
                          <a
                            href="/blog-detail"
                            onClick={(e) => {
                              e.preventDefault();
                              navigate("/blog-detail");
                            }}
                            className="btn btn-link text-muted"
                          >
                            Read more <FiArrowRight className="fea icon-sm" />
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
                              {blog?.createdBy}
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {/*end col*/}
              </div>
              {/*end row*/}

              <div className="row">
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
                {/*end col*/}
              </div>
              {/*end row*/}
            </div>
            {/*end col*/}

            <div className="col-lg-4 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
              <div className="sidebar sticky-bar ms-lg-4 p-4 rounded-md shadow">
                {/* SEARCH */}
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
                        />
                        <input type="submit" id="searchsubmit" value="Search" />
                      </div>
                    </form>
                  </div>
                </div>
                {/* SEARCH */}

                {/* RECENT POST */}
                {/* <div className="widget mt-4 pt-2">
                  <h6 className="widget-title font-weight-bold pt-2 pb-2 bg-light rounded text-center">
                    Recent Post
                  </h6>
                  <div className="mt-4">
                    <div className="d-flex align-items-center">
                      <img
                        src={bg1}
                        className="avatar avatar-small rounded"
                        style={{ width: 'auto' }}
                        alt=""
                      />
                      <div className="flex-1 ms-3">
                        <a
                          href="/blog-detail"
                          onClick={e => {
                            e.preventDefault()
                            navigate('/blog-detail')
                          }}
                          className="d-block title text-dark"
                        >
                          Consultant Business
                        </a>
                        <small className="text-muted">15th January 2022</small>
                      </div>
                    </div>

                    <div className="d-flex align-items-center mt-3">
                      <img
                        src={bg2}
                        className="avatar avatar-small rounded"
                        style={{ width: 'auto' }}
                        alt=""
                      />
                      <div className="flex-1 ms-3">
                        <a
                          href="/blog-detail"
                          onClick={e => {
                            e.preventDefault()
                            navigate('/blog-detail')
                          }}
                          className="d-block title text-dark"
                        >
                          Grow Your Business
                        </a>
                        <small className="text-muted">15th January 2022</small>
                      </div>
                    </div>

                    <div className="d-flex align-items-center mt-3">
                      <img
                        src={bg3}
                        className="avatar avatar-small rounded"
                        style={{ width: 'auto' }}
                        alt=""
                      />
                      <div className="flex-1 ms-3">
                        <a
                          href="/blog-detail"
                          onClick={e => {
                            e.preventDefault()
                            navigate('/blog-detail')
                          }}
                          className="d-block title text-dark"
                        >
                          Look On The Glorious Balance
                        </a>
                        <small className="text-muted">15th January 2022</small>
                      </div>
                    </div>
                  </div>
                </div> */}
                {/* RECENT POST */}

                {/* TAG CLOUDS */}
                <div className="widget mt-4 pt-2 text-center">
                  <h6
                    style={{ color: "#fff" }}
                    className="widget-title font-weight-bold pt-2 pb-2 bg-light rounded"
                  >
                    Tags Cloud
                  </h6>
                  <div className="tagcloud mt-4">
                    <a
                      href=""
                      onClick={(e) => e.preventDefault()}
                      className="rounded text-capitalize fw-normal"
                    >
                      Social Media News
                    </a>
                    <a
                      href=""
                      onClick={(e) => e.preventDefault()}
                      className="rounded text-capitalize fw-normal"
                    >
                      Event News
                    </a>
                    <a
                      href=""
                      onClick={(e) => e.preventDefault()}
                      className="rounded text-capitalize fw-normal"
                    >
                      Creator News
                    </a>
                  </div>
                </div>
                {/* TAG CLOUDS */}
              </div>
            </div>
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
