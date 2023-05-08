import { ChevronRightIcon } from "@chakra-ui/icons";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, HStack, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spacer, Text, Toast, useDisclosure, useToast } from "@chakra-ui/react";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Components/AuthContextProvider";


export const SignUp = ({isOpen , onOpen, onClose,setCurrUser}) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [updatedVal, setUpdatedVal] = useState({});
  const navigate = useNavigate();
  const {isAuth, setIsAuth} = useContext(AuthContext);

  const toast  = useToast();

  useEffect(()=>{
    onOpen()
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


  const handleSignUp = ()=>{

    // console.log(updatedVal);

    axios.get(`https://backend-masaiverse.onrender.com/userDetail`).then((res)=>{
      // console.log(res.data);
      let filteredData = res?.data.filter((ele)=> ele.username === updatedVal.username)
      console.log((filteredData));

      if(filteredData.length === 0){
        axios.post(`https://backend-masaiverse.onrender.com/userDetail`,updatedVal).then((res)=>{
          console.log(res.data);
          toast({
            title: 'Signin Successful.',
            description: "Account Created !",
            status: 'success',
            duration: 3000,
            isClosable: true,
          })
          setCurrUser(updatedVal.username);
          localStorage.setItem('username',updatedVal.username);
          setIsAuth(true)
          navigate('/');
          window.location.reload();
        })
      }
      else{
        toast({
          title: 'Signin Failed.',
          description: "Account already exist !",
          status: 'error',
          duration: 5000,
          isClosable: true,
        })

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
        <BreadcrumbLink href="#">Sign up</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>

    <Modal  blockScrollOnMount={true} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent p='10px'>
        <ModalHeader>Sign Up</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {/* <Text fontWeight="bold" mb="1rem">
            You can scroll the content behind the modal
          </Text> */}
          <label>Create Username</label>
          <Input mb='20px' type="email" value={username} name="username" placeholder="Enter Username" onChange={handleChange}/>
          <label>Create Password</label>
          <Input mb='20px' value={password} name="password" onChange={handleChange} placeholder="Enter Password"/>
          
         
        </ModalBody>

        <ModalFooter>
          <Button onClick={handleSignUp} colorScheme="blue" mr='30px'>Signup</Button>
          <Button mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  </>
  )
}
