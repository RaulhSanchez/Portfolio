import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
import './style.css'
import DinamicButton from "./boton";

const TopMenu = () => {
    
    const navigate = useNavigate()
    
    const homeButton = () => {navigate('/')}
    const repoButton = () => {navigate('/repository')}
    
     const handleClick = () => {
        console.log('this is:', );
      };

    

    return(
        <div className="containerTop">
            <div className="containerTop2">
                <div className='top'>
                    <DinamicButton />
                </div>
            </div>
        </div>
    )
}

export default TopMenu