import RepoMenu from "../Components/Body/Components/RepoMenu/RepoMenu"
import LeftMenu from "../Components/Body/Components/TopMenu/LeftMenu"
import TopMenu from "../Components/Body/Components/TopMenu/TopMenu"
import HeaderContainer from "../Components/Header/Container/HeaderContainer"


const RepositoryPage = () => {
            
    return(
        <div>
            <HeaderContainer/>
            <TopMenu />
            <LeftMenu />
            <RepoMenu />
        </div>
    )
}

export default RepositoryPage