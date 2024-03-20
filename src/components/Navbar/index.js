/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useCallback, useEffect, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { client01, defaultImage, logo } from "../imageImport";
import { useDispatch, useSelector } from "react-redux";
import { clear } from "../../redux/dispatchers/profile";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const url = useMemo(() => location?.pathname === "/blog-detail", []);

  const templatePage = [
    "/become-creator",
    "/creator-profile",
    "/item-detail-one",
    "/index-two",
    "/index-four",
    "/index-five",
    "/index-five-rtl",
    "/index-four-rtl",
    "/index-two-rtl",
  ];
  const becomeUrl = templatePage.includes(location?.pathname);
  const [mobile, setMobile] = useState([]);

  const mobileHandler = (e, panel) => {
    e.preventDefault();
    const dataIndex = mobile?.findIndex((data) => data === panel);
    if (dataIndex === -1) {
      setMobile([...mobile, panel]);
    } else {
      const updateRecord = mobile?.filter((data, index) => index !== dataIndex);
      setMobile(updateRecord);
    }
  };

  const toggleMenu = () => {
    document.getElementById("isToggle").classList.toggle("open");
    var isOpen = document.getElementById("navigation");
    if (isOpen.style.display === "block") {
      isOpen.style.display = "none";
    } else {
      isOpen.style.display = "block";
    }
  };

  const { userData } = useSelector((state) => state.user);

  return (
    <>
      {/* Navbar STart */}
      <header
        id="topnav"
        className={`defaultscroll sticky ${url && "gradient"} `}
      >
        <div className="container">
          {/* Logo Start*/}
          <a
            className="logo"
            href="/"
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
            }}
          >
            <span className="">
              <img src={logo} height="26" className={"l-dark"} alt="" />
              <img src={logo} height="26" className={"l-light"} alt="" />
            </span>
            {/* {!becomeUrl && (
              <img
                src={lightLogo}
                height="26"
                className="logo-dark-mode"
                alt=""
              />
            )} */}
          </a>
          {/* Logo end*/}

          {/* Mobile */}
          <div className="menu-extras">
            <div className="menu-item">
              {/* Mobile menu toggle*/}
              <a
                className="navbar-toggle"
                id="isToggle"
                onClick={(e) => {
                  e.preventDefault();
                  toggleMenu();
                }}
              >
                <div className="lines">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </a>
              {/* End mobile menu toggle*/}
            </div>
          </div>
          {/* Mobile */}

          {/*Login button Start*/}
          <ul className="buy-button list-inline mb-0">
            <li className="list-inline-item mb-0 me-1">
              <div className="dropdown">
                {/* <button
                  type="button"
                  className="btn dropdown-toggle p-0"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{ marginRight: "10px" }}
                >
                  {becomeUrl ? (
                    <i className="uil uil-search text-dark fs-5 align-middle"></i>
                  ) : (
                    <>
                      <i className="uil uil-search text-white title-dark btn-icon-light fs-5 align-middle"></i>
                      <i className="uil uil-search text-dark btn-icon-dark fs-5 align-middle"></i>
                    </>
                  )}
                </button> */}
              </div>
            </li>
            {/* <li className="list-inline-item mb-0 me-1">
              {becomeUrl ? (
                <a
                  id="connectWallet"
                  className="btn btn-icon btn-pills btn-primary"
                >
                  <i className="uil uil-wallet fs-6"></i>
                </a>
              ) : (
                <p id="connectWallet" onClick={_handleConnectWallet}>
                  <span className="btn-icon-dark">
                    <span className="btn btn-icon btn-pills btn-primary">
                      <i className="uil uil-wallet fs-6"></i>
                    </span>
                  </span>
                  <span className="btn-icon-light">
                    <span className="btn btn-icon btn-pills btn-light">
                      <i className="uil uil-wallet fs-6"></i>
                    </span>
                  </span>
                </p>
              )}
            </li> */}

            <li className="list-inline-item mb-0">
              <div className="dropdown dropdown-primary">
                {userData === null ? (
                  <a
                    href="/login"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/login");
                    }}
                    className="small fw-semibold d-flex align-items-center sign-in-btn"
                  >
                    Sign In
                  </a>
                ) : (
                  <button
                    type="button"
                    className="btn btn-pills dropdown-toggle p-0"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {userData?.avatar === null ? (
                      <img
                        src={defaultImage}
                        className="rounded-pill avatar avatar-sm-sm"
                        alt=""
                        style={{ objectFit: "contain" }}
                      />
                    ) : (
                      <img
                        src={userData?.avatar}
                        className="rounded-pill avatar avatar-sm-sm"
                        alt=""
                        style={{ objectFit: "conver" }}
                      />
                    )}
                  </button>
                )}
                <div
                  className="dropdown-menu dd-menu dropdown-menu-end bg-white shadow border-0 mt-3 pb-3 pt-0 overflow-hidden rounded"
                  style={{ minWidth: 200 }}
                >
                  <div className="position-relative">
                    <div className="pt-5 pb-3 bg-gradient-primary"></div>
                    <div className="px-3">
                      <div className="d-flex align-items-end mt-n4">
                        {userData?.avatar === null ? (
                          <img
                            src={defaultImage}
                            className="rounded-pill avatar avatar-md-sm img-thumbnail shadow-md"
                            alt=""
                            style={{ objectFit: "contain" }}
                          />
                        ) : (
                          <img
                            src={userData?.avatar}
                            className="rounded-pill avatar avatar-md-sm img-thumbnail shadow-md"
                            alt=""
                          />
                        )}
                        <h6 className="text-dark fw-bold mb-0 ms-1">
                          {userData?.first_name}
                        </h6>
                      </div>

                      <div className="mt-2">
                        <small className="text-dark">
                          Email:{" "}
                          <span className="text-primary fw-bold">
                            {userData?.email}
                          </span>
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2">
                    <a
                      className="dropdown-item small fw-semibold text-dark d-flex align-items-center"
                      href={`/profile`}
                      onClick={(e) => {
                        e.preventDefault();
                        navigate(`/profile`);
                      }}
                    >
                      <span className="mb-0 d-inline-block me-1">
                        <i className="uil uil-user align-middle h6 mb-0 me-1"></i>
                      </span>{" "}
                      Profile
                    </a>
                    <a
                      className="dropdown-item small fw-semibold text-dark d-flex align-items-center"
                      href="/creator-profile-edit"
                      onClick={(e) => {
                        e.preventDefault();

                        navigate("/creator-profile-edit");
                      }}
                    >
                      <span className="mb-0 d-inline-block me-1">
                        <i className="uil uil-cog align-middle h6 mb-0 me-1"></i>
                      </span>{" "}
                      Settings
                    </a>
                    {userData?.role === "influencer" && (
                      <a
                        className="dropdown-item small fw-semibold text-dark d-flex align-items-center"
                        href="/upload-work"
                        onClick={(e) => {
                          e.preventDefault();

                          navigate("/upload-work");
                        }}
                      >
                        <span className="mb-0 d-inline-block me-1">
                          <i className="uil uil-upload align-middle h6 mb-0 me-1"></i>
                        </span>{" "}
                        Upload Your Work
                      </a>
                    )}
                    {userData?.role === "brands" && (
                      <a
                        className="dropdown-item small fw-semibold text-dark d-flex align-items-center"
                        href="/post-job"
                        onClick={(e) => {
                          e.preventDefault();

                          navigate("/post-job");
                        }}
                      >
                        <span className="mb-0 d-inline-block me-1">
                          <i className="uil uil-upload align-middle h6 mb-0 me-1"></i>
                        </span>{" "}
                        Post a Job
                      </a>
                    )}
                    {userData?.role === "influencer" && (
                      <a
                        className="dropdown-item small fw-semibold text-dark d-flex align-items-center"
                        href="/create-pitch"
                        onClick={(e) => {
                          e.preventDefault();

                          navigate("/create-pitch");
                        }}
                      >
                        <span className="mb-0 d-inline-block me-1">
                          <i className="uil uil-upload align-middle h6 mb-0 me-1"></i>
                        </span>{" "}
                        Create a Pitch
                      </a>
                    )}
                    <div className="dropdown-divider border-top"></div>
                    <a
                      className="dropdown-item small fw-semibold text-dark d-flex align-items-center"
                      href="/login"
                      onClick={(e) => {
                        e.preventDefault();
                        localStorage.removeItem("token");
                        dispatch(clear());
                        navigate("/login");
                      }}
                    >
                      <span className="mb-0 d-inline-block me-1">
                        <i className="uil uil-sign-out-alt align-middle h6 mb-0 me-1"></i>
                      </span>{" "}
                      Logout
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          {/*Login button End*/}

          <div id="navigation">
            {/* Navigation Menu*/}
            <ul
              className={`navigation-menu nav-left ${
                !becomeUrl && "nav-light"
              }`}
            >
              <li className="has-submenu parent-parent-menu-item">
                <a href="" onClick={() => navigate("/")}>
                  Home
                </a>
                {/* <span className="menu-arrow"></span> */}
                {/* <ul
                  className={`submenu megamenu ${
                    mobile?.includes("home") ? "open" : ""
                  }`}
                >
                  <li>
                    <ul>
                      <li className="megamenu-head">LTR Home Pages</li>
                      <li
                        className={
                          location?.pathname === "/index" ? "active" : ""
                        }
                      >
                        <a
                          href="/index"
                          onClick={(e) => {
                            e.preventDefault();
                            navigate("/index");
                           
                            }, 1000);
                          }}
                          className="sub-menu-item"
                        >
                          Home One
                        </a>
                      </li>
                      <li
                        className={
                          location?.pathname === "/index-two" ? "active" : ""
                        }
                      >
                        <a
                          href="/index-two"
                          onClick={(e) => {
                            e.preventDefault();
                            navigate("/index-two");
                           
                            }, 1000);
                          }}
                          className="sub-menu-item"
                        >
                          Home Two
                        </a>
                      </li>
                      <li
                        className={
                          location?.pathname === "/index-three" ? "active" : ""
                        }
                      >
                        <a
                          href="/index-three"
                          onClick={(e) => {
                            e.preventDefault();
                           
                            }, 1000);
                            navigate("/index-three");
                          }}
                          className="sub-menu-item"
                        >
                          Home Three
                        </a>
                      </li>
                      <li
                        className={
                          location?.pathname === "/index-four" ? "active" : ""
                        }
                      >
                        <a
                          href="/index-four"
                          onClick={(e) => {
                            e.preventDefault();
                           
                            }, 1000);
                            navigate("/index-four");
                          }}
                          className="sub-menu-item"
                        >
                          Home Four
                        </a>
                      </li>
                      <li
                        className={
                          location?.pathname === "/index-five" ? "active" : ""
                        }
                      >
                        <a
                          href="/index-five"
                          onClick={(e) => {
                            e.preventDefault();
                           
                            }, 1000);
                            navigate("/index-five");
                          }}
                          className="sub-menu-item"
                        >
                          Home Five{" "}
                          
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <ul>
                      <li className="megamenu-head">LTR Dark Home Pages</li>
                      <li
                        className={
                          location?.pathname === "/index-dark" ? "active" : ""
                        }
                      >
                        <a
                          href="/index-dark"
                          onClick={(e) => {
                            e.preventDefault();
                           
                            }, 1000);
                            navigate("/index-dark");
                          }}
                          className="sub-menu-item"
                        >
                          Home One Dark
                        </a>
                      </li>
                      <li
                        className={
                          location?.pathname === "/index-two-dark"
                            ? "active"
                            : ""
                        }
                      >
                        <a
                          href="/index-two-dark"
                          onClick={(e) => {
                            e.preventDefault();
                           
                            }, 1000);
                            navigate("/index-two-dark");
                          }}
                          className="sub-menu-item"
                        >
                          Home Two Dark
                        </a>
                      </li>
                      <li
                        className={
                          location?.pathname === "/index-three-dark"
                            ? "active"
                            : ""
                        }
                      >
                        <a
                          href="/index-three-dark"
                          onClick={(e) => {
                            e.preventDefault();
                           
                            }, 1000);
                            navigate("/index-three-dark");
                          }}
                          className="sub-menu-item"
                        >
                          Home Three Dark
                        </a>
                      </li>
                      <li
                        className={
                          location?.pathname === "/index-four-dark"
                            ? "active"
                            : ""
                        }
                      >
                        <a
                          href="/index-four-dark"
                          onClick={(e) => {
                            e.preventDefault();
                           
                            }, 1000);
                            navigate("/index-four-dark");
                          }}
                          className="sub-menu-item"
                        >
                          Home Four Dark
                        </a>
                      </li>
                      <li
                        className={
                          location?.pathname === "/index-five-dark"
                            ? "active"
                            : ""
                        }
                      >
                        <a
                          href="/index-five-dark"
                          onClick={(e) => {
                            e.preventDefault();
                           
                            }, 1000);
                            navigate("/index-five-dark");
                          }}
                          className="sub-menu-item"
                        >
                          Home Five Dark{" "}
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <ul>
                      <li className="megamenu-head">RTL Home Pages</li>
                      <li
                        className={
                          location?.pathname === "/index-rtl" ? "active" : ""
                        }
                      >
                        <a
                          href="/index-rtl"
                          onClick={(e) => {
                            e.preventDefault();
                           
                            }, 1000);
                            navigate("/index-rtl");
                          }}
                          className="sub-menu-item"
                        >
                          Home One RTL{" "}
                        </a>
                      </li>
                      <li
                        className={
                          location?.pathname === "/index-two-rtl"
                            ? "active"
                            : ""
                        }
                      >
                        <a
                          href="/index-two-rtl"
                          onClick={(e) => {
                            e.preventDefault();
                           
                            }, 1000);
                            navigate("/index-two-rtl");
                          }}
                          className="sub-menu-item"
                        >
                          Home Two RTL{" "}
                        </a>
                      </li>
                      <li
                        className={
                          location?.pathname === "/index-three-rtl"
                            ? "active"
                            : ""
                        }
                      >
                        <a
                          href="/index-three-rtl"
                          onClick={(e) => {
                            e.preventDefault();
                           
                            }, 1000);
                            navigate("/index-three-rtl");
                          }}
                          className="sub-menu-item"
                        >
                          Home Three RTL{" "}
                        </a>
                      </li>
                      <li
                        className={
                          location?.pathname === "/index-four-rtl"
                            ? "active"
                            : ""
                        }
                      >
                        <a
                          href="/index-four-rtl"
                          onClick={(e) => {
                            e.preventDefault();
                           
                            }, 1000);
                            navigate("/index-four-rtl");
                          }}
                          className="sub-menu-item"
                        >
                          Home Four RTL{" "}
                        </a>
                      </li>
                      <li
                        className={
                          location?.pathname === "/index-five-rtl"
                            ? "active"
                            : ""
                        }
                      >
                        <a
                          href="/index-five-rtl"
                          onClick={(e) => {
                            e.preventDefault();
                           
                            }, 1000);
                            navigate("/index-five-rtl");
                          }}
                          className="sub-menu-item"
                        >
                          Home Five RTL{" "}
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <ul>
                      <li className="megamenu-head">RTL Dark Home Pages</li>
                      <li
                        className={
                          location?.pathname === "/index-dark-rtl"
                            ? "active"
                            : ""
                        }
                      >
                        <a
                          href="/index-dark-rtl"
                          onClick={(e) => {
                            e.preventDefault();
                           
                            }, 1000);
                            navigate("/index-dark-rtl");
                          }}
                          className="sub-menu-item"
                        >
                          Home One Dark RTL{" "}
                        </a>
                      </li>
                      <li
                        className={
                          location?.pathname === "/index-two-dark-rtl"
                            ? "active"
                            : ""
                        }
                      >
                        <a
                          href="/index-two-dark-rtl"
                          onClick={(e) => {
                            e.preventDefault();
                           
                            }, 1000);
                            navigate("/index-two-dark-rtl");
                          }}
                          className="sub-menu-item"
                        >
                          Home Two Dark RTL{" "}
                        </a>
                      </li>
                      <li
                        className={
                          location?.pathname === "/index-three-dark-rtl"
                            ? "active"
                            : ""
                        }
                      >
                        <a
                          href="/index-three-dark-rtl"
                          onClick={(e) => {
                            e.preventDefault();
                           
                            }, 1000);
                            navigate("/index-three-dark-rtl");
                          }}
                          className="sub-menu-item"
                        >
                          Home Three Dark RTL{" "}
                        </a>
                      </li>
                      <li
                        className={
                          location?.pathname === "/index-four-dark-rtl"
                            ? "active"
                            : ""
                        }
                      >
                        <a
                          href="/index-four-dark-rtl"
                          onClick={(e) => {
                            e.preventDefault();
                           
                            }, 1000);
                            navigate("/index-four-dark-rtl");
                          }}
                          className="sub-menu-item"
                        >
                          Home Four Dark RTL{" "}
                        </a>
                      </li>
                      <li
                        className={
                          location?.pathname === "/index-five-dark-rtl"
                            ? "active"
                            : ""
                        }
                      >
                        <a
                          href="/index-five-dark-rtl"
                          onClick={(e) => {
                            e.preventDefault();
                           
                            }, 1000);
                            navigate("/index-five-dark-rtl");
                          }}
                          className="sub-menu-item"
                        >
                          Home Five Dark RTL{" "}
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="d-none d-lg-block">
                    <ul>
                      <li>
                        <img src={character} className="img-fluid" alt="" />
                      </li>
                    </ul>
                  </li>
                </ul> */}
              </li>

              <li>
                <a
                  href="/creators"
                  onClick={(e) => {
                    e.preventDefault();

                    navigate("/creators");
                  }}
                  className="sub-menu-item"
                >
                  {" "}
                  Creators
                </a>
              </li>
              <li>
                <a
                  href="/news"
                  onClick={(e) => {
                    e.preventDefault();

                    navigate("/news");
                  }}
                  className="sub-menu-item"
                >
                  {" "}
                  News
                </a>
              </li>

              <li>
                <a
                  href="/jobs"
                  onClick={(e) => {
                    e.preventDefault();

                    navigate("/jobs");
                  }}
                  className="sub-menu-item"
                >
                  Jobs
                </a>
              </li>
              <li>
                <a
                  href="/pitch-board"
                  onClick={(e) => {
                    e.preventDefault();

                    navigate("/pitch-board");
                  }}
                  className="sub-menu-item"
                >
                  Pitch
                </a>
              </li>

              {/* <li className="has-submenu parent-parent-menu-item">
                <a href="" onClick={(e) => mobileHandler(e, "explores")}>
                  Explore
                </a>
                <span className="menu-arrow"></span>
                <ul
                  className={`submenu ${
                    mobile.includes("explores") ? "open" : ""
                  }`}
                >
                  <li>
                    <a
                      href="/pitch-board"
                      onClick={(e) => {
                        e.preventDefault();
                       
                        }, 1000);
                        navigate("/pitch-board");
                      }}
                      className="sub-menu-item"
                    >
                      {" "}
                      Explore One
                    </a>
                  </li>
                  <li>
                    <a
                      href="/explore-two"
                      onClick={(e) => {
                        e.preventDefault();
                       
                        }, 1000);
                        navigate("/explore-two");
                      }}
                      className="sub-menu-item"
                    >
                      {" "}
                      Explore Two
                    </a>
                  </li>
                  <li>
                    <a
                      href="/explore-three"
                      onClick={(e) => {
                        e.preventDefault();
                       
                        }, 1000);
                        navigate("/explore-three");
                      }}
                      className="sub-menu-item"
                    >
                      {" "}
                      Explore Three
                    </a>
                  </li>
                  <li>
                    <a
                      href="/explore-four"
                      onClick={(e) => {
                        e.preventDefault();
                       
                        }, 1000);
                        navigate("/explore-four");
                      }}
                      className="sub-menu-item"
                    >
                      {" "}
                      Explore Four
                    </a>
                  </li>
                  <li>
                    <a
                      href="/auction"
                      onClick={(e) => {
                        e.preventDefault();
                       
                        }, 1000);
                        navigate("/auction");
                      }}
                      className="sub-menu-item"
                    >
                      Live Auction
                    </a>
                  </li>
                  <li>
                    <a
                      href="/item-detail-one"
                      onClick={(e) => {
                        e.preventDefault();
                       
                        }, 1000);
                        navigate("/item-detail-one");
                      }}
                      className="sub-menu-item"
                    >
                      {" "}
                      Item Detail One
                    </a>
                  </li>
                  <li>
                    <a
                      href="/item-detail-two"
                      onClick={(e) => {
                        e.preventDefault();
                       
                        }, 1000);
                        navigate("/item-detail-two");
                      }}
                      className="sub-menu-item"
                    >
                      {" "}
                      Item Detail Two
                    </a>
                  </li>
                </ul>
              </li> */}

              <li>
                <a
                  href="/contact"
                  onClick={(e) => {
                    e.preventDefault();

                    navigate("/contact");
                  }}
                  className="sub-menu-item"
                >
                  Contact
                </a>
              </li>
              {/* <li className="has-submenu parent-parent-menu-item">
                <a href="" onClick={(e) => mobileHandler(e, "pages")}>
                  Help
                </a>
                <span className="menu-arrow"></span>
                <ul
                  className={`submenu ${
                    mobile.includes("pages") ? "open" : ""
                  }`}
                >
                  <li>
                    <a
                      href="/aboutus"
                      onClick={(e) => {
                        e.preventDefault();

                        navigate("/aboutus");
                      }}
                      className="sub-menu-item"
                    >
                      About Us
                    </a>
                  </li>
                  
                  <li>
                    <a
                      href="/terms"
                      onClick={(e) => {
                        e.preventDefault();

                        navigate("/terms");
                      }}
                      className="sub-menu-item"
                    >
                      Terms Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="/privacy"
                      onClick={(e) => {
                        e.preventDefault();

                        navigate("/privacy");
                      }}
                      className="sub-menu-item"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="/changelog"
                      onClick={(e) => {
                        e.preventDefault();

                        navigate("/changelog");
                      }}
                      className="sub-menu-item"
                    >
                      Changelog
                    </a>
                  </li>
                </ul>
              </li> */}
            </ul>
            {/*end navigation menu*/}
          </div>
          {/*end navigation*/}
        </div>
        {/*end container*/}
      </header>
      {/*end header*/}
      {/* Navbar End */}
    </>
  );
};

export default Navbar;
