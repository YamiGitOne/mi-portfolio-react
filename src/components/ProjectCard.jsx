const ProjectCard = ({ title, description, imageUrl }) => {
    return (
      <div className="lg:w-1/2 max-w-xl rounded overflow-hidden shadow-lg">
        <img className="w-full h-64 object-cover" src={`/images/projects/${imageUrl}.png`}
  alt={title} />
  
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
      </div>
    );
  };
  
  export default ProjectCard;
  