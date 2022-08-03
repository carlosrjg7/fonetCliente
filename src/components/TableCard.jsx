import { Card, CardBody } from '@material-tailwind/react';

const TableCard = () => {
  return (
    <Card className='w-full bg-white rounded-xl overflow-hdden shadow-md p-4'>
            <div className='bg-gradient-to-tr from-blue-500 to-blue-700 -mt-10 mb-0 rounded-xl text-white grid items-center w-full h-24 py-4 px-8 shadow-lg-blue'>
                <div className="w-full flex items-center justify-between">
                    <h2 className="text-white text-2xl">Ultimas Operaciones Realizadas</h2>
                </div>
            </div>
            <CardBody>
                <div className="overflow-x-auto">
                    <table className="items-center w-full bg-transparent border-collapse">
                        <thead className="thead-light">
                            <tr>
                                <th className="font-bold px-2 text-blue-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                    Cliente
                                </th>
                                <th className="font-bold px-2 text-blue-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                   Id Operación
                                </th>
                                <th className="font-bold px-2 text-blue-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                   Monto
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    Carlos 
                                </th>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    18
                                </td>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                   $ 1,480
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </CardBody>
        </Card>
  )
}

export default TableCard