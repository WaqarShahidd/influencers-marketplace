import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { bg01, client01, defaultImage } from "../../components/imageImport";
import StyleSwitcher from "../../components/StyleSwitcher";
import { FiCamera } from "react-icons/fi";
import axios from "axios";
import { BASE_URL } from "../../constants/config";
import { useDispatch, useSelector } from "react-redux";
import { getProfilebyId } from "../../redux/dispatchers/profile";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Backdrop, CircularProgress, Snackbar } from "@mui/material";

const CustomInput = React.forwardRef((props, ref) => {
  return (
    <input
      ref={ref}
      className="form-control dob-input"
      onClick={props.onClick}
      value={props.value}
      placeholder="Select Date of Birth"
      type="text"
      readOnly={true}
    />
  );
});

const CreatorProfileEdit = () => {
  const navigate = useNavigate();

  const { userData } = useSelector((state) => state.user);

  const [displayName, setdisplayName] = useState(
    userData?.display_name === undefined ? "" : userData?.display_name
  );
  const [fullName, setfullName] = useState(userData?.first_name);
  const [email, setEmail] = useState(userData?.email);
  const [bio, setbio] = useState(userData?.bio || "");

  const [twitter, setTwitter] = useState(userData?.twitter_url || "");
  const [snapchat, setsnapchat] = useState(userData?.snapchat_url || "");
  const [tiktok, settiktok] = useState(userData?.tiktok_url || "");
  const [instagram, setinstagram] = useState(userData?.instagram_url || "");
  const [facebook, setfacebook] = useState(userData?.facebook_url || "");
  const [youtube, setyoutube] = useState(userData?.youtube_url || "");

  const [dob, setdob] = useState(userData?.dob);

  const handleDateChange = (date) => {
    setdob(date);
  };

  const [follow, setFollow] = useState(true);
  const [job, setJob] = useState(true);
  const [unsubscribe, setUnsubscribe] = useState(true);

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

  const dispatch = useDispatch();

  const [loading, setloading] = useState(false);

  const UpdateProfile = () => {
    setloading(true);
    const token = JSON.parse(localStorage.getItem("token"));
    axios
      .post(
        `${BASE_URL}/api/user/updateUser`,
        {
          userId: userData?.id,
          firstName: fullName,
          lastName: "",
          displayName: displayName,
          email: email,
          dob: dob,
          bio: bio,
          twitter_url: twitter,
          snapchat_url: snapchat,
          tiktok_url: tiktok,
          instagram_url: instagram,
          facebook_url: facebook,
          youtube_url: youtube,
          avatar: URL,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setloading(false);
        navigate("/creator-profile/" + userData?.id);
        dispatch(getProfilebyId(userData?.id));
      })
      .catch((error) => {
        console.log("error", error.response.data.message);
        setloading(false);
      });
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
                  Edit Profile
                </h5>
                <p className="text-white-50 para-desc mx-auto mb-0">
                  Edit your profile
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
                  Profile Edit
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
            <div className="col-lg-9">
              <h5>
                You can set preferred display name, create your branded profile
                URL and manage other personal settings.
              </h5>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 col-md-7 col-12 order-2 order-md-1 mt-4 pt-2">
              <div className="rounded-md shadow">
                <div className="p-4 border-bottom">
                  <h5 className="mb-0">Edit Profile :</h5>
                </div>

                <div className="p-4">
                  <form className="profile-edit">
                    <div className="row">
                      <div className="col-12 mb-4">
                        <label className="form-label h6">Display Name</label>
                        <input
                          name="name"
                          id="first"
                          type="text"
                          className="form-control"
                          value={displayName}
                          placeholder="Display Name"
                          onChange={(e) => setdisplayName(e.target.value)}
                          style={{ paddingLeft: "20px" }}
                        />
                      </div>
                      {/*end col*/}

                      <div className="col-12 mb-4">
                        <label className="form-label h6">Full Name</label>
                        <input
                          name="name"
                          id="first"
                          type="text"
                          className="form-control"
                          value={fullName}
                          placeholder="Full Name"
                          onChange={(e) => setfullName(e.target.value)}
                          style={{ paddingLeft: "20px" }}
                        />
                      </div>
                      {/*end col*/}
                      <div className="col-12 mb-4">
                        <label className="form-label h6">Email</label>
                        <input
                          name="email"
                          id="email"
                          type="email"
                          className="form-control"
                          value={email}
                          placeholder="Email Address"
                          onChange={(e) => setEmail(e.target.value)}
                          style={{ paddingLeft: "20px" }}
                        />
                      </div>
                      {/*end col*/}

                      <div className="col-12 mb-4">
                        <label className="form-label h6">Date of Birth</label>
                        <DatePicker
                          selected={dob}
                          onChange={(date) => handleDateChange(date)}
                          dateFormat="MM/dd/yyyy"
                          peekNextMonth
                          showMonthDropdown
                          showYearDropdown
                          dropdownMode="select"
                          className="form-control dob-input"
                          popperPlacement="top"
                          customInput={<CustomInput />}
                          style={{ paddingLeft: "20px" }}
                        />
                      </div>
                      {/*end col*/}

                      <div className="col-12 mb-4">
                        <label className="form-label h6">Bio</label>
                        <textarea
                          name="comments"
                          id="comments"
                          rows="3"
                          className="form-control"
                          placeholder="Bio."
                          value={bio}
                          onChange={(e) => setbio(e.target.value)}
                          style={{ paddingLeft: "20px" }}
                        ></textarea>
                      </div>
                      {/*end col*/}

                      {/* Social Media */}
                      <div className="col-12 mb-4">
                        <label className="form-label h6">
                          Social Media Accounts
                        </label>
                        <p className="text-muted">
                          Link your social media accounts to gain more trust on
                          the Marketplace
                        </p>
                        <div className="form-icon">
                          <input
                            name="url"
                            id="twitter-url"
                            type="url"
                            className="form-control"
                            value={twitter}
                            placeholder="Twitter URL"
                            onChange={(e) => setTwitter(e.target.value)}
                            style={{
                              paddingLeft: "20px",
                              marginBottom: "20px",
                            }}
                          />
                        </div>
                        <div className="form-icon">
                          <input
                            name="url"
                            id="twitter-url"
                            type="url"
                            className="form-control"
                            value={snapchat}
                            placeholder="Snapchat URL"
                            onChange={(e) => setsnapchat(e.target.value)}
                            style={{
                              paddingLeft: "20px",
                              marginBottom: "20px",
                            }}
                          />
                        </div>
                        <div className="form-icon">
                          <input
                            name="url"
                            id="twitter-url"
                            type="url"
                            className="form-control"
                            value={instagram}
                            placeholder="Instagram URL"
                            onChange={(e) => setinstagram(e.target.value)}
                            style={{
                              paddingLeft: "20px",
                              marginBottom: "20px",
                            }}
                          />
                        </div>
                        <div className="form-icon">
                          <input
                            name="url"
                            id="twitter-url"
                            type="url"
                            className="form-control"
                            value={facebook}
                            placeholder="Facebook URL"
                            onChange={(e) => setfacebook(e.target.value)}
                            style={{
                              paddingLeft: "20px",
                              marginBottom: "20px",
                            }}
                          />
                        </div>
                        <div className="form-icon">
                          <input
                            name="url"
                            id="twitter-url"
                            type="url"
                            className="form-control"
                            value={tiktok}
                            placeholder="TikTok URL"
                            onChange={(e) => settiktok(e.target.value)}
                            style={{
                              paddingLeft: "20px",
                              marginBottom: "20px",
                            }}
                          />
                        </div>
                        <div className="form-icon">
                          <input
                            name="url"
                            id="twitter-url"
                            type="url"
                            className="form-control"
                            value={youtube}
                            placeholder="YouTube URL"
                            onChange={(e) => setyoutube(e.target.value)}
                            style={{ paddingLeft: "20px" }}
                          />
                        </div>
                      </div>
                      {/*end col*/}

                      {/* <div className="col-12 mb-4">
                        <label className="form-label h6">Website</label>
                        <div className="form-icon">
                          <input
                            name="url"
                            id="web-url"
                            type="url"
                            className="form-control"
                            value={website}
                            onChange={(e) => setWebsite(e.target.value)}
                            style={{ paddingLeft: "20px" }}
                          />
                        </div>
                      </div> */}
                      {/*end col*/}
                    </div>
                    {/*end row*/}

                    <div className="row">
                      <div className="col-12">
                        <button
                          type="submit"
                          id="submit"
                          name="send"
                          className="btn btn-primary rounded-md"
                          onClick={(e) => {
                            e.preventDefault();
                            UpdateProfile();
                          }}
                        >
                          Update Profile
                        </button>
                      </div>
                      {/*end col*/}
                    </div>
                    {/*end row*/}
                  </form>
                </div>
              </div>

              {/* Account Notification checkbox */}
              {/* <div className="rounded-md shadow mt-4">
                <div className="p-4 border-bottom">
                  <h5 className="mb-0">Account Notifications :</h5>
                </div>

                <div className="p-4">
                  <div className="d-flex justify-content-between pb-4">
                    <h6 className="mb-0">When someone mentions me</h6>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="noti1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="noti1"
                      ></label>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between py-4 border-top">
                    <h6 className="mb-0">When someone follows me</h6>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        checked={follow}
                        onClick={() => setFollow(!follow)}
                        id="noti2"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="noti2"
                      ></label>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between py-4 border-top">
                    <h6 className="mb-0">When shares my activity</h6>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="noti3"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="noti3"
                      ></label>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between py-4 border-top">
                    <h6 className="mb-0">When someone messages me</h6>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="noti4"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="noti4"
                      ></label>
                    </div>
                  </div>
                </div>
              </div> */}

              {/* Marketing Notifications checkbox */}
              {/* <div className="rounded-md shadow mt-4">
                <div className="p-4 border-bottom">
                  <h5 className="mb-0">Marketing Notifications :</h5>
                </div>

                <div className="p-4">
                  <div className="d-flex justify-content-between pb-4">
                    <h6 className="mb-0">There is a sale or promotion</h6>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="noti5"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="noti5"
                      ></label>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between py-4 border-top">
                    <h6 className="mb-0">Company news</h6>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="noti6"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="noti6"
                      ></label>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between py-4 border-top">
                    <h6 className="mb-0">Weekly jobs</h6>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        checked={job}
                        onClick={() => setJob(!job)}
                        id="noti7"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="noti7"
                      ></label>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between py-4 border-top">
                    <h6 className="mb-0">Unsubscribe News</h6>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        checked={unsubscribe}
                        onClick={() => setUnsubscribe(!unsubscribe)}
                        id="noti8"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="noti8"
                      ></label>
                    </div>
                  </div>
                </div>
              </div> */}

              {/* Delete Account */}
              {/* <div className="rounded-md shadow mt-4">
                <div className="p-4 border-bottom">
                  <h5 className="mb-0 text-danger">Delete Account :</h5>
                </div>

                <div className="p-4">
                  <h6 className="mb-0">
                    Do you want to delete the account? Please press below
                    "Delete" button
                  </h6>
                  <div className="mt-4">
                    <button className="btn btn-danger">Delete Account</button>
                  </div>
                </div>
              </div> */}
            </div>
            {/*end col*/}

            {/* Image upload */}
            <div className="col-lg-4 col-md-5 col-12 order-1 order-md-2 mt-4 pt-2">
              <div className="card ms-lg-5">
                <div className="profile-pic">
                  <input
                    id="pro-img"
                    name="profile-image"
                    type="file"
                    className="d-none"
                    onChange={(event) =>
                      onImageChange(event.target.files[0] || null)
                    }
                  />
                  <div className="position-relative d-inline-block">
                    {userData?.avatar === null ? (
                      <>
                        {dataUri ? (
                          <img
                            src={dataUri}
                            className="avatar avatar-medium img-thumbnail rounded-pill shadow-sm"
                            id="profile-image"
                            alt=""
                            style={{ objectFit: "cover" }}
                          />
                        ) : (
                          <img
                            src={defaultImage}
                            className="avatar avatar-medium img-thumbnail rounded-pill shadow-sm"
                            id="profile-image"
                            alt=""
                          />
                        )}
                      </>
                    ) : (
                      <img
                        src={userData?.avatar}
                        className="avatar avatar-medium img-thumbnail rounded-pill shadow-sm"
                        id="profile-image"
                        alt=""
                        style={{ objectFit: "cover" }}
                      />
                    )}
                    <label
                      className="icons position-absolute bottom-0 end-0"
                      htmlFor="pro-img"
                    >
                      <span className="btn btn-icon btn-sm btn-pills btn-primary">
                        <FiCamera className="icons" />
                      </span>
                    </label>
                  </div>
                </div>

                <div className="mt-4">
                  <p className="text-muted mb-0">
                    We recommend an image of at least 400X400. GIFs work too.
                  </p>
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
      {/* End */}

      {/* footer */}
      <Footer />
    </>
  );
};

export default CreatorProfileEdit;
