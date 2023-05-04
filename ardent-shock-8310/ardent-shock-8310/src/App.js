import logo from './logo.svg';
import './App.css';
import {Navbar} from './Components/Navbar';
import { AllRoutes } from './Components/AllRoutes';

// https://backend-masaiverse.onrender.com/Products

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
    </div>
  );
}

export default App;
