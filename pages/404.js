import NextLink from 'next/link';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react';

const NotFound = () => {
  const { t } = useTranslation(); // Hook para tradução

  return (
    <Container>
      <Heading as="h1">{t("not_found_title")}</Heading>
      <Text>{t("not_found_message")}</Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <Button as={NextLink} href="/" colorScheme="teal">
          {t("return_home")}
        </Button>
      </Box>
    </Container>
  );
};

export default NotFound;