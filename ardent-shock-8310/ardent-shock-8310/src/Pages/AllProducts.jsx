import {
  Box,
  Button,
  Checkbox,
  Divider,
  HStack,
  Heading,
  Image,
  Input,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import { AllProductCard } from "../Components/AllProductCard";

const initialState = {
  loading: "false",
  data: [],
  error: "false",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "loading": {
      return { ...state, loading: true };
    }
    case "success": {
      return { ...state, loading: false, data: action.payload };
    }
    case "error": {
      return { ...state, error: true, loading: false };
    }
  }
};

export const AllProducts = () => {
  let [data, setData] = useState(0);
  let [page, setpage] = useState(1);
  const [state, dispatch] = useReducer(reducer, initialState);

  const getAxios = (page) => {
    return axios({
      method: "get",
      url: `https://backend-masaiverse.onrender.com/Products`,
      params: {
        _limit: 9,
        _page: page,
      },
    });
  };

  const getData = (page) => {
    getAxios(page).then((res) => {
      console.log(res.data);
      dispatch({ type: "success", payload: res.data });
    });
  };

  useEffect(() => {
    dispatch({ type: "loading" });
    getData(page);
  }, [page]);

  const handleClick = (val) => {
    setpage(page + val);
  };

  // if(state.loading) return <Heading>Loading ...</Heading>

  return (
    <>
      <Box border="1px solid" w="95%" m="auto" mt="80px">
        <HStack>
          <VStack w="23%"  borderRadius='30px' boxShadow='rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'>
            <Stack w="90%">
              <HStack justifyContent="space-between" mt="40px">
                <Heading fontSize="16px">Categories</Heading>
                <Button bg="#F9A825" color="white">
                  Reset
                </Button>
              </HStack>
              <HStack justifyContent="space-between">
                <Checkbox>All Categories</Checkbox>
                <Text>10</Text>
              </HStack>
              <HStack justifyContent="space-between">
                <Checkbox>Tablet</Checkbox>
                <Text>5</Text>
              </HStack>
              <HStack justifyContent="space-between">
                <Checkbox>Laptop</Checkbox>
                <Text>5</Text>
              </HStack>
              <HStack justifyContent="space-between">
                <Checkbox>Headphone</Checkbox>
                <Text>5</Text>
              </HStack>
              <HStack justifyContent="space-between">
                <Checkbox>Console</Checkbox>
                <Text>5</Text>
              </HStack>
              <HStack justifyContent="space-between">
                <Checkbox>Other</Checkbox>
                <Text>5</Text>
              </HStack>

              <Divider pt="20px" />

              <HStack justifyContent="space-between" pt="20px">
                <Heading fontSize="16px">Availability</Heading>
                <Button bg="#F9A825" color="white">
                  Reset
                </Button>
              </HStack>
              <HStack justifyContent="space-between">
                <Checkbox>In stock</Checkbox>
                <Text>5</Text>
              </HStack>
              <HStack justifyContent="space-between">
                <Checkbox isDisabled="true">Out Of Stock</Checkbox>
                <Text>0</Text>
              </HStack>

              <Divider pt="20px" />

              <HStack justifyContent="space-between" pt="20px">
                <Heading fontSize="16px">Product Type</Heading>
                <Button bg="#F9A825" color="white">
                  Reset
                </Button>
              </HStack>
              <HStack justifyContent="space-between">
                <Checkbox>Smart-watch</Checkbox>
                <Text>5</Text>
              </HStack>

              <Divider pt="20px" />

              <HStack justifyContent="space-between" pt="20px">
                <Heading fontSize="16px">Brand</Heading>
                <Button bg="#F9A825" color="white">
                  Reset
                </Button>
              </HStack>
              <HStack justifyContent="space-between">
                <Checkbox>Smart-watch</Checkbox>
                <Text>5</Text>
              </HStack>

              <Divider pt="20px" />

              <HStack justifyContent="space-between" pt="20px">
                <Heading fontSize="16px">Size</Heading>
                <Button bg="#F9A825" color="white">
                  Reset
                </Button>
              </HStack>
              <HStack justifyContent="space-between">
                <Checkbox>M</Checkbox>
                <Text>5</Text>
              </HStack>
              <HStack justifyContent="space-between">
                <Checkbox>S</Checkbox>
                <Text>5</Text>
              </HStack>
              <HStack justifyContent="space-between">
                <Checkbox>X</Checkbox>
                <Text>5</Text>
              </HStack>
              <HStack justifyContent="space-between">
                <Checkbox>XX</Checkbox>
                <Text>5</Text>
              </HStack>

              <Divider pt="20px" />
            </Stack>
          </VStack>

          <SimpleGrid
            columns={[1, 2, 3]}
            spacing="40px"
            w="75%"
            m="auto"
            mb="50px"
            p="30px"
            border="1px solid red"
          >
            {state.loading ? (
              <Heading>Loading ...</Heading>
            ) : (
              state.data.map((ele) => <AllProductCard key={ele.id} {...ele} />)
            )}

          </SimpleGrid>
        </HStack>
      </Box>

      <Box w='20%' m='auto' mt='30px'>
              <Button isDisabled={page === 1} onClick={() => handleClick(-1)}>
                Prev
              </Button>
              <Button ml='30px'>{page}</Button>
              <Button ml='30px' onClick={() => handleClick(1)}>Next</Button>
            </Box>

      {/* Add Poster */}

      <Box boxSize="95%" margin="auto" mt="50px" mb="50px">
        <Image
          src="https://img.freepik.com/free-psd/futuristic-cyber-monday-landing-page-template_23-2149117340.jpg?w=1380&t=st=1683296457~exp=1683297057~hmac=03bcf98047991a828763ca391e988af36b99ee12328fdcc6175976f8ddb67c87"
          borderRadius="30px"
          width="100%"
        />
      </Box>
    </>
  );
};
