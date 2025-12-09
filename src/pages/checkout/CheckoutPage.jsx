import { useEffect, useState } from "react";
import "./checkout.css";
import CheckoutHeader from "./CheckoutHeader";
import axios from "axios";
import OrderSummary from "./OrderSummary";
import PaymentSummary from "./PaymentSummary";

const CheckoutPage = ({ cart }) => {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);

  useEffect(() => {
    const fetchCheckoutData = async () => {
      let response = await axios.get(
        "/api/delivery-options?expend=estimatedDeliveryTime")
          setDeliveryOptions(response.data);

      response = await axios.get("/api/payment-summary")
        setPaymentSummary(response.data);
    };
    fetchCheckoutData();
  }, []);

  return (
    <>
      <title>Checkout</title>

      <link rel="icon" href="cart-favicon.png" />

      <CheckoutHeader />

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary cart={cart} deliveryOptions={deliveryOptions} />

          <PaymentSummary paymentSummary={paymentSummary} />
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
