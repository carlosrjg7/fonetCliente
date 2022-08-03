import React, { useState, createContext } from 'react'

export const FacturasContext = createContext();

const FacturasProvider = (props) => { 

  const [cliente, setCliente] = useState({})

  const [facturas, setFacturas] = useState([]);

  const [topay, setTopay] = useState(false);
  
  const initialDatosPagos = {
      idtramite: '',
      tipoPago: '',
      total: '',
      status: '',
      idCliente: '',
      dni: '',
      detalle: '',
      facturas: []
  }

  const [datosPago, setDatosPago] = useState(initialDatosPagos);
 
  const [datosBanesco, setDatosBanesco] = useState({})

  return (
    <FacturasContext.Provider
        value={{
            facturas,
            setFacturas,
            topay, 
            setTopay,
            cliente,
            setCliente,
            datosPago, 
            setDatosPago,
            datosBanesco, 
            setDatosBanesco
        }}
    >
        { props.children }
    </FacturasContext.Provider>
  )
}

export default FacturasProvider