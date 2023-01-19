import BodyMenu from "../Components/Body/Components/BodyMenu/BodyMenu"
import RepoMenu from "../Components/Body/Components/RepoMenu/RepoMenu"
import LeftMenu from "../Components/Body/Components/TopMenu/LeftMenu"
import BodyStatickMenu from "../Components/Body/Container/Body"
import HeaderContainer from "../Components/Header/Container/HeaderContainer"


const RepositoryPage = () => {
            
    return(
        <div>
            <HeaderContainer/>
            <BodyStatickMenu />
            <LeftMenu />
            <RepoMenu />
        </div>
    )
}

export default RepositoryPage