import { useEffect, useState } from "react"
import { useParams, Link } from 'react-router-dom'
import Alerta from './../components/Alerta';
import clienteAxios from '../config/clienteAxios';

const ConfirmarCuenta = () => {

  const [alerta, setAlerta] = useState({});
  const [cuentaConfirm, setCuentaConfirm] = useState(false);

  const params = useParams();
  const { id } = params;

  useEffect(() => {
    const confirmarCuenta = async () =>{

      try {
        const url = `/users/confirmar/${id}`;
        const { data } = await clienteAxios.get(url);
        
        setAlerta({
          msg: data.msg,
          errorAlert: false
        });

        setCuentaConfirm(true);
        
      } catch (error) {
        setAlerta({
          msg: error.response.data.msg,
          errorAlert: true
        });
      }
    }

    confirmarCuenta();

  },[id])

  const { msg, errorAlert } = alerta;
 
  return (
    <>
    <h1 className="text-sky-600 font-black text-6xl text-center">Confirmar Cuenta</h1>

    <div className="mt-20 md:mt-5 shadow-lg px-10 py-10 rounded-xl bg-white">
      { msg &&  <Alerta msg={msg} errorAlert={errorAlert}/> }

      { cuentaConfirm && (
        <Link 
        className='block text-center my-5 text-slate-500 uppercase text-sm'
          to="/login"
        >
          Iniciar Sesión
        </Link>
      )}
    </div>
   </>
  )
}

export default ConfirmarCuenta