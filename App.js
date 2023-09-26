import './App.scss';
import { createBrowserRouter, RouterProvider, Outlet, useLocation } from 'react-router-dom';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Product from './pages/Product/Product';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { useState, useEffect } from 'react';

const Layout = () => {
  const [x, setX] = useState(false);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  console.log(x);

  return (
    <div className={x ? "dark app" : "app"}>
      <Navbar x={(theme) => setX(theme)} />
      <Outlet />
      <Footer />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/Products/:id",
        element: <Products />
      },
      {
        path: "/Product/:id",
        element: <Product />
      }
    ]
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
