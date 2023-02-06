import React from "react";
import Card from "@components/Card";
import Image from "next/image";
import { Heading, HStack, VStack, Button } from "@chakra-ui/react";
import img1 from "@assets/mpa/1.png";
import img2 from "@assets/mpa/2.png";
const ModelPerformance = () => {
  return (
    <VStack w={"100%"} spacing={0} pb={12}>
      <Card width={"800px"}>
        <VStack>
          <Heading
            color={"blue.700"}
            mb={8}
            w={"100%"}
            textAlign={"left"}
            size={"md"}
          >
            Model Performance Metrics
          </Heading>
          <Image src={img1} />
        </VStack>
      </Card>
    </VStack>
  );
};

export default ModelPerformance;
