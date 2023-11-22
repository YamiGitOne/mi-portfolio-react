const ProjectCard = ({ title, description, imageUrl }) => {
    return (
      <div className="lg:w-1/2 rounded overflow-hidden shadow-lg m-4 lg:m-0 p-4">
        <img className="w-full object-cover" src={`/images/projects/${imageUrl}.jpg`}
  alt={title} />
  
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
      </div>
    );
  };
  
  export default ProjectCard;
  