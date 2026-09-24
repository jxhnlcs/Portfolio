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
    <Layout title={t('work_chamae_title')}>
      <Container display={{ md: 'column' }} marginTop={{ md: 5 }}>
        <Title>
          {t('work_chamae_title')} <Badge>2026</Badge>
        </Title>
        <P>{t('work_chamae_description')}</P>

        <List ml={4} my={4}>
          <ListItem>
            <Meta>{t('website')}</Meta>
            <Link href="https://www.chamae.page" target="_blank">
              https://www.chamae.page <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>{t('platforms')}</Meta>
            <span>Web/iOS/Android (NFC/QR Code)</span>
          </ListItem>
          <ListItem>
            <Meta>{t('stacks')}</Meta>
            <span>Angular 20, SCSS, Firebase (Firestore/Auth), Vercel</span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/chamae/landing-page.png" alt="Chamaê - Landing page" />
        <WorkImage src="/images/works/chamae/plaquinha-nfc-qrcode.png" alt="Chamaê - Plaquinha com NFC e QR Code" />
        <WorkImage src="/images/works/chamae/plaquinha-nfc.png" alt="Chamaê - Plaquinha com NFC" />
        <WorkImage src="/images/works/chamae/cliente-mesa.png" alt="Chamaê - Página da mesa para o cliente" />
        <WorkImage src="/images/works/chamae/cliente-aguardando.png" alt="Chamaê - Chamado aguardando atendimento" />
        <WorkImage src="/images/works/chamae/painel-chamados.png" alt="Chamaê - Painel de chamados da equipe" />
      </Container>
    </Layout>
  );
};

export default Work;
export { getServerSideProps } from '../../components/chakra';
