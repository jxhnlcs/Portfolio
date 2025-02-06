import { Box } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} John Lucas. {t("footer_rights")}
    </Box>
  );
};

export default Footer;