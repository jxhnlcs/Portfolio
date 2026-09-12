import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IconButton, useColorModeValue } from '@chakra-ui/react';
import { ChevronUpIcon } from '@chakra-ui/icons';

const ScrollToTop = () => {
  const { t } = useTranslation(); // Hook para tradução
  const [visible, setVisible] = useState(false);
  const bg = useColorModeValue('whiteAlpha.900', 'whiteAlpha.200');
  const color = useColorModeValue('gray.800', 'whiteAlpha.900');

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <IconButton
      aria-label={t('back_to_top')}
      title={t('back_to_top')}
      icon={<ChevronUpIcon boxSize={6} />}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      position="fixed"
      bottom={{
        base: 'calc(1rem + var(--fab-stack, 0px))',
        md: 'calc(1.5rem + var(--fab-stack, 0px))'
      }}
      right={{ base: 4, md: 6 }}
      zIndex={2}
      size="lg"
      borderRadius="full"
      bg={bg}
      color={color}
      boxShadow="lg"
      css={{ backdropFilter: 'blur(10px)' }}
      _hover={{ transform: 'translateY(-2px)' }}
      opacity={visible ? 1 : 0}
      visibility={visible ? 'visible' : 'hidden'}
      transition="opacity 0.25s ease, transform 0.2s ease, visibility 0.25s"
    />
  );
};

export default ScrollToTop;
