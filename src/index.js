import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from "@material-tailwind/react";

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css';
import './index.scss';
import App from './App';

import Inicio from './routes/Inicio';
import Listado from './routes/Listado';
import Checkout from './routes/Checkout'
import Metodos from './routes/Metodos'
import NotFound from './routes/NotFound';

import AuthLayout from './layouts/AuthLayout';
import RutaProtegida from './layouts/RutaProtegida';
import ConfirmarCuenta from './pages/ConfirmarCuenta';
import Login from './pages/Login';
import NuevoPassword from './pages/NuevoPassword';
import OlvidePassword from './pages/OlvidePassword';
import Registrar from './pages/Registrar';

import Admin from './pages/Admin';

import FacturasProvider from "./context/FacturasProvider";
import { AuthProvider } from "./context/AuthProvider"
import FacturasAdm from './pages/FacturasAdm';
import PaymentMethods from './pages/PaymentMethods';
import Clientes from './pages/Clientes';
import Users from './pages/Users';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider>
    <React.StrictMode>
      <FacturasProvider>
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<App />}>
                <Route index element={<Inicio />} />
                <Route path="/listado" element={<Listado />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/metodos" element={<Metodos />} />
                <Route path="*" element={<NotFound/>} />
              </Route>

              <Route path='/login' element={<AuthLayout />}>
                <Route index element={<Login />} />
                <Route path='registrar' element={<Registrar />} />
                <Route path='olvide-password' element={<OlvidePassword />} />
                <Route path='olvide-password/:token' element={<NuevoPassword />} />
                <Route path='confirmar-cuenta/:id' element={<ConfirmarCuenta />} />
              </Route>

              <Route path='/admin' element={<RutaProtegida />}>
                <Route index element={<Admin />} />
                <Route path='facturas' element={<FacturasAdm />} />
                <Route path='metodos-de-pago' element={<PaymentMethods />} />
                <Route path='clientes' element={<Clientes />} />
                <Route path='usuarios' element={<Users />} />
              </Route>
            </Routes>

          </AuthProvider>
        </BrowserRouter>
      </FacturasProvider>
    </React.StrictMode>
  </ThemeProvider>
);
