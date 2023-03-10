import {
  Flex,
  Icon,
  IconButton,
  InputGroup,
  InputLeftElement,
  Input,
  Avatar,
  useColorModeValue,
  useColorMode,
  VStack,
  Button,
} from "@chakra-ui/react";
import { FiSearch, FiMenu } from "react-icons/fi";
import { FaBell, FaMoon, FaSun } from "react-icons/fa";
import { useState } from "react";

const Header = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const { toggleColorMode: toggleMode } = useColorMode();

  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const text = useColorModeValue("dark", "light");
  const handleDownloadClick = () => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      console.log("This will run after 1 second!");
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  };
  return (
    <VStack>
      <Flex
        as="header"
        align="center"
        justify="space-between"
        w="full"
        px="4"
        bg="white"
        position={"sticky"}
        _dark={{
          bg: "gray.800",
        }}
        borderBottomWidth="1px"
        borderColor="blackAlpha.300"
        h="14"
      >
        <IconButton
          aria-label="Menu"
          display={{
            base: "inline-flex",
            md: "none",
          }}
          onClick={props.onClick}
          icon={<FiMenu />}
          size="sm"
        />
        <IconButton
          aria-label="Menu"
          display={{
            base: "none",
            md: "inline-flex",
          }}
          onClick={props.onClickCollapse}
          _hover={{
            bg: "gray.400",
          }}
          icon={<FiMenu />}
          size="sm"
        />
        <InputGroup
          w="96"
          display={{
            base: "none",
            md: "flex",
          }}
        >
          <InputLeftElement color="gray.500">
            <FiSearch />
          </InputLeftElement>
          <Input placeholder="Search ..." />
        </InputGroup>
        {/* <IconButton
          size="md"
          fontSize="lg"
          aria-label={`Switch to ${text} mode`}
          variant="ghost"
          color="current"
          ml={{ base: "0", md: "3" }}
          onClick={toggleMode}
          icon={<SwitchIcon />}
        /> */}
        <Button
          bg={"blue.700"}
          color={"white"}
          isLoading={isLoading}
          loadingText={"Downloading"}
          onClick={() => handleDownloadClick()}
        >
          {" "}
          Download Global Model
        </Button>
        <Flex align="center">
          <Icon color="gray.500" as={FaBell} cursor="pointer" />
          <Avatar
            ml="4"
            size="sm"
            name="anubra266"
            src="https://avatars.githubusercontent.com/u/30869823?v=4"
            cursor="pointer"
          />
        </Flex>
      </Flex>
    </VStack>
  );
};

export default Header;
