import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Checkbox,
  Divider,
  HStack,
  Heading,
  Image,
  Input,
  Select,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import { AllProductCard } from "../Components/AllProductCard";
import { ChevronRightIcon } from "@chakra-ui/icons";

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

export const AllProducts = ({search}) => {
  let [data, setData] = useState(0);
  let [page, setpage] = useState(1);

  const [state, dispatch] = useReducer(reducer, initialState);
  let [consoles, setConsoles] = useState(false);
  let [allCategory, setAllCategory] = useState(false);
  let [mobiles, setMobiles] = useState(false);
  let [cameras, setCameras] = useState(false);
  let [laptop, setLaptop] = useState(false);
  let [headphone, setHeadphone] = useState(false);
  let [sortBy, setSortBy] = useState("");
  let [orderBy, setOrderBy] = useState("");

  const getAxios = (
    page,
    allCategory,
    mobiles,
    cameras,
    laptop,
    headphone,
    consoles,
    sortBy,
    orderBy
  ) => {
    let URL = ``;

    if(search){
      URL = `https://backend-masaiverse.onrender.com/Products?q=${search}`
    }
    else if (sortBy === "price" && orderBy === "asc") {
      URL = `https://backend-masaiverse.onrender.com/Products?_sort=price&_order=asc`;
    } else if (sortBy === "price" && orderBy === "desc") {
      URL = `https://backend-masaiverse.onrender.com/Products?_sort=price&_order=desc`;
    } else if (sortBy === "rating" && orderBy === "asc") {
      URL = `https://backend-masaiverse.onrender.com/Products?_sort=rating&_order=asc`;
    } else if (sortBy === "rating" && orderBy === "desc") {
      URL = `https://backend-masaiverse.onrender.com/Products?_sort=rating&_order=desc`;
    } else if (mobiles && cameras && laptop && headphone) {
      URL = `https://backend-masaiverse.onrender.com/Products?category=mobiles&category=cameras&category=laptops&category=headphones`;
    } else if (cameras && laptop && headphone && consoles) {
      URL = `https://backend-masaiverse.onrender.com/Products?category=cameras&category=laptops&category=headphones&category=consoles`;
    } else if (laptop && headphone && consoles && mobiles) {
      URL = `https://backend-masaiverse.onrender.com/Products?category=laptops&category=headphones&category=consoles&category=mobiles`;
    } else if (headphone && consoles && mobiles && cameras) {
      URL = `https://backend-masaiverse.onrender.com/Products?category=headphones&category=consoles&category=mobiles&category=cameras`;
    } else if (consoles && mobiles && cameras && laptop) {
      URL = `https://backend-masaiverse.onrender.com/Products?category=consoles&category=mobiles&category=cameras&category=laptops`;
    } else if (mobiles && cameras && laptop) {
      URL = `https://backend-masaiverse.onrender.com/Products?category=mobiles&category=cameras&category=laptops`;
    } else if (cameras && laptop && headphone) {
      URL = `https://backend-masaiverse.onrender.com/Products?category=cameras&category=laptops&category=headphones`;
    } else if (laptop && headphone && consoles) {
      URL = `https://backend-masaiverse.onrender.com/Products?category=laptops&category=headphones&category=consoles`;
    } else if (headphone && consoles && mobiles) {
      URL = `https://backend-masaiverse.onrender.com/Products?category=headphones&category=consoles&category=mobiles`;
    } else if (consoles && mobiles && cameras) {
      URL = `https://backend-masaiverse.onrender.com/Products?category=consoles&category=mobiles&category=cameras`;
    } else if (mobiles && cameras) {
      URL = `https://backend-masaiverse.onrender.com/Products?category=mobiles&category=cameras`;
    } else if (mobiles && laptop) {
      URL = `https://backend-masaiverse.onrender.com/Products?category=mobiles&category=laptops`;
    } else if (mobiles && headphone) {
      URL = `https://backend-masaiverse.onrender.com/Products?category=mobiles&category=headphones`;
    } else if (mobiles && consoles) {
      URL = `https://backend-masaiverse.onrender.com/Products?category=mobiles&category=consoles`;
    } else if (cameras && laptop) {
      URL = `https://backend-masaiverse.onrender.com/Products?category=cameras&category=laptops`;
    } else if (cameras && headphone) {
      URL = `https://backend-masaiverse.onrender.com/Products?category=cameras&category=headphones`;
    } else if (cameras && consoles) {
      URL = `https://backend-masaiverse.onrender.com/Products?category=cameras&category=consoles`;
    } else if (laptop && headphone) {
      URL = `https://backend-masaiverse.onrender.com/Products?category=laptops&category=headphones`;
    } else if (laptop && consoles) {
      URL = `https://backend-masaiverse.onrender.com/Products?category=laptops&category=consoles`;
    } else if (headphone && consoles) {
      URL = `https://backend-masaiverse.onrender.com/Products?category=headphones&category=consoles`;
    } else if (mobiles) {
      URL = `https://backend-masaiverse.onrender.com/Products?category=mobiles`;
    } else if (consoles) {
      URL = `https://backend-masaiverse.onrender.com/Products?category=consoles`;
    } else if (cameras) {
      URL = `https://backend-masaiverse.onrender.com/Products?category=cameras`;
    } else if (laptop) {
      URL = `https://backend-masaiverse.onrender.com/Products?category=laptops`;
    } else if (headphone) {
      URL = `https://backend-masaiverse.onrender.com/Products?category=headphones`;
    } else {
      URL = `https://backend-masaiverse.onrender.com/Products`;
    }
    return axios({
      method: "get",
      url: URL,
      params: {
        _limit: 9,
        _page: page,
      },
    });
  };

  const getData = (
    page,
    allCategory,
    mobiles,
    cameras,
    laptop,
    headphone,
    consoles,
    sortBy,
    orderBy
  ) => {
    getAxios(
      page,
      allCategory,
      mobiles,
      cameras,
      laptop,
      headphone,
      consoles,
      sortBy,
      orderBy
    ).then((res) => {
      console.log(res.data);
      dispatch({ type: "success", payload: res.data });
    });
  };

  useEffect(() => {
    dispatch({ type: "loading" });
    getData(
      page,
      allCategory,
      mobiles,
      cameras,
      laptop,
      headphone,
      consoles,
      sortBy,
      orderBy
    );
  }, [
    page,
    allCategory,
    mobiles,
    cameras,
    laptop,
    headphone,
    consoles,
    sortBy,
    orderBy,
    search
  ]);

  const handleClick = (val) => {
    setpage(page + val);
  };

  const handleAllCategory = (e) => {
    // console.log(e.target.checked);
    setAllCategory(e.target.checked);
  };
  const handleMobiles = (e) => {
    console.log(e.target.checked);
    setMobiles(e.target.checked);
  };
  const handleCameras = (e) => {
    console.log(e.target.checked);
    setCameras(e.target.checked);
  };
  const handleLaptop = (e) => {
    // console.log(e.target.checked);
    setLaptop(e.target.checked);
  };
  const handleHeadphone = (e) => {
    // console.log(e.target.checked);
    setHeadphone(e.target.checked);
  };
  const handleConsoles = (e) => {
    console.log(e.target.checked);
    setConsoles(e.target.checked);
  };

  const handleReset = () => {
    setMobiles(false);
    setCameras(false);
    setLaptop(false);
    setHeadphone(false);
    setConsoles(false);
    setAllCategory(true);
  };

  const handleSorting = (e) => {
    console.log(e.target.value);
    if (e.target.value === "asc1") {
      setSortBy("price");
      setOrderBy("asc");
    }
    if (e.target.value === "desc1") {
      setSortBy("price");
      setOrderBy("desc");
    }
    if (e.target.value === "asc2") {
      setSortBy("rating");
      setOrderBy("asc");
    }
    if (e.target.value === "desc2") {
      setSortBy("rating");
      setOrderBy("desc");
    }
    if (e.target.value === "") {
      setSortBy("");
      setOrderBy("");
    }
  };

  // console.log(sortBy, orderBy);

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
          <BreadcrumbLink href="#">All Products</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <Box w="95%" m="auto" mt="50px" border="1px solid">
        <HStack>
          <VStack
            w="23%"
            borderRadius="30px"
            boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
          >
            <Stack>
              <Heading fontSize="20px" mt='30px' mb='30px'>Sort Products By</Heading>
            </Stack>
            <Select
              pb='15px'
              placeholder="Select option"
              w="70%"
              onChange={handleSorting}
            >
              <option value="asc1">Price ( Low To High )</option>
              <option value="desc1">Price ( High To Low )</option>
              <option value="asc2">Rating ( Low To High )</option>
              <option value="desc2">Rating ( High To Low )</option>
            </Select>
            <Divider />
            <Stack w="90%">
              <HStack justifyContent="space-between" mt="40px">
                <Heading fontSize="16px">Categories</Heading>
                <Button bg="#F9A825" color="white" onClick={handleReset}>
                  Reset
                </Button>
              </HStack>
              <HStack justifyContent="space-between">
                <Checkbox isChecked={allCategory} onChange={handleAllCategory}>
                  All Categories
                </Checkbox>
                <Text>10</Text>
              </HStack>
              <HStack justifyContent="space-between">
                <Checkbox isChecked={mobiles} onChange={handleMobiles}>
                  Mobiles
                </Checkbox>
                <Text>5</Text>
              </HStack>
              <HStack justifyContent="space-between">
                <Checkbox isChecked={cameras} onChange={handleCameras}>
                  Cameras
                </Checkbox>
                <Text>5</Text>
              </HStack>
              <HStack justifyContent="space-between">
                <Checkbox isChecked={laptop} onChange={handleLaptop}>
                  Laptop
                </Checkbox>
                <Text>5</Text>
              </HStack>
              <HStack justifyContent="space-between">
                <Checkbox isChecked={headphone} onChange={handleHeadphone}>
                  Headphone
                </Checkbox>
                <Text>5</Text>
              </HStack>
              <HStack justifyContent="space-between">
                <Checkbox isChecked={consoles} onChange={handleConsoles}>
                  Console
                </Checkbox>
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
          >
            {state.loading ? (
              <Heading>Loading ...</Heading>
            ) : (
              state.data.map((ele) => <AllProductCard key={ele.id} {...ele} />)
            )}
          </SimpleGrid>
        </HStack>
      </Box>

      <Box w="20%" m="auto" mt="30px">
        <Button isDisabled={page === 1} onClick={() => handleClick(-1)}>
          Prev
        </Button>
        <Button ml="30px">{page}</Button>
        <Button ml="30px" onClick={() => handleClick(1)}>
          Next
        </Button>
      </Box>

      {/* Add Poster */}

      <Box boxSize="95%" margin="auto" mt="50px" mb="50px">
        <Image
          src="https://www.apple.com/in/ipad-pro/images/overview/hero/hero_combo__fcqcc3hbzjyy_large.jpg"
          borderRadius="30px"
          width="100%"
        />
      </Box>
    </>
  );
};
