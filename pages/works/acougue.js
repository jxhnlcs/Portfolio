import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Açougue São Roque">
    <Container display={{ md: 'column' }} marginTop={{ md: 5 }}>
      <Title>
        Açougue São Roque <Badge>2023</Badge>
      </Title>
      <P>
        Na minha curta passagem pelo Grupo São Roque desempenhei um papel fundamental no desenvolvimento da solução da tela de exibição de valores das carnes destinada aos açougues das filiais da São Roque.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Vue.js, Node.js, TypeScript, Oracle Database</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/acougue-1.png" alt="acougue" />
      <WorkImage src="/images/works/acougue.jpg" alt="acougue" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
