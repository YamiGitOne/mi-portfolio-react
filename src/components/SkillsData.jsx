import CircularLoader from './CircularLoader';
const skillsData = [
  { name: 'HTML', icon: '🌐', description: 'HyperText Markup Language' },
  { name: 'CSS', icon: '🎨', description: 'Cascading Style Sheets' },
  { name: 'JavaScript', icon: '🚀', description: 'Programming Language' },
  { name: 'React', icon: '⚛️', description: 'JavaScript Library' },
];

const Skills = () => {
  return (
    <div className="p-4">
      <ul className="space-y-4">
        {skillsData.map((skill, index) => (
          <li key={index} className="flex items-center">
            <span className="text-2xl pr-2">{skill.icon}</span>
            <div className="flex items-center justify-center h-screen">
            <CircularLoader />
            </div>
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
