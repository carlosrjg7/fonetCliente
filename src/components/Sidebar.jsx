import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Button } from "@material-tailwind/react";

import AdminNav from './AdminNav';

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState('-left-64');
  const location = useLocation().pathname;

  return (
    <>
      <AdminNav
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
      />

      <div
        className={`h-screen fixed top-0 md:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-white w-64 z-10 py-4 px-6 transition-all duration-300`}
      >
        <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
          <a
              href="/"
              rel="noreferrer"
              className="mt-2 text-center w-full inline-block"
          >
              <h6 className='text-gray-900 text-xl font-bold leading-normal mt-0 mb-2 uppercase'>Pasarela de pagos</h6>
          </a>

          <div className="flex flex-col">
            <hr className="my-4 min-w-full" />

            <ul className="flex-col min-w-full flex list-none">
              <li className="rounded-lg mb-4">
                <NavLink 
                  to="/admin"
                  className={
                    location === '/admin' ? 
                    `flex items-center gap-4 bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md rounded-lg px-2 py-2 text-sm font-light`
                    :`flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg`
                  }>
                  <span className="material-icons">dashboard</span>
                  Dashboard
                </NavLink>
              </li>
              <li className="rounded-lg mb-4">
                <NavLink
                  to="/admin/facturas"
                  className={
                  ({ isActive }) => 
                  ( 
                    isActive ? 
                    `flex items-center gap-4 bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md rounded-lg px-2 py-2 text-sm font-light`
                    :`flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg`
                    )
                  }>
                  <span className="material-icons">receipt_long</span>
                  Facturas
                </NavLink>
              </li>
              <li className="rounded-lg mb-4">
                <NavLink
                  to="/admin/metodos-de-pago"
                  className={
                  ({ isActive }) => 
                  ( 
                    isActive ? 
                    `flex items-center gap-4 bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md rounded-lg px-2 py-2 text-sm font-light`
                    :`flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg`
                    )
                  }>
                  <span className="material-icons">payments</span>
                  Métodos de Pago
                </NavLink>
              </li>
              <li className="rounded-lg mb-4">
                <NavLink
                  to="/admin/clientes"
                  className={
                  ({ isActive }) => 
                  ( 
                    isActive ? 
                    `flex items-center gap-4 bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md rounded-lg px-2 py-2 text-sm font-light`
                    :`flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg`
                    )
                  }>
                  <span className="material-icons">group</span>
                  Clientes
                </NavLink>
              </li>
              <li className="rounded-lg mb-4">
                <NavLink
                  to="/admin/usuarios"
                  className={
                  ({ isActive }) => 
                  ( 
                    isActive ? 
                    `flex items-center gap-4 bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md rounded-lg px-2 py-2 text-sm font-light`
                    :`flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg`
                    )
                  }>
                  <span className="material-icons">manage_accounts</span>
                  Usuarios
                </NavLink>
              </li>
            </ul>

            <ul className="flex-col min-w-full flex list-none absolute bottom-0 gap-2">
              <li className='w-full'>
                <a href='/'>
                  <Button variant='outlined' size='sm' color='grey' className='w-full text-xs whitespace-nowrap focus:outline-none'>
                      <span className="material-icons text-xs mr-1">arrow_back</span>
                      Salir
                  </Button>
                </a>
              </li>
              <li className='w-full'>
                <a href='/'>
                  <Button variant='gradient' size='sm' color='blue-grey' className='w-full text-xs whitespace-nowrap focus:outline-none'> 
                      <span className="material-icons text-xs mr-1">power_settings_new</span>
                      Cerrar Sesión
                  </Button>
                </a>
              </li>
            </ul>

          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar