import React from "react";
import {
  Box,
  VStack,
  Heading,
  Flex,
  Stack,
  Avatar,
  Button,
  Select,
  useColorModeValue,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import Card from "@components/Card";
import Link from "next/link";
const Integrate = () => {
  return (
    <VStack w={"100%"} spacing={0}>
      <Card width={"600px"}>
        <VStack justify={"flex-start"} w={"100%"}>
          <FormControl>
            <FormLabel>Open with</FormLabel>
            <Select defaultValue={"local"}>
              <option value={"local"}>Local</option>
              <option value={"global"}>Global</option>
            </Select>
          </FormControl>
          <Button as={Link} href="/comparison" bg={"blue.700"} color={"white"}>
            Submit
          </Button>
        </VStack>
      </Card>
    </VStack>
  );
};

export default Integrate;
