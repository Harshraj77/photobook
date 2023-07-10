import { Flex } from '@chakra-ui/react';
import Logo from './Logo'
import StyleColorMode from './StyleColourMode';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <Flex justifyContent={'space-between'} p={4} wrap={'wrap'}>
     <Link to="/"> <Logo pl={5} fontSize={'3xl'} /></Link>
      <Flex justifyContent={'flex-end'}>

        < StyleColorMode/>
      </Flex>
    </Flex>
  );
};

export default Navbar;