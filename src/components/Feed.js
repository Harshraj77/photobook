import React from 'react'
import { Box, VStack, HStack, useMediaQuery } from '@chakra-ui/react'
import SingleCard from './SingleCard'
import { Link } from 'react-router-dom'

export default function Feed(props) {
  const { fileData } = props
  const [isMobile] = useMediaQuery("(max-width: 768px)")

  return (
    <Box px={20} >
      {isMobile ? (
        <VStack spacing={4} align="flex-start" alignContent='center' alignItems='center'>
          {fileData.map((file) => (
            <Box  key={file.id}>
              <Link to={`book/${file.id}`}>
                <SingleCard thumbnail={file.images[0]} book={file} fileData={file}/>
              </Link>
            </Box>
          ))}
        </VStack>
      ) : (
        <HStack justify='start' alignContent='center' alignItems='center'>
          {fileData.map((file) => (
            <Box key={file.id}>
              <Link to={`book/${file.id}`}>
                <SingleCard  thumbnail={file.images[0]} fileData={file} />
              </Link>
            </Box>
          ))}
        </HStack>
      )}
    </Box>
  )
}
