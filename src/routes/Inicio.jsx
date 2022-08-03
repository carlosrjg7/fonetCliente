import FormInicio from '../components/FormInicio'
import { Card } from '@material-tailwind/react';

const Inicio = () => {

  return (
    <div className='md:w-2/3 lg:w-2/5 justify-center mx-auto'>
      <Card className="w-full bg-white rounded-xl overflow-hdden shadow-md px-6 py-4">
          <div
              className={`bg-gradient-to-tr from-blue-grey-700 to-blue-grey-900 -mt-10 mb-4 rounded-xl text-white grid items-center w-full h-20 py-4 px-8 justify-center shadow-lg-gray uppercase font-bold`}
          >
              <h1 className='text-white text-2xl font-serif font-bold leading-normal mt-0 mb-2'>Consulte sus facturas</h1>
          </div>
          <FormInicio />
      </Card>
    </div>
  )
}

export default Inicio