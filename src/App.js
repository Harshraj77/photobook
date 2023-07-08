// import logo from './logo.svg';
import './App.css';
// import Photobook from './components/Photobook';
import Navbar from './components/Navbar';
import DECIMAGES from './Images/DecemberImages';
import NOVIMAGES from './Images/NovemberImages';
import { Box, HStack } from '@chakra-ui/react';
import Footer from './components/Footer';
import Adavya from './Images/Adavya'
import Photobook from './components/Photobook';
// import Feed from './components/Feed';
import SingleCard from './components/SingleCard';
import files from './components/Files';
import { Link } from "react-router-dom";
function App() {
 
  return (
    <div className="App">
    <Navbar/>
    
    {/* <Box  > <Photobook imageData={DECIMAGES}/></Box>
    <Box  > <Photobook imageData={NOVIMAGES}/></Box>
    <Box  > <Photobook imageData={Adavya}/></Box> */}
    {/* <Box justifyContent='center' alignItems='center'><Feed fileData={files}/></Box> */}
    <Box px={20}>
      <HStack justify='start'>
        {files.map((file) => (
          <Box mx={4} key={file.id}>
           <Link to='/photobook/{file.id}'>
              <SingleCard thumbnail={file.images[0]} />
           </Link>
          </Box>
        ))}
      </HStack>
    </Box>
    <Footer/>
    
    </div>
  );
  
}

export default App;
