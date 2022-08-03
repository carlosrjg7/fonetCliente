import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component'
import clienteAxios from './../config/clienteAxios';
import { Card, CardBody } from '@material-tailwind/react';
import moment from 'moment'

const DataTablePayments = () => {

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
    const getClients = async () => {
      const token = localStorage.getItem('token');

      if(!token) return

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      }

        try {
          const { data } = await clienteAxios(`/clients`, config);
          setDatos(data);
          console.log(data);
        } catch (error) {
          console.log(error);
        }      
    }
    getClients();
    
    // eslint-disable-next-line
  }, [])

  const columnas = [
    {
      name: 'Cédula',
      selector: row => row.dni,
      sortable: true,
    },
    {
      name: 'Email',
      selector: row => row.email,
      sortable: true,
    },
    {
      name: 'Nombre',
      selector: row => row.fullname,
      sortable: true,
    },
    {
      name: 'Dirección',
      selector: row => row.dir,
      sortable: true,
    },
    {
      name: 'Telefono',
      selector: row => row.telefono,
      sortable: true,
    },
    {
      name: 'Movil',
      selector: row => row.movil,
      sortable: true,
    },
    {
      name: 'Fecha de Registro',
      selector: row => moment(row.createdAt).format('DD/MM/YYYY hh:mm:ss'),
      sortable: true,
    },
  ];

  const paginationEs = {
    rowsPerPageText: "Clientes por Página",
    rangeSeparatorText: "de",
    selectAllRowsItem: true,
    selectAllRowsItemText: "Todos"
  }
  
  return (
    <Card className='w-full bg-white rounded-xl overflow-hdden shadow-md p-4'>
      <div className='bg-gradient-to-tr from-blue-500 to-blue-700 -mt-10 mb-0 rounded-xl text-white grid items-center w-full h-24 py-4 px-8 shadow-lg-blue'>
          <div className="w-full flex items-center justify-between">
              <h2 className="text-white text-2xl">Métodos de pago</h2>
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

export default DataTablePayments