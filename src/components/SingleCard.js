import React from "react";

import {
  Card,
  CardBody,
  Stack,
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
    <div>
      {isMobile ? (
        <Card
          width="200px"
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
                height={200}
                borderRadius="lg"
              />
            </Flex>
            <Stack mt="6" spacing="3">
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter alignItems="center" justifyContent="center">
            <Text fontSize="md">Design: Harsh Raj</Text>
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
            <Stack mt="6" spacing="3">
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter alignItems="center" justifyContent="center">
            <Text fontSize="md">Design: Harsh Raj</Text>
          </CardFooter>
        </Card>
      )}
    </div>
  );
}
