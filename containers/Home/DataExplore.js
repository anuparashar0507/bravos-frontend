import React from "react";
import Card from "@components/Card";
import ImageContainer from "@/components/ImageContainer";
import { HStack, VStack, Heading } from "@chakra-ui/react";
import img1 from "@assets/data-explore/1.png";
import img2 from "@assets/data-explore/2.png";
import img3 from "@assets/data-explore/3.png";
import Image from "next/image";

const DataExplore = () => {
  return (
    <VStack w={"100%"} justifyItems={"center"} h={"auto"} spacing={1}>
      <HStack>
        <Card width={"400px"} hight={"300px"}>
          <VStack align={"flex-start"}>
            <Heading
              color={"blue.700"}
              w={"100%"}
              textAlign={"left"}
              size={"md"}
            >
              Univariate Distribution (Numerical)
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
              Population Stability Index
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
              Univariate Distribution (Categorical)
            </Heading>
            <Image src={img3} />
          </VStack>
        </Card>
      </HStack>
    </VStack>
  );
};

export default DataExplore;
