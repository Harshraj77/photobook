import React, { useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import { Box, Center, IconButton, Image, VStack } from "@chakra-ui/react";
import { ArrowRightIcon, ArrowLeftIcon } from '@chakra-ui/icons'
import { useMediaQuery } from "@chakra-ui/react";
import { useColorMode } from '@chakra-ui/react';
import { useParams } from "react-router-dom";
import files from "./Files";
function Photobook(props) {
  //passing a refernce and then adding it to html5flipbook
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const book = useRef();  
  const { colorMode } = useColorMode();

  const {file} = useParams();
  const fileId = parseInt(file);
  
  return ( 
    
    <Center mt={5}>
      <VStack spacing={0}>
        <Box width="auto"
            height="auto" >
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
            {files[fileId-1]?.images.map((idx) => (
              <Box >
                <Image key={idx} src={idx} />
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
            {files[fileId-1]?.images?.map((idx) => (
              <Box>
                <Image key={idx+1} src={idx} />
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
            m={2}
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
