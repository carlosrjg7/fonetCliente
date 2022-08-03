import React, { useContext } from 'react';
import { NavLink, Link } from "react-router-dom"
import { FacturasContext } from '../context/FacturasProvider';
import { Navbar, Button, IconButton, Typography, Chip  } from "@material-tailwind/react";

const NavbarPublic = () => {

  const { topay } = useContext(FacturasContext);

  return (
    <Navbar className="mx-auto max-w-screen-xl my-2">
       <div className="container flex items-center justify-between text-blue-grey-900">
          <div className='flex justify-between items-center'>
            <Typography
              as="div"
              href="/"
              variant="small"
              className="mr-4 cursor-pointer py-1.5 font-normal"
            >
                <NavLink to="/">
                  <Button variant='gradient' size='sm'>
                    Inicio
                  </Button>
                </NavLink>
            </Typography>

            <NavLink to="/admin">
              <IconButton variant="outlined" size="sm" className='mr-2 flex items-center justify-center focus:outline-none'>
                <span className="material-icons flex items-center justify-center">account_circle</span>
              </IconButton>
            </NavLink>
          </div>

          <div className='flex justify-between items-center'>     
            { topay.length > 0 && (
              <Link to={'/checkout'}>
                <Button variant="outlined" size="sm" color='red' className="flex justify-between items-center focus:outline-none py-1 px-2">
                  <span className="material-icons">shopping_cart</span>
                  <Chip
                    shopping_cart
                    color='red'
                    className='ml-2'
                    value={ 
                    topay.length
                    }
                  /> 
                </Button>
              </Link>
            ) } 
          </div>
                      
        </div>
    </Navbar>
  )
}

export default NavbarPublic