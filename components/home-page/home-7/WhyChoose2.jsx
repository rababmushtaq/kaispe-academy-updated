const WhyChoose = () => {
    const cards = [
      {
        iconSrc: "/images/softIcons/meetings.png",
        title: "Business meetings using Microsoft Teams",
      },
      {
        iconSrc: "/images/softIcons/diverse.png",
        title: "Working in diverse environments",
      },
      {
        iconSrc: "/images/softIcons/leadership.png",
        title: "Leadership skills",
      },
    ];
  
    return (
      <div className="screen-container position-relative ms-auto">
        <img
          src="/images/shape/shape_45.svg"
          alt="shape"
          className="lazy-img shapes bg-round-shape"
        />
        <div className="block-content">
          <div className="row gx-xxl-5 align-items-center">
            <div className="col-sm-6">
              {cards.slice(0, 2).map((card, index) => (
                <div
                  key={index}
                  className={`card-style-five wow ${
                    index === 0 ? "fadeInDown" : "fadeInUp"
                  }`}
                  wow-delay="0.2s"
                >
                  <div className="icon d-flex align-items-end">
                    <img src={card.iconSrc} alt="shape" className="lazy-img" />
                  </div>
                  <h4>{card.title}</h4>
                </div>
              ))}
            </div>
            <div className="col-sm-6">
              <div
                className="card-style-five xs-mt-10 wow fadeInRight"
                wow-delay="0.2s"
              >
                <div className="icon d-flex align-items-end">
                  <img src={cards[2].iconSrc} alt="shape" className="lazy-img" />
                </div>
                <h4>{cards[2].title}</h4>
              </div>
              {/* /.card-style-five */}
            </div>
          </div>
        </div>
        {/* /.block-content */}
      </div>
    );
  };
  
  export default WhyChoose;
  