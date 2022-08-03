import { useState } from 'react'
import { Link } from 'react-router-dom'
import Alerta from '../components/Alerta';
import clienteAxios from '../config/clienteAxios';
import { Input, Select, Option, Card, Typography } from "@material-tailwind/react";

const Registrar = () => {

  const initialState = {
    name: '',
    lastname: '',
    email: '',
    password:'',
    rPassword:'',
    role: 'USER',
  }

  const [formRegister, setformRegister] = useState(initialState);
  const [error, setError] = useState(false);
  const [alert, setAlert] = useState({
    msg: '',
    errorAlert: false,
  })

  const { msg, errorAlert } = alert;

  const { 
    name,
    lastname,
    email,
    password,
    rPassword,
    role
  } = formRegister

  const handleChange = (e) => {
    setformRegister({
      ...formRegister,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
      if(
        name.trim() === '' ||
        lastname.trim() === '' ||
        email.trim() === '' ||
        password.trim() === '' ||
        rPassword.trim() === '' ||
        role.trim() === ''
        // ? [name,lastname,email,password,rpassword,role].includes('')
      ){
        setError(true);
        setAlert({
          msg: 'Todos los campos son obligatorios.',
          errorAlert: true,
        });
        return;
      }


      if(password !== rPassword){
        setError(true);
        setAlert({
          msg: 'El password no coincide.',
          errorAlert: false,
        });
        return;
      }

      setError(false);
      setAlert({});

      try {
        const { data } = await clienteAxios.post(`/users`, {
          name,
          lastname,
          email,
          password,
          "status": 1,
          role
        });

        setError(true);
        setAlert({
          msg: data.msg,
          errorAlert: false,
        });

        setformRegister(initialState);

      } catch (error) {
        setError(true);
        setAlert({
          msg: error.response.data.msg,
          errorAlert: true,
        });
      }

  }
  
  return (
    <>
    <Card className="w-full bg-white rounded-xl overflow-hdden shadow-md px-6 py-4">
          <div
              className={`bg-gradient-to-tr from-blue-grey-700 to-blue-grey-900 -mt-10 mb-4 rounded-xl text-white grid items-center w-full h-20 py-4 px-8 justify-center shadow-lg-gray uppercase font-bold`}
          >
              <h1 className='text-white text-2xl font-serif font-bold leading-normal mt-0 mb-2'>Registrar Usuario</h1>
          </div>

      <form 
      onSubmit={handleSubmit}
      className="my-5 bg-white rounded-lg px-3 py-0">
        <div className='flex flex-col md:flex-row'>
          <div className="w-full md:w-1/2 md:mr-4 m-0">
            <Input  
              id="name"
              name="name"
              type="text" 
              label='Nombre'
              className="text-md"
              variant="outlined"
              size="lg"
              value={name}
              onChange={handleChange}
              />
          </div>

          <div className="w-full md:w-1/2 md:ml-4 m-0">
            <Input  
              id="lastname"
              name="lastname"
              type="text" 
              label="Apellido"
              variant="outlined"
              size="lg"
              className="text-md"
              value={lastname}
              onChange={handleChange}
              />
          </div>

        </div>

        <div className="my-5">
          <Input  
            id="email"
            name="email"
            type="email" 
            label="Email"
            variant="outlined"
            size="lg"
            className="text-md"
            value={email}
            onChange={handleChange}
            />
        </div>

        <div className="my-5">
          <Input 
            id="Password"
            name="password"
            type="password" 
            label="Password"
            variant="outlined"
            size="lg"
            className="text-md"
            value={password}
            onChange={handleChange}
            />
        </div>

        <div className="my-5">
          <Input 
            id="rPassword"
            name="rPassword"
            type="Password" 
            label="Password"
            variant="outlined"
            size="lg"
            className="text-md"
            value={rPassword}
            onChange={handleChange}
            />
        </div>

        <div className="my-5">
          <Select 
            id="rol"
            name="role"
            size='lg'
            value={role}
            label="Rol"
            onChange={handleChange}
            >
            <Option value={'ADMIN'}>Admin</Option>
            <Option value={'USER'}>User</Option>
          </Select>
        </div>

        { error ? <Alerta msg={msg} errorAlert={errorAlert}/>  : null }

        <button 
          type="submit" 
          value="Guardar" 
          className="mt-4 bg-gradient-to-tr from-light-blue-500 to-light-blue-700 w-full py-3 text-white uppercase font-bold rounded-xl hover:cursor-pointer hover:bg-sky-800 transition-colors focus:outline-none"
        >GUARDAR</button>

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
        to="/login/olvide-password"
      >
        Olvide mi password
      </Link>
    </nav>
   </>
  )
}

export default Registrar