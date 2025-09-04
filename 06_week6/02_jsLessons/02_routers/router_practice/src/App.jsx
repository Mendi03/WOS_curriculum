import '@picocss/pico/css/pico.min.css';
import { Routes, Route } from 'react-router';
import HomePage from './pages/HomePage'; // Import your page components
import AboutPage from './pages/AboutPage';
import Products from './pages/Products'; 
import ProductDetails from './pages/ProductDetails'; 
import Nav from './components/Nav';
import NotFoundPage from './pages/NotFoundPage'; 

function App() {

  return (

    <>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products">
              {/* The 'index' prop makes this route match the parent's path exactly ("/products") */}
              <Route index element={<Products />} />
              {/* NEW: Dynamic Nested Route */}
              {/* This route will now match patterns like /products/1, /products/2, /products/anything-else */}
              <Route path=":productId" element={<ProductDetails />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App
