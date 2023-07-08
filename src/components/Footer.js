import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import Logo from './Logo';

const Footer = () => {
  return (
    <Flex justifyContent={'space-between'} p={10} direction={['column','column','row','row']}>
      <Logo fontSize={'3xl'} />
      <Text fontSize={'xl'} verticalAlign={'baseline'}>
        Made with 💝 by Harsh
      </Text>
    </Flex>
  );
};

export default Footer;