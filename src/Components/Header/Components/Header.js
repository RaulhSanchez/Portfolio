import {useNavigate} from "react-router-dom";
import './style.css'


const Header = () => {

    const navigate = useNavigate();
    const homeButton = () => {navigate('/')}
    

    return(        
        <div id="headerMain">
            <div id="header">
                <img className="ImageGithubHeader"src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"></img>
                <input className="searchHeader" type="search" placeholder='Search or jum to..'/>
                <input className="headerText" type="submit" value="Contact"/>
                <input className="headerText" onClick={homeButton} type="submit" value="Home"/>
                <input className="headerText" type="submit" value="Projects"/>
                <input className="headerText" type="submit" value="Experience"/>
            </div>     
            <div className="div2">               
                <img className="ImageAlertHeader"src="https://cdn-icons-png.flaticon.com/512/3602/3602145.png"></img>
                <select className="selectHeader" >
                    <option selected>+</option>    
                </select>
                <div className="SelecProfileHeader">
                    <div>
                        <input className="ProfileDetails"type="image" src="https://avatars.githubusercontent.com/u/79832399?v=4"></input>
                        <select className="ImageDeployHeader"type="image"src="https://cdn-icons-png.flaticon.com/512/25/25243.png">
                        </select>
                    </div>
                </div>
            </div>     
        </div>
    )
}

export default Header