import {
  Box,
  Container,
  Heading,
  Link,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import { Link as Route } from 'react-router-dom';

function App() {
  return (
    <Container
      minH="100vh"
      minW="100vw"
      bg="gray.900"
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      gap={10}
      color="whiteAlpha.900"
    >
      <Heading as="h1">React Hooks Testing & Exmaples</Heading>
      <Container maxW="4xl">
        <Box w="100%">
          <Tabs
            variant="line"
            isFitted
            isLazy
          >
            <TabList>
              <Tab>Basic</Tab>
              <Tab isDisabled>Intermediate</Tab>
              <Tab isDisabled>Advanced</Tab>
            </TabList>
            <TabPanels mt={3}>
              <Link
                as={Route}
                to="/hooks/basic/usestate"
              >
                <TabPanel
                  bg="gray.700"
                  rounded={3}
                >
                  useState
                </TabPanel>
              </Link>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    </Container>
  );
}

export default App;
