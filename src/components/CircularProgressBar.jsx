import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

const CircularProgressBar = ({ percentage }) => {
  return (
    <div className="w-20 h-20 mx-auto text-blue-500"> {/* Aplica el color de texto azul directamente en el contenedor */}
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        strokeWidth={8}
        styles={buildStyles({
          textSize: '16px',
          textColor: 'text-blue-500', // Clase de color de texto de Tailwind CSS
          pathColor: 'text-blue-500', // Clase de color de trazo de Tailwind CSS
          trailColor: 'text-gray-300', // Clase de color de fondo de Tailwind CSS
        })}
      />
    </div>
  );
};

export default CircularProgressBar;
