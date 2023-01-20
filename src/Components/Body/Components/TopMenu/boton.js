import React from 'react';
import {useNavigate} from 'react-router-dom'
import styled from "styled-components";
import './style.css'



const PrettyButton = styled.button`
    border: none;
    margin-right: 1em;
    cursor: pointer;
    font-size:.9em;
    font-weight: bold;
    background: none;
    color: rgba(212, 212, 212, 0.889);
    ::before{
        content: '';
        border-bottom: .2em solid rgb(255, 140, 0);
        border-radius: .2em;
        padding: 0 3em;
        position: absolute;
        bottom: -1.7em;
        margin: 0 auto;
        width: 0;
        transition: 0.3s;
    }
`;


const Button = (e) => {
    const navigate = useNavigate()
    
    const botonDescription =[
        {
            title:'Description' 
        },
        {
            title:'Repositories'
        },
        {
            title:'Projects'
        }
        ,
        {
            title:'Experience'
        },
        {
            title:'Contact'
        },
    ];
    
    const funciona= () =>{
        botonDescription.map((boton)=>{
            if(boton.title === 'Description'){console.log('descripcion')}
        })
    };
    const homeButton = () => {navigate('/')}
    const repoButton = () => {navigate('/repository')}

    return botonDescription.map((boton)=>{
        return React.createElement('button',{
            className:'textBodyMenuSelected',
            onClick:()=>{
                if(boton.title === 'Description'){homeButton()}
                if(boton.title === 'Repositories'){repoButton()}
            }
        },`${boton.title}`);
    })

            
};

export default Button
