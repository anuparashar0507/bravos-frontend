import React from "react";
import Card from "@components/Card";
import Image from "next/image";

import ImageContainer from "@/components/ImageContainer";
import { Heading, HStack, VStack } from "@chakra-ui/react";
import img1 from "@assets/explore/1.png";
import img2 from "@assets/explore/2.png";
// import img3 from "@assets/explore/3.png";
const Explore = () => {
  return (
    <VStack w={"100%"} spacing={0}>
      <Card width={"800px"}>
        <VStack>
          <Heading color={"blue.700"} w={"100%"} textAlign={"left"} size={"md"}>
            Local Explaination{" "}
          </Heading>
          <Image src={img2} />
        </VStack>
      </Card>
      <Card width={"800px"}>
        <VStack>
          <Heading color={"blue.700"} w={"100%"} textAlign={"left"} size={"md"}>
            Partial Dependency Plots
          </Heading>
          <Image src={img1} />
        </VStack>
      </Card>
    </VStack>
  );
};

export default Explore;
