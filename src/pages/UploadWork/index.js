import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { work1, bg01, defaultImage } from "../../components/imageImport";
import axios from "axios";
import { BASE_URL } from "../../constants/config";
import { useDispatch, useSelector } from "react-redux";
import { Backdrop, CircularProgress, Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const UploadWork = () => {
  const navigate = useNavigate();

  const { userData } = useSelector((state) => state.user);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [engagement, setEngagement] = useState("");

  const [dataUri, setDataUri] = useState(null);
  const [URL, setURL] = useState("");

  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleCloseError = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    seterror(false);
  };

  const onImageChange = (file) => {
    console.log("image change", file);
    if (!file) {
      setDataUri("");
      return;
    }
    if (file.type === "image/png" || file.type === "image/jpeg") {
      fileToDataUri(file).then((dataUri) => {
        setDataUri(dataUri);
        dataURItoBlob(file);
      });
    } else {
      console.log("Please select only png/jpeg format of image.");
    }
  };

  const fileToDataUri = (file) =>
    new Promise((resolve, reject) => {
      console.log("file", file);
      const reader = new FileReader();
      reader.onload = (event) => {
        resolve(event.target.result);
      };
      reader.readAsDataURL(file);
    });

  function dataURItoBlob(dataURI) {
    console.log("dataURI", dataURI);
    let formData = new FormData();
    formData.append("file", dataURI);
    axios
      .post(`${BASE_URL}/api/aws/file`, formData)
      .then((res) => {
        setURL(res.data.url);
        console.log(res.data);
      })
      .catch((err) => {
        console.log("image", err);
      });
  }

  const dispatch = useDispatch();

  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(false);
  const [errorMsg, seterrorMsg] = useState("");

  const AddWork = () => {
    if (title === "" || URL === "" || engagement === "") {
      seterror(true);
      seterrorMsg("Please fill all the fields");
    } else {
      setloading(true);
      const token = JSON.parse(localStorage.getItem("token"));
      axios
        .post(
          `${BASE_URL}/api/work/createWork`,
          {
            user_id: userData?.id,
            title: title,
            description: description,
            type: type,
            audience_enagagement: engagement,
            image_url: URL,
            role: userData?.role,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          setloading(false);
          setOpen(true);
          setTitle("");
          setDescription("");
          setType("");
          setEngagement("");
          setDataUri("");
          setURL("");
        })
        .catch((error) => {
          console.log("error", error.response.data.message);
          setloading(false);
          seterrorMsg(error.response.data.message);
        });
    }
  };

  return (
    <>
      {/* Navbar */}
      <Navbar />

      <Backdrop
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Work Uploaded Successfully
        </Alert>
      </Snackbar>
      <Snackbar open={error} autoHideDuration={6000} onClose={handleCloseError}>
        <Alert
          onClose={handleCloseError}
          severity="error"
          sx={{ width: "100%" }}
        >
          {errorMsg}
        </Alert>
      </Snackbar>

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
                  Upload Your Work
                </h5>
                <p className="text-white-50 para-desc mx-auto mb-0">
                  Add your digital art and work
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
                  Upload Work
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
          <div className="row">
            <div className="col-lg-3 col-md-4 order-2 order-md-1 mt-4 pt-2 mt-sm-0 pt-sm-0">
              <div className="card creators creator-primary rounded-md shadow overflow-hidden sticky-bar">
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
                    <h6 className="mb-0">{userData?.first_name}</h6>
                    {userData?.display_name && (
                      <small className="text-muted">
                        @{userData?.display_name}
                      </small>
                    )}

                    {/* <ul className="list-unstyled mb-0 mt-3" id="navmenu-nav">
                      <li className="px-0">
                        <a
                          href="/creator-profile"
                          onClick={(e) => {
                            e.preventDefault();
                            navigate("/creator-profile");
                          }}
                          className="d-flex align-items-center text-dark"
                        >
                          <span className="fs-6 mb-0">
                            <i className="uil uil-user"></i>
                          </span>
                          <small className="d-block fw-semibold mb-0 ms-2">
                            Profile
                          </small>
                        </a>
                      </li>

                      <li className="px-0 mt-2">
                        <a
                          href="/creator-profile-edit"
                          onClick={(e) => {
                            e.preventDefault();
                            navigate("/creator-profile-edit");
                          }}
                          className="d-flex align-items-center text-dark"
                        >
                          <span className="fs-6 mb-0">
                            <i className="uil uil-setting"></i>
                          </span>
                          <small className="d-block fw-semibold mb-0 ms-2">
                            Settings
                          </small>
                        </a>
                      </li>

                      <li className="px-0 mt-2">
                        <a
                          href="/lock-screen"
                          onClick={(e) => {
                            e.preventDefault();
                            navigate("/lock-screen");
                          }}
                          className="d-flex align-items-center text-dark"
                        >
                          <span className="fs-6 mb-0">
                            <i className="uil uil-sign-in-alt"></i>
                          </span>
                          <small className="d-block fw-semibold mb-0 ms-2">
                            Logout
                          </small>
                        </a>
                      </li>
                    </ul> */}
                  </div>
                </div>
              </div>
            </div>
            {/*end col*/}

            <div className="col-lg-9 col-md-8 order-1 order-md-2">
              <div className="card rounded-md shadow p-4">
                <div className="row">
                  <div className="col-lg-5">
                    <div className="d-grid">
                      {dataUri && (
                        <img src={dataUri} className="img-fluid" alt="" />
                      )}
                      <p className="fw-semibold mb-4">
                        Upload your work here, Please click "Upload Image"
                        Button.
                      </p>
                      <div className="preview-box d-block justify-content-center rounded-md shadow overflow-hidden bg-light text-muted p-2 text-center small">
                        Supports JPG, PNG and MP4 videos. Max file size : 10MB.
                      </div>
                      <input
                        type="file"
                        id="input-file"
                        name="input-file"
                        accept="image/*"
                        onChange={(event) =>
                          onImageChange(event.target.files[0] || null)
                        }
                        hidden
                      />
                      <label
                        className="btn-upload btn btn-primary rounded-md mt-4"
                        htmlFor="input-file"
                      >
                        Upload Image
                      </label>
                    </div>
                  </div>
                  {/*end col*/}

                  <div className="col-lg-7 mt-4 mt-lg-0">
                    <div className="ms-lg-4">
                      <form>
                        <div className="row">
                          <div className="col-12 mb-4">
                            <label className="form-label fw-bold">
                              Title <span className="text-danger">*</span>
                            </label>
                            <input
                              name="name"
                              id="name"
                              type="text"
                              className="form-control"
                              placeholder="Title:"
                              onChange={(e) => setTitle(e.target.value)}
                              value={title}
                            />
                          </div>
                          {/*end col*/}

                          <div className="col-12 mb-4">
                            <label className="form-label fw-bold">
                              {" "}
                              Description :{" "}
                            </label>
                            <textarea
                              name="comments"
                              id="comments"
                              rows="4"
                              className="form-control"
                              placeholder="Description:"
                              onChange={(e) => setDescription(e.target.value)}
                              value={description}
                            ></textarea>
                          </div>
                          {/*end col*/}

                          <div className="col-md-6 mb-4">
                            <label className="form-label fw-bold">Type:</label>
                            <select
                              className="form-control"
                              defaultValue="Select Type"
                              onChange={(e) => setType(e.target.value)}
                            >
                              <option>Choose any type</option>
                              <option>Fashion Photoshoots</option>
                              <option>Food Blog</option>
                              <option>Tech Review</option>
                              <option>Makeup Blog</option>
                            </select>
                          </div>
                          {/*end col*/}

                          <div className="col-md-6 mb-4">
                            <label className="form-label fw-bold">
                              {" "}
                              Audience Engagement:{" "}
                            </label>
                            <input
                              name="time"
                              type="text"
                              className="form-control"
                              id="time"
                              placeholder="10k+ Reach"
                              onChange={(e) => setEngagement(e.target.value)}
                              value={engagement}
                            />
                          </div>
                          {/*end col*/}

                          {/* <div className="col-12">
                            <h6>Auction :</h6>
                          </div>

                          <div className="col-md-6 mb-4">
                            <label className="form-label fw-bold">
                              {" "}
                              Starting Date :{" "}
                            </label>
                            <input
                              name="date"
                              type="text"
                              className="form-control start"
                              placeholder="Select date :"
                            />
                          </div> */}
                          {/*end col*/}

                          {/* <div className="col-md-6 mb-4">
                            <label className="form-label fw-bold">
                              {" "}
                              Expiration date :{" "}
                            </label>
                            <input
                              name="date"
                              type="text"
                              className="form-control end"
                              placeholder="Select date :"
                            />
                          </div> */}
                          {/*end col*/}

                          <div className="col-lg-12">
                            <button
                              type="submit"
                              className="btn btn-primary rounded-md"
                              onClick={(e) => {
                                e.preventDefault();
                                AddWork();
                              }}
                              style={{ width: "100%" }}
                            >
                              Upload Work
                            </button>
                          </div>
                          {/*end col*/}
                        </div>
                      </form>
                    </div>
                  </div>
                  {/*end col*/}
                </div>
                {/*end row*/}
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}
      </section>
      {/*end section*/}
      {/* End */}

      {/* footer */}
      <Footer />
    </>
  );
};

export default UploadWork;
