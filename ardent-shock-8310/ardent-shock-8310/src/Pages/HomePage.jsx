import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Center,
  Grid,
  GridItem,
  HStack,
  Heading,
  Image,
  Link,
  LinkBox,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useReducer, useState } from "react";
import { Slider1, Slider2 } from "../Components/AllSliders";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  StarIcon,
  ViewIcon,
} from "@chakra-ui/icons";
import { ProductCard } from "../Components/ProductCard";
import axios from "axios";
import { HomeProductCard } from "../Components/HomeProductCard";
import cart from "../Images/Icons/cart.png";

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

export const HomePage = () => {
  let [data, setData] = useState(0);
  let [page, setpage] = useState(1);
  const [state, dispatch] = useReducer(reducer, initialState);

  const getAxios = (page) => {
    return axios({
      method: "get",
      url: `https://backend-masaiverse.onrender.com/Products`,
      params: {
        _limit: 8,
        _page: page,
      },
    });
  };

  const getData = (page) => {
    getAxios(page).then((res) => {
      // console.log(res.data)
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

  return (
    // slider 1
    <>
      <HStack p="40px">
        <Button
          onClick={() => {
            if (data === 0) data = 3;
            setData(data - 1);
          }}
        >
          <ArrowLeftIcon />
        </Button>
        <Slider1 data={data} />
        <Button
          onClick={() => {
            if (data === 2) data = -1;
            setData(data + 1);
          }}
        >
          <ArrowRightIcon />
        </Button>
      </HStack>

      {/*  slider 2 */}

      <HStack p="40px" boxSize="80%" margin="auto">
        <Button>
          <ChevronLeftIcon />
        </Button>
        <Slider2 />
        <Button>
          <ChevronRightIcon />
        </Button>
      </HStack>

      <HStack boxSize="90%" margin="auto" mb="60px">
        <HStack>
          <Heading as="h1" size="lg">
            Popular Products
          </Heading>
        </HStack>
        <Spacer />
        <HStack>
          <Link
            border="1px solid blue"
            p="2px 10px 2px 10px"
            borderRadius="20px"
          >
            Cameras
          </Link>
          <Link
            border="1px solid blue"
            p="2px 10px 2px 10px"
            borderRadius="20px"
          >
            Laptops
          </Link>
          <Link
            border="1px solid blue"
            p="2px 10px 2px 10px"
            borderRadius="20px"
          >
            Tablets
          </Link>
          <Link
            border="1px solid blue"
            p="2px 10px 2px 10px"
            borderRadius="20px"
          >
            Mouse
          </Link>
        </HStack>
      </HStack>

      {/* Popular Product Mapping  */}

      <SimpleGrid
        minChildWidth="300px"
        spacing="40px"
        boxSize="90%"
        margin="auto"
        mb="60px"
      >
        {state?.data?.map((ele) => (
          <HomeProductCard key={ele.id} {...ele} />
        ))}
      </SimpleGrid>
      <Button isDisabled={page === 1} onClick={() => handleClick(-1)}>
        Prev
      </Button>
      <Button>{page}</Button>
      <Button onClick={() => handleClick(1)}>Next</Button>

      {/* Add Poster */}

      <Box boxSize="95%" margin="auto" mt="50px" mb="50px">
        <Image
          src="https://img.freepik.com/free-psd/futuristic-cyber-monday-landing-page-template_23-2149117340.jpg?w=1380&t=st=1683296457~exp=1683297057~hmac=03bcf98047991a828763ca391e988af36b99ee12328fdcc6175976f8ddb67c87"
          borderRadius="30px"
          width="100%"
        />
      </Box>

      {/* Product Grid  */}

      <Grid
        h="500px"
        w="90%"
        m="auto"
        mb="60px"
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(3, 1fr)"
        gap={4}
        // border="1px solid"
      >
        {/* <GridItem rowSpan={2} colSpan={2} bg="tomato" /> */}
        <HStack width="200%" borderRadius="40px" border="2px solid grey">
          <Image
            src="https://m.media-amazon.com/images/I/71hlbslxrAL._SL1500_.jpg"
            w="50%"
            borderRadius="40px"
          />
          <Stack mt="6" spacing="30" textAlign="start">
            <Heading fontSize="6xl">JBL bar 2.1 deep bass</Heading>
            <Heading fontSize="3xl"> ₹ 1,999 /-</Heading>
            <Text>
              <StarIcon ml="10px" color="#F9A825" />
              <StarIcon ml="10px" color="#F9A825" />
              <StarIcon ml="10px" color="#F9A825" />
              <StarIcon ml="10px" color="#F9A825" />
              <StarIcon ml="10px" color="#F9A825" />
            </Text>
            <HStack w="70%">
              <Button variant="solid" w="70%" bg="#F9A825" color="white">
                Add to Cart <Image ml="5" w="12%" src={cart} />
              </Button>
              <Spacer />
              <Button variant="solid" bg="#F9A825">
                <ViewIcon color="white" />
              </Button>
            </HStack>
          </Stack>
        </HStack>

        <Spacer />

        <VStack>
          <Card
            boxSize="100%"
            borderRadius="40px"
            p="20px"
            boxShadow="rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
          >
            <HStack width="100%" borderRadius="40px">
              <Image
                src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE54DVo?ver=b6b5"
                w="50%"
                borderRadius="40px"
              />
              <Stack mt="6" spacing="15px" textAlign="start">
                <Heading fontSize="2xl">Xbox Wireless Controller </Heading>
                <Heading fontSize="2xl"> ₹ 12,999 /-</Heading>
                <Text>
                  <StarIcon ml="10px" color="#F9A825" />
                  <StarIcon ml="10px" color="#F9A825" />
                  <StarIcon ml="10px" color="#F9A825" />
                  <StarIcon ml="10px" color="#F9A825" />
                  <StarIcon ml="10px" color="#F9A825" />
                </Text>
                <HStack w="95%">
                  <Button variant="solid" bg="#F9A825" color="white">
                    Add to Cart <Image ml="5" w="12%" src={cart} />
                  </Button>
                  <Spacer />
                  <Button variant="solid" bg="#F9A825">
                    <ViewIcon color="white" />
                  </Button>
                </HStack>
              </Stack>
            </HStack>
          </Card>

          <Card
            boxSize="100%"
            borderRadius="40px"
            p="20px"
            boxShadow="rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
          >
            <HStack width="100%" borderRadius="40px">
              <Image
                src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/alienware-notebooks/alienware-x17-r2/media-gallery/laptop-alienware-x17-r2-nonlit-touchpad-gallery-3.psd?qlt=90,0&op_usm=1.75,0.3,2,0&resMode=sharp&pscan=auto&fmt=png-alpha&hei=500"
                w="50%"
                borderRadius="40px"
              />
              <Stack mt="6" spacing="15px" textAlign="start">
                <Heading fontSize="2xl">Alienware Gaming Laptops</Heading>
                <Heading fontSize="2xl"> ₹ 89,999 /-</Heading>
                <Text>
                  <StarIcon ml="10px" color="#F9A825" />
                  <StarIcon ml="10px" color="#F9A825" />
                  <StarIcon ml="10px" color="#F9A825" />
                  <StarIcon ml="10px" color="#F9A825" />
                  <StarIcon ml="10px" color="#F9A825" />
                </Text>
                <HStack w="95%">
                  <Button variant="solid" bg="#F9A825" color="white">
                    Add to Cart <Image ml="5" w="12%" src={cart} />
                  </Button>
                  <Spacer />
                  <Button variant="solid" bg="#F9A825">
                    <ViewIcon color="white" />
                  </Button>
                </HStack>
              </Stack>
            </HStack>
          </Card>
        </VStack>
      </Grid>

      {/* // Passing `columns={[2, null, 3]}` and `columns={{sm: 2, md: 3}}`
// will have the same effect. */}

      <SimpleGrid columns={[2, null, 3]} spacing="40px" w='90%' m='auto' mb='50px'>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
      </SimpleGrid>
    </>
  );
};
