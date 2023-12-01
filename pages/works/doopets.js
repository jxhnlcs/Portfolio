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
  <Layout title="DooPets">
    <Container display={{ md: 'column' }} marginTop={{ md: 5 }}>
      <Title>
        Doo Pets <Badge>2023</Badge>
      </Title>
      <P>
      O Doo Pets é um sistema de gerenciamento completo e intuitivo desenvolvido como trabalho de conclusão de curso para o curso de Desenvolvimento de Sistemas do SENAI.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://doo-pets.vercel.app/">
          https://doo-pets.vercel.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/jxhnlcs/DooPets">
          https://github.com/jxhnlcs/DooPets <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Video</Meta>
          <Link href="https://www.linkedin.com/posts/john-lucas-a23880208_ol%C3%A1-rede-no-dia-2906-apresentei-meu-tcc-activity-7080582167394697216-iDqv?utm_source=share&utm_medium=member_desktop">
          https://www.linkedin.com/posts/video <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Plataformas</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stacks</Meta>
          <span>Vue.js, Slim Framework, MySQL</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/doopets-1.png" alt="Doopets" />
      <WorkImage src="/images/works/doopets-2.png" alt="Doopets" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
