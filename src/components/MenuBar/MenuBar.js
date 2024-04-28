import {
  SideBar,
  SideBarTop,
  SideBarMiddle,
  SideBarBottom
} from './styles';
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';

const opcoesMenu = [
  { nome: "Dashboard", rota: "/dashboard" },
  { nome: "Meus pets", rota: "/pets" },
  { nome: "Configurações", rota: "/configuracoes" },
  { nome: "Ajuda", rota: "/ajuda" }
];

export default function MenuBar() {
  return (
    <SideBar>
      <SideBarTop>
        <img src={Logo} width={100} alt='Logo da aplicação' />
      </SideBarTop>
      <SideBarMiddle>
        <ul>
          {opcoesMenu.map(menu => (
            <li key={menu.nome}>
              <Link to={menu.rota}>{menu.nome}</Link>
            </li>
          ))}
        </ul>
      </SideBarMiddle>
      <SideBarBottom>
        <a href='/sair'>Sair</a>
      </SideBarBottom>
    </SideBar>
  )
}
