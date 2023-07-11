import React, { useRef,useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import { ArrowRightIcon, ArrowLeftIcon} from "@chakra-ui/icons";
import { useMediaQuery,useColorMode ,Text,Box, Center, IconButton, Image, VStack,Card,CardBody,Stack,Heading,StackDivider } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import files from "./Files";

function Photobook(props) {
  //passing a refernce and then adding it to html5flipbook
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const book = useRef();
  const { colorMode } = useColorMode();

  const { file } = useParams();
  const fileId = parseInt(file);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top position
  }, []);


  return (
    <Box>
     <Text
   sx={{ color: colorMode === 'light' ? 'red.500' : 'red.100',fontSize :{base:'2xl', lg:'4xl'} }}
  // fontSize='4xl'
  fontWeight='bold'
  textAlign='center'
>
  {files[fileId-1].title}
</Text>

      <Center mt={2} >
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
        <>
        <Box >
          {/* <Text m={2} > Designed by : {files[fileId-1].design}</Text>
          <Text m={2}> Photographers : {files[fileId-1].photographer}</Text> */}
  
        </Box>
        </>
      </VStack>
    </Center>
    <Card  sx={{ mx: { base: '10px', md: '30px' } }}>
  {/* <CardHeader>
    <Heading size='md'>Info</Heading>
  </CardHeader> */}
  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Design: 
        </Heading>
        <Text pt='2' fontSize='sm'>
        {files[fileId-1].design}
        </Text>
      </Box>
      <Box>
        <Heading size='sm' textTransform='uppercase'>
          Photographers
        </Heading>
        <Text pt='2' fontSize='sm'>
        {files[fileId-1].photographer}
        </Text>
      </Box>
      {/* <Box>
        <Heading size='xs' textTransform='uppercase'>
          Analysis
        </Heading>
        <Text pt='2' fontSize='sm'>
          See a detailed analysis of all your business clients.
        </Text>
      </Box> */}
    </Stack>
  </CardBody>
</Card>
    </Box>
    
  );
}

export default Photobook;
