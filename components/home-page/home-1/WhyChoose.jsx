import Link from "next/link";

const accordionItems = [
  {
    id: 1,
    icon: "/images/icon/icon_108.svg",
    title: "Increased Efficiency and Productivity",
    content:
      "The material requisition app streamlines the procurement process, reducing errors and saving time. This, in turn, increases efficiency and productivity within the organization.",
  },
  {
    id: 2,
    icon: "/images/icon/icon_109.svg",
    title: "Improved Visibility and Control",
    content:
      "The app provides real-time visibility into procurement requests and their status, giving organizations greater control over their procurement processes.",
  },
  {
    id: 3,
    icon: "/images/icon/icon_110.svg",
    title: "Enhanced Compliance",
    content:
      "Customizable approval workflows ensure that the procurement process is in line with the organization's policies and procedures, improving compliance and reducing the risk of non-compliance.",
  },
  {
    id: 4,
    icon: "/images/icon/icon_110.svg",
    title: "Cost Savings",
    content:
      "The Purchase Requisition App provides businesses with the ability to track and analyze their procurement processes, identifying areas for improvement and optimizing workflows. This leads to increased efficiency, reduced costs, and a more streamlined procurement process overall.",
  },
];

const WhyChoose = () => {
  return (
    <div className="accordion accordion-style-two md-mb-70" id="accordionOne">
      {accordionItems.map((item) => (
        <div className="accordion-item" key={item.id}>
          <div className="accordion-header" id={`heading${item.id}`}>
            <button
              className={`accordion-button ${item.id === 2 ? "" : "collapsed"}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${item.id}`}
              aria-expanded={item.id === 2 ? "true" : "false"}
              aria-controls={`collapse${item.id}`}
            >
              {/* <img src={item.icon} alt="" className="me-3" />  */}
              {item.title}
            </button>
          </div>
          <div
            id={`collapse${item.id}`}
            className={`accordion-collapse collapse${
              item.id === 2 ? " show" : ""
            }`}
            aria-labelledby={`heading${item.id}`}
            data-bs-parent="#accordionOne"
          >
            <div className="accordion-body">
              <p>{item.content}</p>
            </div>
               
          </div>
          
        </div>
      ))}
      
    </div>
  );
};

export default WhyChoose;
