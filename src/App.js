import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css'
import HomePage from './Container/homePage';
import RepositoryPage from './Container/RepositoryPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='' element={<HomePage />} />
          <Route path='repository' element={<RepositoryPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
