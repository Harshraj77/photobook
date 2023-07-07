import React, { useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import { Box, Center, Image, VStack } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
function Photobook(props) {
  //passing a refernce and then adding it to html5flipbook
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const book = useRef();

  return ( 
    <Center mt={5}>
      <VStack spacing={0}>
        <Box>
          {/* mobile view code */}
          {isMobile && <HTMLFlipBook
            // width={200}
            // height={600}
            // drawShadow={true}
            // showCover={false}
            width={550}
            height={733}
            size="stretch"
            minWidth={315}
            maxWidth={1000}
            minHeight={400}
            maxHeight={1533}
            maxShadowOpacity={0.5}
            showCover={true}
            mobileScrollSupport={true}
            ref={book}
            // usePortrait ={true}
          >
            {props.imageData.map((id) => (
              <Box>
                <Image key={id} src={id} />
              </Box>
            ))}
          </HTMLFlipBook>}
           {/* Laptop device */}  
          {!isMobile && <HTMLFlipBook
            width={400}
            height={600}
            drawShadow={false}
            showCover={false}
            ref={book}
            usePortrait ={false}
          >
            {props.imageData.map((id) => (
              <Box>
                <Image key={id} src={id} />
              </Box>
            ))}
          </HTMLFlipBook>}
          
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
