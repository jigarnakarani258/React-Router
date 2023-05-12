import { Routes , Route } from 'react-router-dom'
import Home from './Components/Home';
import NavigationBar from './Components/NavigationBar';
import './App.css'
import OrderSummary from './Components/OrderSummary';
import NoMatchingRouteHandler from './Components/NoMatchingRouteHandler';
import Products from './Components/Products';
import NewProducts from './Components/NewProducts';
import FeaturedProducts from './Components/FeaturedProducts';
import Users from './Components/Users';
import About from './Components/About';
import UserDetail from './Components/UserDetail';
import Admin from './Components/Admin';

function App() {
  return (
    <>
      <NavigationBar/>
      <Routes>
        <Route path='' element={ <Home/> } > </Route>
        <Route path='order-summary' element={ <OrderSummary/> } > </Route>
        <Route path='products' element={ <Products/> } >
          <Route index element={ <FeaturedProducts/> } / >
          <Route path='featured' element={ <FeaturedProducts/> } > </Route>
          <Route path='new' element={ <NewProducts/> } > </Route>
        </Route>

        <Route path='users' element={ <Users/> } > 
          <Route path='admin' element={ <Admin/> } /> 
        </Route>

        <Route path='users/:user_id' element={ <UserDetail/> } > </Route>

      
        <Route path='about' element={ <About/> } > </Route>
        {/* When path is not matching with our website route then render this Handler component */}
        <Route path='*' element={ <NoMatchingRouteHandler/> } > </Route>
      </Routes>
    </>
    
  );
}

export default App;
