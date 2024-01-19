import Link from "next/link";

const OurAim = () => {
  const aimItems = [
    {
      title: "About us",
      heading:
        "Challenges in IT Education: Addressing Shortage and Employability Issues in Pakistan",
      text: "According to an older report in a local newspaper, there is a shortage of around 75000 IT graduates annually because our universities have the capacity to train 25000 IT graduates per year. (Dawn.com) (Board of Investment)",
      text2:
        "According to another report by Gallup only 10% of IT Graduates are employable in Pakistan. Due to different issues. (ProPakistani) (TechJuice)",
      list: [
        "Amazing communication.",
        "Best trending designing experience.",
        "Email & Live chat.",
      ],
      link: "/pages-menu/about-us-v1",
    },
  ];

  const imageItems = [
    { src: "/images/challenges.png", alt: "shape" },
    {
      src: "/images/shape/shape_09.svg",
      alt: "shape",
      className: "shapes shape-one",
    },
    {
      src: "/images/shape/shape_10.svg",
      alt: "shape",
      className: "shapes shape-two",
    },
    {
      src: "/images/shape/shape_11.svg",
      alt: "shape",
      className: "lazy-img shapes shape-four",
    },
    {
      src: "/images/shape/shape_12.svg",
      alt: "shape",
      className: "lazy-img shapes shape-five",
    },
    {
      src: "/images/shape/shape_13.svg",
      alt: "shape",
      className: "lazy-img shapes shape-seven",
    },
  ];

  const cardItem = {
    imgSrc: "/images/icon/icon_06.svg",
    name: "- Rashed Ka",
    position: "CEO",
    text: "We aim to answer any query in less than",
  };

  return (
    <div className="row">
      <div className="col-lg-6 col-md-6 ms-auto order-md-last">
        {/* {aimItems.map((item, index) => ( */}
        <div className="block-style-one pt-35" data-aos="fade-left">
          <div className="title-style-one">
            <h2
              className="main-title fw-bold tx-dark m0"
              style={{ fontSize: "40px" }}
            >
              Challenges in IT Education: Addressing Shortage and Employability
              Issues in Pakistan
            </h2>
          </div>
        

          
          <p className="text-lg tx-dark pt-35 pb-40 lg-pb-20">
            <ul>
              <li>
              According to an older report in a local newspaper, there is a
            shortage of around 75000 IT graduates annually because our
            universities have the capacity to train 25000 IT graduates per year.{" "}
            <br/>
            <a
              href="https://www.dawn.com/news/1652716"
              target="_blank"
              style={{ color: "blue", textDecoration: "underline" }}
            >
              (Dawn.com)
            </a>
            
            <a
              href="https://invest.gov.pk/sites/default/files/inline-files/Profile%20-%20Technology%20Sector_new.pdf"
              target="_blank"
              style={{ color: "blue", textDecoration: "underline" }}
            >
              (Board of Investment){" "}
            </a>{" "}
            <br />
              </li>
            </ul>
           
            <ul>
              <li>
              According to another report by Gallup only 10% of IT Graduates are
            employable in Pakistan. Due to different issues. <br/>
            <a
              href="https://propakistani.pk/2020/07/15/only-10-of-it-graduates-are-employable-in-pakistan-gallup/"
              target="_blank"
              style={{ color: "blue", textDecoration: "underline" }}
            > (ProPakistani) </a> 
            {" "}
            <a
              href="https://www.techjuice.pk/university-graduates-even-with-top-results-lack-industry-skills-and-fail-to-get-jobs"
              target="_blank"
              style={{ color: "blue", textDecoration: "underline" }}
            >
             (TechJuice)
            </a>
              </li>
            </ul>
             
          </p>
        </div>
        {/* ))} */}
      </div>

      <div className="col-lg-6 col-md-6 order-md-first " data-aos="fade-right">
        <div className="img-meta d-inline-block position-relative ps-3 ps-lg-5 pb-50 md-mt-50 sm-mt-80">
          {imageItems.map((item, index) => (
            <img
              key={index}
              src={item.src}
              alt={item.alt}
              className={item.className}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurAim;
