import { useTranslation } from 'react-i18next';
import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Work = () => {
  const { t } = useTranslation();

  return (
    <Layout title={t('work_plaquinhai_title')}>
      <Container display={{ md: 'column' }} marginTop={{ md: 5 }}>
        <Title>
          {t('work_plaquinhai_title')} <Badge>2026</Badge>
        </Title>
        <P>{t('work_plaquinhai_description')}</P>

        <List ml={4} my={4}>
          <ListItem>
            <Meta>{t('website')}</Meta>
            <Link href="https://plaquinhai.com.br" target="_blank">
              https://plaquinhai.com.br <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>{t('platforms')}</Meta>
            <span>Web (NFC/QR Code)</span>
          </ListItem>
          <ListItem>
            <Meta>{t('stacks')}</Meta>
            <span>Next.js 16, TypeScript, Firebase (App Hosting/Firestore/Storage/Auth), Claude API, Puppeteer, Three.js, Asaas</span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/plaquinhai/landing-page.png" alt="plaquinhAI - Landing page" />
        <WorkImage src="/images/works/plaquinhai/criar-arte.png" alt="plaquinhAI - Criar a arte da plaquinha" />
        <WorkImage src="/images/works/plaquinhai/estudio-3d.png" alt="plaquinhAI - Estúdio com visualização 3D e escolha do plano" />
        <WorkImage src="/images/works/plaquinhai/artes-por-segmento.png" alt="plaquinhAI - Artes geradas para diferentes negócios" />
        <WorkImage src="/images/works/plaquinhai/kit-arquivos.png" alt="plaquinhAI - Kit de arquivos para impressão" />
        <WorkImage src="/images/works/plaquinhai/link-vivo.png" alt="plaquinhAI - Link Vivo" />
        <WorkImage src="/images/works/plaquinhai/planos-revenda.png" alt="plaquinhAI - Planos para revendedores" />
      </Container>
    </Layout>
  );
};

export default Work;
export { getServerSideProps } from '../../components/chakra';
