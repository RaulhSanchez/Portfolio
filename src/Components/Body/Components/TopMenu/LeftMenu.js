import './style.css'

const a = () => {
    alert('a')
}
const LeftMenu = () => {
    return(
        <div className="containerLeft">
                <img className="ImagenPerfil" src="https://avatars.githubusercontent.com/u/79832399?s=400&u=548ead46466daa050d9cd28c3ff6fc7efea4fae7&v=4" alt="imagenPerfil"></img>
                <span className='spanName'> Raúl Huete sanchez</span>
                <span className='spanUserName'> RaulhSanchez</span>
                <button onClick={a} className='buttonProfile'> Perfil </button>
                <span className="textBodyMenuLeft"> <img className="ImageDescription" src="https://cdn-icons-png.flaticon.com/512/613/613167.png"></img>  Academia GeeksHubs</span>
                <span className="textBodyMenuLeft"> <img className="ImageDescription" src="https://cdn-icons-png.flaticon.com/512/613/613167.png"></img>  Madrid</span>
                <span className="textBodyMenuLeft"> <img className="ImageDescription" src="https://cdn-icons-png.flaticon.com/512/613/613167.png"></img>  https://www.linkedin.com/en/raul-huete-sánchez/ afsadsfdsdsf</span>
            </div>
    )
}

export default LeftMenu