import ProjectCard from "./ProjectCard";

const projectsData = [
    {
    id: 1,
    title: "React Porfolio Website",
    description: "Project 1 description",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    },
    {
    id: 2,
    title: "React Porfolio Website",
    description: "Project 1 description",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    },
    {
    id: 3,
    title: "React Porfolio Website",
    description: "Project 1 description",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    },
    {
    id: 4,
    title: "React Porfolio Website",
    description: "Project 1 description",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    },
]
const ProjectsSection = () => {
    return(
        <div>
            {projectsData.map((project) => <ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.image} />)}
        </div>
    )
}

export default ProjectsSection;