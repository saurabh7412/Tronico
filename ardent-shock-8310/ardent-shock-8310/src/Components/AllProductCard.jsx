import React from 'react'
import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Spacer, Stack, Text } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

export const AllProductCard = ({id,title,price,category,rating,avatar,description}) => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src={avatar}
          alt="avatar"
          borderRadius="lg"
          boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
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
