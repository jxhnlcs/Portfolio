import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import {
  Box,
  IconButton,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  ModalCloseButton,
  Text,
  useDisclosure
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const ImageViewerContext = createContext(null);

export const useImageViewer = () => useContext(ImageViewerContext);

export const ImageViewerProvider = ({ children }) => {
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(0);
  const imagesRef = useRef([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Cada imagem se registra na ordem em que aparece na página
  const register = useCallback((src, alt) => {
    if (!imagesRef.current.some(image => image.src === src)) {
      imagesRef.current = [...imagesRef.current, { src, alt }];
      setImages(imagesRef.current);
    }

    return () => {
      imagesRef.current = imagesRef.current.filter(image => image.src !== src);
      setImages(imagesRef.current);
    };
  }, []);

  const open = useCallback(
    src => {
      const position = imagesRef.current.findIndex(image => image.src === src);
      setIndex(position === -1 ? 0 : position);
      onOpen();
    },
    [onOpen]
  );

  const total = images.length;

  const next = useCallback(
    () => setIndex(prev => (total ? (prev + 1) % total : 0)),
    [total]
  );

  const previous = useCallback(
    () => setIndex(prev => (total ? (prev - 1 + total) % total : 0)),
    [total]
  );

  useEffect(() => {
    if (!isOpen) return undefined;

    const onKeyDown = event => {
      if (event.key === 'ArrowRight') next();
      if (event.key === 'ArrowLeft') previous();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, next, previous]);

  const value = useMemo(() => ({ register, open }), [register, open]);
  const current = images[index];

  return (
    <ImageViewerContext.Provider value={value}>
      {children}

      <Modal isOpen={isOpen} onClose={onClose} isCentered size="6xl">
        <ModalOverlay backdropFilter="blur(6px)" bg="blackAlpha.800" />
        <ModalContent bg="transparent" boxShadow="none" mx={4} my={4}>
          <ModalCloseButton
            color="white"
            bg="blackAlpha.600"
            borderRadius="full"
            zIndex={2}
            _hover={{ bg: 'blackAlpha.800' }}
          />
          <ModalBody p={0} position="relative">
            {current && (
              <Image
                src={current.src}
                alt={current.alt}
                borderRadius="lg"
                w="full"
                maxH="85vh"
                objectFit="contain"
                bg="blackAlpha.500"
              />
            )}

            {total > 1 && (
              <>
                <IconButton
                  aria-label="Previous image"
                  icon={<ChevronLeftIcon boxSize={7} />}
                  onClick={previous}
                  position="absolute"
                  left={2}
                  top="50%"
                  transform="translateY(-50%)"
                  borderRadius="full"
                  color="white"
                  bg="blackAlpha.600"
                  _hover={{ bg: 'blackAlpha.800' }}
                />
                <IconButton
                  aria-label="Next image"
                  icon={<ChevronRightIcon boxSize={7} />}
                  onClick={next}
                  position="absolute"
                  right={2}
                  top="50%"
                  transform="translateY(-50%)"
                  borderRadius="full"
                  color="white"
                  bg="blackAlpha.600"
                  _hover={{ bg: 'blackAlpha.800' }}
                />
                <Text
                  position="absolute"
                  bottom={3}
                  left="50%"
                  transform="translateX(-50%)"
                  color="white"
                  bg="blackAlpha.700"
                  borderRadius="full"
                  fontSize="sm"
                  px={3}
                  py={1}
                >
                  {index + 1} / {total}
                </Text>
              </>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </ImageViewerContext.Provider>
  );
};

export const ViewableImage = ({ src, alt, ...props }) => {
  const viewer = useImageViewer();

  useEffect(() => {
    if (!viewer) return undefined;
    return viewer.register(src, alt);
  }, [viewer, src, alt]);

  return (
    <Box
      as={viewer ? 'button' : 'div'}
      type={viewer ? 'button' : undefined}
      onClick={viewer ? () => viewer.open(src) : undefined}
      display="block"
      w="full"
      cursor={viewer ? 'zoom-in' : 'default'}
      borderRadius="lg"
      overflow="hidden"
      transition="transform 0.2s ease"
      _hover={viewer ? { transform: 'scale(1.01)' } : undefined}
      _focusVisible={{ boxShadow: 'outline' }}
      mb={4}
    >
      <Image borderRadius="lg" w="full" src={src} alt={alt} {...props} />
    </Box>
  );
};
