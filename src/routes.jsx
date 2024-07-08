import Home from "./pages/Home/";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Error from "./pages/Error";

const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
];

export default routes;
