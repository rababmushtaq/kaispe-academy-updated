import React from "react";
import Slider from "react-slick";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const testimonials = [
    {
      name: <a href="https://www.cnbc.com/2020/04/01/new-microsoft-google-amazon-cloud-battle-over-world-without-code.html" target="_blank" style={{ color: "blue", textDecoration: "underline" }}>"CNBC"</a>,

      feedback:
        "Next frontier in the Microsoft, Google, and Amazon cloud battle is over a world without code.",

    },
    {
      name: <a href="https://www.gartner.com/doc/reprints?id=1-2F7NELJY&ct=231004&st=sb?lcid=en-us" target="_blank" style={{ color: "blue", textDecoration: "underline" }}> "Gartner"</a>,
      location: <a href="https://www.gartner.com/en/newsroom/press-releases/2021-11-10-gartner-says-cloud-will-be-the-centerpiece-of-new-digital-experiences" target="_blank" style={{ color: "blue", textDecoration: "underline" }}>"Gartner Press Release"</a>,
      feedback:
        "By 2025, 70% of new applications developed by enterprises will use low-code or no-code technologies, up from less than 25% in 2020. ",

    },
    {
      name: <a href="https://www.gartner.com/en/newsroom/press-releases/2022-12-13-gartner-forecasts-worldwide-low-code-development-technologies-market-to-grow-20-percent-in-2023" target="_blank" style={{ color: "blue", textDecoration: "underline" }}> "Gartner Inc"</a>,
      feedback:
        "The worldwide market for low-code development technologies is projected to total $26.9 billion in 2023, an increase of 19.6% from 2022. ",
    },
    {
      name: <a href="https://www.gartner.com/en/newsroom/press-releases/2022-08-1-rpa-forecast-2022-2q22-press-release" target="_blank" style={{ color: "blue", textDecoration: "underline" }}>"Gartner, Inc."</a>,
      feedback:
        "Global robotic process automation (RPA) software end-user spending is projected to reach $2.9 billion in 2022, an increase of 19.5% from 2021."
        
      ,

    },
    {
      name: <a href="https://www.statista.com/statistics/1226179/low-code-development-platform-market-revenue-global/" target="_blank" style={{ color: "blue", textDecoration: "underline" }}>" Statista"</a>,
      feedback:
        "Low-code development platform market revenue worldwide from 2018 to 2025(in billion U.S. dollars)",
    },
  ];

  return (
    <Slider {...settings} arrows={false}>
      {testimonials.map((testimonial, index) => (
        <div key={index} className="item">
          <div className="feedback-block-twelve">
            <div className="icon rounded-circle d-flex align-items-center justify-content-center">
              <img src="/images/icon/icon_42.svg" alt="" />
            </div>
            <p className="tx-dark mt-35 mb-40 pe-xxl-4">
              {testimonial.feedback}
            </p>
            <h6 className="tx-dark fs-20">
              {testimonial.name},
              <span className="tx-dark fs-20">
                {testimonial.location}
              </span>
            </h6>
          </div>
          {/* /.feedback-block-twelve */}
        </div>
      ))}
    </Slider>
  );
};

export default Testimonial;
