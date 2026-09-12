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
  const { t } = useTranslation(); // Hook para tradução

  return (
    <Layout title={t("work_jlvendas_title")}>
      <Container display={{ md: 'column' }} marginTop={{ md: 5 }}>
        <Title>
          {t("work_jlvendas_title")} <Badge>2026</Badge>
        </Title>
        <P>
          {t("work_jlvendas_description")}
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>{t("work_jlvendas_online_system")}</Meta>
            <span>{t("work_jlvendas_client_only")}</span>
          </ListItem>
          <ListItem>
            <Meta>{t("platforms")}</Meta>
            <span>Windows/macOS/Linux/iOS/Android (PWA)</span>
          </ListItem>
          <ListItem>
            <Meta>{t("stacks")}</Meta>
            <span>React 19, Vite, Tailwind CSS, Recharts, Firebase (Firestore/Auth), Vercel</span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/jlvendas-1.png" alt="JL Vendas" />
        <WorkImage src="/images/works/jlvendas-2.png" alt="JL Vendas" />
      </Container>
    </Layout>
  );
};

export default Work;
export { getServerSideProps } from '../../components/chakra';
