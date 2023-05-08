import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import {
  Box,
  Divider,
  HStack,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightAddon,
  ListItem,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import React from "react";

import logo from "../Images/Logos/TronicoTrans3.png";

import google from "../Images/Icons/google.png";
import fb from "../Images/Icons/fb.png";
import wapp from "../Images/Icons/wapp.png";

export const Footer = () => {
  return (
    <>
      {/* Footer */}

      <SimpleGrid
        // columns={[2, null, 3]}
        spacing="40px"
        // w="90%"
        m="auto"
        // mb="50px"
        p="30px"
        bg="#E3F2FD"
        borderRadius="30px"
      >
        <VStack>
          <HStack w="90%" bg="white" p="35px 80px" borderRadius="20px">
            <HStack>
              <Heading fontSize="2xl">Subscribe Newsletter</Heading>
            </HStack>

            <Spacer />

            <HStack>
              <InputGroup>
                <Input
                  bg="#F9A825"
                  placeholder="Email Address"
                  id="placeholderbtn"
                  color="white"
                  w="300px"
                  borderRadius="15px"
                />
                <InputRightAddon children={<EmailIcon />} />
              </InputGroup>
            </HStack>
            <Spacer />
            <HStack>
              <PhoneIcon />
              <Text pl="3">Call us 24/7 : (+62) 0123 456 789</Text>
            </HStack>
          </HStack>

          <SimpleGrid
            columns={[1,2, 4]}
            spacing="40px"
            w="100%"
            m="auto"
            mb="50px"
            p="30px"
            // bg="#E3F2FD"

            borderRadius="30px"
          >
            <HStack w="90%" borderRadius="20px" p="30px">
              <Stack textAlign="start">
                <Image w="65%" src={logo} />
                <Text>64 st james boulevard hoswick , India</Text>
                <Divider/>
                <HStack w="50%">
                  <Image w="20%" src={google} />
                  <Spacer />
                  <Image w="20%" src={fb} />
                  <Spacer />
                  <Image w="20%" src={wapp} />
                </HStack>
              </Stack>
            </HStack>

            <Stack  textAlign="left" p='15px'>
              <Heading fontSize="18px" color='#01579B'>Find Product</Heading>
              <UnorderedList pl='25px' color='#01579B' spacing={2}>
                <ListItem>Brownze Arnoid</ListItem>
                <ListItem>Chronograph Blue</ListItem>
                <ListItem>Smart Phones</ListItem>
                <ListItem>Automatic Watch</ListItem>
                <ListItem>Hair Straightners</ListItem>
              </UnorderedList>
            </Stack>
            <Stack  textAlign="left" p='15px' >
              <Heading fontSize="18px" color='#01579B'>Get Help</Heading>
              <UnorderedList pl='25px' color='#01579B' spacing={2}>
                <ListItem>About Us</ListItem>
                <ListItem>Contact Us</ListItem>
                <ListItem>Return Policy</ListItem>
                <ListItem>Privacy Policy</ListItem>
                <ListItem>Payment Policy</ListItem>
              </UnorderedList>
            </Stack>
            <Stack  textAlign="left" p='15px'>
              <Heading fontSize="18px" color='#01579B'>About Us</Heading>
              <UnorderedList pl='25px' color='#01579B' spacing={2}>
                <ListItem>News Service</ListItem>
                <ListItem>Service</ListItem>
                <ListItem>Our Policy</ListItem>
                <ListItem>Customer Care</ListItem>
                <ListItem>Faq's</ListItem>
              </UnorderedList>
            </Stack>
          </SimpleGrid>
        </VStack>
      </SimpleGrid>
    </>
  );
};
