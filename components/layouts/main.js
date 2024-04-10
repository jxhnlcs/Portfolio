import Head from 'next/head'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="John Lucas - Portfolio" />
        <meta name="author" content="John Lucas" />
        <meta name="author" content="jxhnlcs" />
        <link rel="2720550" href="2720550.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="John Lucas" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@jxhnlcs" />
        <meta name="twitter:creator" content="@jxhnlcs" />
        <meta property="og:type" content="website" />
        <title>John Lucas - Portfolio</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
