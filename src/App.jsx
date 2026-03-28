import { useState } from 'react';
import './App.css';
import computadora from '../src/assets/estacion_trabajo.jpg';
import gmail from '../src/assets/gmail.png';
import Footer from './Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>

      <div className="relative inline-block">
        <img src={computadora} alt="computadora" />

        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold text-center text-6xl">
          Desarrollador FullStack
        </h1>
      </div>

      <div style={{ marginTop: '50px' }}>
        <h2 className="text-3xl font-bold text-center mb-10">
          Acerca de mi
        </h2>

        <div className="flex justify-center gap-6 mt-10 flex-wrap">
          <div className="card w-96 bg-base-100 card-xs shadow-sm">
            <div className="card-body">
              <h1 className="card-title">Perfil</h1>
              <p className='mb-10 text-xl' >Profesional de Ingenieria en sistemas , desarrollo de sistemas , desarrollo web, desarrollador frontend, desarrollador backend. Con mas de 5 años de experiencia en el desarrollo de software en el sector de seguros. </p>
            </div>
          </div>

          <div className="card w-96 bg-base-100 card-xs shadow-sm">
            <div className="card-body">
              <h1 className="card-title">Habilidades</h1>
              <p className='mb-10 text-xl' >Capacidad para obtener requerimientos de un sistema de informacion e implementar los requerimientois para su soluci&oacute;n</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-6 max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-10">
          💼 Experiencia Laboral
        </h2>

        <div className="mb-10 border-l-4 border-primary pl-6">
          <h3 className="text-xl font-semibold">Dynamick Network</h3>
          <p className="text-sm opacity-70 mb-2">
            Desarrollador de Software | 2018 - 2023
          </p>

          <p className="mb-4">
            Compañia dedicada a la venta de seguros para autos,casa,seguros medicos, etc.
          </p>
          <p className="mb-4">
            Mis funcionaes principales eran desarrollo de software y mantenimiento a modulos existentes, asi desarrollando modulos para el sistema de ventas utilizadas en las tiendas Suburbia/Liverpool.
          </p>

          <div>
            <h4 className="font-semibold mb-2">Tecnologías</h4>
            <div className="flex flex-wrap gap-2">
              <span className="badge badge-primary">Java</span>
              <span className="badge badge-secondary">HTML/CSS</span>
              <span className="badge badge-accent">MySQL</span>
            </div>
          </div>
        </div>

        <div className="divider"></div>

        <div className="mb-10 border-l-4 border-primary pl-6">
          <h3 className="text-xl font-semibold">Protec</h3>
          <p className="text-sm opacity-70 mb-2">
            Desarrollador de Software | 2023 - 2025
          </p>

          <p className="mb-4">
            Ingeniero Desarrollo de software
          </p>
          <p className="mb-4">
            Compania dedicada a la venta de seguros para autos,casa,seguros medicos, etc.
          </p>
          <p className="mb-4">
            Mis funcionaes principales eran desarrollo de software y mantenimiento a modulos existentes, asi desarrollando modulos para el sistema de ventas de polizas.
          </p>

          <div>
            <h4 className="font-semibold mb-2">Tecnologías</h4>
            <div className="flex flex-wrap gap-2">
              <span className="badge badge-primary">JS</span>
              <span className="badge badge-secondary">NodeJS</span>
              <span className="badge badge-accent">SQL Server</span>
              <span className="badge badge-warning">PHP</span>
            </div>
          </div>
        </div>

        <div className="divider"></div>

        <div className="mb-10 border-l-4 border-primary pl-6">
          <h3 className="text-xl font-semibold">Grupo ECO</h3>
          <p className="text-sm opacity-70 mb-2">
            Desarrollador de Software | 2025 - 2026
          </p>

          <p className="mb-4">
            Desarrollo de aplicaciones web para distintos giros del grupo y mantenimiento de sistemas.
          </p>

          <div>
            <h4 className="font-semibold mb-2">Tecnologías</h4>
            <div className="flex flex-wrap gap-2">
              <span className="badge badge-primary">JavaScript</span>
              <span className="badge badge-secondary">SQL Server</span>
              <span className="badge badge-accent">ReactJS</span>
              <span className="badge badge-warning">C#</span>
            </div>
          </div>
        </div>


        <div className='container mx-auto p-6 max-w-4xl'>
          <h2 className="text-3xl font-bold text-center mb-10">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src='https://img.icons8.com/papercut/60/university.png' alt="university" />
              <p style={{ marginLeft: '10px' }}>Estudios</p>
            </div>
          </h2>
        </div>

        
        <div className="mb-10 border-l-4 border-accent pl-6">
          <h3 className="text-xl font-semibold">Instituto Tecnologico de Tijuana</h3>
          <p className="text-sm opacity-70 mb-2">
            Periodo de estudios 2013 - 2018
          </p>
          <p className="mb-4">
            Carrera: Ingenieria en sistemas computacionales
          </p>
        </div>
        
      </div>

      <Footer />

    </>
  );
}

export default App;

