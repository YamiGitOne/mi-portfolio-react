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
    }, 50);

    return () => clearTimeout(timer); 
  }, [done]);

  return (
    <div className="progress bg-gray-300">
      <div className="h-6 animate-pulse bg-gray-800 transition-all duration-500 ease-out" style={style}>
	  <div className="h-full transform bg-gradient-to-r from-green-500 to-blue-500 dark:from-green-900 dark:text-white">
        {done}%
		</div>
      </div>
    </div>

  );
};

export default Progress;
