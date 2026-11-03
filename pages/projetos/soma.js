import { useTranslation } from 'react-i18next';
import {
  Container,
  Badge,
  List,
  ListItem,
  Link,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Work = () => {
  const { t } = useTranslation(); // Hook para tradução

  return (
    <Layout title={t("work_soma_title")}>
      <Container display={{ md: 'column' }} marginTop={{ md: 5 }}>
        <Title>
          {t("work_soma_title")} <Badge>2026</Badge>
        </Title>
        <P>
          {t("work_soma_description")}
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>{t("website")}</Meta>
            <Link href="https://somaloja.com.br" target="_blank">
              https://somaloja.com.br <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>{t("platforms")}</Meta>
            <span>Windows/macOS/Linux/iOS/Android (PWA)</span>
          </ListItem>
          <ListItem>
            <Meta>{t("stacks")}</Meta>
            <span>React 19, Vite, Tailwind CSS, Recharts, PWA, Firebase (Firestore/Auth/Cloud Functions/Hosting), Asaas</span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/soma/landing-page.png" alt="Soma - Landing page" />
        <WorkImage src="/images/works/soma/vendas.png" alt="Soma - Registro de vendas e resumo do dia" />
        <WorkImage src="/images/works/soma/dashboard.png" alt="Soma - Dashboard" />
        <WorkImage src="/images/works/soma/visao-geral.png" alt="Soma - Visão geral de todas as lojas" />
        <WorkImage src="/images/works/soma/estoque.png" alt="Soma - Estoque" />
        <WorkImage src="/images/works/soma/permissoes.png" alt="Soma - Equipe e permissões" />
        <WorkImage src="/images/works/soma/assinatura.png" alt="Soma - Assinatura" />
      </Container>
    </Layout>
  );
};

export default Work;
export { getServerSideProps } from '../../components/chakra';
