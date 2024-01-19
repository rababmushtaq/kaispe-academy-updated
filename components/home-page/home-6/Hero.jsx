import Link from "next/link";
import { useState } from "react";
// import Image from 'next/image'
const Hero = () => {


  return (
    <>


      <div className="hero-banner-two position-relative pt-250 lg-pt-200 md-pt-150">
        {/* <img
          src="/images/shape/shape_26.svg"
          alt="shape"
          className="lazy-img shapes shape-left"
        />
        <img
          src="/images/shape/shape_27.svg"
          alt="shape"
          className="lazy-img shapes shape-right"
        /> */}

        <div className="container">
          <div className="row">
            <div
              className="col-lg-12 col-md-12  m-auto text-center"
              data-aos="fade-up"
            >
              <h2 className="tx-dark mb-20" style={{fontWeight:"bold"}}>What is KAISPE <br /><span style={{ color: "#32CA8D" }}> Purchase Requisition App?</span></h2>

              <p className="text-lg tx-dark opacity-75 mb-30 lg-mb-20" style={{ fontSize: "20px", fontStyle: "" }}>
                Many organizations rely on ERP software to manage their employee purchase requisition processes. 
                However, these systems can often be complicated to use and overwhelming for end-users due to their 
                extensive feature sets. KAISPE's Purchase Requisition App is designed to simplify this process, offering a 
                user-friendly and intuitive cloud-based solution. With our app, customers can easily raise, review, and 
                manage purchase requisitions from a single location, all while on the go
              </p>

              <div className="bg-wrapper tablet" style={{backgroundColor:"white", marginTop:"40px", display:"flex", alignItems:"center", justifyContent:"center"}}>
              <img
                src="/images/purchase/mobileTab.png"
                alt="media"
                style={{width:"80%", height:"auto"}}
                className="lazy-img main-screen  tablet"
              />
            </div>
            </div>
          </div>
          {/* End .row */}

          <div
            className="illustration-holder position-relative mt-120 lg-mt-80 xs-mt-30"
            data-aos="fade-up"
          >
            {/* <div className="bg-wrapper" style={{backgroundColor:"white", marginTop:"-7  0px"}}>
              <img
                src="/images/purchase/image_10.png"
                alt="media"
                className="lazy-img main-screen w-100"
              />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
