/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { logo, set } from "../../components/imageImport";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BASE_URL } from "../../constants/config";
import axios from "axios";
import { Backdrop, CircularProgress, Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const CustomInput = React.forwardRef((props, ref) => {
  const { role } = useParams();
  return (
    <input
      ref={ref}
      className="form-control bg-transparent form-control-datepicker"
      onClick={props.onClick}
      value={props.value}
      name="dob"
      placeholder={
        role === "brands" ? "Brand Creation Date" : "Select Date of Birth"
      }
      style={{
        backgroundColor: "transparent",
        color: "#fff",
      }}
      readOnly={true}
    />
  );
});

const SignUp = () => {
  const navigate = useNavigate();
  const { role } = useParams();

  const [userRegister, setuserRegister] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setuserRegister({ ...userRegister, [e.target.name]: e.target.value });
  };

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

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

  const OnRegister = () => {
    seterror(false);
    if (
      userRegister.email === "" ||
      userRegister.password === "" ||
      userRegister.fullName === "" ||
      selectedDate === null
    ) {
      seterror(true);
      seterrorMsg("Please fill all the fields");
    } else if (!isChecked) {
      seterror(true);
      seterrorMsg("Please accept terms and conditions");
    } else {
      setloading(true);
      axios
        .post(`${BASE_URL}/api/user/signup`, {
          user: {
            email: userRegister.email,
            password: userRegister.password,
            firstName: userRegister.fullName,
            dob: selectedDate,
            role: role,
          },
        })
        .then((res) => {
          setloading(false);
          setOpen(true);
          setuserRegister({
            fullName: "",
            email: "",
            password: "",
          });
          setSelectedDate(null);
          setTimeout(() => {
            navigate("/login");
          }, 3000);
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
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Account Created Successfully
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
      <div className="back-to-home">
        <a
          href=""
          onClick={(e) => {
            e.preventDefault();
            navigate("/login");
          }}
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
                      <h5 className="mb-4">Register Your Account</h5>

                      <div className="row">
                        <div className="col-lg-12">
                          <div className="form-floating mb-2">
                            <input
                              type="text"
                              className="form-control"
                              id="RegisterName"
                              placeholder="Harry"
                              style={{
                                backgroundColor: "transparent",
                                color: "#fff",
                              }}
                              name="fullName"
                              onChange={changeHandler}
                            />
                            <label htmlFor="RegisterName">
                              {role === "brands" ? "Brand Name" : "Full Name"}
                            </label>
                          </div>
                        </div>
                        {/* end col */}

                        <div className="col-lg-12">
                          <div className="form-floating mb-2">
                            <input
                              type="email"
                              className="form-control"
                              id="RegisterEmail"
                              placeholder="name@example.com"
                              name="email"
                              style={{
                                backgroundColor: "transparent",
                                color: "#fff",
                              }}
                              onChange={changeHandler}
                            />
                            <label htmlFor="RegisterEmail">Email Address</label>
                          </div>
                        </div>
                        {/* end col */}

                        <div className="col-lg-12">
                          <div className="form-floating mb-2">
                            <input
                              type="password"
                              className="form-control"
                              id="RegisterPassword"
                              placeholder="Password"
                              name="password"
                              style={{
                                backgroundColor: "transparent",
                                color: "#fff",
                              }}
                              onChange={changeHandler}
                            />
                            <label htmlFor="RegisterPassword">Password</label>
                          </div>
                        </div>
                        {/* end col */}

                        <div className="col-lg-12">
                          <div className="form-floating mb-2">
                            <DatePicker
                              selected={selectedDate}
                              onChange={(date) => handleDateChange(date)}
                              dateFormat="MM/dd/yyyy"
                              peekNextMonth
                              showMonthDropdown
                              showYearDropdown
                              dropdownMode="select"
                              popperPlacement="top"
                              customInput={<CustomInput />}
                              style={{
                                backgroundColor: "#120b2f",
                                width: "100%",
                              }}
                            />
                          </div>
                        </div>

                        <div className="col-lg-12">
                          <div className="form-check align-items-center d-flex mb-3">
                            <input
                              className="form-check-input mt-0"
                              type="checkbox"
                              value=""
                              id="AcceptT&C"
                              checked={isChecked}
                              onChange={handleCheckboxChange}
                            />
                            <label
                              className="form-check-label text-muted ms-2"
                              htmlFor="AcceptT&C"
                            >
                              I Accept{" "}
                              <a
                                href=""
                                onClick={(e) => {
                                  e.preventDefault();
                                  navigate("/terms");
                                }}
                                className="text-primary"
                              >
                                Terms And Condition
                              </a>
                            </label>
                          </div>
                        </div>
                        {/* end col */}

                        <div className="col-lg-12">
                          <button
                            className="btn btn-primary rounded-md w-100"
                            type="submit"
                            onClick={(e) => {
                              e.preventDefault();
                              OnRegister();
                            }}
                          >
                            Register
                          </button>
                        </div>
                        {/* end col */}

                        <div className="col-12 text-center mt-4">
                          <small>
                            <span className="text-muted me-2">
                              Already have an account ?{" "}
                            </span>{" "}
                            <a
                              href="/login"
                              onClick={(e) => {
                                e.preventDefault();
                                navigate("/login");
                              }}
                              className="text-dark fw-bold"
                            >
                              Sign in
                            </a>
                          </small>
                        </div>
                      </div>
                      {/* end row */}
                    </form>
                  </div>
                </div>
                {/*  End Content  */}

                {/*  Start Footer  */}

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

export default SignUp;
