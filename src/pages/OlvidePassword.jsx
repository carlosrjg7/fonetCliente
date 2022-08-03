import { useState } from 'react'
import { Link } from 'react-router-dom'
import Alerta from './../components/Alerta'
import clienteAxios from '../config/clienteAxios';
import { Typography, Input, Card} from '@material-tailwind/react';

const OlvidePassword = () => {

  const [email, setEmail] = useState('');
  const [alerta, setAlerta] = useState({});

  const handleSubmit = async e => {
    e.preventDefault();

    if(!email.trim()){
      setAlerta({
        msg: "El email es obligatorio",
        errorAlert: true
      })

      return 
    }

    setAlerta({});

    try {
      const { data } = await clienteAxios.post(`/users/recover`, { email });
      setAlerta({
        msg: data.msg,
        errorAlert: false
      });

      setEmail('');
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
    <Card className="w-full bg-white rounded-xl overflow-hdden shadow-md px-6 py-4">
          <div
              className={`bg-gradient-to-tr from-blue-grey-700 to-blue-grey-900 -mt-10 mb-4 rounded-xl text-white grid items-center w-full h-20 py-4 px-8 justify-center shadow-lg-gray uppercase font-bold`}
          >
              <h1 className='text-white text-2xl font-serif font-bold leading-normal mt-0 mb-2'>Recuperar Accesos</h1>
          </div>
    { msg &&  <Alerta msg={msg} errorAlert={errorAlert}/> }
      <form className="my-5 bg-white rounded-lg px-3 py-0"
        onSubmit={handleSubmit}
      >
        <div className="my-5">
          <Input 
            id="email"
            type="email" 
            label="Email"
            size="lg"
            variant="outlined"
            className="text-md"
            value={email}
            onChange={ e => setEmail(e.target.value) }
            />
        </div>

        <button 
          type="submit" 
          value="ENVIAR" 
          className="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 w-full py-3 text-white uppercase font-bold rounded-xl hover:cursor-pointer hover:bg-sky-800 transition-colors focus:outline-none"
        >ENVIAR</button>

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

    <nav className="lg:flex lg:justify-between">
      <Link 
      className='block text-center my-5 text-slate-500 uppercase text-sm'
        to="/login"
      >
        ¿Ya tienes cuenta? Inicia Sesión
      </Link>

      <Link 
      className='block text-center my-5 text-slate-500 uppercase text-sm'
        to="/login/registrar"
      >
        ¿No tienes una cuenta? Registrate
      </Link>
    </nav>
   </>
  )
}

export default OlvidePassword