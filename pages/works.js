import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbDoopets from '../public/images/works/doopets_eyecatch.png'
import thumbTecer from '../public/images/works/tecer_eyecatch.png'
import thumbEkko from '../public/images/works/ekko_eyecatch.png'
import thumbSheila from '../public/images/works/sheila_eyecatch.png'
import thumbMargelo from '../public/images/works/margelo_eyecatch.png'
import thumbModeTokyo from '../public/images/works/modetokyo_eyecatch.png'
import thumbStyly from '../public/images/works/styly_eyecatch.png'
import thumbPichu2 from '../public/images/works/pichu2_eyecatch.png'
import thumbFreeDBTagger from '../public/images/works/freedbtagger_eyecatch.png'
import thumbAmembo from '../public/images/works/amembo_eyecatch.png'

const Works = () => (
  <Layout title="Projetos">
    <Container display={{ md: 'column' }} marginTop={{ md: 10 }}>
      <Heading as="h3" fontSize={20} mb={4}>
        Jobs
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="doopets" title="Doo Pets" thumbnail={thumbDoopets}>
            Um sistema de gerenciamento de petshop desenvolvido como TCC para o curso de Desenvolvimento de Sistemas do SENAI
          </WorkGridItem>
        </Section>
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
          <WorkGridItem
            id="fourpainters"
            title="Açougue São Roque"
            thumbnail={thumbEkko}
          >
            Landing Page para a minha startup, a Ekko Sistemas
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="menkiki" thumbnail={thumbSheila} title="Salão da Sheila">
            Landing Page para o desafio do Hackathon Órbita 2023
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
          <WorkGridItem id="margelo" thumbnail={thumbMargelo} title="Margelo">
            A website of the elite app development and contracting agency based
            in Austria
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="modetokyo"
            thumbnail={thumbModeTokyo}
            title="mode.tokyo"
          >
            The mode magazine for understanding to personally enjoy Japan
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="styly" thumbnail={thumbStyly} title="Styly">
            A VR Creative tools for fashion brands
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
          <WorkGridItem id="pichu2" thumbnail={thumbPichu2} title="Pichu*Pichu">
            Twitter client app for iPhone Safari
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id="freedbtagger"
            thumbnail={thumbFreeDBTagger}
            title="freeDBTagger"
          >
            Automatic audio file tagging tool using FreeDB for Windows
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem id="amembo" thumbnail={thumbAmembo} title="Amembo">
            P2P private file sharing tool with MSN Messenger integration for
            Windows
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
