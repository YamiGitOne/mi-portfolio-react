import { useState, useEffect } from "react";

const Progress = ({ done }) => {
  const [style, setStyle] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => {
      const newStyle = {
        opacity: 1,
        width: `${done}%`
      };
      setStyle(newStyle);
    }, 200);

    return () => clearTimeout(timer); // Limpiar el temporizador al desmontar el componente
  }, [done]);

  return (
    <div className="progress bg-gray-300">
      <div className="progress-done bg-blue-500" style={style}>
        {done}%
      </div>
    </div>
  );
};

export default Progress;
