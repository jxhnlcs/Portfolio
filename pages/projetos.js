import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbDoopets from '../public/images/works/doopets_eyecatch.png'
import thumbTecer from '../public/images/works/tecer_eyecatch.png'
import thumbAcougue from '../public/images/works/acougue_eyecatch.png'
import thumbProsel from '../public/images/works/prosel_eyecatch.png'
import thumbBuzzu from '../public/images/works/buzzu_eyecatch.png'

const Projetos = () => (
  <Layout title="Projetos">
    <Container display={{ md: 'column' }} marginTop={{ md: 10 }}>
      <Heading as="h3" fontSize={20} mb={4}>
        Jobs
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="tecer"
            title="Tecer Gestão e Aplicativo"
            thumbnail={thumbTecer}
          >
            Sistema de gestão e aplicativo com o uso destinado aos clientes para a empresa Tecer Consultoria
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="acougue" title="Açougue São Roque" thumbnail={thumbAcougue}>
            Tela de exibição de valores das carnes destinada aos açougues das filiais da São Roque.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>
          Pessoais
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="doopets" title="Doo Pets" thumbnail={thumbDoopets}>
            Um sistema de gerenciamento de petshop desenvolvido como TCC para o curso de Desenvolvimento de Sistemas do SENAI
          </WorkGridItem>
        </Section>

        <Section delay={0.3}>
          <WorkGridItem id="prosel" title="Prosel" thumbnail={thumbProsel}>
            Um sistema que possa facilitar e otimizar as atividades dos maqueiros, responsáveis pelo transporte dos pacientes em um Hospital
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>
          Colaborações
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="buzzu" thumbnail={thumbBuzzu} title="Buzzu">
            Aplicativo de Transporte Público
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Projetos
export { getServerSideProps } from '../components/chakra'
