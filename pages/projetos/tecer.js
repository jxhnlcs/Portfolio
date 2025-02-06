import { useTranslation } from 'react-i18next';
import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react';
import Layout from '../../components/layouts/article';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph';

const Work = () => {
  const { t } = useTranslation(); // Hook para tradução

  return (
    <Layout title={t("work_tecer_title")}>
      <Container display={{ md: 'column' }} marginTop={{ md: 5 }}>
        <Title>
          {t("work_tecer_title")} <Badge>2023</Badge>
        </Title>
        <P>
          {t("work_tecer_description")}
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>{t("platforms")}</Meta>
            <span>Windows/macOS/Linux/iOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>{t("work_tecer_web_code")}</Meta>
            <Link href="https://github.com/jxhnlcs/docpower-web">
              https://github.com/jxhnlcs/docpower-web <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>{t("work_tecer_mobile_code")}</Meta>
            <Link href="https://github.com/jxhnlcs/docpower-mobile">
              https://github.com/jxhnlcs/docpower-mobile <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>{t("stacks")}</Meta>
            <span>Vue.js, Node.js, React Native, AWS</span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/tecer-1.jpg" alt="tecer" />
        <WorkImage src="/images/works/tecer-2.jpg" alt="tecer" />
        <WorkImage src="/images/works/tecer-3.jpg" alt="tecer" />
      </Container>
    </Layout>
  );
};

export default Work;
export { getServerSideProps } from '../../components/chakra';