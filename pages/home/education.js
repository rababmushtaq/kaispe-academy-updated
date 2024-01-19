import Link from "next/link";
import React from "react";
import Seo from "../../components/common/Seo";
import Header3 from "../../components/home-page/home-9/Header";
import CourseCategory from "../../components/home-page/home-3/CourseCategory";
import CourseFeatured from "../../components/home-page/home-3/CourseFeatured";
import CourseFilter from "../../components/home-page/home-3/CourseFilter";
import Faq from "../../components/home-page/home-3/Faq";
import FeatureBlock from "../../components/home-page/home-3/FeatureBlock";
import Testimonial from "../../components/home-page/home-3/Testimonial";
import FeatureBlock2 from "../../components/home-page/home-3/FeatureBlock2";
import Hero from "../../components/home-page/home-3/Hero";
import HowToStartBlock from "../../components/home-page/home-3/HowToStartBlock";
import SignUpBanner from "../../components/home-page/home-3/SignUpBanner";
import Social from "../../components/home-page/home-9/Social";
import ContactForm from "../../components/home-page/home-9/ContactForm";
import OurAim from "../../components/home-page/home-10/OurAim";
import WhyChoose from "../../components/home-page/home-7/WhyChoose";
import WhyChoose2 from "../../components/home-page/home-7/WhyChoose2";
import FaqEducation from "../../components/home-page/home-13/Faq";
import AppBanner2 from "../../components/home-page/home-1/AppBanner2";
import HeroMission from "../../components/home-page/home-11/Hero";
import Testimonial2 from "../../components/home-page/home-12/Testimonial2";
import Feature from "../../components/home-page/home-1/Feature";

