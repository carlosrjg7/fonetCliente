import React from 'react'
import { Link } from 'react-router-dom';
import { Button, IconButton } from "@material-tailwind/react";

const Header = () => {
  return (
    <header className='px-4 py-5 bg-white border-b'>
      <div className='md:flex md:justify-between'>
        <h2 className='text-4xl text-sky-600 font-black text-center'>
          Pasarela Admin
        </h2>

        <div className='flex items-center gap-4'>
          <Link 
            to="/admin"
            className='font-bold uppercase'
          >
            <IconButton color="blue-grey">
              <i className="fas fa-home" />
            </IconButton>
          </Link>

          <Button variant="gradient" size="lg" ripple={true}>
            Cerrar Sesion
          </Button>
        </div>

      </div>
    </header>
  )
}

export default Header