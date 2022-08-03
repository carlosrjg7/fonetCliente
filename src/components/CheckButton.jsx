import React, { useContext, useState } from 'react'
import { FacturasContext } from '../context/FacturasProvider';
import { Checkbox } from "@material-tailwind/react";

const CheckButton = ({ id }) => {

    const [checked, setChecked] = useState(false);

    const { topay, setTopay } = useContext(FacturasContext);

    const handleCheck = (e) =>{

        setChecked(e.target.checked)

        let id = e.target.value;
            if(!checked){
                if(!topay.includes()) 
                    setTopay([...topay, id])
            }else{
                let newTopay = topay.filter( item => item !== id)
                setTopay(newTopay);
            }
    }

  return (
    <>
    <Checkbox 
        size='sm'
        color={ checked ? 'green' : 'grey' }
        type="checkbox"
        name="checkFact"
        value={id}
        className="whitespace-nowrap flex gap-1 items-center focus:outline-none shadow-none flex-row-reverse"
        onChange={handleCheck}
        />
    </>

  )
}

export default CheckButton