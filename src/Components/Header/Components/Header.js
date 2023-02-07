import {useNavigate} from "react-router-dom";
import './style.css'


const Header = () => {

    const navigate = useNavigate();
    const homeButton = () => {navigate('/')}
    const expecienceButton = () => {navigate('/experience')}
    

    return(        
        <div id="headerMain">
            <div id="header">
                <img className="ImageGithubHeader"src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"></img>
                <input className="searchHeader" type="search" placeholder='Search or jum to..'/>
                <a>
                    <input className="headerText" onClick={homeButton} type="submit" value="Home"/>
                </a>
                <a>
                    <input className="headerText" onClick={expecienceButton} type="submit" value="Experience"/>
                </a>
                <a target="_blank" href='https://github.com/RaulhSanchez?tab=repositories'>
                    <input className="headerText" type="button" value="Projects" />
                </a>
            </div>     
            <div className="div2">               
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