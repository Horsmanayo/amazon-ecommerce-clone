const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51Kg6P2Kop7QBtvjAZ9pd38koDADfYJrgi7ZrEnDzQhxdcWpuwvOXMf4LZGlQvN8n64DLjhtyKn4T1EhEb4uNKsPa00izjBwQ1V"
);

//API

//App config
const app = express();

//Middlewares
app.use(cors({ origin: true }));

//API routes
app.get("/", (req, res) => res.status(200).send("hello world"));

app.post("/payment/create", async (req, res) => {
  const total = req.query.total;

  console.log("Payment request received", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//Listen Command

exports.api = functions.https.onRequest(app);

//sample endpoint
//http://localhost:5001/clone-97111/us-central1/api
// firebase init
//firebase emulators:start
