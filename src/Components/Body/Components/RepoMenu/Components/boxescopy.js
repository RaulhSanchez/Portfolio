import React, { useEffect, useState } from 'react'
import APICosumer from '../../../../../Services/APIConsumer'
import { LanguajeColor } from '../../complements/complements'



const Boxes = (e) => {
    
    const [data, setdata]= useState([])
    const [color,setColor]=useState(LanguajeColor)
    
    const handleChange = async () => {
        const res = await APICosumer.getBoxesData();
        setdata( res.file)
    }

    
    useEffect(()=>{
        handleChange();
        
        
    },[])

    return data.map((datos)=>{

        return(
            <>
            <div className="containerAll">
                <div className="spanContainer">
                    <div className="updateContainer">
                        <div className='lenguajeContainer'>  
                            <div id='languaje' className={datos.languaje === 'NestJs'  ? 'color2' : 'color'}></div>
                        </div>
                    </div>
                </div>   
            </div>
        </>
        )
      })
    
}

export default Boxes