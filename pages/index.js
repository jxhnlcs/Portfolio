import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon} from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import {IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>

      <Box display={{ md: 'flex' }} marginTop={{ md: 10 }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            John Lucas
          </Heading>
          <p>Desenvolvedor Web</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/john.jpeg"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Tecnologias: Vue, Angular, React, Next, Nuxt, Node, Express!
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Resumo
        </Heading>
        <Paragraph>
          John é um Desenvolvedor Web que gosta de desenvolver
          vários tipos de soluções e sistemas para quaisquer empresas ou clientes
          no intuito de solucionar problemas da vida real em forma de código. Atualmente ele
          vive no Brasil e adora fazer novas conexões para se sentir dentro da comunidade.
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/projetos"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            Meus projetos
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>Atual</BioYear>
          Desenvolvedor Front-End Pleno na AgMind
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          Desenvolvedor Full Stack no Grupo São Roque - Set/Nov
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          Ingressou no curso superior em Análise e Desenvolvimento de Sistemas na UNIFAN -
          Centro Universitário Nobre
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          Concluiu o curso de Desenvolvimento de Sistemas SENAI
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Ingressou no curso técnico de Desenvolvimento de Sistemas SENAI.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          ♥
        </Heading>
        <Paragraph>
          Anime, Música, Jogos, Piano, Mangá e Gatos
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Minhas redes
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/jxhnlcs" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @jxhnlcs
              </Button>
            </Link>
          </ListItem>

          <ListItem>
            <Link href="https://www.linkedin.com/in/john-lucas-a23880208/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                John Lucas
              </Button>
            </Link>
          </ListItem>
        </List>

      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'