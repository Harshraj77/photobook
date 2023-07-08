import { Flex } from '@chakra-ui/react';
import Logo from './Logo'
import StyleColorMode from './StyleColourMode';
const Navbar = () => {
  return (
    <Flex justifyContent={'space-between'} p={4} wrap={'wrap'}>
      <Logo pl={5} fontSize={'3xl'} />
      <Flex justifyContent={'flex-end'}>

        < StyleColorMode/>
      </Flex>
    </Flex>
  );
};

export default Navbar;