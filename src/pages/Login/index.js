import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { logo, whiteLogo } from "../../components/imageImport";
import { useDispatch } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../../constants/config";
import { getProfilebyId } from "../../redux/dispatchers/profile";
import { Backdrop, CircularProgress, Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

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

  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(false);
  const [errorMsg, seterrorMsg] = useState("");

  const OnSubmit = () => {
    seterror(false);
    if (email === "" || password === "") {
      seterror(true);
      seterrorMsg("Please fill all the fields");
    } else {
      setloading(true);
      axios
        .post(`${BASE_URL}/api/user/login`, {
          email: email,
          password: password,
        })
        .then((res) => {
          setloading(false);
          localStorage.setItem("token", JSON.stringify(res.data.token));

          navigate("/");
          dispatch(getProfilebyId(res.data.user.id));
        })
        .catch((error) => {
          seterror(true);
          seterrorMsg(error.response.data.message);
          setloading(false);
        });
    }
  };

  return (
    <>
      <Backdrop
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Snackbar open={error} autoHideDuration={6000} onClose={handleCloseError}>
        <Alert
          onClose={handleCloseError}
          severity="error"
          sx={{ width: "100%" }}
        >
          {errorMsg}
        </Alert>
      </Snackbar>
      <div className="back-to-home">
        <a
          href=""
          onClick={(e) => e.preventDefault()}
          className="back-button btn btn-pills btn-sm btn-icon btn-primary"
        >
          <FiArrowLeft className="icons" />
        </a>
      </div>

      {/*  Hero Start  */}
      <section className="position-relative">
        <div className="bg-video-wrapper">
          {/* <iframe src="https://player.vimeo.com/video/502163294?background=1&autoplay=1&loop=1&byline=0&title=0"></iframe> */}
          {/* Note: Vimeo Embed Background Video */}

          {/*  <iframe src="https://www.youtube.com/embed/yba7hPeTSjk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1"></iframe>  */}
          {/* Note: Youtube Embed Background Video */}
        </div>
        <div className="bg-overlay bg-linear-gradient-2"></div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 p-0">
              <div className="d-flex flex-column min-vh-100 p-4">
                {/*  Start Logo  */}
                <div className="text-center">
                  <a href="" onClick={() => navigate("/")}>
                    <img src={logo} alt="" />
                  </a>
                </div>
                {/*  End Logo  */}

                {/*  Start Content  */}
                <div className="title-heading text-center my-auto">
                  <div className="form-signin px-4 py-5 bg-white rounded-md shadow-sm">
                    <form>
                      <h5 className="mb-4">Login</h5>
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="form-floating mb-2">
                            <input
                              type="email"
                              className="form-control"
                              id="LoginEmail"
                              placeholder="name@example.com"
                              style={{
                                backgroundColor: "transparent",
                                color: "#fff",
                              }}
                              onChange={(e) => setemail(e.target.value)}
                            />
                            <label htmlFor="LoginEmail">Email Address:</label>
                          </div>
                        </div>
                        {/* end col */}

                        <div className="col-lg-12">
                          <div className="form-floating mb-3">
                            <input
                              type="password"
                              className="form-control"
                              id="LoginPassword"
                              placeholder="Password"
                              style={{
                                backgroundColor: "transparent",
                                color: "#fff",
                              }}
                              onChange={(e) => setpassword(e.target.value)}
                            />
                            <label htmlFor="LoginPassword">Password:</label>
                          </div>
                        </div>
                        {/* end col */}

                        <div className="col-lg-12">
                          <div className="d-flex justify-content-between">
                            <div className="mb-3">
                              <div className="form-check align-items-center d-flex mb-0">
                                <input
                                  className="form-check-input mt-0"
                                  type="checkbox"
                                  value=""
                                  id="RememberMe"
                                />
                                <label
                                  className="form-check-label text-muted ms-2"
                                  htmlFor="RememberMe"
                                >
                                  Remember me
                                </label>
                              </div>
                            </div>
                            {/* <small className="text-muted mb-0">
                              <a
                                href="/reset-password"
                                onClick={(e) => {
                                  e.preventDefault();
                                  navigate("/reset-password");
                                }}
                                className="text-muted fw-semibold"
                              >
                                Forgot password ?
                              </a>
                            </small> */}
                          </div>
                        </div>
                        {/* end col */}
                        <div className="col-lg-12">
                          <button
                            className="btn btn-primary rounded-md w-100"
                            onClick={(e) => {
                              e.preventDefault();
                              OnSubmit();
                            }}
                          >
                            Sign in
                          </button>
                        </div>
                        {/* end col */}

                        <div className="col-12 text-center mt-4">
                          <small>
                            <span className="text-muted me-2">
                              Don't have an account ?
                            </span>{" "}
                          </small>
                        </div>
                        <small>
                          <a
                            href="/signup/influencer"
                            onClick={(e) => {
                              e.preventDefault();
                              navigate("/signup/influencer");
                            }}
                            className="text-dark fw-bold"
                          >
                            Sign Up as an influencer
                          </a>
                        </small>
                        <small>
                          <a
                            href="/signup/brands"
                            onClick={(e) => {
                              e.preventDefault();
                              navigate("/signup/brands");
                            }}
                            className="text-dark fw-bold"
                          >
                            Sign Up as a Brand
                          </a>
                        </small>
                        {/* end col */}
                      </div>
                      {/* end row */}
                    </form>
                  </div>
                </div>
                {/*  End Content  */}

                {/*  Start Footer  */}
                {/* <div className="text-center">
                  <small className="mb-0 text-light title-dark">
                    © <script>document.write(new Date().getFullYear())</script>{" "}
                    Superex. Design & Develop with{" "}
                    <i className="mdi mdi-heart text-danger"></i> by
                  </small>
                </div> */}
                {/*  End Footer  */}
              </div>
            </div>
            {/* end col */}
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </section>
      {/* end section */}
      {/*  Hero End  */}
    </>
  );
};

export default Login;
