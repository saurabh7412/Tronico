import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  HStack,
  Heading,
  Image,
  Spacer,
  Stack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { CartProductTable } from "../Components/CartProductTable";
import { Link, useNavigate } from "react-router-dom";

let cartArray = JSON.parse(localStorage.getItem("cartArray")) || [];
console.log(cartArray);

export const Cart = () => {
  const [cartData, setCartData] = useState([]);
  const [totalSum, setTotalSum] = useState(0);
  const toast = useToast();
  const navigate = useNavigate();

  function getCartDetail() {
    axios
      .get(`https://backend-masaiverse.onrender.com/cartdetails`)
      .then((res) => {
        setCartData(res.data);
        localStorage.setItem("cartArray", JSON.stringify(res.data));
      });
  }
  console.log(totalSum);

  useEffect(() => {
    getCartDetail();

    let sum = 0;

    for (let i = 0; i < cartArray.length; i++) {
      sum += cartArray[i].quantity * cartArray[i].price;
    }
    setTotalSum(sum);
    
  }, []);

  const handleDelete = (val) => {
    console.log(val);
    axios
      .delete(`https://backend-masaiverse.onrender.com/cartdetails/${val}`)
      .then((res) => {
        getCartDetail();
      });
  };

  const handleOrder=()=>{
    toast({
      title: 'Order Placed !',
      description: "Order Placed Successfully !",
      status: 'success',
      duration: 3000,
      isClosable: true,
    })
        navigate('/')
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
          <BreadcrumbLink href="#">Cart</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <TableContainer w="95%" m="auto" mt="30px" borderRadius="30px">
        <Table variant="striped" bg="#FFF8E1">
          <TableCaption>Product Added into Carts</TableCaption>
          <Thead>
            <Tr>
              <Th fontSize="18px">Product</Th>
              <Th fontSize="18px">Price</Th>
              <Th fontSize="18px">Quantity</Th>
              <Th fontSize="18px">SubTotal</Th>
            </Tr>
          </Thead>
          <Tbody>
            {cartData?.map((item) => (
              <CartProductTable
                key={item.id}
                {...item}
                handleDelete={handleDelete}
                totalSum={totalSum}
                setTotalSum={setTotalSum}
              />
            ))}
          </Tbody>
        </Table>
      </TableContainer>

      <Stack border="1px solid" w="50%" m="auto">
        <Heading>Cart Total</Heading>
        <HStack w="80%" pl="100px">
          <Text fontSize="20px" fontWeight="bold">
            SubTotal :{" "}
          </Text>
          <Spacer />
          <Text fontSize="18px">{totalSum}</Text>
        </HStack>
        <HStack w="60%" pl="240px">
          <Button bg="#1976D2" onClick={handleOrder} color='white'>Place Order</Button><Spacer/>
          <Button bg="#F9A825"
              color="white"><Link to='/allproducts'>Buy More </Link></Button>
        </HStack>
      </Stack>
    </>
  );
};
