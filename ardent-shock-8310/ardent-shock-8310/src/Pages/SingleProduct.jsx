import { CheckIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  HStack,
  Heading,
  Image,
  Stack,
  VStack,
  Text,
  Divider,
  Radio,
  Box,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import heart from "../Images/Icons/heart.png";

export const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [size, setSize] = useState(1);
  const [quantity, setQuantity] = useState(0);
  const [colorSelect, setColorSelect] = useState(false);
  const [desc, setDesc] = useState(false);
  const [rev, setRev] = useState(false);
  // console.log(id);
  useEffect(() => {
    axios.get(`http://localhost:8080/Products/${id}`).then((res) => {
      // console.log(res.data);
      setProduct(res.data);
    });
  }, [colorSelect, size]);

  console.log(colorSelect);

  const handleQuantity = (val) => {
    setQuantity((pre) => pre + val);
  };

  const handleDesc = ()=>{
    if(desc) setDesc(false)
    else setDesc(true)
  }
  const handleReview = ()=>{
    if(rev) setRev(false)
    else setRev(true)
  }

  return (
    <>
      <Breadcrumb
        spacing="8px"
        separator={<ChevronRightIcon color="gray.500" />}
        ml="40px"
        mt="10px"
      >
        <BreadcrumbItem>
          <BreadcrumbLink href="/" _hover={{ color: "red" }}>
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage color="#F9A825">
          <BreadcrumbLink href="#">Single Product</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <HStack w="90%" m="auto" mt="50px" mb="50px">
        <Image
          border="2px solid grey"
          p="20px"
          borderRadius="30px"
          src={product.avatar}
          boxSize="45%"
        />
        <VStack pl="25px">
          <Stack textAlign="start" spacing={5}>
            <Heading fontSize="22px" color="#01579B">
              {product.title}
            </Heading>
            <Heading fontSize="35px"> ₹ {product.price} /- </Heading>
            <Heading display="flex" alignItems="center" fontSize="22px">
              Availability :
              <Heading fontSize="22px" color="green">
                <CheckIcon ml="15px" mr="5px" /> In Stock
              </Heading>
            </Heading>
            <Text fontSize="18px">
              Hurry up ! only 34 products left in Stock !
            </Text>
            <Divider h="2px" bg="grey" />
            <HStack>
              <Text fontSize="20px" fontWeight="bold">
                Color :
              </Text>

              <Box
                h="28px"
                w="28px"
                border={colorSelect ? "none" : "1px solid"}
                borderRadius="50%"
                p="2px"
                onClick={() => {
                  setColorSelect(false);
                }}
              >
                <Box w="22px" h="22px" bg="grey" borderRadius="50%"></Box>
              </Box>

              <Box
                h="28px"
                w="28px"
                border={colorSelect ? "1px solid" : "none"}
                borderRadius="50%"
                p="2px"
                onClick={() => {
                  setColorSelect(true);
                }}
              >
                <Box w="22px" h="22px" bg="#91DE98" borderRadius="50%"></Box>
              </Box>
            </HStack>

            <HStack>
              <Text fontSize="20px" fontWeight="bold">
                Size :
              </Text>
              <Box
                border={size === 1 ? "2px solid" : "none"}
                bg="#EEEEEE"
                borderRadius="5px"
                p="3px 5px 3px 9px"
                onClick={() => {
                  setSize(1);
                }}
              >
                <Box h="25px" w="25px">
                  30
                </Box>
              </Box>
              <Box
                border={size === 2 ? "2px solid" : "none"}
                bg="#EEEEEE"
                borderRadius="5px"
                p="3px 5px 3px 9px"
                onClick={() => {
                  setSize(2);
                }}
              >
                <Box h="25px" w="25px">
                  56
                </Box>
              </Box>
              <Box
                border={size === 3 ? "2px solid" : "none"}
                bg="#EEEEEE"
                borderRadius="5px"
                p="3px 5px 3px 9px"
                onClick={() => {
                  setSize(3);
                }}
              >
                <Box h="25px" w="25px">
                  42
                </Box>
              </Box>
              <Box
                border={size === 4 ? "2px solid" : "none"}
                bg="#EEEEEE"
                borderRadius="5px"
                p="3px 5px 3px 9px"
                onClick={() => {
                  setSize(4);
                }}
              >
                <Box h="25px" w="25px">
                  48
                </Box>
              </Box>
            </HStack>

            <HStack>
              <Text fontSize="20px" fontWeight="bold">
                Quantity :
              </Text>
              <Button
                isDisabled={quantity === 1}
                onClick={() => handleQuantity(-1)}
              >
                -
              </Button>
              <Button>{quantity}</Button>
              <Button onClick={() => handleQuantity(1)}>+</Button>
            </HStack>
            <HStack spacing={50}>
              <Button bg="#F9A825" color="white" p="25px" borderRadius="13px">
                <Link to="/cart">Add to Cart</Link>
              </Button>
              <Button bg="#F9A825" color="white" p="25px" borderRadius="13px">
                Buy It Now
              </Button>
              <Image w="5%" src={heart} />
            </HStack>
          </Stack>
        </VStack>
      </HStack>

      <HStack spacing={5} mb="20px">
        <Button ml="40%" onClick={handleDesc}>
          Description
        </Button>
        <Button color="white" bg="#01579B" onClick={handleReview}>
          Reviews
        </Button>
      </HStack>
      <Box display={!desc && "none"} border='1px solid grey' borderRadius='15px' w='70%' p='20px'  m='auto' mb='30px' fontSize='25px' fontFamily=''>{product.title}</Box>
      
      <Box display={!rev && "none"} border='1px solid grey' borderRadius='15px' w='70%' p='20px'  m='auto' mb='30px' fontSize='25px' fontFamily=''>No Reviews Yet !!</Box>
      
    </>
  );
};
