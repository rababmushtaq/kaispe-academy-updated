import Link from "next/link";
import Image from "next/image";
const AppBanner2 = () => {
  const features = [
    "Increased Efficiency and Productivity",
    "Improved Visibility and Control",
    "Enhanced Compliance",
    "Cost Savings",
    "Better Decision-Making",
    "Improved Supplier Relationships",
  ];

  // const buttons = [
  // {
  // platform: "Google play",
  //   icon: "images/download.png",
  //   className: "windows-button",
  // },
  // {
  //   platform: "App store",
  //   icon: "images/icon/apple-black.svg",
  //   className: "ios-button",
  // },
  // ];

  return (
    <div className="row align-items-center" style={{ width: "100%" }}>
      <div
        className="col-lg-12 col-md-9 m-auto text-center fade-up"
        data-aos="fade-down"
        style={{ paddingBottom: "100px" }}
      >
        {/* <div className="sc-title text-uppercase" style={{ fontWeight: "bold", marginBottom: "30px" }}>Features</div> */}
        <h2
          className="tx-dark mb-20"
          style={{ fontSize: "40px", fontWeight: "bold" }}
        >
          Why Choose <br />
          <span style={{ color: "#32CA8D" }}> KAISPE Academy?</span>
        </h2>
        <p
          className="text-lg tx-dark opacity-75 mb-30 lg-mb-20"
          style={{ fontSize: "20px", fontStyle: "" }}
        >
          Experience hands-on, virtual training through lab-based sessions
          designed to enhance practical skills and foster a deep understanding
          of the subject matter. We walk you through the challenges you might
          face without the training, along with the ways to overcome those
          challenges and efficiently improve your project performance.
        </p>
      </div>

      <div className="col-lg-4 col-md-12 col-sm-12">
        <div className="block-style-seven wow fadeInLeft">
          <div className="title-style-one">
            <div className="row">
              <div className="col-lg-10 col-md-10 col-sm-10 col-10">
                <h3
                  className="main-title fw-500 tx-dark m0"
                  style={{
                    fontSize: "22px",
                    textAlign: "end",
                    color: "#32CA8D",
                  }}
                >
                  Industry Professionals
                </h3>
                <p
                  style={{ textAlign: "end", marginTop: "20px", width: "100%" }}
                >
                  Take advantage of insights provided by industry professionals
                  with real-world experience. Our courses are designed to bridge
                  the gap between theoretical knowledge and practical
                  application by providing insightful perspectives from seasoned
                  experts.
                </p>
              </div>
              <div
                className="col-lg-2 col-md-2 col-sm-2 col-2"
                style={{
                  backgroundColor: "#32CA8D",
                  borderRadius: "70%",
                  height: "40px",
                  width: "40px",
                }}
              >
                <p
                  style={{
                    textAlign: "center",
                    paddingTop: "5px",
                    color: "white",
                  }}
                >
                  1
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="block-style-seven wow fadeInLeft">
          <div className="title-style-one" style={{ marginTop: "20px" }}>
            <div className="row">
              <div className="col-lg-10 col-md-10 col-sm-10 col-10">
                <h3
                  className="main-title fw-500 tx-dark m0"
                  style={{ fontSize: "22px", textAlign: "end" }}
                >
                  Personal Development
                </h3>
                <p
                  style={{ textAlign: "end", marginTop: "20px", width: "100%" }}
                >
                  We are interested in developing you as a person, not just in
                  imparting knowledge. Our curriculum is intended to foster
                  personal growth while also improving your skill set and
                  preparing you for the challenges and opportunities that await
                  you on your professional journey.
                </p>
              </div>
              <div
                className="col-lg-2 col-md-2 col-sm-2 col-2"
                style={{
                  backgroundColor: "#D5D5D5",
                  borderRadius: "70%",
                  height: "40px",
                  width: "40px",
                }}
              >
                <p style={{ textAlign: "center", paddingTop: "5px" }}>2</p>
              </div>
            </div>
          </div>
        </div>
        <div className="block-style-seven wow fadeInLeft">
          <div className="title-style-one" style={{ marginTop: "20px" }}>
            <div className="row">
              <div className="col-lg-10 col-md-10 col-sm-10 col-10">
                <h3
                  className="main-title fw-500 tx-dark m0"
                  style={{ fontSize: "22px", textAlign: "end" }}
                >
                  Learn at Your Own Pace
                </h3>
                <p
                  style={{ textAlign: "end", marginTop: "20px", width: "100%" }}
                >
                  KIn our learning environment, adaptability is essential. Learn
                  at your own pace, according to your schedule and lifestyle.
                  Our courses are designed to accommodate a variety of learning
                  styles, ensuring that you understand concepts thoroughly
                  without feeling rushed.
                </p>
              </div>
              <div
                className="col-lg-2 col-md-2 col-sm-2 col-2"
                style={{
                  backgroundColor: "#D5D5D5",
                  borderRadius: "70%",
                  height: "40px",
                  width: "40px",
                }}
              >
                <p style={{ textAlign: "center", paddingTop: "5px" }}>3</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-12 col-sm-12 illustration-holder">
        <img
          src="/images/academy.png"
          alt=""
          className="lazy-img main-img  "
          style={{}}
        />
      </div>

      <div className="col-lg-4 col-md-12 col-sm-12">
        <div className="block-style-seven wow fadeInLeft">
          <div className="title-style-one" style={{ marginTop: "20px" }}>
            <div className="row">
              <div
                className="col-lg-2 col-md-2 col-sm-2 col-2"
                style={{
                  backgroundColor: "#D5D5D5",
                  borderRadius: "70%",
                  height: "40px",
                  width: "40px",
                }}
              >
                <p style={{ textAlign: "center", paddingTop: "5px" }}>4</p>
              </div>

              <div className="col-lg-10 col-md-10 col-sm-10 col-10">
                <h3
                  className="main-title fw-500 tx-dark m0"
                  style={{ fontSize: "22px", textAlign: "start" }}
                >
                  Compete with Your Peers
                </h3>
                <p
                  style={{
                    textAlign: "start",
                    marginTop: "20px",
                    width: "100%",
                  }}
                >
                  Engage in friendly competition with your classmates to improve
                  your learning experience. Collaborative learning environments
                  encourage friendly competition, encouraging you to strive for
                  excellence and continuously improve your skills.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="block-style-seven wow fadeInLeft">
          <div className="title-style-one" style={{ marginTop: "20px" }}>
            <div className="row">
              <div
                className="col-lg-2 col-md-2 col-sm-2 col-2"
                style={{
                  backgroundColor: "#D5D5D5",
                  borderRadius: "70%",
                  height: "40px",
                  width: "40px",
                }}
              >
                <p style={{ textAlign: "center", paddingTop: "5px" }}>5</p>
              </div>

              <div className="col-lg-10 col-md-10 col-sm-10 col-10">
                <h3
                  className="main-title fw-500 tx-dark m0"
                  style={{ fontSize: "22px", textAlign: "start" }}
                >
                  Routine Assignments
                </h3>
                <p
                  style={{
                    textAlign: "start",
                    marginTop: "20px",
                    width: "100%",
                  }}
                >
                  Routine assignments are included in our structured approach to
                  reinforce your learning. Regular practice ensures that you not
                  only understand the concepts but also develop the necessary
                  practical skills for real-world application.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="block-style-seven wow fadeInLeft">
          <div className="title-style-one" style={{ marginTop: "20px" }}>
            <div className="row">
              <div
                className="col-lg-2 col-md-2 col-sm-2 col-2"
                style={{
                  backgroundColor: "#D5D5D5",
                  borderRadius: "70%",
                  height: "40px",
                  width: "40px",
                }}
              >
                <p style={{ textAlign: "center", paddingTop: "5px" }}>6</p>
              </div>

              <div className="col-lg-10 col-md-10 col-sm-10 col-10">
                <h3
                  className="main-title fw-500 tx-dark m0"
                  style={{ fontSize: "22px", textAlign: "start" }}
                >
                  Feedback from Experts
                </h3>
                <p
                  style={{
                    textAlign: "start",
                    marginTop: "20px",
                    width: "100%",
                  }}
                >
                  Receive constructive feedback from experts in the field. Our
                  emphasis on feedback is aimed at providing personalized
                  insights, helping you understand your strengths and areas for
                  improvement, and ultimately enhancing your overall learning
                  experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div
        className="ms-auto text-center text-lg-start"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Link
          href="/Features"
          className="btn-twentyTwo fw-500 tran3s"
          style={{ backgroundColor: "#32CA8D", marginTop: "40px" }}
        >
          View All Features
        </Link>
      </div> */}
    </div>
  );
};

export default AppBanner2;
