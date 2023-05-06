import logo from './logo.svg';
import './App.css';
import {Navbar} from './Components/Navbar';
import { AllRoutes } from './Components/AllRoutes';
import { Footer } from './Components/Footer';

// https://backend-masaiverse.onrender.com/Products

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
