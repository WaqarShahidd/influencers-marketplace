import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import {
  work1,
  client01,
  bg01,
  defaultImage,
} from "../../components/imageImport";
import axios from "axios";
import { BASE_URL } from "../../constants/config";
import { useDispatch, useSelector } from "react-redux";
import { Backdrop, CircularProgress, Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const CreatePitch = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { userData } = useSelector((state) => state.user);

  const handleChange = () => {
    const fileUploader = document.querySelector("#input-file");
    const getFile = fileUploader.files;
    if (getFile.length !== 0) {
      const uploadedFile = getFile[0];
      readFile(uploadedFile);
    }
  };

  const readFile = (uploadedFile) => {
    if (uploadedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        const parent = document.querySelector(".preview-box");
        parent.innerHTML = `<img className="preview-content" src=${reader.result} />`;
      };

      reader.readAsDataURL(uploadedFile);
    }
  };

  const [dataUri, setDataUri] = useState(null);
  const [URL, setURL] = useState("");

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

  const [pitchData, setpitchData] = useState({
    name: "",
    creative: "",
    price: "",
    facebook: "",
    facebookRange: "",
    insta: "",
    instaRange: "",
    tiktok: "",
    tiktokRange: "",
    yt: "",
    ytRange: "",
  });

  const changeHandler = (e) => {
    setpitchData({ ...pitchData, [e.target.name]: e.target.value });
  };

  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(false);

  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const AddPitch = () => {
    const token = JSON.parse(localStorage.getItem("token"));
    seterror(false);
    if (
      pitchData.name === "" ||
      pitchData.creative === "" ||
      pitchData.price === "" ||
      URL === ""
    ) {
      seterror(true);
    } else {
      setloading(true);
      axios
        .post(
          `${BASE_URL}/api/pitch/createPitch`,
          {
            user_id: userData.id,
            title: pitchData.name,
            creative_idea: pitchData.creative,
            price_range: pitchData.price,
            twitter_channel: "",
            snapchat_channel: "",
            tiktok_channel: pitchData.tiktok,
            instagram_channel: pitchData.instagram,
            facebook_channel: pitchData.facebook,
            youtube_channel: pitchData.yt,
            twitter_reach: "",
            snapchat_reach: "",
            tiktok_reach: pitchData.tiktokRange,
            instagram_reach: pitchData.instaRange,
            facebook_reach: pitchData.facebookRange,
            youtube_reach: pitchData.ytRange,
            image_url: URL,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          setloading(false);
          console.log(res.data, "res");
          setpitchData({
            name: "",
            creative: "",
            price: "",
            facebook: "",
            facebookRange: "",
            insta: "",
            instaRange: "",
            tiktok: "",
            tiktokRange: "",
            yt: "",
            ytRange: "",
          });
          setDataUri("");
          setOpen(true);
        })
        .catch((error) => {
          console.log(error);
          setloading(false);
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
          Pitch Created Successfully
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
                  Create a Pitch
                </h5>
                <p className="text-white-50 para-desc mx-auto mb-0">
                  Start working with{" "}
                  <span className="text-primary fw-bold">Faimos</span>
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
                  Create Pitch
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
                    <a
                      href="/creator-profile"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                      className="text-dark h6 name d-block mb-0"
                    >
                      {userData?.first_name}
                    </a>
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
                      {dataUri ? (
                        <img src={dataUri} className="img-fluid" alt="" />
                      ) : (
                        <p className="fw-semibold mb-4">
                          Upload your image here
                        </p>
                      )}
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
                              value={pitchData.name}
                              onChange={changeHandler}
                            />
                          </div>
                          {/*end col*/}

                          <div className="col-12 mb-4">
                            <label className="form-label fw-bold">
                              {" "}
                              Creative Idea :{" "}
                            </label>
                            <textarea
                              name="creative"
                              id="comments"
                              rows="4"
                              className="form-control"
                              placeholder="Write your creative idea here..."
                              onChange={changeHandler}
                              value={pitchData.creative}
                            ></textarea>
                          </div>
                          {/*end col*/}

                          {/* <div className="col-md-6 mb-4">
                            <label className="form-label fw-bold">Type :</label>
                            <select
                              className="form-control"
                              defaultValue="Select Type"
                            >
                              <option>Choose any type</option>
                              <option>Fashion Photoshoots</option>
                              <option>Food Blog</option>
                              <option>Tech Review</option>
                              <option>Makeup Blog</option>
                            </select>
                          </div> */}
                          {/*end col*/}

                          <div className="col-12 mb-4">
                            <label className="form-label fw-bold">
                              {" "}
                              Price Range:{" "}
                            </label>
                            <input
                              name="price"
                              type="text"
                              className="form-control"
                              id="time"
                              placeholder="Enter Price Range"
                              onChange={changeHandler}
                              value={pitchData.price}
                            />
                          </div>
                          {/*end col*/}

                          {/* Facebook */}
                          <div className="col-md-8 mb-4">
                            <label className="form-label fw-bold">
                              {" "}
                              Facebook:{" "}
                            </label>
                            <input
                              name="facebook"
                              type="text"
                              className="form-control"
                              id="time"
                              placeholder="Enter Facebook URL"
                              onChange={changeHandler}
                              value={pitchData.facebook}
                            />
                          </div>
                          <div className="col-md-4 mb-4">
                            <label className="form-label fw-bold">
                              {" "}
                              Reach:{" "}
                            </label>
                            <input
                              name="facebookRange"
                              type="text"
                              className="form-control"
                              id="time"
                              placeholder="Enter Reach"
                              onChange={changeHandler}
                              value={pitchData.facebookRange}
                            />
                          </div>

                          {/* Instagram */}
                          <div className="col-md-8 mb-4">
                            <label className="form-label fw-bold">
                              {" "}
                              Instagram:{" "}
                            </label>
                            <input
                              name="insta"
                              type="text"
                              className="form-control"
                              id="time"
                              placeholder="Enter Instagram URL"
                              onChange={changeHandler}
                              value={pitchData.insta}
                            />
                          </div>
                          <div className="col-md-4 mb-4">
                            <label className="form-label fw-bold">
                              {" "}
                              Reach:{" "}
                            </label>
                            <input
                              name="instaRange"
                              type="text"
                              className="form-control"
                              id="time"
                              placeholder="Enter Reach"
                              onChange={changeHandler}
                              value={pitchData.instaRange}
                            />
                          </div>

                          {/* TikTok */}
                          <div className="col-md-8 mb-4">
                            <label className="form-label fw-bold">
                              {" "}
                              TikTok:{" "}
                            </label>
                            <input
                              name="tiktok"
                              type="text"
                              className="form-control"
                              id="time"
                              placeholder="Enter TikTok URL"
                              onChange={changeHandler}
                              value={pitchData.tiktok}
                            />
                          </div>
                          <div className="col-md-4 mb-4">
                            <label className="form-label fw-bold">
                              {" "}
                              Reach:{" "}
                            </label>
                            <input
                              name="tiktokRange"
                              type="text"
                              className="form-control"
                              id="time"
                              placeholder="Enter Reach"
                              onChange={changeHandler}
                              value={pitchData.tiktokRange}
                            />
                          </div>

                          {/* YouTube */}
                          <div className="col-md-8 mb-4">
                            <label className="form-label fw-bold">
                              {" "}
                              YouTube:{" "}
                            </label>
                            <input
                              name="yt"
                              type="text"
                              className="form-control"
                              id="time"
                              placeholder="Enter YouTube URL"
                              onChange={changeHandler}
                              value={pitchData.yt}
                            />
                          </div>
                          <div className="col-md-4 mb-4">
                            <label className="form-label fw-bold">
                              {" "}
                              Reach:{" "}
                            </label>
                            <input
                              name="ytRange"
                              type="text"
                              className="form-control"
                              id="time"
                              placeholder="Enter Reach"
                              onChange={changeHandler}
                              value={pitchData.ytRange}
                            />
                          </div>

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
                              style={{ width: "100%" }}
                              type="submit"
                              className="btn btn-primary rounded-md"
                              onClick={(e) => {
                                e.preventDefault();
                                AddPitch();
                              }}
                            >
                              Create Pitch
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

export default CreatePitch;
