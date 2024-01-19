import React from "react";
import Slider from "react-slick";

const items = [
  // {
  //   name: "Benefits for Your Organization",
  //   location: "USA",
  //   image: "/images/trainingIcons/learning.png",
  //   rating: 5,
  //   feedback:
  //   "As you learn your way onward the power platform, you will also have better insights into the advantages and disadvantages of using Microsoft Power Apps to build applications.",
  // },

  {
    name: "Learning to Leverage the Full Potential of PowerApps",
    location: "USA",
    image: "/images/trainingIcons/learning.png",
    rating: 5,
    feedback:
      "You need a better understanding of when using Microsoft Power Apps will exclusively benefit you. Kasipe Academy teaches you its components and how to use them.",
  },
  {
    name: "Make User-Friendly Apps ",
    location: "Brazil",
    image: "/images/trainingIcons/friendly.png",
    rating: 5,
    feedback:
      "Low-code ability really helps you a lot. So, use branding and design elements to make the application more consistent, aesthetically pleasing, and user-friendly.",
  },
  {
    name: "Learn to Customize Apps ",
    location: "Brazil",
    image: "/images/trainingIcons/customize.png",
    rating: 5,
    feedback:
      "Your needs are unique, and sticking to old-school techniques will not help. With Power Apps Learning, you can use customization of Power Apps-created applications.",
  },
  {
    name: "Master Monitoring and Maintenance",
    location: "Brazil",
    image: "/images/trainingIcons/monitoring.png",
    rating: 5,
    feedback:
      "We do not leave you after development training; learn to maintain and monitor each app. With each assignment, we help you understand the Monitoring and maintenance of Power Apps.",
  },
];

const   FeedbackSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {items.map((item, index) => (
        <div key={index} className="item">
          <div className="feedback-block-three">
            {/* <ul className="style-none d-flex rating">
              {[...Array(item.rating)].map((_, index) => (
                <li key={index}>
                  <i className="bi bi-star-fill" />
                </li>
              ))}
            </ul> */}
             <div className="d-flex align-items-center">
              <img
                src={item.image}
                alt="media"
                className="avatar rounded-circle"
              />
              <h6 className="name fs-20 fw-500 m0 ps-4">
                {item.name}{" "}
              </h6>
              {/* <img
                src="/images/icon/icon_35.svg"
                alt="media"
                className="ms-auto"
              /> */}
            </div>
            <p>{item.feedback}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default FeedbackSlider;
