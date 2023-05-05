import React from 'react'
import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Spacer, Stack, Text } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

export const HomeProductCard = ({id,title,price,category,rating,avatar,description}) => {
    console.log(id);
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
            <Text fontSize='20px' fontWeight="bold">{category}</Text>
          <Heading size="s">{title}</Heading>
         
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" bg="#F9A825" color='white'>
            <Link to={`/:${id}`}>More Info</Link>
          </Button><Spacer/>
          <Button variant="ghost" colorScheme="blue">
            <Link to={`/cart`}>Add to cart</Link>
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  )
}
