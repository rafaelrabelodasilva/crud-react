import PageTitulo from "../../components/PageTitulo/PageTitulo"
import {

} from './styles'

export default function ConfPage() {

  return (
    <>
      <PageTitulo>Configuração</PageTitulo>
      <br />
      <label>
        <input 
          type="checkbox" 
          name="myCheckbox" 
        />
        Modo dark
      </label>
    </>
  )
}
