import { useTranslation } from 'react-i18next';
import {
  Container,
  Badge,
  List,
  ListItem,
} from '@chakra-ui/react';
import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Work = () => {
  const { t } = useTranslation();

  return (
    <Layout title={t('work_planejar_title')}>
      <Container display={{ md: 'column' }} marginTop={{ md: 5 }}>
        <Title>
          {t('work_planejar_title')} <Badge>2026</Badge>
        </Title>
        <P>{t('work_planejar_description')}</P>

        <List ml={4} my={4}>
          <ListItem>
            <Meta>{t('work_planejar_online_system')}</Meta>
            <span>{t('work_planejar_client_only')}</span>
          </ListItem>
          <ListItem>
            <Meta>{t('platforms')}</Meta>
            <span>Web/Android</span>
          </ListItem>
          <ListItem>
            <Meta>{t('stacks')}</Meta>
            <span>Next.js/Node.js/Firebase/Meta</span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/planejar-eyecatch.png" alt="Planejar Patrimonial" />
      </Container>
    </Layout>
  );
};

export default Work;
export { getServerSideProps } from '../../components/chakra';