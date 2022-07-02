import {
  Badge,
  Container,
  Heading,
  Stack,
  StackDivider,
  Text,
} from '@chakra-ui/react';
import Nav from './components/Nav';

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
          <Stack flex={1}>
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
            <Text>Botones</Text>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
}

export default App;
