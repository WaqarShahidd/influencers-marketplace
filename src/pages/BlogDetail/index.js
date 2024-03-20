import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { logoS } from "../../components/imageImport";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "./../../constants/config";
import moment from "moment";

const BlogDetail = () => {
  const { id } = useParams();

  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(false);
  const [errorMsg, seterrorMsg] = useState("");

  const [newsData, setNewsData] = useState([]);

  const GetNews = () => {
    seterror(false);

    setloading(true);
    axios
      .get(`${BASE_URL}/api/news/getOneNews?newsId=${id}`)
      .then((res) => {
        setloading(false);
        setNewsData(res.data.allNews);
      })
      .catch((error) => {
        seterror(true);
        seterrorMsg(error.response.data.message);
        setloading(false);
      });
  };

  useEffect(() => {
    GetNews();
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Start Blog Detail */}
      <section className="section mt-5">
        <div className="container">
          <div className="row mt-5 mt-lg-0 justify-content-center">
            <div className="col-lg-8">
              <div className="title-heading">
                <h4
                  className="heading sub-heading fw-bold mb-3"
                  style={{ color: "#fff" }}
                >
                  {newsData.title}
                </h4>

                <div className="d-flex align-items-center mt-4">
                  <img src={logoS} className="rounded-pill shadow-md" alt="" />

                  <div className="content ms-2">
                    <a
                      href=""
                      onClick={(e) => e.preventDefault()}
                      className="h6 text-dark d-block mb-0"
                    >
                      Faimos
                    </a>
                    <small className="text-muted mb-0">
                      {moment(newsData?.createdAt).format("DD MMMM, YYYY")}
                    </small>
                  </div>
                </div>
              </div>
            </div>
            {/*end col*/}

            {/* <div className="col-12 mt-5">
              <div className="position-relative">
                <img
                  src={single}
                  className="img-fluid rounded-md shadow-md"
                  alt=""
                />
                <div className="play-icon">
                  <a
                    href="#!"
                    data-type="youtube"
                    data-id="yba7hPeTSjk"
                    className="play-btn lightbox"
                  >
                    <i className="mdi mdi-play text-primary rounded-circle bg-white shadow-lg icons"></i>
                  </a>
                </div>
              </div>
            </div> */}
            {/*end col*/}

            <div className="col-lg-8 mt-5">
              <p className="text-muted">{newsData?.text}</p>

              <div className="px-4 py-5 rounded-md bg-soft-primary text-center mt-4">
                <h4 className="mb-0">"{newsData?.tagline}"</h4>
              </div>

              <div
                className="mt-4"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <img
                  src={newsData?.image_url}
                  className="img-fluid rounded-md shadow"
                  alt=""
                />
              </div>

              {/* <p className="text-muted mt-4">
                Whether you're a brand looking to expand your reach or an
                influencer seeking meaningful partnerships, our marketplace is
                your gateway to success. Join us in revolutionizing the way
                brands and influencers collaborate, and together, let's create
                impactful campaigns that resonate with audiences worldwide.
              </p> */}
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}
      </section>
      {/*end section*/}
      {/* End Blog Detail */}

      {/* footer */}
      <Footer />
    </>
  );
};

export default BlogDetail;
