import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Alerta from '../components/Alerta';
import clienteAxios from './../config/clienteAxios';
import useAuth from '../hooks/useAuth';
import { Card, Input, Typography } from '@material-tailwind/react';

const Login = () => {

  let navigate = useNavigate();

  const initialState = {
    email: "",
    password: ""
  }

  const [alerta, setAlerta] = useState({});
  const [datos, setDatos] = useState(initialState);

  const { setAuth } = useAuth();

  const { email, password } = datos;

  const handleChange = e => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async e => {
    e.preventDefault();

    if([email, password].includes('')){
      setAlerta({
        msg: "todos los campos son obligatorios",
        errorAlert: true
      });
      return 
    }

    try {

      const { data } = await clienteAxios.post(`/users/login`, { email, password });
      setAlerta({});
      localStorage.setItem('token', data.token);
      setAuth(data);
      navigate('/admin');
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        errorAlert: true
      });
    }
  }

  const { msg, errorAlert } = alerta;

  return (
   <>
   <div className=''>
      <Card className="w-full bg-white rounded-xl overflow-hdden shadow-md px-6 py-4">

      <div
              className={`bg-gradient-to-tr from-blue-grey-700 to-blue-grey-900 -mt-10 mb-4 rounded-xl text-white grid items-center w-full h-20 py-4 px-8 justify-center shadow-lg-gray uppercase font-bold`}
      >
        <h1 className='text-white text-2xl font-serif font-bold leading-normal mt-0 mb-2'>Iniciar Sesion</h1>
      </div>

    { msg &&  <Alerta msg={msg} errorAlert={errorAlert}/> }
    <form 
      className='my-0 bg-white rounded-lg px-10 py-8'
      onSubmit={handleSubmit}
    >
      <div className="mb-5">
        <Input 
          id="email"
          name="email"
          type="email" 
          value={email}
          size="lg"
          label="Email"
          variant="outlined"
          onChange={handleChange}
          />
      </div>

      <div className="mb-5">
        <Input 
          id="Password"
          name='password'
          type="Password" 
          value={password}
          size="lg"
          label="Password"
          variant="outlined"
          onChange={handleChange}
          />
      </div>

      <button
        type="submit" 
        className="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 w-full py-3 text-white uppercase font-bold rounded-xl hover:cursor-pointer hover:bg-sky-800 transition-colors focus:outline-none"
      >Iniciar Sesion</button>

      <Typography
        as="a"
        href="/"
        variant="small"
        className="p-1 font-normal text-blue-500 w-full text-center mt-5"
      >
        Volver
      </Typography>

    </form>

    </Card>
    </div>

    <nav className="lg:flex lg:justify-between">
      <Link 
      className='block text-center my-5 text-slate-500 uppercase text-sm'
        to="/login/registrar"
      >
        ¿No tienes una cuenta? Registrate
      </Link>

      <Link 
      className='block text-center my-5 text-slate-500 uppercase text-sm'
        to="/login/olvide-password"
      >
        Olvide mi password
      </Link>
    </nav>

    
   </>
  )
}

export default Login