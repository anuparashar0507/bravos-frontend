import React from "react";
import Image from "next/image";
import {
  Box,
  Center,
  Heading,
  Flex,
  Stack,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";
const Card = ({ children, width, hight, size }) => {
  return (
    <Center py={6} m={0}>
      <Flex
        w={size === "sm" ? "200px" : width}
        h={size === "sm" ? "200px" : hight}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={4}
        my={"auto"}
        align={"center"}
      >
        {children}
      </Flex>
    </Center>
  );
};

export default Card;
