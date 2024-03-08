import React, { useEffect } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import StyleSwitcher from "../../components/StyleSwitcher";
import {
  bg10,
  single,
  logo48,
  logoS,
  news4,
  news1,
  news2,
} from "../../components/imageImport";

const BlogDetail = () => {
  useEffect(() => {
    window.Tobii();
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
                  90% of Social Media Influencers Are Active on Instagram
                </h4>
                <p className="text-muted fs-5 mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu.
                </p>

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
                      20th January 2022, 8 min read
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
              <p className="text-muted">
                In today's digital age, influencer marketing has become a
                powerful tool for brands to reach their target audience
                authentically. Similarly, influencers are constantly seeking
                meaningful partnerships with brands that align with their values
                and aspirations. At our marketplace, we bring together the best
                of both worlds, creating a vibrant ecosystem where brands and
                influencers can seamlessly connect and collaborate.
              </p>

              <p className="text-muted">
                Our platform serves as a bridge, connecting brands with a
                diverse range of influencers spanning various niches and
                demographics. Whether you're a burgeoning startup or an
                established brand, our marketplace provides you with
                unparalleled access to a curated network of influencers ready to
                amplify your message.
              </p>

              <p className="text-muted">
                For influencers, our platform offers a gateway to explore
                exciting brand collaborations tailored to their unique voice and
                audience. With access to a myriad of brands across industries,
                influencers can discover partnership opportunities that resonate
                with their personal brand ethos.
              </p>

              <p className="text-muted mb-0">
                At the heart of our marketplace lies the belief in the power of
                authentic connections. We prioritize transparency, ensuring that
                brands and influencers have full control over their
                partnerships. Our intuitive platform streamlines the
                collaboration process, allowing both parties to communicate
                effectively and negotiate terms that meet their mutual goals.
              </p>

              <div className="px-4 py-5 rounded-md bg-soft-primary text-center mt-4">
                <h4 className="mb-0">
                  " Where Brands Meet Influence, and Influence Meets Brands -
                  Unleash Your Potential Today! "
                </h4>
              </div>

              <div className="mt-4">
                <img
                  src={news1}
                  className="img-fluid rounded-md shadow"
                  alt=""
                  style={{ width: "100%" }}
                />
              </div>

              <p className="text-muted mt-4">
                Whether you're a brand looking to expand your reach or an
                influencer seeking meaningful partnerships, our marketplace is
                your gateway to success. Join us in revolutionizing the way
                brands and influencers collaborate, and together, let's create
                impactful campaigns that resonate with audiences worldwide.
              </p>
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
