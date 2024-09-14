import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Rekomendo">
    <Container display={{ md: 'column' }} marginTop={{ md: 5 }}>
      <Title>
        Rekomendo <Badge>2024</Badge>
      </Title>
      <P>
        O Rekomendo é um aplicativo voltado para facilitar a conexão entre clientes e prestadores de serviços em sua região. Com ele, o usuário pode encontrar facilmente profissionais qualificados para resolver diversos tipos de problemas, como serviços de manutenção, cuidados pessoais, reformas e outros. O app permite filtrar prestadores por localização, visualizar avaliações e solicitar serviços diretamente pela plataforma, oferecendo uma solução prática e rápida para as necessidades cotidianas
      </P>
      <List ml={4} my={4}>
        {/* <ListItem>
          <Meta>Website</Meta>
          <Link href="https://rekomendo.com.br/home">
            https://rekomendo.com.br/home <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem> */}
        <ListItem>
          <Meta>Sistema (Online)</Meta>
          <Link href="https://rekomendo.com.br/home">
            https://rekomendo.com.br/home <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Plataformas</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stacks</Meta>
          <span>Angular, Ionic, Node.js, Firebase</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/rekomendo-1.png" alt="Rekomendo" />
      <WorkImage src="/images/works/rekomendo-2.png" alt="Rekomendo" />
      <WorkImage src="/images/works/rekomendo-3.png" alt="Rekomendo" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'