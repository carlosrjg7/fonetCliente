import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Alerta from '../components/Alerta'
import clienteAxios from '../config/clienteAxios';
import { Typography } from '@material-tailwind/react';

const NuevoPassword = () => {

  const [tokenValid, setTokenValid] = useState(false);
  const [alerta, setAlerta] = useState({});
  const [password, setPassword] = useState('');

  const params = useParams();
  const { token } = params;

  useEffect(() => {
    const comprobarToken = async () => {
      try {
        await clienteAxios(`/users/recover/${token}`);
        setTokenValid(true);
      } catch (error) {
        setAlerta({
          msg: error.response.data.msg,
          errorAlert: true
        });
      }
    }

    comprobarToken();
  }, [token])

  const handleSubmit = async e => {
    e.preventDefault();

    if(password.length < 6){
      setAlerta({
        msg: "El password debe ser minimo de 6 caracteres",
        errorAlert: true
      });
      return 
    }

    setAlerta({});

    try {
      const { data } = await clienteAxios.post(`/users/recover/${token}`, { password });
      setAlerta({
        msg: data.msg,
        errorAlert: false
      });
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
    <h1 className="text-sky-600 font-black text-6xl text-center">Nuevo Password</h1>
    { msg &&  <Alerta msg={msg} errorAlert={errorAlert}/> }
    {
      tokenValid && (
          <form className="my-10 bg-white shadow rounded-lg px-10 py-10"
            onSubmit={handleSubmit}
          >
            <div className="my-5">
            <label 
              htmlFor="Password"
              className="uppercase text-gray-600 block text-xl font-bold">Nuevo Password</label>
            <input 
              id="Password"
              type="Password" 
              placeholder="Password"
              className="w-full mt-3 p-3 border rounded-lg bg-gray-50"
              value={password}
              onChange={ e => setPassword(e.target.value)}/>
            </div>

            <input 
            type="submit" 
            value="Guardar" 
            className="mt-2 bg-sky-700 w-full py-3 text-white uppercase font-bold rounded-xl hover:cursor-pointer hover:bg-sky-800 transition-colors"
            />

            <Typography
            as="a"
            href="/"
            variant="small"
            className="p-1 font-normal text-blue-500 w-full text-center mt-5"
            >
              Volver
            </Typography>
          </form>
      )
    }
    

    <nav className="lg:flex lg:justify-between">
      <Link 
      className='block text-center my-5 text-slate-500 uppercase text-sm'
        to="/registrar"
      >
        ¿No tienes una cuenta? Registrate
      </Link>

      <Link 
      className='block text-center my-5 text-slate-500 uppercase text-sm'
        to="/olvide-password"
      >
        Olvide mi password
      </Link>
    </nav>
   </>
  )
}

export default NuevoPassword