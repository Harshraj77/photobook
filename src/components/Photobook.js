import React, { useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import { Box, Center, Image, VStack } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

function Photobook(props) {
  //passing a refernce and then adding it to html5flipbook

  const book = useRef();

  return ( 
    <Center mt={5}>
      <VStack spacing={0}>
        <Box >
          <HTMLFlipBook
            width={400}
            height={600}
            drawShadow={false}
            usePortrait={false}
            showCover={true}
            ref={book}
          >
            {props.imageData.map((id) => (
              <Box>
                <Image key={id} src={id} />
              </Box>
            ))}
          </HTMLFlipBook>
        </Box>
        <Box>
          <Button
            colorScheme="blue"
            mx={2}
            variant="outline"
            onClick={() => book.current.pageFlip().flipPrev()}
          >
            Previous page
          </Button>
          <Button
          m={2}
            colorScheme="blue"
            variant="outline"
            onClick={() => book.current.pageFlip().flipNext()}
          >
            Next page
          </Button>
        </Box>
      </VStack>
    </Center>
  );
}

export default Photobook;
