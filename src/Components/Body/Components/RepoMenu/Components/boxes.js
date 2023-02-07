import React, { useEffect, useState } from 'react'
import APICosumer from '../../../../../Services/APIConsumer'
import { LanguajeColor } from '../../complements/complements'



const Boxes = () => {
    
    const [data, setdata]= useState([])
    const [color,setColor]=useState(LanguajeColor)
    
    const handleChange = async (e) => {
        const res = await APICosumer.getBoxesData();
        setdata( res.file)
    }
    
    useEffect(()=>{
        handleChange()
    },[])



    return data.map((datos)=>{
        return(
            <>
                <div className="containerAll">
                    <div className="spanContainer">
                        <div className="titleContainer">
                            <a target="_blank" href='https://github.com/RaulhSanchez/Front_Veterinary/blob/master/src/Services/apiConsumer.js'>
                                <span href='' className='valuesTitle'>{datos.title}</span>
                            </a>
                            <div>
                                <span className='valuesPublic'>{datos.state}</span>
                            </div>
                        </div>
                        <div className="updateContainer">
                            <div className='lenguajeContainer'>  
                                <div id='languaje' className={datos.languaje === 'NestJs'  ? 'color2' : 'color'}></div>
                                    <span id='languajeSpan' className='valuesLanguaje'>{datos.languaje}</span>
                                </div>
                            <div>
                                <span className='valueslUpdate'>{datos.update}</span>
                            </div>
                        </div>
                    </div>   
                    <div className="controlContainer">
                        <span className='valueslUpdate'>dfdsfs</span>
                        <span className='valueslUpdate'>fsdsdfsd</span>
                    </div>
                </div>
            </>
        )
      })
    
}

export default Boxes