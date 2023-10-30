const skillsData = [
  { name: 'HTML', icon: '🌐', description: 'HyperText Markup Language' },
  { name: 'CSS', icon: '🎨', description: 'Cascading Style Sheets' },
  { name: 'JavaScript', icon: '🚀', description: 'Programming Language' },
  { name: 'React', icon: '⚛️', description: 'JavaScript Library' },
  // Agrega más habilidades según tus necesidades
];

const Skills = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Skills</h2>
      <ul className="space-y-4">
        {skillsData.map((skill, index) => (
          <li key={index} className="flex items-center">
            <span className="text-2xl pr-2">{skill.icon}</span>
            <div>
              <h3 className="text-lg font-medium">{skill.name}</h3>
              <p className="text-gray-600">{skill.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
