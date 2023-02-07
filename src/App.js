import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Container/homePage';
import RepositoryPage from './Container/RepositoryPage';
import HeaderContainer from './Components/Header/Container/HeaderContainer';
import TopMenu from './Components/Body/Components/TopMenu/TopMenu';
import ExperienceMenu from './Components/Body/Components/ExperienceMenu/ExperienceMenu';
import './index.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <HeaderContainer/>
      <TopMenu />
        <Routes>
          <Route path='' element={<HomePage />} />
          <Route path='repository' element={<RepositoryPage />} />
          <Route path='experience' element={<ExperienceMenu />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
