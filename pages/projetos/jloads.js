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
    <Layout title={t("work_jloads_title")}>
      <Container display={{ md: 'column' }} marginTop={{ md: 5 }}>
        <Title>
          {t("work_jloads_title")} <Badge>2026</Badge>
        </Title>
        <P>
          {t("work_jloads_description")}
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>{t("code")}</Meta>
            <Link href="https://github.com/jxhnlcs/JLoads" target="_blank">
              https://github.com/jxhnlcs/JLoads <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>{t("platforms")}</Meta>
            <span>Windows/macOS/Linux</span>
          </ListItem>
          <ListItem>
            <Meta>{t("stacks")}</Meta>
            <span>Java 21, Spring Boot 4, Angular 22, WebSocket, yt-dlp</span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/jloads-demo.gif" alt="JLoads" />
      </Container>
    </Layout>
  );
};

export default Work;
export { getServerSideProps } from '../../components/chakra';
