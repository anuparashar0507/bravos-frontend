import { Box, Flex, Text, IconButton, HStack } from "@chakra-ui/react";
import NavItem from "./NavItem";
import { FaRss, FaClipboardCheck } from "react-icons/fa";
import { HiCollection, HiCode } from "react-icons/hi";
import { AiFillHome } from "react-icons/ai";
import { BsGearFill } from "react-icons/bs";
import { IoGitCompare } from "react-icons/io5";
// import { FiSearch, FiMenu } from "react-icons/fi";

import Link from "next/link";
const Sidebar = (props) => (
  <Box
    as="nav"
    pos="fixed"
    top="0"
    left="0"
    zIndex="sticky"
    h="full"
    pb="10"
    overflowX="hidden"
    overflowY="auto"
    bg="blue.700"
    _dark={{
      bg: "gray.800",
    }}
    borderColor="blackAlpha.300"
    borderRightWidth="1px"
    w="60"
    {...props}
  >
    <HStack justify={"space-between"} px="4" py="5" align="center">
      <Text fontSize="2xl" ml="2" color="white" fontWeight="semibold">
        Bravos
      </Text>
    </HStack>
    <Flex
      direction="column"
      as="nav"
      fontSize="sm"
      color="gray.600"
      aria-label="Main Navigation"
    >
      <NavItem icon={AiFillHome}>
        <Link href="/">Home</Link>
      </NavItem>
      <NavItem icon={IoGitCompare}>
        <Link href="/comparison">Comparison</Link>
      </NavItem>
    </Flex>
  </Box>
);
export default Sidebar;
