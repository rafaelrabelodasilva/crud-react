import PageTitulo from '../../components/PageTitulo/PageTitulo'
import CardDetalhes from '../../components/CardDetalhes/CardDetalhes'
import {
  CardContainer,
  TituloCard,
  InformacaoCard
} from './styles'

const dadosCard = [
  { titulo: "Pets cadastrados", informacao: "26" },
  { titulo: "Pets excluídos", informacao: "7" }
];

export default function Dashboard() {
  return (
    <>
      <PageTitulo>Dashboard</PageTitulo>
      <CardContainer>
        {dadosCard.map(card => (
          <CardDetalhes>
            <>
              <TituloCard key={card.titulo}>
                {card.titulo}
              </TituloCard>
              <InformacaoCard>
                {card.informacao}
              </InformacaoCard>
            </>
          </CardDetalhes>
        ))}
      </CardContainer>
    </>
  )
}
