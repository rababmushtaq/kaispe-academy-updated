const featuresData = [
  {
    icon: "/images/icon/icon_124.svg",
    title: "Expert-Led, Real-World Learning: ",
    subtitle: "Real-world expertise in every lesson.",
  },
  {
    icon: "/images/icon/icon_125.svg",
    title: "Industry-Recognized Certification: ",
    subtitle: "Earn a certification that holds weight in the industry."
  },
  {
    icon: "/images/icon/icon_126.svg",
    title: "Personalized Learning Experience:",
    subtitle: "Your unique learning journey awaits.",
  },
];

const FeatureBlock = () => {
  return (
    <>
      {featuresData.map((feature, index) => (
        <div key={index} className="col-lg-4 col-md-6">
          <div className="card-style-seventeen d-flex align-items-center mb-40">
            <div className="icon rounded-circle d-flex align-items-center justify-content-center">
              <img src={feature.icon} alt="icon" className="lazy-img" />
            </div>
            <div className="ps-4 text-wrapper">
              <h4 className="text-white m0" style={{fontSize:"18px"}}>{feature.title}</h4>
              <p className="m0" style={{fontSize:"16px"}}>{feature.subtitle}</p>    
            </div>
          </div>
          {/* /.card-style-seventeen */}
        </div>
      ))}
    </>
  );
};

export default FeatureBlock;
