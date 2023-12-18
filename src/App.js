import { NavBar } from './NavBar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Bisection from './Root_of/Bisection';
import Falseposition from './Root_of/Falseposition';
import Onepoint from './Root_of/Onepoint';
import NewtonRaphson from './Root_of/NewtonRaphson';
import Secant from './Root_of/Secant';
import Cramer from './Linear/Cramer';
import Linear from './Regression/Linear';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>

        <Route path="/Bisection" element={<Bisection/>} />
        <Route path="/Falseposition" element={<Falseposition/>} />
        <Route path="/Onepoint" element={<Onepoint/>} />
        <Route path="/NewtonRaphson" element={<NewtonRaphson/>} />
        <Route path="/Secant" element={<Secant/>} />

        <Route path="/Cramer" element={<Cramer/>} />
        <Route path="/Linear" element={<Linear/>} />
      

        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;