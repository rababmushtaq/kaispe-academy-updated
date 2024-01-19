import Seo from "../components/common/Seo";
import BlockContact from "../components/contact/BlockContact";
import ContactForm from "../components/contact/ContactForm";
import Map from "../components/contact/Map";
import DefaultFooter from "../components/footer/DefaultFooter";
import DefaulHeader from "../components/header/DefaulHeader";
import Link from "next/link";
import Footer from '../components/footer/Footer'
const contact = () => {
  return (
    <>
      <Seo pageTitle="Purchase Requisition | Contact" />
      {/* <!-- 
      =============================================
      Theme Default Menu
      ============================================== 	
      --> */}
      <DefaulHeader />

      {/* 
        =============================================
        Feature Section Fifty One
        ============================================== 
        */}
      <div className="fancy-feature-fiftyOne position-relative mt-250 lg-mt-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 text-center m-auto wow fadeInUp">
              <div className="title-style-five mb-65 lg-mb-40">
                <div className="sc-title-two fst-italic position-relative d-inline-block">
                  Contact info
                </div>
                <h2 className="main-title fw-500 tx-dark">Get in Touch.</h2>
              </div>
            </div>
          </div>
        </div>
        {/* /.container */}
        <img
          src="/images/shape/shape_172.svg"
          alt="shape"
          className="lazy-img shapes shape-two"
        />
      </div>

      {/* 
        =============================================
        Contact Section One
        ============================================== 
        */}
      <div className="contact-section-one mt-60 lg-mt-30">
        <div className="container">
          <div className="row">
            <BlockContact />
          </div>
        </div>
      </div>

      {/* <div
        className="fancy-short-banner-sixteen mt-130 lg-mt-80"
        data-aos="fade-up"
      >
        <div className="container">
          <div className="bg-wrapper pt-65 pb-65 lg-pt-40 lg-pb-40">
            <div className="row">
              <div className="col-xl-10 col-md-11 m-auto">
                <div className="row align-items-center">
                  <div className="col-xl-12 col-lg-12">
                    <div className="text-wrapper text-center text-lg-start md-pb-30">
                      <h2 className="main-title fw-500 text-white m0" style={{textAlign:"center"}}>
                      Try out the KAISPE Purchase Requisition App today!
                      </h2>
                    </div>
                  </div>

                  <div className="col-xl-12 col-lg-12 ms-auto text-center text-lg-center">
                    <Link
                      href="https://outlook.office365.com/owa/calendar/KAISPE1@NETORGFT2992819.onmicrosoft.com/bookings/"
                      className="btn-twentyOne fw-500 tran3s"
                      style={{marginTop:"30px"}}
                    >
                      Book a Demo 
                    </Link>
                  </div>
                </div>

        </div>
      </div> */}

<div
        className="  mt-130 lg-mt-80"
        data-aos="fade-up"
      >
        <div className="container quote">
          <div className="bg-wrapper pt-65 pb-65 lg-pt-40 lg-pb-40 ">
            <div className="row  ">
              <div className="col-xl-102 col-md-11 m-auto ">
                <div className="row align-items-center">
                  <div className="col-lg-12"  style={{display:"grid", placeItems:"center", justifyContent:"center"}}>
                    <div className="text-wrapper text-center text-lg-start md-pb-30">
                      <h3 className="main-title fw-500 text-white m0" style={{fontSize:"40px", textAlign:"center"}}>
                      Try out the KAISPE Purchase Requisition App today!
                      </h3>
                    </div>
                    <Link      
                      href="https://outlook.office365.com/owa/calendar/KAISPE1@NETORGFT2992819.onmicrosoft.com/bookings/"
                      className="btn-twentyOne fw-500 tran3s"
                      style={{marginTop:"30px", backgroundColor:"black", borderRadius:"10px"}}
                    >
                     Book a Demo
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <Map />
      {/* 
        =============================================
        Contact Section One
        ============================================== 
        */}
          <div className="footer-style-ten theme-basic-footer zn2 position-relative back" style={{marginTop:"0px"}}>
        <div className="container ">
          <div className="inner-wrapper">
            <div className="row justify-content-between">
              <div className="col-lg-4 footer-intro mb-40">
                <div className="logo">
                  <Link href="/">
                    <img src="/images/purchase/purchase_white.png" alt="logo" width={220} />
                  </Link>
                </div>
                <p className="text-white opacity-75 fs-18 mt-15 mb-45 lg-mb-10">
                KAISPE has been providing solutions and services to customers using Microsoft Dynamics, Azure, Power platform, Oracle NetSuite, mobile and web app development. 
                </p>
                <p className="text-white opacity-50 fs-15 m0 d-none d-lg-block">
                  © {new Date().getFullYear()} {" "}
                  <a  href="https://www.kaispe.com/" target="_blank" style={{color:"#4980FF"}}>KAISPE</a> All Rights Reserved.
                </p>
              </div>

              <div className="col-lg-4 footer-intro mb-40">
                <div className="logo">
                  <h5 className="footer-title text-white fw-500">Email Address</h5>
                </div>
                <p className="text-white opacity-75 fs-18 mt-15 mb-45 lg-mb-10">
                <i className="fas fa-envelope" style={{marginRight:"10px", color:"white"}}></i>info@kaispe.com
                </p>
                <h5 className="footer-title text-white fw-500">Contact Number</h5>
                
                <p className="text-white opacity-75 fs-18 mt-15 mb-45 lg-mb-10">
                <i className="fas fa-phone-alt" style={{marginRight:"10px", color:"white"}}></i>   USA : (+1)-315-791-4472 <br></br>
                <i className="fas fa-phone-alt" style={{marginRight:"10px", color:"white"}}></i>   PAK : (+92)-213-432-6085
                </p>
              
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
      {/* <DefaultFooter /> */}
    </>
  );
};

export default contact;
