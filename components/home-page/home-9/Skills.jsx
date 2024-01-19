const Skills = () => {
  const skills = [
    { name: "Basic English language (spoken)", bgColor: "#FFF8F8" },
    { name: "Professional email writing and ethics", bgColor: "#E4FCF9" },
    { name: "Time and task management", bgColor: "#E5F4FB" },
    { name: "Stress management", bgColor: "#FFF9E6" },
    { name: "Business meetings using Microsoft Teams", bgColor: "#F9EDFF" },
    { name: "Working in diverse environments", bgColor: "#F0F9E0" },
    { name: "Leadership skills", bgColor: "#FFF0F0" },
    // Add more skills here as needed
  ];

  return (
    <ul className="d-flex flex-wrap align-items-center style-none skils-list">
      {skills.map((skill, index) => (
        <li key={index}>
          <span style={{ backgroundColor: skill.bgColor }}>{skill.name}</span>
        </li>
      ))}
      {/* <li>&amp; more…</li> */}
    </ul>
  );
};

export default Skills;
