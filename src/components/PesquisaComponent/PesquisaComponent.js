import {
  Container,
  Input,
  Img
} from './styles'
import SeachIcon from '../../assets/search_icon.svg'

export default function PesquisaComponent() {
  return (
    <Container>
      <Input type="text" placeholder="Pesquise aqui"/>
      <Img src={SeachIcon}/>
    </Container>
  )
}
