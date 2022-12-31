import {
  Box,
  Container,
  Flex,
  Center,
  Divider,
  VStack,
  Input,
} from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/color-mode';
import Fonts from './Fonts';
import Country from './Country';
import Button from './Generate/Generate';
import ColorPicker from './ColorPicker';
function Card() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <Container
      bg={isDark ? 'gray.900' : 'gray.50'}
      borderRadius="12px"
      border="2px"
      borderColor={isDark ? 'gray.700' : 'gray.100'}
      p={3}
      boxShadow="xl"
      mt="20vh"
      maxW="590px"
    >
      <Flex>
        <Box>
          <canvas
            style={{ borderRadius: '5px' }}
            id="canvas"
            width={226}
            height={225}
          ></canvas>
        </Box>
        <Center mx={3} height="auto">
          <Divider orientation="vertical"></Divider>
        </Center>
        <VStack w="full">
          <Input
            id="userName"
            variant="filled"
            size="md"
            placeholder="Username"
          />
          <Country />
          <Fonts />
          <ColorPicker />
          <Button />
        </VStack>
      </Flex>
    </Container>
  );
}

export default Card;
