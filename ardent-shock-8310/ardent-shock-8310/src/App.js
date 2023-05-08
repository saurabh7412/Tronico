import logo from './logo.svg';
import './App.css';
import {Navbar} from './Components/Navbar';
import { AllRoutes } from './Components/AllRoutes';
import { Footer } from './Components/Footer';
import { useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';

// https://backend-masaiverse.onrender.com/Products

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currUser, setCurrUser] = useState('');

  const [search, setSearch] = useState("");


  const handleSearch = (e)=>{
    // console.log(e.target.value);
    setSearch(e.target.value);
  }

  console.log(search);

  return (
    <div className="App">
      <Navbar isOpen = {isOpen} onOpen={onOpen} onClose = {onClose} currUser={currUser} setCurrUser={setCurrUser} handleSearch= {handleSearch}/>
      <AllRoutes isOpen = {isOpen} onOpen={onOpen} onClose = {onClose}  setCurrUser={setCurrUser} search={search}/>
      <Footer/>
    </div>
  );
}

export default App;
