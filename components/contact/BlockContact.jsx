import Image from "next/image";

const BlockContact = () => {
  const addressBlocks = [
    {
      icon: "/images/icon/icon_147.svg",
      title: "Our Address",
      content: "590 Madison Avenue 21st Floor Manhattan, NY 10022 USA.",
      content1: "Suite#213 Sumya Business Avenue MACHS Karachi, Pakistan.",
      content2: "415 W. Golf Rd Suite 55-K (607 SF) Arlington Heights, IL 60005.",
      delay: "100",
    },
    {
      icon: "/images/icon/icon_148.svg",
      title: "Contact Info",
      content: "",
      link: "USA: (+1)-315-791-4472",
      link1: "PAK: (+92)-213-432-6085",
      delay: "200",
    },
    {
      icon: "/images/icon/icon_149.svg",
      title: "Email Address",
      content: "",
      link: "info@kaispe.com",
      delay: "300",
    },
  ];

  return (
    <>
      {addressBlocks.map((block, index) => (
        <div
          className="col-md-4"
          key={index}
          data-aos="fade-up"
          data-aos-delay={block.delay}
        >
          <div className="address-block-two text-center mb-40">
            <div className="icon rounded-circle d-flex align-items-center justify-content-center m-auto">
              <Image width={30} height={30} src={block.icon} alt="icon" />
            </div>
            <h5 className="title">{block.title}</h5>
            <p>
              
              {block.content} <br />
              {block.content1}<br/>
              
              {block.link} <br></br>
              {block.link1}
              {/* {block.link && (
                <a
                  href={block.link}
                  className={
                    block.link.includes("tel:") ? "call" : "webaddress"
                  }
                >
                  {block.link.replace("tel:", "")}
                </a>
              )} */}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlockContact;
