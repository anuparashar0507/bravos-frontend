import React from "react";
import Image from "next/image";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";
const ImageContainer = ({ img }) => {
  return (
    <Box bg={"gray.100"}>
      <Image src={img} />
    </Box>
  );
};

export default ImageContainer;
