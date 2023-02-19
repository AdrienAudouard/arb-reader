import { ChakraProvider } from '@chakra-ui/react';

import './App.css';
import { LabelsProvider } from './context/labels/labels-context';
import { HomePage } from './pages/home';
import theme from './theme/theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <LabelsProvider>
        <HomePage />
      </LabelsProvider>
    </ChakraProvider>
  );
}

export default App;
