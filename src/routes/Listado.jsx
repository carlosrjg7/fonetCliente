import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { FacturasContext } from '../context/FacturasProvider';
import { Typography } from '@material-tailwind/react';
import DataTableListado from './../components/DataTableListado';

const Listado = () => {

  const { 
    facturas
  } = useContext(FacturasContext);

  const navigate = useNavigate();

  useEffect(() => {
      if(!facturas.length > 0){
        // eslint-disable-next-line
        navigate('/');
      }
      // eslint-disable-next-line
  }, [facturas])
  

  return (
    <div className='d-flex justify-content-center md:w-2/3 lg:w-2/3 mx-auto'>
      <DataTableListado data={facturas} />
      <Typography
        as="a"
        href="/"
        variant="small"
        color="blue"
        className="p-1 font-normal text-blue-500 w-full text-center mt-5"
      >
        Volver
      </Typography>
    </div>
  )
}

export default Listado