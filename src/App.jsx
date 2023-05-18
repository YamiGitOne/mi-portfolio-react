const App = () => {
  return (
    <div className="container md:container md:mx-auto">
       <h1 className="text-3xl font-bold text-center bg-red-200">
        Hola soy Yami!
      </h1>
        <strong>Diseño soluciones sencillas para tus proyectos</strong>
    
      <div className="grid grid-cols-6 gap-4">
          <div className="col-start-1 col-span-2 bg-teal-200 h-40">01</div>
          <div className="col-span-1 bg-pink-100 h-24">02</div>
          <div className="col-span-1 bg-pink-100 h-24">02</div>
          <div className="col-span-2 bg-teal-700 h-24">03</div>
          <div className="col-span-1 bg-pink-100 h-24 col-end-7">02</div>
          <div className="col-span-1 bg-pink-100 h-24 col-end-7">02</div>
          
      </div>
   </div>
  )
}
export default App;
