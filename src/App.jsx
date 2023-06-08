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
       
        <div className="container md:container">
          
        <div className="grid grid-cols-1 gap-2">

          <div className="grid grid-rows-6 lg:grid-rows-2 grid-flow-col gap-2 sm:grid-rows-6">
            
          <div className="col-end-6 col-span-6 bg-teal-200 lg:h-52 sm:col-span-4 sm:h-1/2">
            <h2 className="font-bold pl-4 pb-2 pt-4 text-left">
                Diseñador gráfico
            </h2></div>
          <div className="col-span-3 col-start-3 bg-pink-100 h-32">
          <h2 className="font-bold pl-4 pb-2 pt-4 text-left">
                Diseñador web
            </h2>
          </div>
          <div className="col-span-3 col-end-3 bg-cyan-200">
          <h2 className="font-bold pl-4 pb-2 pt-4 text-left">
                Comunicador audiovisual
            </h2>
          </div>
          <div className="col-span-6 col-end-6 bg-violet-200">
          <h2 className="font-bold pl-4 pb-2 pt-4 text-left">
                Desarrollo web
            </h2>
          </div>
          <div className="col-span-6 bg-rose-100 h-32">
          <h2 className="font-bold pl-4 pb-2 pt-4 text-left">
                Redes sociales
            </h2>
          </div>
    </div>


        </div>
          
    </div>

    <div className="min-h-screen rounded-full bg-clip-content bg-contain bg-no-repeat bg-[url('./assets/images/yami1-1.jpg')] w-3/12 max-w-xs">
          
          </div>
      
</div>

  )
}
export default App;
