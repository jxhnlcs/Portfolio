import { useTranslation } from 'react-i18next';
import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import { WorkGridItem } from '../components/grid-item';

import thumbDoopets from '../public/images/works/doopets_eyecatch.png';
import thumbTecer from '../public/images/works/tecer_eyecatch.png';
import thumbAcougue from '../public/images/works/acougue_eyecatch.png';
import thumbProsel from '../public/images/works/prosel_eyecatch.png';
import thumbBuzzu from '../public/images/works/buzzu_eyecatch.png';
import thumbRekomendo from '../public/images/works/rekomendo_eyecatch.png';

const Projetos = () => {
  const { t } = useTranslation(); // Hook para tradução

  return (
    <Layout title={t("projects_title")}>
      <Container display={{ md: 'column' }} marginTop={{ md: 10 }}>
        <Heading as="h3" fontSize={20} mb={4}>
          {t("projects_jobs")}
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id="rekomendo" title="Rekomendo" thumbnail={thumbRekomendo}>
              {t("projects_rekomendo_desc")}
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem id="tecer" title="Tecer Gestão e Aplicativo" thumbnail={thumbTecer}>
              {t("projects_tecer_desc")}
            </WorkGridItem>
          </Section>

          <Section delay={0.1}>
            <WorkGridItem id="acougue" title="Açougue São Roque" thumbnail={thumbAcougue}>
              {t("projects_acougue_desc")}
            </WorkGridItem>
          </Section>
        </SimpleGrid>

        <Section delay={0.2}>
          <Divider my={6} />
          <Heading as="h3" fontSize={20} mb={4}>
            {t("projects_personal")}
          </Heading>
        </Section>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.3}>
            <WorkGridItem id="doopets" title="Doo Pets" thumbnail={thumbDoopets}>
              {t("projects_doopets_desc")}
            </WorkGridItem>
          </Section>

          <Section delay={0.3}>
            <WorkGridItem id="prosel" title="Prosel" thumbnail={thumbProsel}>
              {t("projects_prosel_desc")}
            </WorkGridItem>
          </Section>
        </SimpleGrid>

        <Section delay={0.4}>
          <Divider my={6} />
          <Heading as="h3" fontSize={20} mb={4}>
            {t("projects_collaborations")}
          </Heading>
        </Section>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.5}>
            <WorkGridItem id="buzzu" thumbnail={thumbBuzzu} title="Buzzu">
              {t("projects_buzzu_desc")}
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Projetos;
export { getServerSideProps } from '../components/chakra';