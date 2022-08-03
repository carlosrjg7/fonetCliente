// import axios from 'axios';
import React, { useState, Fragment, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { FacturasContext } from '../context/FacturasProvider';
import { Input } from "@material-tailwind/react";
import clienteAxios from './../config/clienteAxios';
import Alerta from '../components/Alerta';

const FormInicio = () => {

  const {
        setFacturas,
        setCliente
  } = useContext(FacturasContext);

  const [alerta, setAlerta] = useState({});

  const initialState = {
    email: '',
    cedula: ''
} 

  const [persona, setPersona] = useState(initialState);

  const { email, cedula } = persona;

  const [error, setError] = useState(false);

  const [ noFact, setNoFact ] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(email.trim() === '' || cedula.trim() === '' ){
        setError(true);
        return;
    }

    try {

        const obj = {
            email,
            cedula
        }

        const { data } = await clienteAxios.post(`/external/cliente`, obj);
        const { facturas, cliente } = data;
        setCliente(cliente)

        if(facturas !== null){
            setFacturas(facturas);
            navigate('/listado');
        }else{
            setNoFact(true);
        }

    } catch (error) {
        setAlerta({
            msg: msg,
            errorAlert: true
        });
    }

  }

  const handleChange = (e) =>{
    setPersona({
        ...persona,
        [e.target.name] : e.target.value
    })
  }

  const { msg, errorAlert } = alerta;

  return (
    <Fragment>
        { error ? <div className='alert alert-danger'>Todos los campos son obligatorios</div> : null }
        { noFact ? <div className='alert alert-warning'>No posee facturas</div> : null }
        { msg &&  <Alerta msg={msg} errorAlert={errorAlert}/> }
        <form 
            onSubmit={handleSubmit}
            className="my-5 bg-white rounded-lg px-10 py-8">
            
            <div className="mb-10">
                <Input  
                    type="email"
                    id="email"
                    name="email"
                    label="Email"
                    className="text-md"
                    size="lg"
                    variant="outlined"
                    value={email}
                    onChange={handleChange}
                />
            </div>

            <div className="mb-10">
                <Input 
                    className=""
                    type="text"
                    id="cedula"
                    name="cedula"
                    value={cedula}
                    label="Cedula Ej: V22222222"
                    size="lg"
                    variant="outlined"
                    onChange={handleChange}
                />
            </div>

            <button type="submit" className="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 w-full py-3 text-white uppercase font-bold rounded-xl hover:cursor-pointer hover:bg-sky-800 transition-colors focus:outline-none">Buscar</button>

        </form>

    </Fragment>
  )
}

export default FormInicio