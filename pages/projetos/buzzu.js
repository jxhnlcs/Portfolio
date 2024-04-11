import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Buzzu">
    <Container>
      <Title>
        Buzzu <Badge>2023</Badge>
      </Title>
      <P>
        O Buzzu é uma ideia que foi pensada para o hackathon cidades inteligentes Feira de Santana realizado pelo SEBRAE. o Buzzu é um Aplicativo de Transporte Público que tem como objetivo ajudar os cidadões da cidade a localizar os ônibus e pontos de ônibus para chegar aos seus destinos e acompanhar as viagens
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Plataformas</Meta>
          <span>iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stacks</Meta>
          <span>React Native</span>
        </ListItem>
        <ListItem>
          <Meta>Prótotipo</Meta>
          <Link href="https://www.figma.com/file/L00uONICPdqklqPqVEpZy5/Buzzu?type=design&node-id=0%3A1&mode=design&t=YN6MjDwJi77ixpFi-1">
            Figma <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Código</Meta>
          <Link href="https://github.com/jxhnlcs/buzzu_app">
            https://github.com/jxhnlcs/buzzu_app <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/buzzu-1.png" alt="Buzzu" />
      <WorkImage src="/images/works/buzzu-2.png" alt="Buzzu" />
      <WorkImage src="/images/works/buzzu-3.png" alt="Buzzu" />
      <WorkImage src="/images/works/buzzu-4.png" alt="Buzzu" />
      <WorkImage src="/images/works/buzzu-5.png" alt="Buzzu" />
      <WorkImage src="/images/works/buzzu-6.png" alt="Buzzu" />
      <WorkImage src="/images/works/buzzu-7.png" alt="Buzzu" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
