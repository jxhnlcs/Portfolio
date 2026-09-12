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
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  useDisclosure,
  useColorModeValue
} from '@chakra-ui/react';
import { ChevronRightIcon, DownloadIcon } from '@chakra-ui/icons';
import Paragraph from '../components/paragraph';
import { BioSection, BioYear } from '../components/bio';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import PageOutline from '../components/page-outline';
import { IoLogoGithub, IoLogoLinkedin, IoMail } from 'react-icons/io5';
import Image from 'next/image';
import { FaVuejs, FaAngular, FaReact, FaNodeJs, FaJava, FaPhp, FaAws } from "react-icons/fa";
import {
  SiNextdotjs,
  SiNuxtdotjs,
  SiExpress,
  SiSpringboot,
  SiDocker,
  SiTerraform,
  SiFirebase,
  SiMysql,
  SiIonic,
  SiTypescript,
  SiJavascript,
  SiSymfony,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiOracle,
  SiApachekafka,
  SiMicrosoftazure,
  SiGit,
  SiJira,
  SiFigma
} from "react-icons/si"
// import dynamic from 'next/dynamic'
// import { LaptopSpinner } from '../components/voxel-laptop-loader'

// const LazyVoxelLaptop = dynamic(() => import('../components/voxel-laptop'), {
//   ssr: false,
//   loading: () => <LaptopSpinner />
// })

