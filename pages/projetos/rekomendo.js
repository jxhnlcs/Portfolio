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
  const { t } = useTranslation(); // Hook para tradução

  return (
    <Layout title={t("work_rekomendo_title")}>
      <Container display={{ md: 'column' }} marginTop={{ md: 5 }}>
        <Title>
          {t("work_rekomendo_title")} <Badge>2024</Badge>
        </Title>
        <P>
          {t("work_rekomendo_description")}
        </P>
        <List ml={4} my={4}>
          {/* <ListItem>
            <Meta>{t("website")}</Meta>
            <Link href="https://rekomendo.com.br/home">
              https://rekomendo.com.br/home <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem> */}
          <ListItem>
            <Meta>{t("work_rekomendo_online_system")}</Meta>
            <Link href="https://rekomendo.com.br/landingpage">
              https://rekomendo.com.br/landingpage <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>{t("platforms")}</Meta>
            <span>Windows/macOS/Linux/iOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>{t("stacks")}</Meta>
            <span>Angular, Ionic, Node.js, Firebase</span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/rekomendo-1.png" alt="Rekomendo" />
        <WorkImage src="/images/works/rekomendo-2.png" alt="Rekomendo" />
        <WorkImage src="/images/works/rekomendo-3.png" alt="Rekomendo" />
      </Container>
    </Layout>
  );
};

export default Work;
export { getServerSideProps } from '../../components/chakra';