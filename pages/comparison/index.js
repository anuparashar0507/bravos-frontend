import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import {
  VStack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  Heading,
  Text,
} from "@chakra-ui/react";
import Comparison from "@/containers/Comparison/Comparison";
export default function ComparisonPage() {
  return (
    <>
      <Head>
        <title>Bravos | Comparison</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <VStack w={"100%"} top={0}>
        <VStack
          w={"100%"}
          top={0}
          justify={"flex-start"}
          align={"flex-start"}
          px={2}
        >
          <Heading size={"sm"} color={"blue.700"}>
            Comparison
          </Heading>
        </VStack>

        <Comparison />
      </VStack>
    </>
  );
}