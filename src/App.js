// import logo from './logo.svg';
import './App.css';
import Photobook from './components/Photobook';
import StyleColourMode from './components/StyleColourMode';
import DECIMAGES from './Images/DecemberImages';
import NOVIMAGES from './Images/NovemberImages';
import { Box } from '@chakra-ui/react';
function App() {
  return (
    <div className="App">
    <StyleColourMode/>
    <Box  pt={5}> <Photobook imageData={DECIMAGES}/></Box>
    <Box  pt={5}> <Photobook imageData={NOVIMAGES}/></Box>
    
    </div>
  );
}

export default App;
