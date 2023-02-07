import './style.css'

const a = () => {
    
}
const LeftMenu = () => {
    return(
        <div className="containerLeft">
                <img className="ImagenPerfil" src="https://avatars.githubusercontent.com/u/79832399?s=400&u=548ead46466daa050d9cd28c3ff6fc7efea4fae7&v=4" alt="imagenPerfil"></img>
                <span className='spanName'> Raúl Huete sanchez</span>
                <span className='spanUserName'> RaulhSanchez</span>
                <button onClick={a} className='buttonProfile'> Perfil </button>
                <span className="textBodyMenuLeft"> <img className="ImageDescription" src="https://cdn-icons-png.flaticon.com/128/3313/3313480.png"></img>  Academia GeeksHubs</span>
                <span className="textBodyMenuLeft"> <img className="ImageDescription" src="https://cdn-icons-png.flaticon.com/128/3421/3421853.png"></img>  Madrid</span>
                <a target="_blank" href='https://www.linkedin.com/in/ra%C3%BAl-huete-s%C3%A1nchez/'>
                    <span className="textBodyMenuLeft"> <img className="ImageDescription" src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"></img>  https://www.linkedin.com/en/raul-huete-sánchez/ afsadsfdsdsf</span>
                </a>
            </div>
    )
}

export default LeftMenu