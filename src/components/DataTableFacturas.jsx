import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component'
import clienteAxios from './../config/clienteAxios';
import { Card, CardBody } from '@material-tailwind/react';
import { numeralFormat } from './../helpers/index'
// import moment from 'moment'

const DataTableFacturas = () => {

  const initialState = [
    {
      "id": 0,
      "dni": "",
      "email": "",
      "name": "",
      "lastname": "",
      "fullname": "",
      "dir": "",
      "telefono": "",
      "movil": "",
      "codigo": "",
      "estado": "",
      "status": true,
      "createdAt": "",
      "updatedAt": ""
    }
  ]
  
  const [datos, setDatos] = useState(initialState);

  useEffect(() => {
    const getFacturas = async () => {
      const token = localStorage.getItem('token');

      if(!token) return

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      }

        try {
          const { data } = await clienteAxios(`/factura/`, config);
          setDatos(data);
          console.log(data);
        } catch (error) {
          console.log(error);
        }      
    }
    getFacturas();
    
    // eslint-disable-next-line
  }, [])

  const columnas = [
    {
      name: 'Cliente',
      selector: row => row.Cliente?.fullname,
      sortable: true,
    },
    {
      name: 'Id Fonet',
      selector: row => row.idFonetFactura,
      sortable: true,
    },
    {
      name: 'Monto',
      selector: row => `${numeralFormat(row.monto)}`,
      sortable: true,
    },
    {
      name: 'Estado',
      selector: row => row.estado,
      sortable: true,
    },
    {
      name: 'Vencimiento',
      selector: row => row.vencimiento,
      sortable: true,
    },
    {
      name: 'Emitido',
      selector: row => row.emitido,
      sortable: true,
    },
  ];

  const paginationEs = {
    rowsPerPageText: "Facturas por Página",
    rangeSeparatorText: "de",
    selectAllRowsItem: true,
    selectAllRowsItemText: "Todas"
  }
  
  return (
    <Card className='w-full bg-white rounded-xl overflow-hdden shadow-md p-4'>
      <div className='bg-gradient-to-tr from-blue-500 to-blue-700 -mt-10 mb-0 rounded-xl text-white grid items-center w-full h-24 py-4 px-8 shadow-lg-blue'>
          <div className="w-full flex items-center justify-between">
              <h2 className="text-white text-2xl">Lista de Facturas</h2>
          </div>
      </div>
      <CardBody>
          <div className="overflow-x-auto">
            <DataTable 
              columns={columnas}
              data={datos}
              pagination
              paginationComponentOptions={paginationEs}
              fixedHeader
              fixedHeaderScrollHeight='600px'
            />
          </div>
      </CardBody>
    </Card>
  )
}

export default DataTableFacturas