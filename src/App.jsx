import "./App.css";
import Home from "./Pages/Home/Home";
import Payment from "./components/PaymentForm/Payment"
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path:"/cardpayment",
    element:<Payment/>
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
