export const iniciales = (name, lastname) =>{
  const first = name.charAt(0);
  const second = lastname.charAt(0);

  return `${first}${second}`;
}

export const localmoney = (monto) => {

  return `${parseFloat(monto).toLocaleString("en")}`;
}

export const numeralFormat = (monto) => {
  return new Intl.NumberFormat("EN-US",{ style: 'currency', currency: 'USD', minimumFractionDigits: 2 }).format(monto)
}

export const filterArray = (item, array) => {

  const resp = array.filter( arr => arr.id === item.id)
  
  console.log('filterResp', resp);

  if(resp.length > 0){ 
    return true
  }else{
    return false
  }

}

const tipoPago = (topay) =>{

  if(topay.length > 1){
    return 'M'
  }else{
    return 'S'
  }

}

const totalFacts = topay => {

  let monto = 0;

  console.log(topay);

  if(topay.length > 1){

    topay.map((item) => (
      monto+= parseFloat(item.total)
    ))

  }else{
    monto = topay[0].total
  }

  return monto
}

const detalleFacts = topay => {
  let detalle;

  if(topay.length > 1){

    detalle = `Pago de multiples facturas:  ${idFacturasMulti(topay).join(',')}` 

  }else{
    detalle = "Pago de factura unica"
  }

  return detalle
}

const idFacturasMulti = topay => {
  let idsFacts = [];

  if(topay.length > 1){

    topay.map((item) => (
      idsFacts.push(item.id)
    ))

  }else{
    idsFacts.push(topay[0].id)
  }

  return idsFacts
}

export const datospagoHelp = topay => {
  const tipo = tipoPago(topay)
  const total = totalFacts(topay)
  const detalle = detalleFacts(topay)
  const factIds = idFacturasMulti(topay)

  return { 
    tipo,
    total,
    detalle,
    factIds,
  }
}
