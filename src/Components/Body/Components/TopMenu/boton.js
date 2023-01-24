import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'
import Elementos from '../complements/complements'
import './style.css'

const DinamicButton = () => {

    const navigate = useNavigate()
    
    const [active, setActive] = useState(false);
    const x = {active:false}
    
    const change = async (e) => {
        const homeButton = () => {navigate('/')};
        const repoButton = () => {navigate('/repository')};
        const boton = await e 
        if(boton.target.id === 'Description'){
            homeButton()
            
            boton.target.classList.add(`${Elementos.clases[1]}`)
            return i
            // boton.target.classList.add(`${Elementos.clases[1]}`)            
        }
        if(boton.target.id === 'Repositories'){
            repoButton();                
            boton.target.classList.add(Elementos.clases[1])
        }
       
    };
    

    const activateButton = (x) => {
        

    }
    useEffect(()=>{
        const i = {x:true}
        activateButton(i)
    },[])
    return Elementos.titulos.map((titulo)=>{
        if(x.active !== false ){
            return React.createElement('button',{
                className:`${Elementos.clases[1]}`,
                id:`${titulo}`,
                type:'button',
                onClick:(e)=>{activateButton(e),change(e)}
            },`${titulo}`);
        }else{
            return React.createElement('button',{
                className:`${Elementos.clases[0]}`,
                id:`${titulo}`,
                type:'button',
                onClick:(e)=>{change(e)}
            },`${titulo}`);

        }
            

       
        
    })            
};
export default DinamicButton
