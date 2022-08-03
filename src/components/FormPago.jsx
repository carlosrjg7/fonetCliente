import React, { Fragment, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { FacturasContext } from '../context/FacturasProvider';
import { Button, Input } from '@material-tailwind/react';
import DataTable from 'react-data-table-component';
import moment from 'moment';
import { numeralFormat, datospagoHelp } from './../helpers/'
import { nanoid } from 'nanoid'
import clienteAxios from './../config/clienteAxios';


const FormPago = () => {

    const { 
        topay,
        cliente,
        datosPago, 
        setDatosPago,
        setDatosBanesco
    } = useContext(FacturasContext);

    const navigate = useNavigate();

    const { dni, fullname, dir, movil } = cliente

    useEffect(() => {
        if(!topay.length > 0){
          // eslint-disable-next-line
          navigate('/');
          return
        }

        const { tipo, total, detalle, factIds } = datospagoHelp(topay)

        setDatosPago({
            idtramite: nanoid(12),
            tipoPago: tipo,
            total: total,
            status: 'P',
            idCliente: cliente.id,
            dni: dni,
            detalle: detalle,
            facturas: factIds
        })
        // eslint-disable-next-line
    }, [topay])



    
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            
            //firma
            const { data } = await clienteAxios.post('/facturacion', datosPago)

            console.log(data);
            setDatosBanesco(data)

            navigate('/metodos');
        } catch (error) {
            console.log(error);
        }
    
      }

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
    <Fragment>
        <form 
            onSubmit={handleSubmit}
            className="p-4 mw-50"
            >   
            <h3 className="text-center mb-3 text-slate-900 font-bold">Confirma los datos para proceder al pago</h3>
            
            <p className='font-bold text-grey-700'>Datos personales del cliente</p>
            <hr className='border-grey-500 my-3' />

            <div className='mb-3 grid grid-cols-2 gap-3'>
                <div>
                    <label>Cédula</label>
                    <Input 
                        type="text"
                        id="cedula"
                        name="cedula"
                        disabled={true}
                        label="V22222222"
                        value={dni}
                    />
                </div>

                <div>
                    <label>Telefono Movil</label>
                    <Input 
                        type="text"
                        id="cedula"
                        name="cedula"
                        disabled={true}
                        label="Telefono Movil"
                        value={movil}
                    />
                </div>
            </div>

            <div className='mb-3'>
                <label>Nombre Completo</label>
                <Input 
                    type="text"
                    id="cedula"
                    name="cedula"
                    disabled={true}
                    label="V22222222 | J000000000"
                    value={fullname}
                />
            </div>

            <div className='mb-3'>
                <label>Dirección</label>
                <Input 
                    type="text"
                    id="id"
                    name="id"
                    disabled={true}
                    label="id"
                    value={dir}
                />
            </div>

            <p className='font-bold text-grey-700 mt-10 block'>Datos de la(s) Factura(s)</p>
            <hr className='border-grey-500 my-3' />

            {
                topay.length > 0 && (
                    
                    <DataTable 
                      columns={columnas}
                      data={topay}
                      pagination
                      paginationComponentOptions={paginationEs}
                      fixedHeader
                      fixedHeaderScrollHeight='600px'
                    />

                ) 
            }

            <div className='mb-3'>
                <label>Monto Total</label>
                <Input 
                    type="text"
                    id="monto"
                    name="monto"
                    disabled={true}
                    label="monto"
                    value={datosPago.total}
                />
            </div>

            <div className='mb-3'>
                <label>Descripción</label>
                <Input 
                    type="text"
                    id="descripcion"
                    name="descripcion"
                    label="descripcion"
                    value={datosPago.detalle}
                    disabled={true}
                />
            </div>

            <div className="w-full text-right">
                <Button type='button' variant='outlined' color='grey' className='mr-3' onClick={() => navigate(-1)}>Atrás</Button>
                <Button type="submit" variant="gradient" className="mt-4 m-auto d-block">Continar</Button>
            </div>

        </form>
    </Fragment>
  )
}

export default FormPago