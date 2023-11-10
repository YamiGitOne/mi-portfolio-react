import LaravelIcon from "./icons/LaravelIcon";
import TailwindIcon from "./icons/TailwindIcon";

const skillsData = [
  { name: 'HTML', icon: '🌐' },
  { name: 'CSS', icon: '🎨' },
  { name: 'JavaScript', icon: '🚀' },
  { name: 'React', icon: '⚛️' },
  { name: 'Laravel', icon: <LaravelIcon /> },
  { name: 'Tailwind css', icon: <TailwindIcon /> },
];

const Skills = () => {
  return (
    <div className="p-4 text-center">
      <ul className="space-y-4">
        {skillsData.map((skill, index) => (
          <li key={index} className="bg-gray-100 p-4">
            <span className="text-2xl">{skill.icon}</span>
            <div>
              <h3 className="text-lg font-medium mt-">{skill.name}</h3>
              {/* <p className="text-gray-600">{skill.description}</p> */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
