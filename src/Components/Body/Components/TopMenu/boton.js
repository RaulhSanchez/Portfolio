import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'
import { titulos,clases } from '../complements/complements';
import './style.css'

const DinamicButton = () => {

    const navigate = useNavigate()
    const [active, setActive] = useState(true);
    
    const change =  (e) => {
        const homeButton = () => {navigate('/')};
        const repoButton = () => {navigate('/repository')};
        const experienceoButton = () => {navigate('/experience')};

        const boton =  e.target.id
        console.log(e.target)
        if(boton === 'Description'){
            setActive(!active)
            homeButton()     
            
            
        }

        if(boton === 'Repositories'){

            repoButton();    
            console.log(active)
        
           
        }
        if(boton === 'Experience'){
            experienceoButton();                
        }   

    };


    return titulos.map((titulo)=>{
           return(
           <button 
                id={`${titulo}`} 
                type='buton' 
                className={ 'textBodyMenu'
                    } 
                onClick={(e)=>change(e)}
            >
                {titulo}
            </button>
           )
        }        
    )            
};
export default DinamicButton
