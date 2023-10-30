import Header from "./components/Header";
import Title from "./components/Title";
import SubTitle from "./components/SubTitle";
import AccountImage from "./components/AccountImage";
import Button from "./components/buttons/Button";

const App = () => {
  return (
  
    <div className="pt-4 bg-gray-300 bg-[url('./assets/images/bg-mobile-dark.jpg')] bg-cover h-44 bg-no-repeat dark:bg-gray-900 dark:bg-[url('./assets/images/bg-mobile-light.jpg')]">
    <Header />
        
       
       <div className="flex grid-cols-6 gap-4">
        <div className="col-span-1"></div>
        <div className="w-40 align-middle pb-2 z-10">
        <AccountImage />
        </div>
        <div className="col-span-4 text-left">
          <Title text="Diseño soluciones"/>
          <p className="text-left pb-2 pt-2 text-white"> sencillas para tus proyectos</p>
        </div>
       </div>
     

        <div className="grid grid-cols-1 gap-1 lg:grid-cols-3 mb-1 -mt-8">
        <div className="grid grid-rows-1 grid-flow-col gap-2">
              <div className="bg-teal-200 p-6">
              {/* <SubTitle subtitle="Desarrollo web" /> */}
                  <p className="text-center pt-4">Diseño de interfaces web a través de lenguajes de marca y lenguajes de programación, desde la arquitectura hasta el funcionamiento. Licenciada en Comunicación audiovisual con diplomatura en desarrollo web, en continuo aprendizaje como es lógico en mi área. Partiendo del diseño gráfico, maquetación con diferentes herramientas y desarrollo mediante el uso de Frameworks además Wordpress y otros CMS.</p>
              </div>
          </div>

          <div className="grid grid-rows-1 lg:grid-rows-1 grid-flow-col gap-1">
                <div className="col-span-2 col-end-2 bg-cyan-200 p-6">
                <SubTitle subtitle="Comunicador audiovisual" />
                <p className="text-center">Dentro de las competencias adquiridas en mi carrera se encuentran la fotografía, edición de videos, guiones para radio cine y tv, locución de radio y el manejo de programas de edición entre los que destaca Adobe Premiere, After Effects</p>
                  </div>
                  <div className="col-span-2 col-end-4 gap-2 bg-violet-200 p-6">
                  <SubTitle subtitle="Diseño web" />
                    <p className="text-center">Destreza en el uso de herramientas de diseño y maquetación de la suite de Adobe tales como Illustrator, Photoshop así como también Figma, Canva </p>
                    <SubTitle subtitle="Diseño gráfico" />
                    <p className="text-center">Diseño de Logos, Banners, Infografías, Vectorización de imágenes, Texturas {/* <Button text="Ver más" /> */}</p>
                  
                  </div>
          </div>


          <div className="grid grid-rows-1 grid-flow-col gap-2">   
            <div className="bg-teal-200 p-6">
            <SubTitle subtitle="Desarrollo web" />
                  <p className="text-center">Desarrollo de páginas web mediante el uso de HTML, CSS, JAVASCRIPT, PHP, MSQL, Frameworks como React, Laravel o con CMS como Wordpress, Drupal...</p>
              </div> 
          </div>  

      </div>

      
      <div className="grid grid-cols-4 gap-1 lg:grid-cols-3">
          
                <div className="col-span-2 lg:col-end-4 bg-cyan-200 p-6">
                <SubTitle subtitle="Experiencia" />
                <span className="text-center">2019-2023</span>
                <SubTitle subtitle="Dynamic Opengov Thecnologies" />
                    <p className="text-center">En Ogov realizo actividades vinculadas a la creación diseño y desarrollo front end, maquetación visual, 
                      mantenimiento y optimización de sitios web e interfaces de usuario, implemento prácticas que incluyen estructuras, 
                      bases de datos, adaptabilidad, SEO Onpage así como también de accesibilidad, además de la gestión de incidencias del mismo tipo.</p>
                  </div>
                  <div className="col-span-2 lg:col-start-2 bg-violet-200 p-6">
                  <span className="text-center">2017-2023</span>
                  <SubTitle subtitle="Gomezlee Marketing" />
                    <p className="text-center">En Gomezlee Marketing realizo actividades vinculadas a la creación diseño y desarrollo front end enfocado al marketing. 
                    Landing pages para conversión mantenimiento y optimización de sitios web de grandes marcas.</p>
                  </div>
          
</div>

      
</div>

  )
}
export default App;
