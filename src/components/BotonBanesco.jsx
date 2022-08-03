import React from 'react'
import { logoBanesco } from '../assets/img/logoBanesco';

const BotonBanesco = ({ onclick }) => {

  return (
      <img style={{maxWidth: '180px', margin: '10px'}} src={logoBanesco} alt="logoBanesco" onClick={onclick} />
  )
}

export default BotonBanesco