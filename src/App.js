// Packages
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
// Custom Styling
import './App.css';
// Project Components
import NavbarComponent from './Components/shared/navbar/navbar'
import FooterComponent from './Components/shared/footer/footer'
import ProductlistComponent from './Components/product/productslist/productlist'
import ProductComponent from './Components/product/product/product'
import LoginComponent from './Components/auth/login/login'
import RegisterComponent from './Components/auth/register/register'
import HomeComponent from './Components/Home/home';


function App() {
  return (
    <> 
      <Router>
      <NavbarComponent/>
      <Switch>
        <Route path="/" exact component={HomeComponent} />
        <Route path="/login" component={LoginComponent} />
        <Route path="/register" component={RegisterComponent} />
        <Route path="/shop" component={ProductlistComponent} />
        <Route path="/product/:id" component={ProductComponent} />
      </Switch>
      <FooterComponent/>
      </Router>
    </>
  );
}

export default App;
