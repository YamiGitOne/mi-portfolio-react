import Progress from "./Progress";
import MysqlIcon from "./icons/MysqlIcon";
import LaravelIcon from "./icons/LaravelIcon";
import PhpIcon from "./icons/PhpIcon";
import WordpressIcon from "./icons/WordpressIcon";
import PhotoshopIcon from "./icons/PhotoshopIcon";
import IllustratorIcon from "./icons/IllustratorIcon";
import JavaIcon from "./icons/JavaIcon";

const skillsData = [
  { name: 'PHP', icon: <PhpIcon />, progressValue: 60 },
  { name: 'Laravel', icon: <LaravelIcon />, progressValue: 60 },
  { name: 'Wordpress', icon: <WordpressIcon />, progressValue: 80 },
  { name: 'Mysql', icon: <MysqlIcon />, progressValue: 80 },
  { name: 'Java', icon: <JavaIcon />, progressValue: 50 },

  { name: 'Photoshop', icon: <PhotoshopIcon />, progressValue: 80 },
  { name: 'Illustrator', icon: <IllustratorIcon />, progressValue: 80 },
];

const Skills = () => {
  return (
    <div className="p-4 text-center">
      <ul className="space-y-4">
        {skillsData.map((skill, index) => (
          <li key={index} className="bg-white dark:bg-gray-300 p-4">
            <span className="text-2xl">{skill.icon}</span>
            <div>
              <div>
              <h3 className="text-lg dark:text-gray-900 font-medium">{skill.name}</h3>
              <Progress
                done={skill.progressValue} 
              />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
