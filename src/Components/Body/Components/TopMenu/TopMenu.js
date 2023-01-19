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
                    <button onClick={homeButton} className="textBodyMenuSelected" type="submit">Desciption</button>
                    <img className="ImageDescription" src="https://cdn-icons-png.flaticon.com/512/5831/5831763.png" alt="Repositorios"></img> 
                    <button onClick={repoButton} className="textBodyMenu" type="submit">Repositories</button> 
                    <img className="ImageDescription" src="https://cdn-icons-png.flaticon.com/512/4844/4844346.png" alt="Proyectos"></img> 
                    <button  className="textBodyMenu" type="submit">Projects</button>
                    <img className="ImageDescription" src="https://cdn-icons-png.flaticon.com/512/5667/5667299.png" alt="Linkedin"></img> 
                    <a target="_blank" href=''>
                        <button  className="textBodyMenu" type="submit">Experience</button>
                    </a>
                    <img className="ImageDescription" src="https://cdn-icons-png.flaticon.com/512/159/159832.png" alt="Contacto"></img> 
                    <button  className="textBodyMenu" type="submit">Contacto</button>
                </div>
            </div>
        </div>
    )
}

export default TopMenu