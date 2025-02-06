import { useTranslation } from 'react-i18next';
import {
  Container,
  Badge,
  List,
  Link,
  ListItem,
} from '@chakra-ui/react';
import { Title, WorkImage, Meta } from '../../components/work';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Work = () => {
  const { t } = useTranslation(); // Hook para tradução

  return (
    <Layout title={t("work_prosel_title")}>
      <Container display={{ md: 'column' }} marginTop={{ md: 5 }}>
        <Title>
          {t("work_prosel_title")} <Badge>2024</Badge>
        </Title>
        <P>
          {t("work_prosel_description")}
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>{t("platforms")}</Meta>
            <span>Windows/macOS/Linux/iOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>{t("stacks")}</Meta>
            <span>Vue.js, Node.js, Express, Docker, MySQL</span>
          </ListItem>
          <ListItem>
            <Meta>{t("work_prosel_offline_system")}</Meta>
            <Link href="https://prosel.vercel.app">
              https://prosel.vercel.app/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>{t("code")}</Meta>
            <Link href="https://github.com/jxhnlcs/fullstack_transport-request">
              https://github.com/jxhnlcs/fullstack_transport-request <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <WorkImage src="/images/works/prosel-1.png" alt="prosel" />
        <WorkImage src="/images/works/prosel-2.png" alt="prosel" />
      </Container>
    </Layout>
  );
};

export default Work;
export { getServerSideProps } from '../../components/chakra';