import Image from "next/image";
import React from "react";

const CourseCategory = () => {
  const categories = [
    {
      icon: "/images/courseIcons/powerapps.png",
      title: "Microsoft PowerApps",
      courses: "With our sessions,  you can explore the benefits of low-code development using Microsoft Power Apps. ",
    },
    {
      icon: "/images/courseIcons/automate.png",
      title: "Microsoft Power Automate",
      courses: "Learn how to streamline your workflows using Microsoft Power Automate",
    },
    {
      icon: "/images/courseIcons/agents.png",
      title: "Microsoft Power Virtual Agents ",
      courses: "Know the ways and tips to increase customer experience using Microsoft Power Virtual agents.",
    },
    {
      icon: "/images/courseIcons/openai.png",
      title: "Microsoft Azure OpenAI",
      courses: "Leverage cloud computing and artificial intelligence to improve your system.  ",
    },
    // {
    //   icon: "/images/icon/icon_131.svg",
    //   title: "Digital Marketing",
    //   courses: "230+ Courses",
    // },
    // {
    //   icon: "/images/icon/icon_132.svg",
    //   title: "Language",
    //   courses: "310+ Courses",
    // },
    // {
    //   icon: "/images/icon/icon_133.svg",
    //   title: "Development",
    //   courses: "73+ Courses",
    // },
  ];

  return (
    <>
      {categories.map((category, index) => (
        <div key={index} className="col-lg-3 col-md-4 col-sm-6 d-flex">
          <a
            // href="#"
            className="card-style-eighteen text-center tran3s mb-40 xs-mb-20"
          >
            <div className="icon d-flex align-items-end justify-content-center">
              <Image
                width={42}
                height={42}
                src={category.icon}
                alt=""
                className="lazy-img"
              />
            </div>
            <h4 className="tx-dark mt-45 lg-mt-30">{category.title}</h4>
            <p>{category.courses}</p>
          </a>
          {/* /.card-style-eighteen */}
        </div>
      ))}
      {/* <div className="col-lg-3 col-md-4 col-sm-6 d-flex">
        <a
          href="#"
          className="card-style-eighteen more-item position-relative text-center tran3s mb-40"
        >
          <h3>20</h3>
          <p className="pb-20">More Category</p>
          <img src="/images/icon/icon_134.svg" alt="" className="m-auto" />
        </a>
      </div> */}
    </>
  );
};

export default CourseCategory;
