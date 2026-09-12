import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  IconButton,
  Link,
  List,
  ListItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Box,
  useColorModeValue
} from '@chakra-ui/react';
import { Global } from '@emotion/react';
import { HamburgerIcon } from '@chakra-ui/icons';

// Índice lateral fixo, no estilo do sumário do Google Docs
const PageOutline = ({ sections }) => {
  const { t } = useTranslation(); // Hook para tradução
  const [active, setActive] = useState(sections[0]?.id);
  const [mounted, setMounted] = useState(false); // Entrada suave, igual às seções
  const activeColor = useColorModeValue('teal.500', 'teal.200'); // Mesma cor dos botões de ação
  const idleColor = useColorModeValue('gray.600', 'whiteAlpha.700');
  const trackColor = useColorModeValue('blackAlpha.200', 'whiteAlpha.300');

  useEffect(() => {
    const raf = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const offset = window.innerHeight * 0.3;
      const current = sections.reduce((found, section) => {
        const element = document.getElementById(section.id);
        if (!element) return found;
        return element.getBoundingClientRect().top <= offset ? section.id : found;
      }, sections[0]?.id);

      setActive(current);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [sections]);

  const scrollTo = (event, id) => {
    if (event) event.preventDefault();
    const element = document.getElementById(id);
    if (!element) return;
    window.scrollTo({
      top: element.getBoundingClientRect().top + window.scrollY - 90,
      behavior: 'smooth'
    });
  };

  return (
    <>
    {/* Enquanto o menu flutuante ocupa o canto, o botão de voltar ao topo sobe */}
    <Global
      styles={`
        @media (max-width: 1279px) {
          :root { --fab-stack: 64px; }
        }
      `}
    />

    {/* Sem espaço lateral para o índice fixo, vira um menu flutuante */}
    <Menu placement="top-end">
      <MenuButton
        as={IconButton}
        aria-label={t('sections')}
        title={t('sections')}
        icon={<HamburgerIcon boxSize={5} />}
        display={{ base: 'flex', xl: 'none' }}
        position="fixed"
        bottom={{ base: 4, md: 6 }}
        right={{ base: 4, md: 6 }}
        zIndex={2}
        size="lg"
        borderRadius="full"
        bg={useColorModeValue('whiteAlpha.900', 'whiteAlpha.200')}
        color={useColorModeValue('gray.800', 'whiteAlpha.900')}
        boxShadow="lg"
        css={{ backdropFilter: 'blur(10px)' }}
      />
      <MenuList minW="200px">
        {sections.map(section => (
          <MenuItem
            key={section.id}
            onClick={() => scrollTo(null, section.id)}
            fontSize={14}
            color={active === section.id ? activeColor : undefined}
            fontWeight={active === section.id ? 'bold' : 'normal'}
          >
            {section.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>

    <Box
      as="nav"
      aria-label="Page sections"
      display={{ base: 'none', xl: 'block' }}
      position="fixed"
      top="140px"
      left="50%"
      ml="calc(-24rem - 234px)"
      w="210px"
      zIndex={1}
      opacity={mounted ? 1 : 0}
      transform={mounted ? 'translateX(0)' : 'translateX(-10px)'}
      transition="opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s"
    >
      <List spacing={0} borderLeftWidth={2} borderColor={trackColor}>
        {sections.map(section => {
          const isActive = active === section.id;

          return (
            <ListItem
              key={section.id}
              borderLeftWidth={2}
              borderColor={isActive ? activeColor : 'transparent'}
              ml="-2px"
              transition="border-color 0.3s ease"
            >
              <Link
                href={`#${section.id}`}
                onClick={event => scrollTo(event, section.id)}
                display="block"
                px={3}
                py={1.5}
                fontSize={14}
                lineHeight="short"
                color={isActive ? activeColor : idleColor}
                fontWeight={isActive ? 'bold' : 'normal'}
                transition="color 0.3s ease"
                _hover={{ textDecoration: 'none', color: activeColor }}
              >
                {section.label}
              </Link>
            </ListItem>
          );
        })}
      </List>
    </Box>
    </>
  );
};

export default PageOutline;
