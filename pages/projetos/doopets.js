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
    <Layout title={t("work_doopets_title")}>
      <Container display={{ md: 'column' }} marginTop={{ md: 5 }}>
        <Title>
          {t("work_doopets_title")} <Badge>2023</Badge>
        </Title>
        <P>
          {t("work_doopets_description")}
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>{t("website")}</Meta>
            <Link href="https://doopets.vercel.app/">
              https://doopets.vercel.app/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>{t("work_doopets_online_system")}</Meta>
            <Link href="https://doo-pets.vercel.app/">
              https://doo-pets.vercel.app/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>{t("code")}</Meta>
            <Link href="https://github.com/jxhnlcs/DooPets">
              https://github.com/jxhnlcs/DooPets <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>{t("video")}</Meta>
            <Link href="https://www.linkedin.com/posts/john-lucas-a23880208_ol%C3%A1-rede-no-dia-2906-apresentei-meu-tcc-activity-7080582167394697216-iDqv?utm_source=share&utm_medium=member_desktop">
              https://www.linkedin.com/posts/video <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>{t("platforms")}</Meta>
            <span>Windows/macOS/Linux/iOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>{t("stacks")}</Meta>
            <span>Vue.js, Slim Framework, MySQL</span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/doopets-1.png" alt="Doopets" />
        <WorkImage src="/images/works/doopets-2.png" alt="Doopets" />
      </Container>
    </Layout>
  );
};

export default Work;
export { getServerSideProps } from '../../components/chakra';