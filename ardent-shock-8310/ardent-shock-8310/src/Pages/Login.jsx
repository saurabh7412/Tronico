import { ChevronRightIcon } from "@chakra-ui/icons";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, HStack, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spacer, Text, useDisclosure, useToast } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { Link, json, useNavigate } from "react-router-dom";
import { AuthContext } from "../Components/AuthContextProvider";
import axios from "axios";

export const Login = ({isOpen , onOpen, onClose,setCurrUser}) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [updatedVal, setUpdatedVal] = useState({});
  const navigate = useNavigate();
  const {isAuth, setIsAuth} = useContext(AuthContext);

  const toast  = useToast();

  useEffect(()=>{
  let username = (localStorage.getItem('username'));
   console.log(username);
   if(!username) onOpen()
  },[])

  const handleChange = (e)=>{
    const {name,value} = e.target;
    if(name === "username") setUsername(value);
    if(name === "password") setPassword(value);

    const obj = {
      username : username,
      password : password
    }
    const updatedVal = {
      ...obj,
      [name] : value
    }

    setUpdatedVal(updatedVal);
  }


  const handleLogin = ()=>{
    // console.log(updatedVal);

    axios.get(`https://backend-masaiverse.onrender.com/userDetail`).then((res)=>{
      // console.log(res.data);
      let filteredData = res?.data.filter((ele)=> ele.username === updatedVal.username && ele.password === updatedVal.password)
      console.log((filteredData));

      if(filteredData.length === 0){

        toast({
          title: 'Login Failed.',
          description: "Wrong Email or Password !",
          status: 'error',
          duration: 5000,
          isClosable: true,
        })

        // console.log('Wrong Email or Password');
        // axios.post(`https://backend-masaiverse.onrender.com/userDetail`,updatedVal).then((res)=>{
        //   console.log(res.data);
        //   toast({
        //     title: 'Signin Successful.',
        //     description: "Bhai bn gya account",
        //     status: 'success',
        //     duration: 3000,
        //     isClosable: true,
        //   })
        //   setCurrUser(updatedVal.username);
        //   setIsAuth(true)
        //   navigate('/');
        // })
      }
      else{
        setCurrUser(updatedVal.username);
        toast({
          title: 'Login Successful !',
          description: `Welcome back ${updatedVal.username}!`,
          status: 'success',
          duration: 5000,
          isClosable: true,
        })
        localStorage.setItem('username',updatedVal.username);
        setIsAuth(true)
        navigate('/');
        window.location.reload();
      }
    })
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
          <BreadcrumbLink href="#">Login</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <Modal  blockScrollOnMount={true} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent p='10px'>
          <ModalHeader>User Login</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* <Text fontWeight="bold" mb="1rem">
              You can scroll the content behind the modal
            </Text> */}
            <label>Username</label>
            <Input mb='20px' name="username" value={username} onChange={handleChange} placeholder="Enter Username"/>
            <label>Password</label>
            <Input mb='20px' name="password" value={password} onChange={handleChange} placeholder="Enter Password"/>
            <HStack ml='80px'>
            <Text>Not a User Already ? Click here to </Text><Link to='/signup'><Text color='red'>sign up</Text></Link>
            </HStack>
           
          </ModalBody>

          <ModalFooter>
            <Button onClick={handleLogin} colorScheme="blue" mr='30px'>Login</Button>
            <Button mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
