import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Menu from "./layout/Menu";
import Shop from "./components/Shop/Shop";
import Order from './components/Order/Order';
import { CartStoredAndShow } from "./loader/CartStoredAndShow";
import Inventory from "./components/Inventory/Inventory";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Shipping from "./components/Shipping/Shipping";
import PrivetRouts from "./components/Routs/PrivetRouts";

function App() {
  const router = createBrowserRouter([
    {path: '/', element: <Menu></Menu>,
    children: [
      {path: '/', element: <Shop></Shop>,
      loader: () => fetch('products.json'),
    },
      {path: 'order', element: <Order></Order>,
      loader: CartStoredAndShow,
    },
      {path: 'inventory', element: <Inventory></Inventory>},
      {path: 'shipping', element: <PrivetRouts><Shipping></Shipping></PrivetRouts>},
      {path: 'login', element: <Login></Login>},
      {path: 'register', element: <Register></Register>}
    ]
  }
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
