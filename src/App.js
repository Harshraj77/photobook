// import logo from './logo.svg';
import './App.css';
import Photobook from './components/Photobook';
import Navbar from './components/Navbar';
import DECIMAGES from './Images/DecemberImages';
import NOVIMAGES from './Images/NovemberImages';
import { Box } from '@chakra-ui/react';
function App() {
  return (
    <div colorScheme="red" className="App">
    <Navbar/>
    <Box colorScheme='red' height='100vh' > <Photobook imageData={DECIMAGES}/></Box>
    <Box  > <Photobook imageData={NOVIMAGES}/></Box>
    
    </div>
  );
}

export default App;
