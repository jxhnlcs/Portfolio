import { forwardRef } from 'react'
import { Box, Spinner } from '@chakra-ui/react'

export const LaptopSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
)

export const LaptopContainer = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    className="voxel-laptop"
    m="auto"
    mt={['-80px', '-110px', '-190px']}
    mb={['-70px', '-100px', '-220px']}
    w={[280, 480, 640]}
    h={[280, 480, 640]}
    position="relative"
  >
    {children}
  </Box>
))

LaptopContainer.displayName = 'LaptopContainer'

const Loader = () => {
  return (
    <LaptopContainer>
      <LaptopSpinner />
    </LaptopContainer>
  )
}

export default Loader 