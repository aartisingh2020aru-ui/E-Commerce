import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Blog from './Pages/Blog';
import PageNotFound from './Pages/PageNotFound';
import Login from './Pages/Login';
import Registration from './Pages/Registration';
import Product from './Pages/Product';
import Dashboard from './Components/Admin/Dashboard';
import AddProduct from './Components/Admin/AddProduct';


function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/about" element = {<About/>}/>
          <Route path = "/contact" element = {<Contact/>}/>
          <Route path = "/blog" element = {<Blog/>}/>
          <Route path = "/login" element = {<Login/>}/>
          <Route path = "/registration" element = {<Registration/>}/>
          <Route path = "*" element = {<PageNotFound/>}/>
          <Route path = "/product" element = {<Product/>}/>
          <Route path = "/dashboard" element = {<Dashboard/>}/>
          {/* <Route path = "/products" element = {<Product1/>}/> */}
          <Route path = "/addproduct" element = {<AddProduct/>}/>



        
          

        </Routes>
      </Layout>
    </>
  );
}

export default App;
