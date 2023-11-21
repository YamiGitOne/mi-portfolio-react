import ProjectCard from "./ProjectCard";

const projectsData = [
    {
    id: 1,
    title: "Gómez Lee Marketing",
    description: "Web Site institucional, responsive, diseñado en Wordpress. ",
    image: "GLM",
    tag: ["All", "Web"],
    },
    {
    id: 2,
    title: "Vozez",
    description: "Project 2 description",
    image: "vozez.png",
    tag: ["All", "Web"],
    },
    {
    id: 3,
    title: "oGov",
    description: "Project 3 description",
    image: "oGov.png",
    tag: ["All", "Web"],
    },
    {
    id: 4,
    title: "Transparencia",
    description: "Project 4 description",
    image: "pt.png",
    tag: ["All", "Web"],
    },
    {
    id: 5,
    title: "Obras",
    description: "Project 5 description",
    image: "pt.png",
    tag: ["All", "Web"],
    },
    {
    id: 6,
    title: "Whirpooll",
    description: "Project 6 description",
    image: "whirpooll.png",
    tag: ["All", "Web"],
    },
    {
    id: 7,
    title: "Arena gorda",
    description: "Project 7 description",
    image: "constructora.png",
    tag: ["All", "Web"],
    },
    {
    id: 8,
    title: "Prestashop",
    description: "Project 8 description",
    image: "prestashop.png",
    tag: ["All", "Web"],
    },
    {
    id: 9,
    title: "Suscription site",
    description: "Project 9 description",
    image: "suscription.png",
    tag: ["All", "Web"],
    },
    {
    id: 10,
    title: "API clientes",
    description: "Project 10 description",
    image: "clientes.png",
    tag: ["All", "Web"],
    }
]
const ProjectsSection = () => {
    return(
        <div className="md:container md:mx-auto">
        <div className="lg:inline-flex lg:flex-wrap ">
            {projectsData.map((projects) => <ProjectCard key={projects.id} title={projects.title} description={projects.description} imageUrl={projects.image} />)}
        </div>
        </div>
    )
}

export default ProjectsSection;