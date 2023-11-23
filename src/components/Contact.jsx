import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Contact = () => {
  const onSubmit = (values) => {
    try {
      console.log(values);
      throw new Error('Fallo en el envío');
    } catch (error) {
      ErrorMessage('Error al enviar el formulario. Por favor, inténtalo de nuevo.'); 
    }
  };

  const initialValues = { name: '', email: '', message: '' };

  const validationSchema = Yup.object({
    name: Yup.string().required('Campo obligatorio'),
    email: Yup.string().email('Correo electrónico inválido').required('Campo obligatorio'),
    message: Yup.string().required('Campo obligatorio'),
  });

  return (
    
    <div className='bg-gray-100 grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible'>
       <h1 className='font-bold font-sans pb-2 pt-4 text-center lg:text-2xl text-xl'>Contacto</h1>
       <h2 className='text-center'>Gracias por tu interés. Por ahora el formulario esta desactivado. Si quieres contactarme puedes hacerlo al correo <strong>quieromiwww@gmail.com</strong><br/> 603.35.89.96</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        
        {({ values, handleChange, handleSubmit }) => (
          <Form className='bg-white p-4 mt-8 mb-2 w-80 max-w-screen-lg sm:w-96' onSubmit={handleSubmit} netlify="true">
            
            <div className='relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none'>
            <div className='text-center'>
              <label className='block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 pb-2' htmlFor="name">Nombre</label>
              <Field
                className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 focus:border-t-transparent text-sm px-3 py-3 rounded-md border-blue-gray-200 focus:border-gray-900  !border-t-blue-gray-200 focus:!border-t-gray-900"
                type="text"
                id="name"
                name="name"
                value={values.name}
                onChange={handleChange}
              />
              <ErrorMessage name="name" component="div" />
            </div>

            <div className='text-center'>
              <label className='block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 pb-2 pt-2' htmlFor="email">Correo Electrónico</label>
              <Field
               className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 focus:border-t-transparent text-sm px-3 py-3 rounded-md border-blue-gray-200 focus:border-gray-900  !border-t-blue-gray-200 focus:!border-t-gray-900"
                type="email"
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
              <ErrorMessage name="email" component="div" />
            </div>

            <div className='text-center'>
              <label className='block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 pb-2 pt-2' htmlFor="message">Mensaje</label>
              <Field
               className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 focus:border-t-transparent text-sm px-3 py-3 rounded-md border-blue-gray-200 focus:border-gray-900  !border-t-blue-gray-200 focus:!border-t-gray-900"
                as="textarea"
                id="message"
                name="message"
                value={values.message}
                onChange={handleChange}
              />
              <ErrorMessage name="message" component="div" />
            </div>

            <button className='align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none block w-full mt-6' type="submit">Enviar</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

Contact.displayName = 'Contact'
export { Contact }

