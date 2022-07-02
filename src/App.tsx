import { Box, Container, Stack, StackDivider } from '@chakra-ui/react';
import Nav from './components/Nav';

function App() {
  return (
    <Container maxWidth="container.lg">
      <Stack divider={<StackDivider />} spacing={0}>
        <Nav />
        <Box marginTop={6}>Contenido</Box>
      </Stack>
    </Container>
  );
}

export default App;
