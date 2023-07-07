import React, { useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import { Box, Center, IconButton, Image, VStack } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { ArrowRightIcon, ArrowLeftIcon } from '@chakra-ui/icons'
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
            height={550}
            drawShadow={false}
            showCover={true}
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
          {/* <Button
            colorScheme="blue"
            mx={2}
            variant="outline"
            onClick={() => book.current.pageFlip().flipPrev()}
          >
            Previous page
          </Button> */}
          <IconButton
            colorScheme="red"
            icon={<ArrowLeftIcon/>}
            mx={2}
            onClick={() => book.current.pageFlip().flipPrev()}/>
          <IconButton
            mx={2}
            colorScheme="red"
            icon={<ArrowRightIcon/>}
            focusable={true}
            onClick={() => book.current.pageFlip().flipNext()}
          />

          
        </Box>
      </VStack>
    </Center>
  );
}

export default Photobook;
