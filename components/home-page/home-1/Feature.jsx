import Image from "next/image";

const Feature = () => {
  const features = [
    {
      background: "#f0a8bd",
      title: (
        <>
         Empowerment for Non-Developers: 
        </>
      ),
      feedback:(
          <>
          Microsoft Power Apps training allows non-developers to create custom business apps without extensive coding knowledge and with low-code, no-code functionality.
          </>
        ),
      description: "100% Reliable",
      icon: "images/icon/icon_100.svg",
      width: "200",
      height: "200",
      delay: "100",
    },
    {
      background: "#dbc0fc",
      title: (
        <>
         Rapid App Development:   
        </>
      ),
      feedback: (
        <>
         Learn to build apps quickly with low-code or no-code techniques, reducing development time and accelerating the delivery of solutions to meet business needs.   
        </>
      ),
      width: "200",
      height: "200",
      description: "Claim Support",
      icon: "images/icon/icon_101.svg",
      delay: "100",
    },
    {
      background: "#b2e3f7",
      title: (
        <>
        User-Friendly Interface: 
        </>
      ),
      feedback: (
        <>
        Understand how Power Apps offers an intuitive and user-friendly interface, promoting widespread adoption and usability across different teams and skill levels.
        </>
      ),
      width: "200",
      height: "200",
      description: "Consultation",
      icon: "images/icon/icon_102.svg",
      delay: "100",
    },
    {
      background: "#e1ed87",
      title: (
        <>
        Career Advancement: 
        </>
      ),
      feedback: (
        <>
        Acquiring skills in Microsoft Power Apps can open doors to new career opportunities, especially in roles related to app development, business analysis, and process improvement.
        </>
      ),
      width: "200",
      height: "200",
      description: "Consultation",
      icon: "images/icon/icon_102.svg",
      delay: "100",
    },
  ];

  return (
    <>
      {features.map((feature, index) => (
        <div
          className="col-lg-3 col-sm-6"
          key={index}
          // data-aos="fade-up"
          data-aos-delay={feature.delay}
        >
          <div
            className={`card-style-fifteen tran3s position-relative mt-35`}
            style={{ background: feature.background }}
          >
            <h4>{feature.title}</h4>
            <h6 className="text-sm fw-normal tx-dark">{feature.feedback}</h6>
            {/* <p>{feature.description}</p> */}
            {/* <Image
              width={feature.width}
              height={feature.height}
              layout="intrinsic"
              src={feature.icon}
              alt="icon"
              className="position-absolute"
            /> */}
          </div>{" "}
          {/* /.card-style-fifteen */}
        </div>
      ))}
    </>
  );
};

export default Feature;
