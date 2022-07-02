import { Box, Container, Stack, StackDivider, Text } from '@chakra-ui/react';

function App() {
  return (
    <Container maxWidth="container.lg">
      <Stack divider={<StackDivider />} spacing={0}>
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="space-between"
          paddingY="6"
        >
          <Text>Parte de la izquierda</Text>
          <Text>Parte de la derecha</Text>
        </Stack>
        <Box marginTop={6}>Contenido</Box>
      </Stack>
    </Container>
  );
}

export default App;
