import React from "react";

import {
  Card,
  CardBody,
  Stack,
  Box,
  Text,
  Divider,
  Image,
  CardFooter,
  Flex,
} from "@chakra-ui/react";

import { useColorMode } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
export default function SingleCard(props) {
  const { colorMode } = useColorMode();
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  return (
    <Box mx={4}>
      {isMobile ? (
        <Card
          width="230px"
          colorScheme="whatsapp"
          boxShadow={
            colorMode === "light"
              ? "rgba(0, 0, 0, 0.75) 0px 2px 4px 0px"
              : "rgba(255, 255, 255, 0.2) 0px 2px 4px 0px"
          }
        >
          <CardBody alignItems="center" justifyItems="center">
            <Flex alignItems="center" justifyContent="center">
              <Image
                src={props.thumbnail}
                alt="image"
                height={250}
                width={300}
                borderRadius="lg"
              />
            </Flex>
            <Stack mt="6" spacing="3" alignContent='center' alignItems='center'>
            <Text fontSize="md">{props.fileData.title}</Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter alignItems="center" justifyContent="center">
          <Text fontSize="md">Theme: {props.fileData.theme}</Text>
          </CardFooter>
        </Card>
      ) : (
        <Card
          maxW="300px"
          colorScheme="whatsapp"
          boxShadow={
            colorMode === "light"
              ? "rgba(0, 0, 0, 0.75) 0px 2px 4px 0px"
              : "rgba(255, 255, 255, 0.2) 0px 2px 4px 0px"
          }
        >
          <CardBody alignItems="center" justifyItems="center">
            <Flex alignItems="center" justifyContent="center">
              <Image
                src={props.thumbnail}
                alt="image"
                height={300}
                borderRadius="lg"
              />
            </Flex>
            <Stack mt="6" spacing="3" alignContent='center' alignItems='center'>
            <Text fontSize="md">{props.fileData.title}</Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter alignItems="center" justifyContent="center">
            <Text fontSize="md">Theme: {props.fileData.theme}</Text>
          </CardFooter>
        </Card>
      )}
    </Box>
  );
}
