import Header from "./components/Header";
import Title from "./components/Title";
import SubTitle from "./components/SubTitle";
import AccountImage from "./components/AccountImage";

const App = () => {
  return (
  
    <div className="min-h-screen pt-4 bg-gray-300 bg-[url('./assets/images/bg-mobile-dark.jpg')] lg:bg-cover bg-contain bg-no-repeat dark:bg-gray-900 dark:bg-[url('./assets/images/bg-mobile-light.jpg')]">
    <Header />
        
       
       <div className="flex grid-cols-6 gap-4">
        <div className="col-span-1"></div>
        <div className="w-40 align-middle pb-2">
        <AccountImage />
        </div>
        <div className="col-span-4 text-left">
          <Title text="Diseño soluciones"/>
          <p className="text-left pb-2 pt-2 text-white"> sencillas para tus proyectos</p>
        </div>
       </div>
     

        <div className="grid grid-cols-1 gap-1 lg:grid-cols-3 mb-1">
        <div className="grid grid-rows-1 grid-flow-col gap-2">
              <div className="bg-teal-200 h-32">
              <SubTitle subtitle="Diseño gráfico" />
              </div>
          </div>

          <div className="grid grid-rows-1 lg:grid-rows-1 grid-flow-col gap-1">
                <div className="col-span-2 col-end-2 bg-cyan-200 h-32">
                <SubTitle subtitle="Comunicador audiovisual" />
                  </div>
                  <div className="col-span-2 col-end-4 gap-2 bg-violet-200 h-32">
                  <SubTitle subtitle="Desarrollo web" />
                  </div>
          </div>


          <div className="grid grid-rows-1 grid-flow-col gap-2">   
            <div className="bg-teal-200 h-32">
            <SubTitle subtitle="Diseño web" />
              </div> 
          </div>  

      </div>

      
      <div className="grid grid-cols-4 gap-1 lg:grid-cols-3">
          
                <div className="col-span-2 lg:col-end-4 bg-cyan-200 h-32">
                  <p className="pl-4 pb-4 pt-4 text-center">
                  Uso herramientas de la suite de Adobe para el retoque fotográfico, diseño de logos, botones para las páginas web, gif
                    </p>
                  </div>
                  <div className="col-span-2 lg:col-start-2 bg-violet-200 h-32">
                  <p className="pl-4 pb-2 pt-4 text-center">
                  Una destreza añadida consiste en el desarrollo de páginas web mediante el uso de HTML, CSS, JAVASCRIPT, MSQL junto a otras herramientas...
                    </p>
                  </div>
          
</div>

      
</div>

  )
}
export default App;
