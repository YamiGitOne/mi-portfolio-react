import Header from "./components/Header";
import MiFirstButton from "./components/buttons/MiFirstButton";

const App = () => {
  return (
  
    <div className="min-h-screen pt-4 bg-gray-300 bg-[url('./assets/images/bg-mobile-dark.jpg')] lg:bg-cover bg-contain bg-no-repeat dark:bg-gray-900 dark:bg-[url('./assets/images/bg-mobile-light.jpg')]">
    <Header />
        <div>
          <h1 className="header text-3xl font-bold text-center pb-2 pt-4 text-white">
          Diseño soluciones
          </h1>
          <p className="text-center pb-2 pt-2 text-white"> sencillas para tus proyectos</p>
        </div>
       
     

        <div className="grid grid-cols-1 gap-1 lg:grid-cols-3 mb-1">
        <div className="grid grid-rows-1 grid-flow-col gap-2">
              <div className="bg-teal-200 h-32">
              <h2 className="font-bold pl-2 pb-2 pt-4 text-center">
                Diseño gráfico
              </h2>
              </div>
          </div>

          <div className="grid grid-rows-1 lg:grid-rows-1 grid-flow-col gap-1">
                <div className="col-span-2 col-end-2 bg-cyan-200 h-32">
                  <h2 className="font-bold pl-2 pb-2 pt-4 text-center">
                        Comunicador audiovisual
                    </h2>
                  </div>
                  <div className="col-span-2 col-end-4 gap-2 bg-violet-200 h-32">
                  <h2 className="font-bold pl-2 pb-2 pt-4 text-center">
                        Desarrollo web
                    </h2>
                  </div>
          </div>


          <div className="grid grid-rows-1 grid-flow-col gap-2">   
            <div className="bg-teal-200 h-32">
            <h2 className="font-bold pl-2 pb-2 pt-4 text-center">
                        Diseño web
                    </h2>
              </div> 
          </div>  

      </div>

      
      <div className="grid grid-cols-4 gap-1 lg:grid-cols-3">
          
                <div className="col-span-2 lg:col-end-4 bg-cyan-200 h-32">
                  <p className="pl-4 pb-4 pt-4 text-center">
                  Uso herramientas de la suite de Adobe para el retoque fotográfico, diseño de logos, botones para las páginas web, gif
                    </p>
                    {/* <MiFirstButton /> */}
                  </div>
                  <div className="col-span-2 lg:col-start-2 bg-violet-200 h-32">
                  <p className="pl-4 pb-2 pt-4 text-center">
                  Una destreza añadida consiste en el desarrollo de páginas web mediante el uso de HTML, CSS, JAVASCRIPT, MSQL junto a otras herramientas...
                    </p>
                  </div>
          
</div>

    

     {/* <div className="col-end-6 col-span-6 bg-stone-50 lg:h-52 sm:col-span-4 sm:h-1/2">
          <div className="min-h-screen bg-contain bg-no-repeat bg-[url('./assets/images/yami1-1.jpg')] rounded-full ">
          
          </div>
            <h2 className="font-bold pl-4 pb-2 pt-4 text-center">
                Hola Soy Yami 
            </h2></div> */}
      
</div>

  )
}
export default App;
