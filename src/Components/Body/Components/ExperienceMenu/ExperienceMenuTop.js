import './style.css'

const ExperienceMenuTop = () => {


    return (
        <div className="mainTopMenu">
            <div className='divisonMain'>
                <div className="top-divison1">
                    <img className="ImagenPerfilTopMenu" src="https://avatars.githubusercontent.com/u/79832399?s=400&u=548ead46466daa050d9cd28c3ff6fc7efea4fae7&v=4" alt="imagenPerfil"></img>
                    <span>RaulHueteSanchez - Expercience</span>
                </div>
                <div className="top-divison2">
                    <span>latest commit 66ef4b9 last week</span>
                    <span style={{marginLeft:'1em'}}>Histoy</span>
                </div>
            </div>
            <div className="botton-division">
                <span  >1 Contributor</span>
            </div>
 
        </div>
    )
}


export default ExperienceMenuTop