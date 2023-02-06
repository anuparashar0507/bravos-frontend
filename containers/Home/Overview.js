import React from "react";
import Card from "@components/Card";
import ImageContainer from "@/components/ImageContainer";
import { HStack, SimpleGrid, VStack, Heading } from "@chakra-ui/react";
import img1 from "@assets/overview/1.png";
import img2 from "@assets/overview/2.png";
import img3 from "@assets/overview/3.png";
import Image from "next/image";
const Overview = () => {
  return (
    <VStack w={"100%"} justifyItems={"center"} h={"auto"} spacing={1}>
      <HStack>
        <Card width={"400px"} hight={"300px"}>
          <VStack>
            <Heading
              color={"blue.700"}
              w={"100%"}
              textAlign={"left"}
              size={"md"}
            >
              Feature Importance
            </Heading>
            <Image src={img1} />
          </VStack>
        </Card>
        <Card width={"400px"} hight={"300px"}>
          <VStack>
            <Heading
              color={"blue.700"}
              w={"100%"}
              textAlign={"left"}
              size={"md"}
            >
              ROC Curve
            </Heading>
            <Image src={img2} />
          </VStack>
        </Card>
      </HStack>
      <HStack>
        <Card width={"800px"}>
          <VStack>
            <Heading
              color={"blue.700"}
              w={"100%"}
              textAlign={"left"}
              size={"md"}
            >
              Global Explaination{" "}
            </Heading>
            <Image src={img3} />
          </VStack>
        </Card>
      </HStack>
    </VStack>
  );
};

export default Overview;
