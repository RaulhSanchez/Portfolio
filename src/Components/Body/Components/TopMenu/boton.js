import React from 'react';
import {useNavigate} from 'react-router-dom'
import './style.css'

const DinamicButton = (e) => {
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

    const ChangeMenu = (e) =>{
        const homeButton = () => {navigate('/')};
        const repoButton = () => {navigate('/repository')};
        if(e.target.id === 'Description')homeButton();
        if(e.target.id === 'Repositories')repoButton();
    }
 
    return botonDescription.map((boton)=>{
        return React.createElement('button',{
            className:'textBodyMenuSelected',
            id:`${boton.title}`,
            onClick:(e)=>{ChangeMenu(e)}
        },`${boton.title}`);
    })
            
};

export default DinamicButton
