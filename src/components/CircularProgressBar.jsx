import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

const CircularProgressBar = ({ percentage }) => {
    return (
      <div className="w-20 h-20 mx-auto">
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          strokeWidth={8}
          styles={buildStyles({
            textSize: '16px',
            textColor: 'text-blue-500', // Utiliza una clase de color de Tailwind CSS
            pathColor: `text-blue-500`, // Utiliza una clase de color de Tailwind CSS
            trailColor: 'text-gray-300', // Utiliza una clase de color de Tailwind CSS
          })}
        />
      </div>
    );
  };
  
  export default CircularProgressBar;