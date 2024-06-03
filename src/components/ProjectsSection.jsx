import ProjectCard from './ProjectCard'

const projectsData = [
  {
    id: 1,
    title: 'Wordpress',
    description:
      'Sitios web adaptables, enfocados a afianzar la marca, SEO y conversión. Diseñado en Wordpress, uso de plugins. ',
    image: 'WordpressProjects',
    tag: ['All', 'Web'],
  },
  {
    id: 2,
    title: 'Laravel, PHP',
    description:
      'Proyectos en los en algunos casos he diseñado el front con bootstrap, componentes y en otros también el backend, base de datos MysQly',
    image: 'Transparencia-LARAVEL',
    tag: ['All', 'Web'],
  },
  {
    id: 3,
    title: 'React',
    description:
      'Proyectos desarrollados con React, Next, Vite, Tailwind, GraphQL, MongoDB',
    image: 'ReactProjects',
    tag: ['All', 'Web'],
  },
  {
    id: 4,
    title: 'Maquetación',
    description: 'Proyectos maquetados usando Figma',
    image: 'MaquetacionProjects',
    tag: ['All', 'Web'],
  },
  {
    id: 5,
    title: 'Java',
    description: 'Proyecto desarrollado en Java, POO, Mysql, DAO, Swing',
    image: 'JavaProjects',
    tag: ['All', 'Web'],
  },
  {
    id: 6,
    title: 'Angular',
    description: 'Proyectos desarrollado Angular, Laravel, Mysql, Bootstrap',
    image: 'AngularProject',
    tag: ['All', 'Web'],
  },
  {
    id: 7,
    title: 'Diseño gráfico',
    description:
      'Proyectos desrrollados usando la suite de Adobe. Photoshop, Illustrator, Premiere',
    image: 'GraphDesingProjects',
    tag: ['All', 'Web'],
  },
  {
    id: 8,
    title: 'Prestashop',
    description: 'Proyecto usando CMS Prestashop',
    image: 'PrestashopProjects',
    tag: ['All', 'Web'],
  },
  {
    id: 9,
    title: 'Otros CMS',
    description: 'Proyectos usando Ckan, Consul',
    image: 'OtrosCMS',
    tag: ['All', 'Web'],
  },
  {
    id: 10,
    title: 'En curso',
    description: 'Proyectos en curso',
    image: 'EnCurso',
    tag: ['All', 'Web'],
  },
]
const ProjectsSection = () => {
  return (
    <div className='md:container md:mx-auto mt-4 dark:bg-gray-900'>
      <div className='lg:inline-flex lg:flex-wrap '>
        {projectsData.map(projects => (
          <ProjectCard
            key={projects.id}
            title={projects.title}
            description={projects.description}
            imageUrl={projects.image}
          />
        ))}
      </div>
    </div>
  )
}

export default ProjectsSection
