import DataTableFacturas from '../components/DataTableFacturas';

const FacturasAdm = () => {
  return (
    <>
      <div className="bg-gradient-to-tr from-blue-grey-700 to-blue-grey-900 pt-14 pb-28 px-3 md:px-8 h-auto">
        <div className="container mx-auto max-w-full">
        </div>
      </div>
      <div className="px-3 md:px-8 h-auto -mt-24">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 px-4 mb-16">
            <DataTableFacturas />
          </div>
        </div>
      </div>
    </>
  )
}

export default FacturasAdm