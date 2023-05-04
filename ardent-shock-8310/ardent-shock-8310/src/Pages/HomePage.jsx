import {
  Box,
  Button,
  Center,
  HStack,
  Heading,
  Image,
  Link,
  LinkBox,
  SimpleGrid,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useReducer, useState } from "react";
import { Slider1, Slider2 } from "../Components/AllSliders";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { ProductCard } from "../Components/ProductCard";
import axios from 'axios';


const initialState={
  loading : 'false',
  data : [],
  error : 'false'
}

const reducer = (state, action)=>{
  switch(action.type){
    case 'loading':{
      return{ ...state, loading : true}
    }
    case 'success':{
      return{ ...state, loading : false, data: action.payload}
    }
    case 'error':{
      return{ ...state, error : true, loading : false}
    }
  }
}


export const HomePage = () => {
  let [data, setData] = useState(0);
  let [page, setpage] = useState(1);
  const [state, dispatch] = useReducer(reducer,initialState);

  const getAxios =(page)=>{
   return axios({
        method : 'get',
        url : `https://backend-masaiverse.onrender.com/Products`,
        params : {
          _limit : 8,
          _page : page
        }
    })
  }

  const getData = (page)=>{
    getAxios(page).then((res)=>{
      // console.log(res.data)
      dispatch({type : "success", payload : res.data})
    })
  }

  useEffect(()=>{
    dispatch({type : "loading"})
    getData(page);
  },[page])

  const handleClick= (val)=>{
    setpage(page + val)
  }


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

      <HStack boxSize="90%" margin="auto" mb='60px' >
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

        {/* Product Mapping  */}


      <SimpleGrid minChildWidth="300px" spacing="40px" boxSize='90%' margin='auto' mb='60px'>
      {
        state?.data?.map((ele)=>(
        <ProductCard key={ele.id} {...ele}/>
        ))
      }
      </SimpleGrid>
      <Button isDisabled={page === 1} onClick={()=>handleClick(-1)}>Prev</Button>
      <Button>{page}</Button>
      <Button onClick={()=>handleClick(1)}>Next</Button>
    </>
  );
};
