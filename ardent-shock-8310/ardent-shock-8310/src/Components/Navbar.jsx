import {
  Box,
  Image,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Input,
  HStack,
  Spacer,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  SearchIcon,
} from "@chakra-ui/icons";

import logo from "../Images/Logos/TronicoTrans3.png";
import signin from "../Images/Icons/signin.png";
import signup from "../Images/Icons/signup.png";
import cart from "../Images/Icons/cart.png";
import store from "../Images/Icons/store.png";
import trackorder from "../Images/Icons/trackorder.png";

import React from "react";

export const Navbar = () => {
  return (
    <Box>
      {/* Nav Bar 1 */}

      <HStack bg='#E8EAF6'>
        <HStack p="10px" pl="40px">
          <Text>Need help ? Call us: (+98) 0234 456 789</Text>
        </HStack>
        <Spacer />
        <HStack w="20%" paddingRight="20px" pr="40px">
          <Image src={store} width="8%" />
          <Link>Our Store</Link> <Spacer />
          <Image src={trackorder} width="8%" />
          <Link>Track Your Order</Link>
        </HStack>
      </HStack>

      {/* Nav Bar 2 */}

      <HStack bg="#01579B" p='10px'>
        <HStack spacing="20px">
        <Link to="/"><Image w="65%" src={logo} alt="tronico"/></Link>
          <Input w="50%"  bg="white" borderRadius='35px' placeholder="Search any things" />
          <IconButton
            bg="#F9A825"
            color="white"
            aria-label="Search database"
            icon={<SearchIcon/>}
            borderRadius='35px'
          />
        </HStack>

        <Spacer />

        <HStack w="25%" paddingRight="20px">
          <Image src={signin} width="9%" />
          <Link to="/login" color="white">Sign in</Link> <Spacer />
          <Image src={signup} width="8%" />
          <Link to="/signup" color="white">Sign Up</Link> <Spacer />
          <Image  src={cart} width="8%" />
          <Link to='/cart' color="white">Cart</Link>
        </HStack>
      </HStack>

      {/* Menu bar */}

      <HStack bg="#E3F2FD">
        <HStack ml="60px">
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              bg="#F9A825"
              color="white"
            >
              Browse Categories
            </MenuButton>
            <MenuList>
              <MenuItem>Tablets</MenuItem>
              <MenuItem>Laptops</MenuItem>
              <MenuItem>Headphones</MenuItem>
              <MenuItem>Console</MenuItem>
              <MenuItem>DSLR Cameras</MenuItem>
            </MenuList>
          </Menu>
        </HStack>

        <HStack h="60px" pl="40px" spacing="60px">

          <Menu>
            <MenuButton as={Button} bg="none" rightIcon={<ChevronDownIcon />}>
              Home
            </MenuButton>
            <MenuList>
              <MenuItem><Link to='/'>Home Page</Link></MenuItem>
              <MenuItem><Link to='/allproducts'>Products</Link></MenuItem>
              <MenuItem><Link to='/singleproduct'>Single Products</Link></MenuItem>
            </MenuList>
          </Menu>
          <Link>Catalog</Link>
          <Link>Blog</Link>
          <Link>Pages</Link>
          <Link>About Us</Link>
        </HStack>
          <Spacer/>
        <HStack pr='60px'><Text as='b' color='#01579B'>30 Days Free Return</Text></HStack>
      </HStack>
    </Box>
  );
};

