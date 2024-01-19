const Tools = () => {
  const toolNames = [
    "Basic English language (spoken)",
    "Professional email writing and ethics",
    "Time and task management",
    "Stress management",
    "Business meetings using Microsoft Teams",
    "Working in diverse environments",
    "Leadership skills",
  ];

  return (
    <ul className="style-none tx-dark fs-20 tools-list">
      {toolNames.map((toolName) => (
        <li key={toolName}>{toolName}</li>
      ))}
    </ul>
  );
};

export default Tools;
