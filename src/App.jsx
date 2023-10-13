import "./App.css";
import Home from "./Pages/Home/Home";
import Payment from "./components/PaymentForm/Payment"
import CardPayment from "./components/CardPayment"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {TotalProvider} from '../TotalContext/TotalContext'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path:"/cardpayment",
    element:<Payment/>
  },
  {
    path:"/cardShop",
    element:<CardPayment/>
  }
]);

function App() {
  return (
    <TotalProvider >
      <RouterProvider router={router} />
    </TotalProvider>
  );
}

export default App;
