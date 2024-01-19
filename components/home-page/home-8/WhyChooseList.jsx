const reasons = [
  {
    
    title:
    <p><strong>Empowerment for Non-Developers:</strong><br/>"Microsoft Power Apps training allows non-developers to create custom business apps without extensive coding knowledge and with low-code, no-code functionality. "</p>,
  },
  {
   
    title:
    <p><strong>Rapid App Development:</strong> <br/>"Learn to build apps quickly with low-code or no-code techniques, reducing development time and accelerating the delivery of solutions to meet business needs. "</p>,
  },
  {
   
    title:<p><strong> User-Friendly Interface:</strong> <br/>  "Understand how Power Apps offers an intuitive and user-friendly interface, promoting widespread adoption and usability across different teams and skill levels."</p>,
  },
  {
    
    title:<p><strong>Career Advancement:</strong><br/>  "Acquiring skills in Microsoft Power Apps can open doors to new career opportunities, especially in roles related to app development, business analysis, and process improvement."</p>,
  },
];
{/* <div className="title-style-nine pb-20"></div> */}
const WhyChooseList = () => {
  return (
    <div className="block-style-five pe-xl-5 me-xxl-5 text-dark">
      <div className="title-style-nine">
        {/* <div className="sc-title">none</div> */}
        <h2 className="main-title text-dark ">
          Benfits of <span>Microsoft Power Apps </span> Training Program.
        </h2>
      </div>
      {/* /.title-style-nine */}
       <ul className=" list-item text-dark d-flex flex-row ">
        {reasons.map((reason) => (
          <li className="text-dark"
           key={reason.title}>{reason.title}</li>
          
          
    
        ))}
      </ul> 

      
    </div>
  );
};

export default WhyChooseList;
