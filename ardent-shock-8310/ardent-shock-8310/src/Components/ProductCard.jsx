import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Spacer, Stack, Text } from "@chakra-ui/react";
import React from "react";

export const ProductCard = ({id,title,price,category,rating,avatar,description}) => {
    // console.log(id,title,price,category,rating,avatar,description);
  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src={avatar}
          alt="avatar"
          borderRadius="lg"
          boxShadow=" rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
          p='10px'
        />
        <Stack mt="6" spacing="3">
            <Text fontSize='20px' fontWeight="bold">Category - {category}</Text>
          <Heading size="s">{title}</Heading>
          <Text>
            {description}
          </Text>
          <Text color="blue.600" fontSize="2xl">
          Price : ₹ {price} /-
          </Text>
          <Heading size="md">Rating : {rating}</Heading>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" bg="#F9A825" color='white' >
            More Info
          </Button><Spacer/>
          <Button variant="ghost" colorScheme="blue">
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};
