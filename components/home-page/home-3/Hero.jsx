import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero-banner-twelve pt-225 pb-120 lg-pb-80 md-pt-200">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="text-wrapper" data-aos="fade-right">
              <h1
                className="hero-heading fw-500 tx-dark"
                style={{ fontSize: "45px", fontWeight:"bold" }}
              >
                Enhance Your Skills by Mastering the Microsoft Power Platform
                and Azure
              </h1>
              <p className="text-lg tx-dark mb-30 pt-35 lg-pt-20 lg-mb-20">
                Your portfolio is the face value for your career advancement.
                With KAISPE Academy, explore the new era of app building and
                managing data as you scale your abilities with Power Platform (low-code, no-code app development)
                and Azure. Learn it from the industry professionals and start
                taking further steps towards your professional goals.
              </p>
              <div className="d-lg-flex align-items-center">
                <a
                  href="#s1"
                  className="btn-twentyFour fw-500 position-relative d-inline-flex align-items-center me-5 mt-30"
                >
                  <span>Explore all Courses</span>
                  <img
                    src="/images/icon/icon_123.svg"
                    alt="icon"
                    className="ms-3"
                  />
                </a>
                <div className="btn-eighteen position-relative d-inline-block tx-dark mt-15 md-mt-20">
                  <a href="https://forms.office.com/pages/responsepage.aspx?id=eZQ9Mlwlp06vTPkd6SKQ7tVQfp5gMIRHih-MJu64lCpUMllDM0wyNlhPU0E5MlJSM05RVzNKQUtOMi4u" className="fw-500 tran3s">
                    Join for Free Now!
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* End col-6 */}

          <div
            className="col-xxl-6 col-xl-5 col-md-6 ms-auto text-end"
            data-aos="fade-left"
          >
            <div className="image-holder zn2 d-inline-block position-relative sm-mt-60">
              <img
                src="/images/assets/bg-12.png"
                alt="img"
                className="lazy-img"
              />
              <div className="media-img">
                <Image
                  width={490}
                  height={542}
                  layout="responsive"
                  src="/images/mainimage.png"
                  alt="img"
                  className="lazy-img"
                />
              </div>

              <div
                className="card-style card-one d-flex flex-column justify-content-center align-items-center"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                <h5>Skilled</h5>
                <p>Instructors</p>
              </div>
              {/* /.card-one */}

              <div
                className="card-style card-two d-flex flex-column justify-content-center align-items-center"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                <h5>Get</h5>
                <p>Certificate</p>
              </div>
              {/* /.card-one */}

              <div
                className="card-style card-three d-flex flex-column justify-content-center align-items-center"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <h5>Online </h5>
                <p>Classes</p>
                {/* <div className="avatar d-flex align-items-center">
                  <img src="/images/media/img_59.jpg" alt="" />
                  <img src="/images/media/img_60.jpg" alt="" />
                  <img src="/images/media/img_61.jpg" alt="" />
                  <img src="/images/media/img_62.jpg" alt="" />
                  <span className="avatar_image avatar_fallback">
                    <i className="bi bi-arrow-right-short" />
                  </span>
                </div> */}
              </div>
              {/* /.card-one */}

              <img
                src="/images/shape/shape_146.svg"
                alt="shape"
                className="shapes shape-one lazy-img"
              />
              <img
                src="/images/shape/shape_147.svg"
                alt="shape"
                className="shapes shape-two lazy-img"
              />
            </div>
          </div>
          {/* End col-6 */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </div>
  );
};

export default Hero;
