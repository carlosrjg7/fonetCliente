
import { useState, useEffect } from 'react';
import TableCard from '../components/TableCard';
import StatusCard from './../components/StatusCard';
import moment from 'moment';
import clienteAxios from '../config/clienteAxios';

const Admin = () => {

  const [datos, setDatos] = useState({
    clientes: 0
  });

  const fechaActual = moment().format('DD/MM/YYYY');

  useEffect(() => {
    
    const consultas = async () => {
      const token = localStorage.getItem('token');

      if(!token) return

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      }

      try {
        const { data } = await clienteAxios(`/clients/count`, config);
        setDatos({
          ...datos,
          clientes: data,
        });
      } catch (error) {
        console.log(error);
      }      
    }

    consultas();
    // eslint-disable-next-line
  }, [])
  

  return (
    <>
       <div className="bg-gradient-to-tr from-blue-grey-700 to-blue-grey-900 pt-14 pb-28 px-3 md:px-8 h-auto">
          <div className="container mx-auto max-w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
              <StatusCard
                color="pink"
                icon="today"
                title="Fecha de Hoy"
                cant={fechaActual}
              />
              <StatusCard
                color="orange"
                icon="groups"
                title="Clientes Registrados"
                cant={datos.clientes}
              />
              <StatusCard
                color="purple"
                icon="paid"
                title="Monto de Total del día"
                cant="$ 12.365"
              />
              <StatusCard
                color="blue"
                icon="poll"
                title="Operaciones del día"
                cant="120"
              />
            </div>
          </div>
        </div>

        <div className="px-3 md:px-8 h-auto -mt-24">
          <div className="container mx-auto max-w-full">
            <div className="grid grid-cols-1 px-4 mb-16">
              <TableCard/>
            </div>
          </div>
        </div>
    </>
  )
}

export default Admin