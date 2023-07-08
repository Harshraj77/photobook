import React from "react";

import {
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  Divider,
  Image,
  CardFooter,
  ButtonGroup,
  Button,
  Flex,
} from "@chakra-ui/react";

import { useColorMode } from "@chakra-ui/react";

import image1 from "../assets/DecemberPhotoBook/1.webp";
export default function SingleCard(props) {
  const { colorMode } = useColorMode();
  return (
    <div>
      <Card maxW="300px"  colorScheme='whatsapp' boxShadow={
            colorMode === 'light'
              ? 'rgba(0, 0, 0, 0.75) 0px 7px 29px 0px'
              : 'rgba(255, 255, 255, 0.2) 0px 7px 29px 0px'
          }>
        <CardBody alignItems="center" justifyItems="center">
          {/* <Image
      src={image1}
      alt='image'
      height={300}
      borderRadius='lg'
      alignItems='center' justifyItems='center'
    /> */}
          <Flex alignItems="center" justifyContent="center">
            
            <Image src={props.thumbnail} alt="image" height={300} borderRadius="lg" />
          </Flex>
          <Stack mt="6" spacing="3" >
            {/* <Heading size="md">December PhotoBook</Heading> */}
            {/* <Text>
        
      </Text> */}
            {/* <Text color='blue.600' fontSize='2xl'>
        $450
      </Text> */}
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter alignItems="center" justifyContent="center">
          {/* <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='red'>
        Open
      </Button>
      <Button variant='ghost'  colorScheme='whatsapp'>
        Add to cart
      </Button>
    </ButtonGroup> */}
          <Text  fontSize="md">
            Design: Harsh Raj
          </Text>
        </CardFooter>
      </Card>
    </div>
  );
}
