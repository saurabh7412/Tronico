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
import box from "../Images/Icons/box.png";
import crown from "../Images/Icons/crown.png";
import warranty from "../Images/Icons/warranty.png";

import {Link} from 'react-router-dom';

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

export const HomePage = ({search}) => {
  let [data, setData] = useState(0);
  let [page, setpage] = useState(1);
  const [state, dispatch] = useReducer(reducer, initialState);

  const getAxios = (page,search) => {
    let URL = ``;
    if(search){
      URL = `https://backend-masaiverse.onrender.com/Products?q=${search}`
    }
    else{
      URL = `https://backend-masaiverse.onrender.com/Products`
    }
    return axios({
      method: "get",
      url: URL,
      params: {
        _limit: 8,
        _page: page,
      },
    });
  };

  const getData = (page,search) => {
    getAxios(page,search).then((res) => {
      // console.log(res.data)
      dispatch({ type: "success", payload: res.data });
    });
  };

  useEffect(() => {
    dispatch({ type: "loading" });
    getData(page,search);
  }, [page,search]);

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

      <SimpleGrid
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
                <Link to="/cart">Add to Cart </Link><Image ml="5" w="12%" src={cart} />
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
                  <Link to="/cart">Add to Cart </Link><Image ml="5" w="12%" src={cart} />
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
                  <Link to="/cart">Add to Cart </Link><Image ml="5" w="12%" src={cart} />
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
      </SimpleGrid>

              {/* banner 1 */}

      <SimpleGrid
        columns={[1, 2, 3]}
        spacing="40px"
        w="90%"
        m="auto"
        mb="50px"
        p='30px'
        bg="#E3F2FD"
        borderRadius='30px'
      >
        <HStack >
          <Image src={box} w="25%" borderRadius='30px'/>
          <Stack textAlign="start" pl="10">
            <Heading fontSize="2xl">Free Delivery</Heading>
            <Text>on order above ₹ 5,000</Text>
          </Stack>
        </HStack>
        <HStack>
          <Image src={crown} w="25%" borderRadius='30px'/>
          <Stack textAlign="start" pl="10">
            <Heading fontSize="2xl">Best Quality</Heading>
            <Text>best quality in low price</Text>
          </Stack>
        </HStack>
        <HStack>
          <Image src={warranty} w="25%" borderRadius='30px'/>
          <Stack textAlign="start" pl="10">
            <Heading fontSize="2xl">1 year warranty</Heading>
            <Text>Available warranty</Text>
          </Stack>
        </HStack>
      </SimpleGrid>


      {/* Customer Feedback  */}

      <Heading textAlign='start' w='86%' m='auto'>Our Valuable Customers </Heading>

      
      <SimpleGrid
        columns={[1, 2, 3]}
        spacing="40px"
        w="90%"
        m="auto"
        mb="50px"
        p='30px'
        // bg="#E3F2FD"
        
        borderRadius='30px'
      >
        <HStack  border='1px solid grey' p='25px' borderRadius='30px'>
          <VStack>
            <HStack>
              <Image src='https://upload.wikimedia.org/wikipedia/en/9/98/SaitamaWikipediapage.png' w="25%" borderRadius='30px'/><Spacer/>
              <Heading>Mr. Saitama</Heading>
            </HStack>
            <HStack><Text fontSize='md'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Text></HStack>
          </VStack>
        </HStack>
        <HStack border='1px solid grey' p='25px' borderRadius='30px'>
          <VStack>
            <HStack>
              <Image src='https://i.etsystatic.com/12269632/r/il/bdea35/3658710281/il_fullxfull.3658710281_jjmr.jpg' w="25%" borderRadius='30px'/><Spacer/>
              <Heading>Goku The Saiyan</Heading>
            </HStack>
            <HStack><Text fontSize='md'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Text></HStack>
          </VStack>
        </HStack>
        <HStack border='1px solid grey' p='25px' borderRadius='30px'>
          <VStack>
            <HStack>
              <Image src='https://e0.pxfuel.com/wallpapers/469/440/desktop-wallpaper-luffy-monkey-d-luffy-anime-art-one-piece.jpg' w="25%" borderRadius='30px'/><Spacer/>
              <Heading>Monkey D. Luffy</Heading>
            </HStack>
            <HStack><Text fontSize='md'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Text></HStack>
          </VStack>
        </HStack>
        
      </SimpleGrid>

      {/* Banner 2 */}

        


    </>
  );
};
