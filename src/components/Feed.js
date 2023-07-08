import React from 'react'
import { Box,HStack } from '@chakra-ui/react'
import SingleCard from './SingleCard';
import dec from "../Images/DecemberImages";

export default function Feed(props) {
//   return (
//     <Box px={20}>
//       <HStack justify='space-between'>
//         {props.fileData.map((item) => (
//           <Box mx={2} key={item.id}>
//             <SingleCard thumbnail={item.image} />
//           </Box>
//         ))}
//       </HStack>
//     </Box>
//   )
const { fileData } = props;

  return (
    <Box px={20}>
      <HStack justify='start'>
        {fileData.map((file) => (
          <Box mx={4} key={file.id}>
            <SingleCard thumbnail={file.images[0]} book={file} />
          </Box>
        ))}
      </HStack>
    </Box>
  );
}
