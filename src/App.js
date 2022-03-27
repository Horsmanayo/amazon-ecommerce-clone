import React, { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/header-component/Header";
import Home from "./Components/home-component/Home";
import { auth } from "./firebase";
import Checkout from "./Pages/checkout-component/Checkout";
import Login from "./Pages/Login-component/Login";
import { useStateValue } from "./StateProvider";
import Payment from "./Pages/payment-component/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51Kg6P2Kop7QBtvjAH7sh0a7gkwCCMavxr5AkDXPQcVACoPfrMgMI5ayGitRjk1qqyTO3IjpayBh9buAJ26MylXvT00zKUNuOVm"
);

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      console.log("The user is >>>>", authUser);

      if (authUser) {
        //if user just logged in/ the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/payment"
          element={
            <>
              <Header />
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            </>
          }
        />
        <Route
          path="/checkout"
          element={
            <>
              <Header />
              <Checkout />
            </>
          }
        />
        <Route path="*" element={<h1>Wrong route</h1>} />
      </Routes>
    </div>
  );
}

export default App;
