import Link from "next/link";
import Image from "next/image";


const featureData = [
  {
    id: 1,
    icon: "/images/purchase/icons/productivity.png",
    title: "Increased Efficiency and Productivity",
    text: "The material requisition app streamlines the procurement process, reducing errors and saving time. This, in turn, increases efficiency and productivity within the organization. ",
    backgroundColor: "#FFEBDB",
  },
  {
    id: 2,
    icon: "/images/purchase/icons/visibility.png",
    title: "Improved Visibility and Control",
    text: "The app provides real-time visibility into procurement requests and their status, giving organizations greater control over their procurement processes. ",
    backgroundColor: "#E0F8F8",
  },
  {
    id: 3,
    icon: "/images/purchase/icons/enhanced.png",
    title: "Enhanced Compliance",
    text: "Customizable approval workflows ensure that the procurement process is in line with the organization's policies and procedures, improving compliance and reducing the risk of non-compliance.",
    backgroundColor: "#F7EDFF",
  },

  {
    id: 4,
    icon: "/images/purchase/icons/cost.png",
    title: "Cost Savings",
    text: "The Purchase Requisition App provides businesses with the ability to track and analyze their procurement processes, identifying areas for improvement and optimizing workflows. This leads to increased efficiency, reduced costs, and a more streamlined procurement process overall. ",
    backgroundColor: "#E0F8F8",
  },
  {
    id: 5,
    icon: "/images/purchase/icons/decision.png",
    title: "Better Decision-Making",
    text: "The Purchase Requisition App's real-time tracking feature also enables businesses to identify bottlenecks and potential delays in the procurement process, allowing for proactive measures to be taken to avoid them. This leads to better decision-making, improved resource allocation, and faster, more efficient procurement processes. ",
    backgroundColor: "#F7EDFF",
  },
  {
    id: 6,
    icon: "/images/purchase/icons/productivity.png",
    title: "Improved Supplier Relationships",
    text: "The app can help businesses maintain better relationships with suppliers by streamlining the procurement process and ensuring that orders are fulfilled in a timely manner, resulting in increased satisfaction and loyalty. ",
    backgroundColor: "#F7EDFF",
  },  
  {
    id: 7,
    icon: "/images/purchase/icons/supplier.png",
    title: "Greater Accuracy",
    text: "By reducing manual errors, the Purchase Requisition App can help businesses achieve greater accuracy in their procurement processes, minimizing the risk of costly mistakes and delays.",
    backgroundColor: "#F7EDFF",
  },
  {
    id: 8,
    icon: "/images/purchase/icons/increase.png",
    title: "Increased Agility",
    text: "The app can help businesses respond more quickly to changing market conditions and customer demands by providing real-time visibility into procurement requests and their status, enabling faster decision-making.",
    backgroundColor: "#FFEBDB",
  },
  {
    id: 9,
    icon: "/images/purchase/icons/centralized.png",
    title: "Centralized Procurement",
    text: "The app provides a centralized platform for managing procurement requests, making it easier for businesses to track and manage all their procurement activities in one place. ",
    backgroundColor: "#FFEBDB",
  },
  {
    id: 10,
    icon: "/images/purchase/icons/data.png",
    title: "Data-Driven Insights",
    text: "With this app, businesses can gain a better understanding of their procurement operations, including areas of high spending, supplier performance, and contract management, among others. By leveraging these insights, businesses can improve their procurement processes, streamline operations, and ultimately achieve better results.",
    backgroundColor: "#FFEBDB",
  },



];

const FeatureCard = ({ icon, title, text, backgroundColor }) => {
  return (
    <div className="card-style-eight text-center position-relative mt-40 xs-mt-20" style={{padding:"40px", marginTop:"-20px"}}>
      <div
        className="icon rounded-circle  d-flex align-items-start justify-content-start"
      >
        <img src={icon} alt="icon" className="lazy-img" style={{width:"40px", height:"40px"}}/>
      </div>
      <h4 className="fw-500 mt-35 mb-25" style={{textAlign:"start"}}>
        <a href="#" className="tran3s tx-dark">
          {title}
        </a>
      </h4>
      <p className="mb-10"  style={{textAlign:"start"}}>{text}</p>
      {/* <a href="#">
        <img src="/images/icon/icon_05.svg" alt="icon" className="lazy-img" />
      </a> */}
    </div>
  );
};

const Features = () => {
  return (
    <>
      {featureData.map((feature) => (
        <div
          key={feature.id}
          className="col-lg-4 col-md-6"
          data-aos="fade-up"
          data-aos-delay={feature.id * 100}
        >
          <FeatureCard
            icon={feature.icon}
            title={feature.title}
            text={feature.text}
            backgroundColor={feature.backgroundColor}
          />
        </div>
      ))}
    </>
  );
};

export default Features;
