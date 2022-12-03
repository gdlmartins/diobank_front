import Login from './componets/Login';
import Layout from './componets/Layout';
import { Center, Flex } from '@chakra-ui/react';

function App() {
  return (
    <Layout>
        <Center maxW="700px">
        <Login />
    </Center>
      </Layout>
  );
}

export default App;
