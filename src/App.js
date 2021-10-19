// Packages
import 'bootstrap/dist/css/bootstrap.min.css';
// Custom Styling
import './App.css';
// Project Components
import NavbarComponent from './Components/shared/navbar/navbar'
import FooterComponent from './Components/shared/footer/footer'
import ProductlistComponent from './Components/product/productslist/productlist'
import ProductComponent from './Components/product/product/product'
import LoginComponent from './Components/auth/login/login'
import RegisterComponent from './Components/auth/register/register'


function App() {
  return (
    <>
    <NavbarComponent></NavbarComponent>
    <LoginComponent></LoginComponent>
    <RegisterComponent></RegisterComponent>
    <ProductlistComponent></ProductlistComponent>
    <ProductComponent></ProductComponent>
    <FooterComponent></FooterComponent>
    </>
  );
}

export default App;
