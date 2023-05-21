const App = () => {
  return (
    <div className="container md:container md:mx-auto">
    <div>
       <h1 className="text-3xl font-bold text-center bg-red-200">
        Hola soy Yami!
      </h1>
      <strong>Diseño soluciones sencillas para tus proyectos</strong>
    </div>
       
    <div className="container md:container">
    <div className="grid grid-cols-1 gap-2">

      <div className="grid grid-rows-4 lg:grid-rows-2 grid-flow-col gap-2 sm:grid-rows-4">
      <div className="col-end-4 col-span-6 bg-teal-200 lg:h-52 sm:col-span-4 sm:h-1/2">01</div>
      <div className="col-span-2 col-start-2 bg-pink-100 h-32">02 </div>
      <div className="col-span-2 col-end-2 bg-pink-100 h-32">02 </div>
      <div className="col-span-2 bg-teal-700 h-32">03</div>
      <div className="col-span-2 bg-teal-700 h-32">03</div>
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

        <div className="grid grid-rows-4 grid-flow-col gap-4">
  <div>01</div>

  <div>09</div>
</div>

      <div className="grid grid-cols-6 gap-4">
          {/* <div className="col-span-2 bg-teal-200 h-48 lg:col-span-2 md:col-span-6 sm:col-span-2">01</div> */}
          <div className="col-span-1 bg-pink-100 h-24">02 </div>
          <div className="col-span-1 bg-pink-100 h-24">02</div>
          <div className="col-span-2 bg-teal-700 h-24">03</div>
          </div>    
          <div className="col-span-1 bg-pink-100 h-24 col-end-7">02</div>
          <div className="col-span-1 bg-pink-100 h-24 col-end-7">02</div>
      
   </div>
  )
}
export default App;
