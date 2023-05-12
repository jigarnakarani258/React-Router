import { Routes , Route } from 'react-router-dom'
import Home from './Components/Home';
import About from './Components/About';
import NavigationBar from './Components/NavigationBar';
import './App.css'
import OrderSummary from './Components/OrderSummary';

function App() {
  return (
    <>
      <NavigationBar className="nav"/>
      <Routes>
        <Route path='/' element={ <Home/> } > </Route>
        <Route path='/about' element={ <About/> } > </Route>
        <Route path='/order-summary' element={ <OrderSummary/> } > </Route>
      </Routes>
    </>
    
  );
}

export default App;
