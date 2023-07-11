import React, { useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import { ArrowRightIcon, ArrowLeftIcon} from "@chakra-ui/icons";
import { useMediaQuery,useColorMode ,Text,Box, Center, IconButton, Image, VStack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import files from "./Files";

function Photobook(props) {
  //passing a refernce and then adding it to html5flipbook
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const book = useRef();
  const { colorMode } = useColorMode();

  const { file } = useParams();
  const fileId = parseInt(file);

  return (
    <Box>
     
      <Center mt={5}>
      <VStack spacing={0} >
        <Box width="fit-content" height="fit-content">
          {/* mobile view code */}
          {isMobile && (
            <HTMLFlipBook
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
            >
              {files[fileId - 1]?.images.map((idx) => (
                <Box>
                  <Image
                    key={idx}
                    src={idx}
                    boxShadow={
                      colorMode === "light"
                        ? "rgba(0, 0, 0, 0.75) 0px 7px 29px 0px"
                        : "rgba(255, 255, 255, 0.2) 0px 7px 29px 0px"
                    }
                  />
                </Box>
              ))}
            </HTMLFlipBook>
          )}

          {/* Laptop device */}
          {!isMobile && (
            <HTMLFlipBook
              width={400}
              height={550}
              drawShadow={false}
              showCover={true}
              ref={book}
              usePortrait={false}
              mobileScrollSupport={true}
            >
              {files[fileId - 1]?.images?.map((idx) => (
                <Box width="fit-content" height="fit-content">
                  <Image
                    key={idx + 1}
                    src={idx}
                    boxShadow={
                      colorMode === "light"
                        ? "rgba(0, 0, 0, 0.75) 0px 7px 29px 0px"
                        : "rgba(255, 255, 255, 0.2) 0px 7px 29px 0px"
                    }
                  />
                </Box>
              ))}
            </HTMLFlipBook>
          )}
        </Box>
        <Box py='30px'>
          <IconButton
            colorScheme="red"
            icon={<ArrowLeftIcon />}
            mx={2}
            onClick={() => book.current.pageFlip().flipPrev()}
          />
          <IconButton
            mx={2}
            colorScheme="red"
            icon={<ArrowRightIcon />}
            focusable={true}
            onClick={() => book.current.pageFlip().flipNext()}
          />
        </Box>
        <Center>
        <Box sx={{width:{sm:300,lg:800}}}>
          <Text m={2} > Designed by : {files[fileId-1].design}</Text>
          <Text m={2}> Photographers : {files[fileId-1].photographer}</Text>
        </Box>
        </Center>
      </VStack>
    </Center>
    </Box>
    
  );
}

export default Photobook;
