import Dashboard from './pages/Dashboard/Dashboard';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import MenuBar from './components/MenuBar/MenuBar';
import PetsPage from './pages/PetsPage/PetsPage'
import ConfPage from './pages/ConfPage/ConfPage'
import AjudaPage from './pages/AjudaPage/AjudaPage'
import SairPage from './pages/SairPage/SairPage';

import styled from "styled-components";

const MenuComponent = styled.div`
  max-height: 100vh;

  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(10, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

const ConteudoComponent = styled.div`
  grid-area: 1 / 2 / 11 / 8; 
  padding: 10px;
`;

function App() {
  return (

    <MenuComponent>
      <Router>
      <MenuBar />
      <ConteudoComponent>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path='/pets' element={<PetsPage />} />
          <Route path='/configuracoes' element={<ConfPage />} />
          <Route path='/ajuda' element={<AjudaPage />} />
          <Route path='/sair' element={<SairPage />} />
        </Routes>
      </ConteudoComponent>
      </Router>
    </MenuComponent>
  );
}

export default App;
