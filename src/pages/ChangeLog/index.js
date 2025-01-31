import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { bg02 } from "../../components/imageImport";
import StyleSwitcher from "../../components/StyleSwitcher";

const ChangeLog = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Start Home */}
      <section
        className="bg-half-170 d-table w-100"
        style={{ background: `url(${bg02}) center` }}
      >
        <div className="bg-overlay bg-gradient-overlay-2"></div>
        <div className="container">
          <div className="row mt-5 justify-content-center">
            <div className="col-12">
              <div className="title-heading text-center">
                <h5 className="heading fw-semibold sub-heading text-white title-dark">
                  Changelog
                </h5>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}

          <div className="position-middle-bottom d-print-none">
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
                  Changelog
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

      {/* Start Privacy */}
      <section className="section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="card shadow rounded border-0">
                <div className="card-body">
                  {/* v1.0 Start */}
                  <h5>
                    Version <span className="text-success">1.5.0</span> - 26th
                    March 2022
                  </h5>
                  <ul className="list-unstyled mb-5">
                    <li className="text-muted my-2 ms-3">
                      <i
                        data-feather="arrow-right-circle"
                        className="fea icon-sm me-2"
                      ></i>
                      <span className="fw-bold">Release :</span> Initial
                      Released
                    </li>
                  </ul>
                  {/* v1.0 End */}

                  <div>
                    <a
                      href="https://1.envato.market/Faimos"
                      target="_blank"
                      className="btn btn-primary"
                    >
                      Purchase Now
                    </a>
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
      {/* End Privacy */}

      {/* footer */}
      <Footer />
    </>
  );
};

export default ChangeLog;
