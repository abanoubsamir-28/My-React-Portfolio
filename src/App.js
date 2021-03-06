// Packages
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Custom Styling
import "./App.css";
// Project Components
import NavbarComponent from "./Components/shared/navbar/navbar";
import ProductlistComponent from "./Components/product/productslist/productlist";
import ProductComponent from "./Components/product/product/product";
import LoginComponent from "./Components/auth/login/login";
import RegisterComponent from "./Components/auth/register/register";
import HomeComponent from "./Components/Home/home";
import todoviewComponent from "./Components/todo/todoview/todoview";
import CounterComponent from "./Components/counter/counter.jsx";

function App() {
  return (
    <Router>
      <NavbarComponent />
      <Switch>
        <Route path="/" exact component={HomeComponent} />
        <Route path="/login" component={LoginComponent} />
        <Route path="/register" component={RegisterComponent} />
        <Route path="/shop" component={ProductlistComponent} />
        <Route path="/product/:id" component={ProductComponent} />
        <Route path="/todo" component={todoviewComponent} />
        <Route path="/counter" component={CounterComponent} />
      </Switch>
    </Router>
  );
}

export default App;
