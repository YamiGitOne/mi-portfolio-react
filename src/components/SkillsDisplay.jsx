import { useState } from 'react';

const SkillDisplay = () => {
  const [skills] = useState([
    { title: 'HTML', percent: 90 },
    { title: 'CSS', percent: 90 },
    { title: 'JavaScript', percent: 70 },
    { title: 'React', percent: 30 },
    { title: 'Tailwind', percent: 50 },
    { title: 'Bootstrap', percent: 90 },
    { title: 'Typescript', percent: 10 },
    { title: 'Angular', percent: 30 },
    { title: 'Figma', percent: 50 },
    { title: 'MongoDB', percent: 30 },
    { title: 'GraphQL', percent: 20 },
    { title: 'Git', percent: 60 },
    

  ]);

  const [currentSkill, setCurrentSkill] = useState({
    title: 'HTML',
    percent: 95,
  });

  const circumference = (2 * 22 / 7) * 120;

  const handleSkillClick = (skill) => {
    setCurrentSkill(skill);
  };

  return (
    <main className="w-full text-gray-100 bg-gray-700 place-content-center">
      <section className="p-6 space-y-6 bg-gray-700 rounded-xl md:grid md:grid-cols-2 md:gap-4 sm:space-y-0">
        <div className="grid lg:grid-cols-2 gap-2 lg:gap-4">
          {skills.map((skill) => (
            <button
              key={skill.title}
              onClick={() => handleSkillClick(skill)}
              className={`px-4 py-2 lg:text-xl text-gray-100 transition bg-blue-600 rounded-md h-14 w-28 lg:w-44 hover:bg-blue-700 ${
                currentSkill.title === skill.title ? 'font-bold ring-2 ring-gray-100' : ''
              }`}
            >
              {skill.title}
            </button>
          ))}
        </div>

        <div className="flex items-center justify-center" style={{ position: 'relative' }}>
          <svg className="transform -rotate-90 w-72 h-72">
            <circle cx="145" cy="145" r="120" stroke="currentColor" strokeWidth="30" fill="transparent" className="text-gray-100" />

            <circle
              cx="145"
              cy="145"
              r="120"
              stroke="currentColor"
              strokeWidth="30"
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={circumference - (currentSkill.percent / 100) * circumference}
              className="text-blue-500"
            />
          </svg>
          <span className="absolute text-5xl">{`${currentSkill.percent}%`}</span>
        </div>
      </section>
    </main>
  );
};

export default SkillDisplay;
