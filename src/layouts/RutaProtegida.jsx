
import { Outlet, Navigate, useNavigate } from 'react-router-dom';
import useAuth from './../hooks/useAuth';

import Sidebar from './../components/Sidebar';

const RutaProtegida = () => {

  const { auth, cargando } = useAuth();

  const navigate = useNavigate();

  if(!auth){ 
   return navigate('/login');
  }

  if(cargando) return 'Cargando...'
  return (
    <>
      { auth.id ? 
      (
        <>
          <Sidebar/>
          <main className='md:ml-64'>
            <Outlet />
          </main>
        </>
      ) : <Navigate to="/login" /> }
    </>
  )
}

export default RutaProtegida