const Home = () => {
  const { t } = useTranslation(); // Obtém o hook para tradução
  const monoIconColor = useColorModeValue('#1a202c', '#f0f0f0'); // Ícones sem cor própria seguem o tema
  const { isOpen, onOpen, onClose } = useDisclosure(); // Controla a foto de perfil expandida

  const outlineSections = [
    { id: 'summary', label: t("summary") },
    { id: 'timeline', label: t("bio") },
    { id: 'experience', label: t("work_experience") },
    { id: 'education', label: t("education") }
  ];

  return (
    <Layout>
      <PageOutline sections={outlineSections} />
      {/* <Container maxW="container.md" pt={14}>
        <LazyVoxelLaptop />
      </Container> */}
      <Container >
        <Box display={{ md: 'flex' }} alignItems="center" marginTop={{ md: 10 }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              John Lucas
            </Heading>
            <p>{t("job_title")}</p>
            <Button
              as="a"
              href="/pdf/John%20Lucas%20Resume(EN%26PT-BR).docx" // Link para o arquivo do CV
              download
              leftIcon={<DownloadIcon />}
              colorScheme="teal"
              mt={3}
            >
              {t("download_cv")}
            </Button>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Box
              as="button"
              type="button"
              onClick={onOpen}
              aria-label={t("expand_photo")}
              title={t("expand_photo")}
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              w="100px"
              h="100px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
              cursor="pointer"
              transition="transform 0.2s ease"
              _hover={{ transform: 'scale(1.06)' }}
              _focusVisible={{ boxShadow: 'outline' }}
            >
              <Image
                src="/images/johnfoto.jpg"
                alt="Profile image"
                width={100}
                height={100}
                style={{ objectFit: 'cover', objectPosition: 'center 38%', width: '100%', height: '100%' }}
              />
            </Box>
          </Box>
        </Box>

        <Modal isOpen={isOpen} onClose={onClose} isCentered size="lg">
          <ModalOverlay backdropFilter="blur(6px)" bg="blackAlpha.700" />
          <ModalContent bg="transparent" boxShadow="none" mx={4}>
            <ModalCloseButton
              color="white"
              bg="blackAlpha.600"
              borderRadius="full"
              zIndex={1}
              _hover={{ bg: 'blackAlpha.800' }}
            />
            <Box borderRadius="lg" overflow="hidden" onClick={onClose} cursor="zoom-out">
              <Image
                src="/images/johnfoto.jpg"
                alt="Profile image"
                width={800}
                height={1200}
                style={{ width: '100%', height: 'auto' }}
                priority
              />
            </Box>
          </ModalContent>
        </Modal>

        <Box
          borderRadius="lg"
          mt={4}
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          css={{ backdropFilter: 'blur(10px)' }}
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          gap={4}
        >
          <FaJava size={30} color="#007396" />
          <SiTypescript size={30} color="#3178c6" />
          <SiJavascript size={30} color="#f7df1e" />
          <FaPhp size={30} color="#777bb4" />
          <FaAngular size={30} color="#dd0031" />
          <FaReact size={30} color="#61dafb" />
          <SiNextdotjs size={30} color={monoIconColor} />
          <SiNuxtdotjs size={30} color="#00dc82" />
          <FaVuejs size={30} color="#42b883" />
          <SiIonic size={30} color="#3880ff" />
          <SiTailwindcss size={30} color="#38bdf8" />
          <SiSpringboot size={30} color="#6db33f" />
          <FaNodeJs size={30} color="#68a063" />
          <SiExpress size={30} color="gray" />
          <SiSymfony size={30} color={monoIconColor} />
          <SiMongodb size={30} color="#47a248" />
          <SiPostgresql size={30} color="#4169e1" />
          <SiMysql size={30} color="#00758f" />
          <SiOracle size={30} color="#f80000" />
          <SiFirebase size={30} color="#ffca28" />
          <SiApachekafka size={30} color={monoIconColor} />
          <SiDocker size={30} color="#2496ed" />
          <SiTerraform size={30} color="#623ce4" />
          <SiMicrosoftazure size={30} color="#0078d4" />
          <FaAws size={30} color="#ff9900" />
          <SiGit size={30} color="#f05032" />
          <SiJira size={30} color="#0052cc" />
          <SiFigma size={30} color="#f24e1e" />
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" id="summary" variant="section-title">
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
          <Heading as="h3" id="timeline" variant="section-title">
            {t("bio")}
          </Heading>
          <BioSection>
            <BioYear style={{ marginRight: '13px' }}>{t("current")}</BioYear>
            {t("job_capgemini")}
          </BioSection>
          <BioSection>
            <BioYear>2024</BioYear>
            {t("job_current")}
          </BioSection>
          <BioSection>
            <BioYear>2024</BioYear>
            {t("job_2025")}
          </BioSection>
          <BioSection>
            <BioYear>2023</BioYear>
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

        <Section delay={0.4}>
          <Heading as="h3" id="experience" variant="section-title">
            {t("work_experience")}
          </Heading>
          <List spacing={6} mt={6}>

            <ListItem>
              <Box>
                <Box display="flex" alignItems="center">
                  <Image src="/images/indeximages/capgemini-logo.png" alt="Capgemini" width={50} height={50} />
                  <Box ml={3}>
                    <Heading as="h4" size="md">{t("job_capgemini_title")}</Heading>
                    <Text fontSize="sm" color="gray.400">{t("job_capgemini_company")}</Text>
                  </Box>
                </Box>
                <Text fontSize="sm" mt={2}>{t("job_capgemini_period")}</Text>
                <Text fontSize="sm">{t("job_capgemini_location")}</Text>
                <Text mb={2} fontSize="sm" fontWeight="bold">{t("job_capgemini_project")}</Text>
                <Paragraph>{t("job_capgemini_description")}</Paragraph>
                <Text fontSize="sm" fontWeight="bold" mt={2}>{t("Skills")}:</Text>
                <Text fontSize="sm">{t("job_capgemini_skills")}</Text>
              </Box>
            </ListItem>

            <ListItem>
              <Box>
                <Box display="flex" alignItems="center">
                  <Image src="/images/indeximages/wemind_logo.png" alt="WeMind" width={50} height={50} />
                  <Box ml={3}>
                    <Heading as="h4" size="md">{t("job_wemind_lead_title")}</Heading>
                    <Text fontSize="sm" color="gray.400">{t("job_wemind_lead_company")}</Text>
                  </Box>
                </Box>
                <Text fontSize="sm" mt={2}>{t("job_wemind_lead_period")}</Text>
                <Text fontSize="sm">{t("job_wemind_lead_location")}</Text>
                <Text mb={2} fontSize="sm" fontWeight="bold">{t("job_wemind_lead_project")}</Text>
                <Paragraph>{t("job_wemind_lead_description")}</Paragraph>
                <Text fontSize="sm" fontWeight="bold" mt={2}>{t("Skills")}:</Text>
                <Text fontSize="sm">{t("job_wemind_lead_skills")}</Text>
              </Box>
            </ListItem>

            <ListItem>
              <Box>
                <Box display="flex" alignItems="center">
                  <Image src="/images/indeximages/rekomendo-logo.png" alt="Rekomendo" width={50} height={50} />
                  <Box ml={3}>
                    <Heading as="h4" size="md">{t("job_rekomendo_title")}</Heading>
                    <Text fontSize="sm" color="gray.400">{t("job_rekomendo_company")}</Text>
                  </Box>
                </Box>
                <Text fontSize="sm" mt={2}>{t("job_rekomendo_period")}</Text>
                <Text fontSize="sm">{t("job_rekomendo_location")}</Text>
                <Text mb={2} fontSize="sm" fontWeight="bold">{t("job_rekomendo_project")}</Text>
                <Paragraph>{t("job_rekomendo_description")}</Paragraph>
                <Text fontSize="sm" fontWeight="bold" mt={2}>{t("Skills")}:</Text>
                <Text fontSize="sm">{t("job_rekomendo_skills")}</Text>
              </Box>
            </ListItem>

            <ListItem>
              <Box>
                <Box display="flex" alignItems="center">
                  <Image src="/images/indeximages/wemind_logo.png" alt="WeMind" width={50} height={50} />
                  <Box ml={3}>
                    <Heading as="h4" size="md">{t("job_wemind_title")}</Heading>
                    <Text fontSize="sm" color="gray.400">{t("job_wemind_company")}</Text>
                  </Box>
                </Box>
                <Text fontSize="sm" mt={2}>{t("job_wemind_period")}</Text>
                <Text fontSize="sm">{t("job_wemind_location")}</Text>
                <Text mb={2} fontSize="sm" fontWeight="bold">{t("job_wemind_project")}</Text>
                <Paragraph>{t("job_wemind_description")}</Paragraph>
                <Text fontSize="sm" fontWeight="bold" mt={2}>{t("Skills")}:</Text>
                <Text fontSize="sm">{t("job_wemind_skills")}</Text>
              </Box>
            </ListItem>

            <ListItem>
              <Box>
                <Box display="flex" alignItems="center">
                  <Image src="/images/indeximages/saoroque-logo.png" alt="Grupo São Roque" width={50} height={50} />
                  <Box ml={3}>
                    <Heading as="h4" size="md">{t("job_sao_roque_title")}</Heading>
                    <Text fontSize="sm" color="gray.400">{t("job_sao_roque_company")}</Text>
                  </Box>
                </Box>
                <Text fontSize="sm" mt={2}>{t("job_sao_roque_period")}</Text>
                <Text fontSize="sm">{t("job_sao_roque_location")}</Text>
                <Text mb={2} fontSize="sm" fontWeight="bold">{t("job_sao_roque_project")}</Text>
                <Paragraph>{t("job_sao_roque_description")}</Paragraph>
                <Text fontSize="sm" fontWeight="bold" mt={2}>{t("Skills")}:</Text>
                <Text fontSize="sm">{t("job_sao_roque_skills")}</Text>
              </Box>
            </ListItem>
          </List>

        </Section>

        <Section delay={0.5}>
          <Heading as="h3" id="education" variant="section-title">
            {t("education")}
          </Heading>
          <List spacing={6} mt={6}>
            <ListItem>
              <Box>
                <Box display="flex" alignItems="center">
                  <Image src="/images/indeximages/unifan-logo.png" alt="UNIFAN" width={50} height={50} />
                  <Box ml={3}>
                    <Heading as="h4" size="md">{t("education_unifan_title")}</Heading>
                    <Text fontSize="sm" color="gray.400">{t("education_unifan_institution")}</Text>
                  </Box>
                </Box>
                <Text fontSize="sm" mt={2}>{t("education_unifan_period")}</Text>
                <Text mb={2} fontSize="sm">{t("unifan_location")}</Text>
                <Paragraph>{t("education_unifan_description")}</Paragraph>
                <Text fontSize="sm" fontWeight="bold" mt={2}>{t("Skills")}:</Text>
                <Text fontSize="sm">{t("education_unifan_skills")}</Text>
              </Box>
            </ListItem>

            <ListItem>
              <Box>
                <Box display="flex" alignItems="center">
                  <Image src="/images/indeximages/senai_logo.png" alt="SENAI" width={50} height={50} />
                  <Box ml={3}>
                    <Heading as="h4" size="md">{t("education_senai_title")}</Heading>
                    <Text fontSize="sm" color="gray.400">{t("education_senai_institution")}</Text>
                  </Box>
                </Box>
                <Text fontSize="sm" mt={2}>{t("education_senai_period")}</Text>
                <Text mb={2} fontSize="sm">{t("job_sao_roque_location")}</Text>
                <Paragraph>{t("education_senai_description")}</Paragraph>
                <Text fontSize="sm" fontWeight="bold" mt={2}>{t("Skills")}:</Text>
                <Text fontSize="sm">{t("education_senai_skills")}</Text>
              </Box>
            </ListItem>

            <ListItem>
              <Box>
                <Box display="flex" alignItems="center">
                  <Image src="/images/indeximages/opera-logo.png" alt="Opera Idiomas" width={50} height={50} />
                  <Box ml={3}>
                    <Heading as="h4" size="md">{t("education_opera_title")}</Heading>
                    <Text fontSize="sm" color="gray.400">{t("education_opera_institution")}</Text>
                  </Box>
                </Box>
                <Text fontSize="sm" mt={2}>{t("education_opera_period")}</Text>
                <Text mb={2} fontSize="sm">{t("job_sao_roque_location")}</Text>
                <Paragraph>{t("education_opera_description")}</Paragraph>
                <Text fontSize="sm" fontWeight="bold" mt={2}>{t("Skills")}:</Text>
                <Text fontSize="sm">{t("education_opera_skills")}</Text>
              </Box>
            </ListItem>
          </List>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" id="hobbies" variant="section-title">
            ♥
          </Heading>
          <Paragraph>
            {t("hobbies")}
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" id="networks" variant="section-title">
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
              <Link href="https://www.linkedin.com/in/johnlucasdev/" target="_blank">
                <Button variant="ghost" colorScheme="teal" leftIcon={<IoLogoLinkedin />}>
                  John Lucas
                </Button>
              </Link>
            </ListItem>

            <ListItem>
              <Link href="mailto:joohnzay@gmail.com">
                <Button variant="ghost" colorScheme="teal" leftIcon={<IoMail />}>
                  joohnzay@gmail.com
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
