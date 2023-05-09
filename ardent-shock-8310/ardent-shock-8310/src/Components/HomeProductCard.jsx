import React, { useState } from 'react'
import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Spacer, Stack, Text, useToast } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import axios from 'axios';

export const HomeProductCard = ({id,title,price,category,rating,avatar,description}) => {
    // console.log(id);
    const [currData, setCurrData] = useState({})
    const [fetchedCartData , setFetchedCartData] = useState([]);
    const toast  = useToast();

    let  currdata = {
      title: '',
      price : '',
      category : '',
      rating : '',
      avatar : '',
      description : ''
    };
    let fetchedCartdata = []

    const handleClick = ()=>{
      console.log(id);
      axios.get(`https://backend-masaiverse.onrender.com/Products/${id}`).then((res)=>{
        console.log(res.data);
        // setCurrData(res.data);

        currdata = {
          ...currdata,
          title: res.data.title,
          price : res.data.price,
          category : res.data.category,
          rating : res.data.rating,
          avatar : res.data.avatar,
          description : res.data.description,
          quantity : 1
        };
        // console.log(currdata);
        
        axios.get(`https://backend-masaiverse.onrender.com/cartdetails`).then((res)=>{
          // console.log(res.data);
          // setFetchedCartData(res.data)
          fetchedCartdata = res.data
          console.log(fetchedCartdata);
          console.log(currdata);
          let filteredData = fetchedCartdata?.filter((ele)=> ele.title === currdata.title && ele.price === currdata.price)
    
          console.log(filteredData);
  
          if(filteredData.length === 0){
            console.log(currdata);
            axios.post(`https://backend-masaiverse.onrender.com/cartdetails`, currdata).then((res)=>{
              console.log(res.data);
              toast({
                title: 'Yay !',
                description: "Product Added to Cart !",
                status: 'success',
                duration: 3000,
                isClosable: true,
              })
            })
          }
          else{
            toast({
              title: 'Oops !',
              description: "Product already exist !",
              status: 'success',
              duration: 3000,
              isClosable: true,
            })
          }
        })
      })





    }
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
            <Link to={`/${id}`}>More Info</Link>
          </Button><Spacer/>
          <Button variant="ghost" colorScheme="blue" onClick={handleClick}>
            <Link >Add to cart</Link>
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  )
}
