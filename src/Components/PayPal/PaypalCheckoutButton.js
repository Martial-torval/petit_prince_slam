import React from "react";
import "./paypal.css";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PaypalCheckoutButton = () => {
  const btnStyle = {
    layout: "vertical",
    color: "white",
    shape: "rect",
    label: "paypal",
  };

  return (
    <>
      {
        <PayPalScriptProvider // SDK
          options={{
            "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID,
            currency: "EUR",
            locale: "fr_FR",
          }}
        >
          <PayPalButtons
            style={btnStyle}
            className="paypalBtn"
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: "16.99", // I need to put dynamic value instead of current value
                    },
                  },
                ],
              });
            }}
            onApprove={(data, actions) => {
              return actions.order.capture().then((details) => {
                const name = details.payer.name.given_name;
                alert(`L'achat s'est passé avec succès ${name}`);
              });
            }}
          />
        </PayPalScriptProvider>
      }
    </>
  );
};

export default PaypalCheckoutButton;
