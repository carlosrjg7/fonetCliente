import { useLocation } from 'react-router-dom';
import { Button, Menu, MenuHandler, MenuList, MenuItem } from '@material-tailwind/react';
import { iniciales } from '../helpers';
import useAuth from '../hooks/useAuth';

const AdminNav = ({ showSidebar, setShowSidebar }) => {
  const location = useLocation().pathname;

  console.log(location);

  const { auth } = useAuth()

  const iniciale = iniciales(auth.name, auth.lastname);

  return (
   <nav className="bg-gradient-to-tr from-blue-grey-700 to-blue-grey-900 md:ml-64 py-6 px-3">
            <div className="container max-w-full mx-auto flex items-center justify-between md:pr-8 md:pl-10">
               
                <div className="md:hidden">
                    <Button
                        variant='text'
                        size="lg"
                        onClick={() => setShowSidebar('left-0')}
                    >
                        <i className="fa fa-home text-white" />
                        <span className="text-white material-icons undefined text-2xl leading-none">fingerprint</span>
                    </Button>
                    <div
                        className={`absolute top-2 md:hidden ${
                            showSidebar === 'left-0' ? 'left-64' : '-left-64'
                        } z-50 transition-all duration-300`}
                    >
                        <Button
                            variant='text'
                            size="lg"
                            onClick={() => setShowSidebar('-left-64')}
                        >
                            <i className="fa fa-heart text-white" />
                        </Button>
                    </div>
                </div>

                <div className="flex justify-between items-center w-full">
                    <h4 className="uppercase text-white text-sm tracking-wider mt-1">
                        {location === '/admin'
                            ? 'DASHBOARD'
                            : location.toUpperCase().replace('/', '')}
                    </h4>

                    <div className="flex">

                        <div className="mr-4 ml-6">
                            <Menu> 
                              <MenuHandler>
                                <Button 
                                    variant="text" 
                                    className='rounded-full focus:outline-none bg-white hover:!bg-white flex justify-center items-center relative' 
                                    style={{ width: "40px", height: "40px" }}>
                                    <span className='text-lg'>{iniciale}</span>
                                </Button> 
                              </MenuHandler>

                              <MenuList>
                                <MenuItem className='block w-full text-sm py-3 px-4 font-normal cursor-pointer whitespace-no-wrap rounded-md text-gray-900 hover:text-white hover:bg-light-blue-500 hover:shadow-md-light-blue transition-all duration-300'>
                                    Cerrar Sesion
                                </MenuItem>
                              </MenuList>
                            </Menu>
                        </div>

                    </div>
                </div>
                
            </div>
        </nav>
  )
}

export default AdminNav