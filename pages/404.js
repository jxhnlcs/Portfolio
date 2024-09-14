import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1">404 - Not Found</Heading>
      <Text>A página que você está procurando não foi encontrada.</Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <Button as={NextLink} href="/" colorScheme="teal">
          Retornar para a Home
        </Button>
      </Box>
    </Container>
  )
}

export default NotFound
