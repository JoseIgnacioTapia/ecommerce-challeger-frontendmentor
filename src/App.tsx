import {
  Badge,
  Button,
  Container,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Image,
  Stack,
  StackDivider,
  Text,
} from '@chakra-ui/react';
import Nav from './components/Nav';
import cart from './assets/icon-cart.svg';
import CartIcon from './icons/Cart';

function App() {
  return (
    <Container maxWidth="container.md">
      <Stack divider={<StackDivider />} spacing={0}>
        <Nav />
        <Stack
          direction="row"
          marginTop={6}
          alignItems="center"
          justifyContent="center"
        >
          <Text flex={1}>Parte izquierda</Text>
          <Stack flex={1} spacing={6}>
            <Stack>
              <Text
                color="primary.500"
                fontSize="sm"
                fontWeight="bold"
                letterSpacing={2}
                textTransform="uppercase"
              >
                Sneaker company
              </Text>
              <Heading>Fall limited edition sneakers</Heading>
            </Stack>
            <Text color="gray.500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              soluta aperiam iste porro error nulla. Vel soluta aperiam iste
              porro error nulla.
            </Text>
            <Stack>
              <Stack direction="row" alignItems="center" spacing={4}>
                <Text fontSize="2xl" fontWeight={700}>
                  $125.00
                </Text>
                <Badge
                  color="primary.500"
                  fontSize="md"
                  paddingX={2}
                  borderRadius="md"
                  colorScheme="primary"
                >
                  50%
                </Badge>
              </Stack>
              <Text
                color="gray.400"
                fontWeight={700}
                textDecoration="line-through"
              >
                $250.00
              </Text>
            </Stack>
            <Stack direction="row" alignItems="center">
              <Stack
                backgroundColor="gray.100"
                borderRadius="md"
                direction="row"
                alignItems="center"
                justifyContent="center"
                padding={1}
              >
                <Button colorScheme="primary" fontSize="2xl" variant="ghost">
                  -
                </Button>
                <Input
                  minWidth={12}
                  placeholder="0"
                  textAlign="center"
                  variant="unstailed"
                  width={4}
                  value="0"
                />
                <Button
                  size="lg"
                  colorScheme="primary"
                  fontSize="2xl"
                  variant="ghost"
                >
                  +
                </Button>
              </Stack>
              <Button
                size="lg"
                colorScheme="primary"
                leftIcon={<CartIcon color="white" />}
              >
                Add to cart
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
}

export default App;
