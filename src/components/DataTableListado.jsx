
import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import DataTable from 'react-data-table-component';
import { Card, CardBody, Typography, Button } from '@material-tailwind/react';
import moment from 'moment';
import { FacturasContext } from '../context/FacturasProvider';
import { numeralFormat } from './../helpers/'

const DataTableListado = ({ data }) => {

  const { topay, setTopay } = useContext(FacturasContext);

  const handleChange = ({ selectedRows }) => {
    setTopay(selectedRows);
  };

  const columnas = [
    {
      name: 'Id',
      selector: row => row.id,
      sortable: true,
    },
    {
      name: 'Fecha de emisión',
      selector: row => moment(row.emitido).format('DD/MM/YYYY hh:mm:ss'),
      sortable: true,
    },
    {
      name: 'Fecha de vencimiento',
      selector: row => moment(row.vencimiento).format('DD/MM/YYYY hh:mm:ss'),
      sortable: true,
    },
    {
      name: 'Total',
      selector: row => numeralFormat(row.total),
      sortable: true,
    },
    {
      name: 'Estado',
      selector: row => row.estado,
      sortable: true,
    },
   
  ];

  const paginationEs = {
    rowsPerPageText: "Facturas por Página",
    rangeSeparatorText: "de",
    selectAllRowsItem: true,
    selectAllRowsItemText: "Todos"
  }
  
  return (
    <Card className='w-full bg-white rounded-xl overflow-hdden shadow-md p-4'>
      <div className='bg-gradient-to-tr from-blue-500 to-blue-700 -mt-10 mb-0 rounded-xl text-white grid items-center w-full h-24 py-4 px-8 shadow-lg-blue'>
          <div className="w-full flex items-center justify-between">
              <h2 className="text-white text-2xl">Lista de Facturas</h2>
          </div>
          <Typography variant="small" className="mb-0 pb-0 ">
            Seleccione las facturas que desea pagar y luego vaya al checkout.
          </Typography>
      </div>
      <CardBody>
          <div className="overflow-x-auto">
            <DataTable 
              columns={columnas}
              data={data}
              pagination
              paginationComponentOptions={paginationEs}
              fixedHeader
              fixedHeaderScrollHeight='600px'
              selectableRows
              onSelectedRowsChange={handleChange}
            />
          </div>

          { topay.length > 0 && (
              <Link to={'/checkout'}>
                <Button variant="gradient" size="sm" color='blue' className="float-right focus:outline-none py-2 px-3 mt-3 flex justify-between items-center">
                  Ir a Checkout <span className="material-icons text-sm ml-2">shopping_cart</span>
                </Button>
              </Link>
            ) } 
      </CardBody>
    </Card>
  )
}

export default DataTableListado