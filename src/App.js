import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import HelloWorld from './pages/HelloWorld';
import Box from './components/Box';

import { Container } from 'react-bootstrap';

function App() {
  return (
    <>
      <Container>
        <HelloWorld title='Hello World' name='Júlia Vaz' />
        
        <Box header='Card 1' title='Titulo 1'>
          <p>Descrição bla bla bla</p>
        </Box>
        
        <Box header='Card 2' title='Titulo 2' variantBorder='success'/>
        
      </Container>
    </>
  );
}

export default App;
