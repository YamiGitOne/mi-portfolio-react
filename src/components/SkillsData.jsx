import { FaLaravel } from 'react-icons/fa'

const skillsData = [
  { name: 'HTML', icon: '🌐' },
  { name: 'CSS', icon: '🎨' },
  { name: 'JavaScript', icon: '🚀' },
  { name: 'React', icon: '⚛️' },
  { name: 'Laravel', icon: <FaLaravel/> },
  { name: 'Tailwind css', icon: '' },
];

const Skills = () => {
  return (
    <div className="p-4">
      <ul className="space-y-4">
        {skillsData.map((skill, index) => (
          <li key={index} className="bg-gray-100 items-center p-4 items-center">
            <span className="text-2xl pr-2">{skill.icon}</span>
            <div>
              <h3 className="text-lg font-medium">{skill.name}</h3>
              {/* <p className="text-gray-600">{skill.description}</p> */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
