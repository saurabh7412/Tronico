import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const slider1 = [
  {
    title: "NIKON D3300 DSLR Camera Body with Single Lens",
    image:
      "https://www.ephotozine.com/articles/nikon-d3300-dslr-review-24003/images/highres-Nikon-D3300-Red-14_1391689033.jpg",
    desc: "The Nikon D3300 delivers exceptional pictures with its 24.2 megapixels, EXPEED 4 processing engine, and a variety of other features and functions.",
  },
  {
    title: "Inspiron 16 Laptop",
    image:
      "https://rukminim1.flixcart.com/image/416/416/kpft18w0/computer/d/s/s/inspiron-7415-2-in-1-laptop-dell-original-imag3nze3gnqnncy.jpeg?q=70",
    desc: "Stylish & Portable Thin and Light Laptop , 15.6 Inch Full HD TN 250nits Anti-glare ,Light Laptop without Optical Disk Drive",
  },
  {
    title: "Redgear Pro Wireless Gamepad",
    image:
      "https://rukminim1.flixcart.com/image/416/416/gamepad/p/p/g/red-gear-pro-series-wireless-original-imaehzcnttukub87.jpeg?q=70",
    desc: "2 Analog Triggers, 2 Analog Sticks, 11 Digital Keys, Supports X Input and Direct Input, Upto 10 hrs of Gameplay",
  },
];

export const Slider1 = ({ data }) => {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      boxSize="100%"
      p="10px"
      // border='1px solid red'
    >
      <Image
        objectFit="cover"
        borderRadius="30px"
        pr="20px"
        boxSize="30%"
        src={slider1[data].image}
        alt="Caffe Latte"
      />
      <VStack spacing="90px" pt="60px">
        <VStack w="100%">
          <Heading size="2xl">{slider1[data].title}</Heading>

          <Text py="2" fontSize={{ base: "15px", md: "20px", lg: "25px" }}>
            {slider1[data].desc}
          </Text>
        </VStack>

        <CardFooter>
          <HStack spacing="100px">
            <Button variant="solid" bg="#F9A825" color="white">
              Shop Now
            </Button>
            <Button variant="solid" bg="#F9A825" color="white">
              View More
            </Button>
          </HStack>
        </CardFooter>
      </VStack>
    </Card>
  );
};

export const Slider2 = () => {
  return (
    <>
      <SimpleGrid
        boxSize="90%"
        margin="auto"
        // spacing={4}
        // templateColumns="repeat(3,1fr)"
        minChildWidth='120px' spacing='40px'
        p="10px"
        pl='40px'
      >
        <Card boxSize="33%">
          <HStack>
            <Image src="https://techcrunch.com/wp-content/uploads/2020/09/Screen-Shot-2020-09-24-at-1.22.17-PM.jpg" borderRadius='25px'/>
                <Spacer/>
            <VStack>
              <Heading size="md">
                {" "}
                <Button  bg="#F9A825" color="white">Speaker</Button>
              </Heading>
              <Text>(6 Items)</Text>
            </VStack>
          </HStack>
        </Card>
        <Card boxSize="33%">
          <HStack>
            <Image src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXBwbGUlMjBsYXB0b3B8ZW58MHx8MHx8&w=1000&q=80" borderRadius='25px'/>
            <Spacer/>
            <VStack>
              <Heading size="md">
                {" "}
                <Button  bg="#F9A825" color="white">Desktop & Laptop</Button>
              </Heading>
              <Text>(6 Items)</Text>
            </VStack>
          </HStack>
        </Card>
        <Card boxSize="33%">
          <HStack>
            <Image src="https://www.imaging-resource.com/PRODS/nikon-d3300/Z-d3300-beauty.JPG" borderRadius='25px'/>
            <Spacer/>
            <VStack>
              <Heading size="md">
                {" "}
                <Button  bg="#F9A825" color="white">DSLR Camera</Button>
              </Heading>
              <Text>(6 Items)</Text>
            </VStack>
          </HStack>
        </Card>
      </SimpleGrid>
    </>
  );
};

// export default Slider1 ;
