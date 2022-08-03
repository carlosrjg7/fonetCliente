
const Alerta = ({msg, errorAlert}) => {
  return (
    <div className={`${errorAlert ? 'bg-gradient-to-br from-red-400 to-red-600' : 'bg-gradient-to-br from-light-blue-500 to-light-blue-700' } text-center p-3 rounded-xl uppercase text-white font-bold text-sm my-2`}>
      { msg }
    </div>
  )
}

export default Alerta