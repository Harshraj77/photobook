import React from 'react'
import { Box,HStack } from '@chakra-ui/react'
import SingleCard from './SingleCard';
import { Link } from 'react-router-dom';
export default function Feed(props) {

const { fileData } = props;

  return (
    <Box px={20}>
      <HStack justify='start'>
        {fileData.map((file) => (
          <Box mx={4} key={file.id} >
            <Link to={`book/${file.id}`}><SingleCard thumbnail={file.images[0]} book={file} /></Link>
          </Box>
        ))}
      </HStack>
    </Box>
  );
}
