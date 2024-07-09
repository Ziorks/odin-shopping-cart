import Home from "./pages/Home/";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Error from "./pages/Error";

const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "shop",
    element: <Shop />,
  },
  {
    path: "shop/:product",
    element: <Product />,
  },
  {
    path: "cart",
    element: <Cart />,
  },
];

export default routes;
