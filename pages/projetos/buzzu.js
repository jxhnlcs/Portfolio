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
    <Layout title={t("work_buzzu_title")}>
      <Container>
        <Title>
          {t("work_buzzu_title")} <Badge>2023</Badge>
        </Title>
        <P>
          {t("work_buzzu_description")}
        </P>

        <List ml={4} my={4}>
          <ListItem>
            <Meta>{t("platforms")}</Meta>
            <span>iOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>{t("stacks")}</Meta>
            <span>React Native</span>
          </ListItem>
          <ListItem>
            <Meta>{t("prototype")}</Meta>
            <Link href="https://www.figma.com/file/L00uONICPdqklqPqVEpZy5/Buzzu?type=design&node-id=0%3A1&mode=design&t=YN6MjDwJi77ixpFi-1">
              Figma <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>{t("code")}</Meta>
            <Link href="https://github.com/jxhnlcs/buzzu_app">
              https://github.com/jxhnlcs/buzzu_app <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <WorkImage src="/images/works/buzzu-1.png" alt="Buzzu" />
        <WorkImage src="/images/works/buzzu-2.png" alt="Buzzu" />
        <WorkImage src="/images/works/buzzu-3.png" alt="Buzzu" />
        <WorkImage src="/images/works/buzzu-4.png" alt="Buzzu" />
        <WorkImage src="/images/works/buzzu-5.png" alt="Buzzu" />
        <WorkImage src="/images/works/buzzu-6.png" alt="Buzzu" />
        <WorkImage src="/images/works/buzzu-7.png" alt="Buzzu" />
      </Container>
    </Layout>
  );
};

export default Work;
export { getServerSideProps } from '../../components/chakra';