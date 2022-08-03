import React from 'react'
import FormPago from '../components/FormPago'
import { Card } from '@material-tailwind/react';

const Checkout = () => {
  return (
    <div className='d-flex justify-content-center md:w-2/3 lg:w-2/3 mx-auto'>
      <Card className="w-full bg-white rounded-xl overflow-hdden shadow-md px-6 py-4">
        <div
                className={`bg-gradient-to-tr from-blue-500 to-blue-700 -mt-10 mb-4 rounded-xl text-white grid items-center w-full h-20 py-4 px-8 justify-center shadow-lg-gray uppercase font-bold`}
        >
          <h1 className='text-white text-2xl font-serif font-bold leading-normal mt-0 mb-2'>Detalles del pago</h1>
        </div>
            <FormPago/>
      </Card>
    </div>
  )
}

export default Checkout