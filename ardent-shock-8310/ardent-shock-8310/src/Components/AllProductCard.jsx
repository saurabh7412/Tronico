import React, { useContext, useState } from "react";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  HStack,
  Heading,
  Image,
  Spacer,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "./AuthContextProvider";

export const AllProductCard = ({
  id,
  title,
  price,
  category,
  rating,
  avatar,
  description,
}) => {
  const [currData, setCurrData] = useState({});
  const [fetchedCartData, setFetchedCartData] = useState([]);
  const { isAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const toast = useToast();

  let currdata = {
    title: "",
    price: "",
    category: "",
    rating: "",
    avatar: "",
    description: "",
  };
  let fetchedCartdata = [];

  const handleClick = () => {
    console.log(id);
    if (isAuth) {
      axios
        .get(`https://backend-masaiverse.onrender.com/Products/${id}`)
        .then((res) => {
          // console.log(res.data);
          // setCurrData(res.data);

          currdata = {
            ...currdata,
            title: res.data.title,
            price: res.data.price,
            category: res.data.category,
            rating: res.data.rating,
            avatar: res.data.avatar,
            description: res.data.description,
          };
          // console.log(currdata);
          axios
            .get(`https://backend-masaiverse.onrender.com/cartdetails`)
            .then((res) => {
              // console.log(res.data);
              // setFetchedCartData(res.data)
              fetchedCartdata = res.data;
              // console.log(fetchedCartdata);
              // console.log(currdata);
              let filteredData = fetchedCartdata?.filter(
                (ele) =>
                  ele.title === currdata.title && ele.price === currdata.price
              );

              // console.log(filteredData);

              if (filteredData.length === 0) {
                // console.log(currdata);
                axios
                  .post(
                    `https://backend-masaiverse.onrender.com/cartdetails`,
                    currdata
                  )
                  .then((res) => {
                    // console.log(res.data);
                    toast({
                      title: "Yay !",
                      description: "Product Added to Cart !",
                      status: "success",
                      duration: 3000,
                      isClosable: true,
                    });
                  });
              } else {
                toast({
                  title: "Oops !",
                  description: "Product already exist !",
                  status: "success",
                  duration: 3000,
                  isClosable: true,
                });
              }
            });
        });
    } else {
      toast({
        title: `Oops !`,
        description: "Can't Add , Login First !",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      navigate(`/login`);
    }
  };

  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src={avatar}
          alt="avatar"
          borderRadius="lg"
          boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
          p="10px"
        />
        <Stack mt="6" spacing="3">
          <Heading size="s">{title}</Heading>
          <Text fontSize="20px" fontWeight="bold">
            Category : {category}
          </Text>
          <HStack w="100%">
            <Text
              fontSize="17px"
              bg="#01579B"
              p="5px 5px"
              borderRadius="15px"
              fontWeight="bold"
              color="white"
            >
              Price : ₹ {price} /-
            </Text>
            <Spacer />
            <Text
              fontSize="18px"
              fontWeight="bold"
              color={rating >= 3.5 ? "green" : "red"}
            >
              Rating : {rating}
            </Text>
          </HStack>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2" w="100%">
          <Button
            variant="solid"
            bg="#F9A825"
            color="white"
            _hover={{ bg: "red", scale: "1.1" }}
          >
            <Link to={`/${id}`}>More Info</Link>
          </Button>
          <Spacer />
          <Button variant="ghost" colorScheme="blue" onClick={handleClick}>
            <Link>Add to cart</Link>
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

// {
//   "id" : 21,
//   "title" : "JBL 1000 Pro 880 Watts Sound Bar with Remote (PureVoice Dialogue Enchancement Technology, 7.1.4 Channel, Black)",
//   "price" : 165998,
//   "category" : "speaker",
//   "rating" : 5,
//   "avatar" : "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1673345768/Croma%20Assets/Entertainment/Sound%20Bars/Images/267590_r8ung8.png/mxw_2048,f_auto",
//   "description" : "Get to experience the amazing surround sound by bringing home the JBL 1000 Pro 880 Watts Sound Bar with Remote online. Movies and music have never sounded better. "
// }
