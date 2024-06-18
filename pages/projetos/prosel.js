import {
  Container,
  Badge,
  List,
  Link,
  ListItem,
} from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Prosel">
    <Container display={{ md: 'column' }} marginTop={{ md: 5 }}>
      <Title>
        Prosel <Badge>2024</Badge>
      </Title>
      <P>
        O Hospital Geral Clériston Andrade reconhece a importância de aprimorar o transporte de pacientes dentro da instituição, visando oferecer um serviço mais eficiente e seguro aos usuários. Para atender a essa necessidade, surge a demanda por um sistema que possa facilitar e otimizar as atividades dos maqueiros, responsáveis pelo transporte dos pacientes
        <br></br>
        <br></br>
        Usuários:
        <br></br>
        <br></br>
        Usuário: admin | Senha: 123
        <br></br>
        Usuário: rafa | Senha: 123
        <br></br>
        Usuário: pietra | Senha: 123
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Plataformas</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stacks</Meta>
          <span>Vue.js, Node.js, Express, Docker, MySQL</span>
        </ListItem>
        <ListItem>
          <Meta>Sistema (Online)</Meta>
          <Link href="https://prosel.vercel.app">
          https://prosel.vercel.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Código</Meta>
          <Link href="https://github.com/jxhnlcs/fullstack_transport-request">
          https://github.com/jxhnlcs/fullstack_transport-request <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/prosel-1.png" alt="prosel" />
      <WorkImage src="/images/works/prosel-2.png" alt="prosel" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
