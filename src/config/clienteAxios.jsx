import axios from "axios";

const clienteAxios = axios.create({
  baseURL: `${process.env.REACT_APP_URL_BACKEND}/api`
})

export default clienteAxios;