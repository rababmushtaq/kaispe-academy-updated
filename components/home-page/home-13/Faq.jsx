const Faq = () => {
  const accordionItems = [
    {
      id: "faq-1",
      question: "Course Duration",
      answer:
        "Embark on a transformative journey with our two-month intensive program.",
    },
    {
      id: "faq-2",
      question: "Potential Participants",
      answer:
        "We welcome individuals who",
     list: [
        "Hold a bachelor's degree, computer diploma, or A-level.",
        "Have a passion for learning technology.",
        "Possess a problem-solving mindset."
     ],
    },
    {
      id: "faq-3",
      question: "Class Schedule",
      answer:
        "Classes are held on Fridays and Saturdays to accommodate your busy schedule.",
    },
    {
      id: "faq-4",
      question: "Registration",
      answer:
        "Enroll online to unlock a world of opportunities.",
    },
  ];

  return (
    <div className="accordion accordion-style-four" id="accordionOne">
      {accordionItems.map((item, index) => (
        <div className="accordion-item" key={item.id}>
          <div className="accordion-header" id={`heading-${index}`}>
            <button
              className={`accordion-button ${index === 2 ? "" : "collapsed"}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse-${index}`}
              aria-expanded={index === 2 ? "true" : "false"}
              aria-controls={`collapse-${index}`}
            >
              <span>{`0${index + 1}.`}</span> {item.question}
            </button>
          </div>
          <div
            id={`collapse-${index}`}
            className={`accordion-collapse collapse ${
              index === 2 ? "show" : ""
            }`}
            aria-labelledby={`heading-${index}`}
            data-bs-parent="#accordionOne"
          >
            <div className="accordion-body">
              <p>{item.answer}</p>
              {item.list && (
                <ul className="list-items">
                  {item.list.map((list, index) => (
                    <li key={index}>{list}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
