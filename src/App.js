import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css'
import HomePage from './Container/homePage';
import RepositoryPage from './Container/RepositoryPage';
import HeaderContainer from './Components/Header/Container/HeaderContainer';
import TopMenu from './Components/Body/Components/TopMenu/TopMenu';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <HeaderContainer/>
      <TopMenu />
        <Routes>
          <Route path='' element={<HomePage />} />
          <Route path='repository' element={<RepositoryPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
