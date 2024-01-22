import Link from "next/link";
import { useState } from "react";

const Hero = () => {
  const [inputValue, setInputValue] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Code for handling form submission
  };

  const content = {
    heading: "Our Mission: ",
    subheading:"Empowering Youth Through Modern Software Technology Education",
    subheading2:
    "At KAISPE Academy, our mission is clear: to provide practical and accessible software technology education to deserving Pakistani citizens, enabling them to secure a prosperous livelihood. We are committed to bridging the gap between talent and opportunity by training individuals to overcome the challenges of finding and hiring skilled developers. Serving as a vital link between academia and the tech industry, we aim to address the resource shortage issues faced by both sectors. This initiative is not just a Corporate Social Responsibility (CSR) effort; it's a dedication to doing something better for our youth. Through education and empowerment, we envision a future where every aspiring individual has the skills and opportunities needed to thrive in the dynamic world of technology. Join us on this journey of transformation and impact.",
    

    
      btnText: "Start Now",
  };

  return (
    <>
      <h1 className="hero-heading fw-light tx-dark">
        <span className="position-relative">{content.heading}</span>
      </h1>
      <p className="text-md mb-75 pt-60 lg-mb-40 lg-pt-40">
        {content.subheading}<br/><br/>
        {content.subheading2}

      </p>
    </>
  );
};

export default Hero;
