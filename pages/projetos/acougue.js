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
    <Layout title={t("work_acougue_title")}>
      <Container display={{ md: 'column' }} marginTop={{ md: 5 }}>
        <Title>
          {t("work_acougue_title")} <Badge>2023</Badge>
        </Title>
        <P>
          {t("work_acougue_description")}
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>{t("platforms")}</Meta>
            <span>Windows/macOS/Linux/iOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>{t("stacks")}</Meta>
            <span>Vue.js, Node.js, TypeScript, Oracle Database</span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/acougue-1.png" alt="acougue" />
        <WorkImage src="/images/works/acougue.jpg" alt="acougue" />
      </Container>
    </Layout>
  );
};

export default Work;
export { getServerSideProps } from '../../components/chakra';