import {
  Button,
  HStack,
  Heading,
  Image,
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
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

export const CartProductTable = ({
  avatar,
  title,
  category,
  description,
  id,
  price,
  rating,
  handleDelete,
  totalSum,
  setTotalSum,
}) => {
  const [count, setCount] = useState(1);
//   console.log(typeof count);

//   console.log(count*price);
    useEffect(()=>{
        setTotalSum(count*price)

    },[count])

  return (
    <>
      <Tr>
        <Td>
          <HStack>
            <Image w="8%" src={avatar} />
            <Stack>
              <Heading fontSize="15px">{title}</Heading>
              <Text>{category}</Text>
              <Text>Rating : {rating}</Text>
              <Button
                w="15%"
                bg="red"
                color="white"
                onClick={() => handleDelete(id)}
              >
                Delete
              </Button>
            </Stack>
          </HStack>
        </Td>

        <Td>
          <Heading fontSize="15px">Price : ₹ {price} /-</Heading>
        </Td>

        <Td>
          <HStack>
            <Button
              isDisabled={count === 1}
              onClick={() => {
                setCount(count - 1);
              }}
              bg="#F9A825"
              color="white"
            >
              -
            </Button>
            <Button bg="#E3F2FD">{count}</Button>
            <Button
              onClick={() => {
                setCount(count + 1);
              }}
              bg="#F9A825"
              color="white"
            >
              +
            </Button>
          </HStack>
        </Td>
        <Td>
          <Heading fontSize="15px">Total : ₹ {
            count * price
            } /-</Heading>
        </Td>
      </Tr>
    </>
  );
};
