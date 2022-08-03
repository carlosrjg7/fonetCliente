import { useState, useEffect, useContext } from 'react'
import { Card, Button } from '@material-tailwind/react';
import DataTable from 'react-data-table-component';
import clienteAxios from './../config/clienteAxios';
import { FacturasContext } from '../context/FacturasProvider';
import BotonBanesco from '../components/BotonBanesco';

const Metodos = () => {

  const { 
    datosPago,
    datosBanesco
  } = useContext(FacturasContext);

  const [dataTabla, setdataTabla] = useState()

  const {
      dni,
      total,
      dinamic,
      idtramite,
      detalle,
      apikey,
      firma,
      urlBanca
  } = datosBanesco

  const { tipoPago, idCliente, facturas } = datosPago

  useEffect(() => {
    const getMetodos = async () =>{
      try {
  
        const { data } = await clienteAxios('/pm/')
        console.log(data);
        
        setdataTabla(data.filter(item => item.status === true))
  
      } catch (error) {
        console.log(error)
      }
    } 

    getMetodos()

  }, [])

  const createScript = () => {
    const script = document.createElement("script");
    script.innerHTML = `      
      Banesco_open_win(
        "${urlBanca}",
        "${dni}",
        "${total}",
        "${dinamic}",
        "${idtramite}",
        "${detalle}",
        "${apikey}",
        "${firma}", 
        1 )`;
    document.body.appendChild(script);
  }

  const handleClick = async (id) =>{
    switch (id) {
      case 1:
        try {

          const obj = {
            tipo: tipoPago,
            total,
            detalle,
            idCliente,
            facturas: facturas,
            idtramite,
            referencia: "",
          }

        const { data } = await clienteAxios.post('/pagos', obj)
        console.log(data);
        createScript()

        } catch (error) {
          console.log(error)
        }

      break;
      case 2:

      break;
    default:
      break;
    }
  }  

  const columnas = [
    {
      name: 'Nombre',
      selector: row => row.name,
      sortable: true,
    },
    {
      name: 'Boton de pago',
      selector: row => row.name === 'Banesco' ? <BotonBanesco onclick={() => handleClick(row.id)} /> : <Button style={{maxWidth: '180px', margin: '10px'}} onClick={() => handleClick(row.id)}>{row.name }</Button>,
      sortable: true,
    }
   
  ];

  const paginationEs = {
    rowsPerPageText: "Facturas por Página",
    rangeSeparatorText: "de",
    selectAllRowsItem: true,
    selectAllRowsItemText: "Todos"
  }

  return (
    <div className='md:w-1/2 lg:w-2/3 justify-center mx-auto'>
      <Card className="w-full bg-white rounded-xl overflow-hdden shadow-md px-6 py-4">
          <div
              className={`bg-gradient-to-tr from-blue-grey-700 to-blue-grey-900 -mt-10 mb-4 rounded-xl text-white grid items-center w-full h-20 py-4 px-8 justify-center shadow-lg-gray uppercase font-bold`}
          >
              <h1 className='text-white text-2xl font-serif font-bold leading-normal mt-0 mb-2'>Seleccione el método de pago</h1>
          </div>

          <DataTable 
              columns={columnas}
              data={dataTabla}
              pagination
              paginationComponentOptions={paginationEs}
              fixedHeader
              fixedHeaderScrollHeight='600px'
          />

      </Card>
    </div>
  )
}

export default Metodos