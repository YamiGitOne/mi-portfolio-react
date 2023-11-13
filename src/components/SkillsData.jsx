import Progress from "./Progress";
import BootsrapIcon from "./icons/BootsrapIcon";
import LaravelIcon from "./icons/LaravelIcon";
import PhpIcon from "./icons/PhpIcon";
import TailwindIcon from "./icons/TailwindIcon";

const skillsData = [
  { name: 'HTML', icon: '🌐', progressValue: 90, duration: 800 },
  { name: 'CSS', icon: '🎨', progressValue: 90, duration: 800  },
  { name: 'JavaScript', icon: '🚀', progressValue: 70, duration: 1200 },
  { name: 'React', icon: '⚛️', progressValue: 30, duration: 1500 },
  { name: 'PHP', icon: <PhpIcon />, progressValue: 60, duration: 800 },
  { name: 'Laravel', icon: <LaravelIcon />, progressValue: 30, duration: 1200 },
  { name: 'Tailwind css', icon: <TailwindIcon />, progressValue: 50, duration: 1500},
  { name: 'Bootsrap', icon: <BootsrapIcon />, progressValue: 90, duration: 800 },
];

const Skills = () => {

  return (
    <div className="p-4 text-center">
      <ul className="space-y-4">
        {skillsData.map((skill, index) => (
          <li key={index} className="bg-white dark:bg-gray-900 p-4">
            <span className="text-2xl">{skill.icon}</span>
            <div>
              <h3 className="text-lg dark:text-white font-medium">{skill.name}</h3>
              {/* <p className="text-gray-600">{skill.description}</p> */}
              <Progress done={skill.progressValue} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
