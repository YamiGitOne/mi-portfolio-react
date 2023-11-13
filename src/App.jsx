import Header from "./components/Header";
import Title from "./components/Title";
import SubTitle from "./components/SubTitle";
import AccountImage from "./components/AccountImage";
import SkillsData from "./components/SkillsData";
import SkillsDisplay from "./components/SkillsDisplay";

const App = () => {
  return (
  
    <div className="pt-4 bg-gray-300 dark:bg-gray-900 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] bg-cover h-44 bg-no-repeat bg-[url('./assets/images/bg-mobile-light.jpg')]">
    <Header />
        
       
       <div className="flex grid-cols-6 gap-4">
        <div className="col-span-1"></div>
        <div className="w-40 align-middle pb-2 z-10">
        <AccountImage />
        </div>
        <div className="col-span-4 text-left">
          <Title 
          text="Diseño soluciones"
          />
          <p className="text-left font-sans pb-2 pt-2 text-white"> sencillas para tus proyectos</p>
        </div>
       </div>
     

        <div className="grid grid-cols-1 gap-1 lg:grid-cols-3 mb-1 -mt-8 inline-block align-middle">
        <div className="grid grid-rows-1 grid-flow-col gap-2">
              <div className="bg-teal-200 dark:bg-gray-700 dark:text-white p-6">
                  <p className="font-sans text-center pt-4">Diseño de interfaces web a través de lenguajes de marca y lenguajes de programación, desde la arquitectura hasta el funcionamiento. Licenciada en Comunicación audiovisual con diplomatura en desarrollo web, en continuo aprendizaje como es lógico en mi área. Partiendo del diseño gráfico, maquetación con diferentes herramientas y desarrollo mediante el uso de Frameworks además Wordpress y otros CMS.</p>
              </div>
          </div>

          <div className="grid grid-rows-1 lg:grid-rows-1 grid-flow-col gap-1">
                <div className="col-span-2 col-end-2 bg-cyan-200 dark:bg-gray-900 dark:text-white p-6">
                <SubTitle subtitle="Comunicador audiovisual" />
                <p className="text-center">Dentro de las competencias adquiridas en mi carrera se encuentran la fotografía, edición de videos, guiones para radio cine y tv, locución de radio y el manejo de programas de edición entre los que destaca Adobe Premiere, After Effects</p>
                  </div>

                  <div className="col-span-2 col-end-4 gap-2 bg-violet-200 dark:bg-gray-700 dark:text-white p-6">
                  <SubTitle subtitle="Diseño web" />
                    <p className="text-center">Destreza en el uso de herramientas de diseño y maquetación de la suite de Adobe tales como Illustrator, Photoshop así como también Figma, Canva </p>
                    
                    
                  
                  </div>
          </div>


          <div className="grid grid-rows-1 grid-flow-col gap-2">   
            <div className="bg-teal-200 dark:bg-gray-900 dark:text-white p-6">
            
            <SubTitle subtitle="Desarrollo web" />
                  <p className="font-sans text-center">Desarrollo de páginas web mediante el uso de HTML, CSS, JAVASCRIPT, PHP, MSQL, MongoDB, GraphQL, JAVA, GIT, Frameworks como React, Angular, Laravel o con CMS como Wordpress, Drupal...</p>
              
                  <SubTitle subtitle="Diseño gráfico" />
                    <p className="font-sans text-center">Diseño de Logos, Banners, Infografías, Vectorización de imágenes, Texturas {/* <Button text="Ver más" /> */}</p>
              </div> 
          </div>  

      </div>

      
      <div className="grid grid-cols-4 gap-1 lg:grid-cols-3 text-center bg-gray-600">
              <div className="col-span-4 lg:col-end-4 bg-gray-500 text-white dark:bg-gray-900 p-6 pt-8 lg:pt-4">
              <div className="w-24 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-opacity-60 dark:via-gray-900 dark:to-pink-900 -mt-12 py-4 float-right shadow-md ">
                    <strong className="text-4xl text-center dark:text-white pt-4">5</strong><br/><small className="dark:text-white">años de<br/>experiencia</small>
                  </div>
              <SubTitle 
              subtitle="Experiencia" 
              className="dark:text-white"
              />
                </div>
                <div className="row-span-1 lg:row-span-2 col-span-4 lg:col-span-2 p-6 mx-auto">
                <span className="text-center"></span> 
                <SubTitle 
                subtitle="Otras habilidades" 
                className="text-white dark:text-white"
                />
                    <SkillsData 
                    className="dark:text-white"
                    />
                  </div>
                  
                <div className="col-span-4 lg:col-span-2 bg-gray-700 shadow-lg dark:bg-gray-700 dark:text-white p-6">
                <SubTitle 
                subtitle="Skills Desarrollo FrontEnd" 
                className="text-white dark:text-white"
                />
                <SkillsDisplay />
                  </div>
                  <div className="col-span-2 lg:col-span-1 lg:col-start-2 bg-violet-200 dark:bg-gray-900 dark:text-white p-6">
                  <span className="text-center">2017-2023</span>
                  <SubTitle subtitle="Gomezlee Marketing" />
                    <p className="font-sans text-center">Actividades vinculadas a la creación diseño y desarrollo front end enfocado al marketing. Usando HTML, CSS, JAVASCRIPT, WORDPRESS. Diseño gráfico usando la suite de Adobe y labores de SEO, analíticas orgánicas, keywords y redes sociales
                    .También Landing pages para conversión mantenimiento y optimización de sitios web de grandes marcas.</p>
                  </div>
                  <div className="col-span-2 lg:col-span-1 lg:col-end-4 bg-cyan-200 dark:bg-gray-700 dark:text-white p-6">
                <span className="text-center">2019-2023</span>
                <SubTitle subtitle="Dynamic Opengov Thecnologies" />
                    <p className="font-sans text-center">Actividades vinculadas a la creación diseño y desarrollo front end, maquetación visual, usando HTML,CSS, JAVASCRIPT, REACT, TAILWIND, PHP, LARAVEL, BOOTSTRAP, WORDPRESS, CKAN, entre otras. También
                     labores de mantenimiento y optimización de sitios web e interfaces de usuario, implemento prácticas que incluyen estructuras, 
                      bases de datos, adaptabilidad, SEO Onpage así como también de accesibilidad, además de la gestión de incidencias del mismo tipo.</p>
                  </div>
                  <div className="col-span-2 lg:col-span-2 lg:col-start-2 bg-violet-200 dark:bg-gray-900 dark:text-white p-6">
                  <span className="text-center">2016</span>
                  <SubTitle subtitle="Lacteos optimus" />
                    <p className="font-sans text-center">Actividades vinculadas al diseño del sitio web de la empresa usando Wordpress. 
                    Así como labores de diseño gráfico: Banners, infografias, carteles, redes sociales .</p>
                  </div>
                  
          
</div>

      
</div>

  )
}
export default App;
