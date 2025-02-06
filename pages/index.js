import NextLink from 'next/link';
import { useTranslation } from 'react-i18next';
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Paragraph from '../components/paragraph';
import { BioSection, BioYear } from '../components/bio';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';
import Image from 'next/image';

const Home = () => {
  const { t } = useTranslation(); // Obtém o hook para tradução

  return (
    <Layout>
      <Container>
        <Box display={{ md: 'flex' }} marginTop={{ md: 10 }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              John Lucas
            </Heading>
            <p>{t("job_title")}</p>
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
              <Image
                src="/images/john-user.png"
                alt="Profile image"
                width={100}
                height={100}
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
          {t("technologies")}
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            {t("summary")}
          </Heading>
          <Paragraph>
            {t("bio_description")}
          </Paragraph>
          <Box align="center" my={4}>
            <Button
              as={NextLink}
              href="/projetos"
              scroll={false}
              rightIcon={<ChevronRightIcon />}
              colorScheme="teal"
            >
              {t("my_projects")}
            </Button>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            {t("bio")}
          </Heading>
          <BioSection>
            <BioYear style={{ marginRight: '13px' }}>{t("current")}</BioYear>
            {t("job_current")}
          </BioSection>
          <BioSection>
            <BioYear>2024</BioYear>
            {t("job_2024")}
          </BioSection>
          <BioSection>
            <BioYear>2023</BioYear>
            {t("job_2023")}
          </BioSection>
          <BioSection>
            <BioYear>2023</BioYear>
            {t("education_university")}
          </BioSection>
          <BioSection>
            <BioYear>2023</BioYear>
            {t("education_senai")}
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            {t("education_technical")}
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            ♥
          </Heading>
          <Paragraph>
            {t("hobbies")}
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            {t("my_networks")}
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/jxhnlcs" target="_blank">
                <Button variant="ghost" colorScheme="teal" leftIcon={<IoLogoGithub />}>
                  @jxhnlcs
                </Button>
              </Link>
            </ListItem>

            <ListItem>
              <Link href="https://www.linkedin.com/in/john-lucas-a23880208/" target="_blank">
                <Button variant="ghost" colorScheme="teal" leftIcon={<IoLogoLinkedin />}>
                  John Lucas
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  );
};

export default Home;
export { getServerSideProps } from '../components/chakra';