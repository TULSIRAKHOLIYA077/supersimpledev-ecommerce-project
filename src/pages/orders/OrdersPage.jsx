import Header from "../../components/Header";
import "./OrdersPage.css";
import { useEffect, useState } from "react";
import axios from "axios";
import OrdersGrid from "./OrdersGrid";

const OrdersPage = ({ cart, loadCart }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const orderPageData = async () => {
      const response = await axios.get("/api/orders?expand=products");
      setOrders(response.data);
    };
    orderPageData();
  }, []);

  return (
    <>
      <title>Orders</title>

      <link rel="icon" to="orders-favicon.png" />

      <Header cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <OrdersGrid orders={orders} loadCart={loadCart}/>
      </div>
    </>
  );
};

export default OrdersPage;
