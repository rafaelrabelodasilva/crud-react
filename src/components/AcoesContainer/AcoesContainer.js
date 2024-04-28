import {
  Container
} from './styles'
import PesquisaComponent from '../PesquisaComponent/PesquisaComponent'
import { Button } from '../NovoBtn/styles'

export default function AcoesContainer( children ) {
  return (
    <Container>
      <PesquisaComponent />
      <Button>Novo</Button>
    </Container>
  )
}
