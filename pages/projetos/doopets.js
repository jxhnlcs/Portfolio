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
  <Layout title="Doo Pets">
    <Container display={{ md: 'column' }} marginTop={{ md: 5 }}>
      <Title>
        Doo Pets <Badge>2023</Badge>
      </Title>
      <P>
        O Doo Pets é um sistema de gerenciamento completo e intuitivo de petshop desenvolvido como trabalho de conclusão de curso para o curso de Desenvolvimento de Sistemas do SENAI. No sistema é possível fazer agendamentos de banhos, tosas ou outros serviços destinados aos pets dos clientes, além de um frente de caixa dinâmico que aceita várias formas de pagamento. Para finalizar o sistema tem CRUDS para gerenciamento completo de clientes, funcionários, pets, estoque, fornecedores, serviços e produtos
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://doopets.vercel.app/">
            https://doopets.vercel.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Sistema (Online)</Meta>
          <Link href="https://doo-pets.vercel.app/">
            https://doo-pets.vercel.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Código</Meta>
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