const education = () => {
  return (
    <>
      <Seo pageTitle="Kaispe Academy" />
      {/* <!--  =============================================
        Theme Header3 Menu
        ============================================== 	--> */}
      <Header3 />
      {/* <!-- 
        =============================================
        Theme Hero Banner
        ============================================== 
        --> */}
      <Hero />
      {/* <!--
        =====================================================
        Feature Section Thirty Nine
        =====================================================
        --> */}
      <div className="fancy-feature-thirtyNine position-relative zn2 pt-90 pb-50 lg-pt-50 lg-pb-10">
        <div className="container">
          <div className="row gx-xxl-5">
            <FeatureBlock />
          </div>
        </div>
        <img
          src="/images/shape/shape_148.svg"
          alt="shape"
          className="shapes shape-one lazy-img"
        />
        <img
          src="/images/shape/shape_149.svg"
          alt="shape"
          className="shapes shape-two lazy-img"
        />
        <img
          src="/images/shape/shape_150.svg"
          alt="shape"
          className="shapes shape-three lazy-img"
        />
        <img
          src="/images/shape/shape_151.svg"
          alt="shape"
          className="shapes shape-four lazy-img"
        />
      </div>

      <div className="fancy-feature-fiftyOne position-relative mt-200">
        <div className="container">
          <div className="row">
            <div className="col-lg-7" data-aos="fade-right">
              <div className="title-style-five mb-65 md-mb-40">
                <h2 className="main-title fw-500 tx-dark">
                  About KAISPE Academy
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-8 col-lg-9 ms-auto">
              <div className="ps-xxl-5" data-aos="fade-left">
                {/* <h6 className="mb-30">Our History &amp; Goal.</h6> */}
                <p className="text-lg tx-dark">
                  Welcome to KAISPE Academy, your gateway to mastering Microsoft
                  Power Apps! At KAISPE, were committed to providing a dynamic
                  and comprehensive online learning experience tailored for
                  individuals and different institutions seeking expertise in
                  Power Apps. Our academy boasts a team of seasoned instructors
                  who guide you through a structured curriculum, equipping you
                  with the skills to design, build, and optimize powerful
                  applications without the need for extensive coding. Whether
                  youre a beginner or looking to enhance your proficiency,
                  KAISPE Academy ensures a learning environment that fosters
                  growth, innovation, and hands-on application development.
                </p>
                <p className="text-lg tx-dark">
                We have formed a KAISPE Academy to offer short training sessions to assist individuals in playing a no-code/low-code game in app development smartly. The academy aims to help institutions and individuals manage training and learning by providing sessions, tutorials, and courses. We have hosted several Microsoft events like App in a Day (AIAD) and Robotic Process Automation in a Day (RPAIAD)..
                </p>
                {/* <div className="row">
                  <Counter />
                </div> */}
              </div>
            </div>
          </div>
        </div>
        {/* /.container */}

        <img
          src="/images/shape/shape_171.svg"
          alt="shape"
          className="lazy-img shapes shape-one"
        />
        <img
          src="/images/shape/shape_172.svg"
          alt="shape"
          className="lazy-img shapes shape-two"
        />
      </div>

      <div className="fancy-feature-two position-relative pt-225 mt-40 lg-pt-100 sm-pt-60">
        <div className="container">
          <OurAim />
          <div
            className="title-style-one text-center mb-85 lg-mb-30"
            data-aos="fade-up"
          ></div>
          <h2 className="main-title fw-400 tx-dark m0">
          The Soaring Market Share of Low-Code, No-Code, and RPA Technologies
                </h2>
                <div
            className="title-style-one text-center mb-85 lg-mb-30"
            data-aos="fade-up"
          ></div>
                <Testimonial2/>
        </div>
      </div>

      {/*
        =====================================================
        Feature Section Forty
        =====================================================
        */}
      <div className="fancy-feature-forty mt-140 lg-mt-100" id="s1">
        <div className="container">
          <div
            className="title-style-one text-center mb-85 lg-mb-30"
            data-aos="fade-up"
          >
            <div className="sc-title text-uppercase">OUR CORUSES</div>
            <h2 className="main-title fw-500 tx-dark m0">
              Job-Oriented Course and Training for Better Skill-Improved
            </h2>
            <p style={{ marginTop: "20px" }}>
              Work for highly-paid positions by making the right choice of
              courses. Power apps and Azure are the future of organizational
              development. Establish a profound skill level. So, the ladder of
              success is waiting for you to climb it step by step.
            </p>
          </div>
        </div>
        {/* End .container */}

        <div className="bg-wrapper m-auto">
          <div className="container">
            <div className="row">
              <CourseCategory />
            </div>
          </div>
        </div>
        {/* End bg-wrapper */}
      </div>

      <div className="fancy-feature-nine position-relative pt-200 lg-pt-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="block-style-three" data-data-aos="fade-right">
                <div className="title-style-four">
                  <h2 className="main-title fw-500 tx-dark m0">
                    Additional Soft skills
                  </h2>
                </div>
                {/* /.title-style-four */}
                <p className="fs-20 pt-45 pe-xxl-5">
                  Individuals and companies can embrace the new level of
                  learning with KAISPE Academy
                </p>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-9 m-auto text-center text-lg-right"
              data-data-aos="fade-left"
            >
              <WhyChoose />
            </div>
            <div
              className="col-lg-6 col-md-9 m-auto text-center text-lg-right"
              data-data-aos="fade-left"
            >
              <WhyChoose2 />
            </div>
          </div>
        </div>
      </div>


      {/* Benefits of Microsoft Power Apps Training Program */}
      <div className="fancy-feature-thirtyFour mt-50 ">
        <div className="container">
          <h2>Benefits of Microsoft Power Apps Training Program</h2>
          <div className="row gx-xxl-5 ">
            <Feature />
          </div>
        </div>
        {/* <!-- /.container --> */}
      </div>



      <div className="fancy-feature-thirtyThree mt-180 lg-mt-120" id="s2">
        <div className="container">
          <div className="title-style-ten text-center" data-aos="fade-up">
            {/* <div className="sc-title">FAQ</div> */}
            <h2 className="main-title font-recoleta fw-normal tx-dark">
              How It{" "}
              <span className="position-relative">
                works <img src="/images/shape/shape_132.svg" alt="" />
              </span>
            </h2>
          </div>
          {/* /.title-style-ten */}


          <div
            className="bg-wrapper position-relative mt-80 lg-mt-40"
            data-aos="fade-up"
          >
            <FaqEducation />
            <img
              src="/images/shape/shape_133.svg"
              alt="shape"
              className="lazy-img shapes shape-one"
            />
          </div>
          {/* /.bg-wrapper */}
        </div>
      </div>

         {/* Our mission */}

         <div className="container">
          <div className="row">
            <div className="col-lg-9 m-auto text-center" data-aos="fade-up">
              <HeroMission />
              
            </div>
          </div>
          </div>

      <div
        className="feedback-section-three position-relative mt-225 lg-mt-120 pb-100"
        data-data-aos="fade-up"
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-6 ms-auto">
              <div className="title-style-four text-center text-lg-start pb-100 lg-pb-30">
                <h2
                  className="main-title fw-500 tx-dark m0"
                  style={{ paddingLeft: "30px" }}
                >
                  Professional Training Fulfilling Your Learning Goals
                </h2>
                <p>Learn Power platform and Azure  in a way that keeps you hooked for a better career ahead</p>
              </div>
            </div>
          </div>
          <div className="slider-wrapper">
            <div className="feedback_slider_three">
              <Testimonial />
            </div>
          </div>
          {/* /.slider-wrapper */}
        </div>
        {/* End .contaier */}

        <div className="shape-holder">
          <img
            src="/images/shape/shape_48.svg"
            alt="shape"
            className="lazy-img"
          />
          {/* <img
            src="/images/media/img_22.jpg"
            alt="media"
            className="lazy-img shapes rounded-circle avatar-one"
            style={{ width: "50px", height: "50px" }}
          />
          <img
            src="/images/media/img_23.jpg"
            alt="media"
            className="lazy-img shapes rounded-circle avatar-two"
            style={{ width: "80px", height: "80px" }}
          />
          <img
            src="/images/media/img_24.jpg"
            alt="media"
            className="lazy-img shapes rounded-circle avatar-three"
            style={{ width: "60px", height: "60px" }}
          />
          <img
            src="/images/media/img_25.jpg"
            alt="media"
            className="lazy-img shapes rounded-circle avatar-four"
            style={{ width: "80px", height: "80px" }}
          /> */}
        </div>
      </div>

      <div className="fancy-feature-thirtyEight mt-140 lg-mt-100" id="s3">
        <div className="container">
          <AppBanner2 />
        </div>
      </div>

      <div
        className="hero-banner-six position-relative pt-180 md-pt-150"
        id="s4"
      >{/* /.subscribe-form */}
        {/* <div className="container">
          <div className="row">
            <div className="col-lg-9 m-auto text-center" data-aos="fade-up">
              <HeroMission />
              
            </div>
          </div>
          </div> */}
          {/* End .row */}

          {/* <div
            className="illustration-holder text-center mt-45"
            data-aos="fade-up"
          >
            <div className="d-lg-block">
              <img
                src="/images/assets/ils_02.svg"
                alt="shape"
                className="lazy-img m-auto"
              />
            </div>
          </div>  */}
          {/* End .illustration-holder */}
       
        {/* /.container */}

        <div className="shapes shape-one rounded-circle" />
        <img
          src="/images/shape/shape_83.svg"
          alt="shape"
          className="lazy-img shapes shape-two"
        />
        <div className="shapes shape-three" />
        <img
          src="/images/shape/shape_84.svg"
          alt="shape"
          className="lazy-img shapes shape-four"
        />
        <img
          src="/images/shape/shape_85.svg"
          alt="shape"
          className="lazy-img shapes shape-five"
        />
        <div className="shapes shape-six rounded-circle" />
        <div className="shapes shape-seven rounded-circle" />
        <img
          src="/images/shape/shape_84.svg"
          alt="shape"
          className="lazy-img shapes shape-eight"
        />
        <img
          src="/images/shape/shape_83.svg"
          alt="shape"
          className="lazy-img shapes shape-nine"
        />
      </div>

      {/*
			=====================================================
				Feedback Section Thirteen
			=====================================================
			*/}

      <SignUpBanner />

      {/*
		=====================================================
		Footer
		=====================================================
		*/}

      <div className="fancy-short-banner-five p-30 mt-110" id="s5">
        <div className="bg-wrapper position-relative pt-180 pb-140 lg-pt-80 lg-pb-80">
          <img
            src="/images/shape/shape_68.svg"
            alt="shape"
            className="lazy-img shapes shape-one"
          />
          <img
            src="/images/shape/shape_69.svg"
            alt="shape"
            className="lazy-img shapes shape-two"
          />
          <img
            src="/images/shape/shape_70.svg"
            alt="shape"
            className="lazy-img shapes shape-three"
          />
          <div className="r-shape-one position-absolute" />
          <div className="container">
            <div
              className="innner-content bg-white position-relative"
              data-aos="fade-up"
            >
              <div className="r-shape-two rounded-circle position-absolute" />
              <div className="row align-items-center">
                <div className="col-lg-5">
                  <h2 className="title-xl font-recoleta fw-500 tx-dark">
                    Let’s
                    <span className="d-inline-block position-relative">
                      Connect
                    </span>
                  </h2>
                  {/* <p className="text-lg mt-35 md-mt-20">
                    Empowering Youth Through Modern Software Technology
                    Education
                  </p> */}
                 
                </div>
                <div className="col-lg-6 ms-auto">
                  <div className="form-style-one md-mt-40">
                    <ContactForm />
                  </div>
                  {/* /.form-style-one */}
                </div>
              </div>
            </div>
            {/* /.innner-content */}
          </div>
        </div>
        {/* /.bg-wrapper */}
      </div>

      <div className="footer-style-four position-relative">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 mb-30 order-lg-0">
              <div className="logo d-flex justify-content-center justify-content-lg-start">
                <Link href="/">
                  <img src="/images/logo-black.png" alt="" width={140} />
                </Link>
              </div>
            </div>
            {/* End .col-lg-4 */}

            <div className="col-lg-4 mb-30 d-flex justify-content-center justify-content-lg-end order-lg-3">
              <a
                href="mailto:info@kaispe.com"
                className="mail d-flex align-items-center"
              >
                <span className="icon d-flex align-items-center justify-content-center rounded-circle">
                  <i className="far fa-envelope" />
                </span>
                <span>info@kaispe.com</span>
              </a>
            </div>
            {/* End .col-lg-4 */}

            <div className="col-lg-4 mb-30 order-lg-2">
              <Social />
            </div>
            {/* End .col-lg-4 */}
          </div>
          {/* End .row */}
        </div>
      </div>
    </>
  );
};

export default education;
