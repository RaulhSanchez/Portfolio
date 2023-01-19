import {useNavigate} from 'react-router-dom'
import './style.css'

const TopMenu = () => {
    
    const navigate = useNavigate()
    
    const homeButton = () => {navigate('/')}
    const repoButton = () => {navigate('/repository')}


    return(
        <div className="containerTop">
            <div className="containerTop2">
                <div className='top'>
                    <img className="ImageDescription" src="https://cdn-icons-png.flaticon.com/512/613/613167.png" alt="Descripción"></img> 
                    <button onClick={homeButton} className="textBodyMenuSelected" type="submit">Descipción</button>
                    <img className="ImageDescription" src="https://cdn-icons-png.flaticon.com/512/5831/5831763.png" alt="Repositorios"></img> 
                    <button onClick={repoButton} className="textBodyMenu" type="submit">Repositorios</button> 
                    <img className="ImageDescription" src="https://cdn-icons-png.flaticon.com/512/4844/4844346.png" alt="Proyectos"></img> 
                    <button  className="textBodyMenu" type="submit">Proyectos</button>
                    <img className="ImageDescription" src="https://cdn-icons-png.flaticon.com/512/1384/1384030.png" alt="Linkedin"></img> 
                    <button  className="textBodyMenu" type="submit">Linkedin</button>
                    <img className="ImageDescription" src="https://cdn-icons-png.flaticon.com/512/159/159832.png" alt="Contacto"></img> 
                    <button  className="textBodyMenu" type="submit">Contacto</button>
                </div>
            </div>
            {/* <div className="line"></div> */}
        </div>
    )
}

export default TopMenu