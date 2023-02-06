import React from "react";
import Card from "@components/Card";
import Image from "next/image";
import Link from "next/link";
import ImageContainer from "@/components/ImageContainer";
import { Heading, HStack, VStack, Button } from "@chakra-ui/react";
import img1 from "@assets/comparison/1.png";
import img2 from "@assets/comparison/2.png";
import img3 from "@assets/comparison/3.png";
const Comparison = () => {
  return (
    <VStack w={"100%"} spacing={0} pb={12}>
      <HStack>
        <Card width={"400px"} hight={"350px"}>
          <VStack>
            <Heading
              color={"blue.700"}
              w={"100%"}
              textAlign={"left"}
              size={"md"}
            >
              Randomly selecting silos between training rounds and model quality
            </Heading>
            <Image src={img1} />
          </VStack>
        </Card>
        <Card width={"400px"} hight={"350px"}>
          <VStack>
            <Heading
              color={"blue.700"}
              w={"100%"}
              textAlign={"left"}
              size={"md"}
            >
              FevAvg vs local model performance
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
              FevAvg vs local models at increasing levels of non-iidness
            </Heading>
            <Image src={img3} />
          </VStack>
        </Card>
      </HStack>
      <Button as={Link} href="/mpa" bg={"blue.700"} color={"white"}>
        Go to Model Performance Metrics
      </Button>
    </VStack>
  );
};

export default Comparison;
