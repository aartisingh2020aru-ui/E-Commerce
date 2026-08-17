import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Blog from './Pages/Blog';
import PageNotFound from './Pages/PageNotFound';


function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/about" element = {<About/>}/>
          <Route path = "/contact" element = {<Contact/>}/>
          <Route path = "/blog" element = {<Blog/>}/>
          <Route path = "*" element = {<PageNotFound/>}/>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
