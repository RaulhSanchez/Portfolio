import BodyMenu from "../Components/Body/Components/BodyMenu/BodyMenu"
import LeftMenu from "../Components/Body/Components/TopMenu/LeftMenu"
import BodyStatickMenu from "../Components/Body/Container/Body"
import HeaderContainer from "../Components/Header/Container/HeaderContainer"
import './style.css'


const HomePage = () => {

    return(
       <div className="Prueba">
            <HeaderContainer/>
            <BodyStatickMenu />
            <LeftMenu />
            <BodyMenu />
        </div>
        
    )
}

export default HomePage