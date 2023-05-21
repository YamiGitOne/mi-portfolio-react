const App = () => {
  return (
    <div className="container md:container md:mx-auto">
    <div>
       <h1 className="text-3xl font-bold text-center pb-2 pt-4">
        Hola soy Yami!
      </h1>
      <p className="text-center pb-2 pt-2">Diseño soluciones sencillas para tus proyectos</p>
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






<strong>otros</strong>
<div className="container md:container md:mx-auto">
       {/*  <div className="grid lg:grid-cols-6 gap-2 sm:grid-cols-3"> */}
        <div className="grid grid-rows-4 grid-flow-col gap-2">
        <div className="col-span-2 bg-teal-200 lg:h-52 lg:col-span-2 sm:col-span-6 sm:col-start-1 sm:col-end-7 sm:h-1/2">01</div>

        
         <div className="col-span-1 bg-pink-100 h-32">02 </div>
         <div className="col-span-2 bg-pink-100 h-32">02 </div>

         <div className="col-span-2 bg-teal-700 h-32">03</div>
        </div>
       
       {/*  </div> */}
</div>

   
      
   </div>
  )
}
export default App;
