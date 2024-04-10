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
  <Layout title="Tecer">
    <Container Container display={{ md: 'column' }} marginTop={{ md: 5 }}>
      <Title>
        Tecer Gestão <Badge>2023</Badge>
      </Title>
      <P>
        Esse projeto foi fruto do meu primeiro freelancer desenvolvido para a empresa Tecer, no qual desenvolvi um sistema de gestão de funcionários e clientes e também e um aplicativo de consulta de documentos para os clientes
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/jxhnlcs/docpower-web">
          https://github.com/jxhnlcs/docpower-web <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/jxhnlcs/docpower-mobile">
          https://github.com/jxhnlcs/docpower-mobile <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Vue.js, Node.js, React Native, AWS</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/tecer-1.jpg" alt="tecer" />
      <WorkImage src="/images/works/tecer-2.jpg" alt="tecer" />
      <WorkImage src="/images/works/tecer-3.jpg" alt="tecer" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
