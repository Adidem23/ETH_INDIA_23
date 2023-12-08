const express = require("express");
const Moralis = require("moralis").default;
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = 3001;

app.use(cors({
  origin: "http://localhost:3000",
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}))

app.use(express.json());

app.get("/tokenPrice", async (req, res) => {

  const {query} = req;

  const responseOne = await Moralis.EvmApi.token.getTokenPrice({
    address: query.addressOne
  })

  const responseTwo = await Moralis.EvmApi.token.getTokenPrice({
    address: query.addressTwo
  })

  const usdPrices = {
    tokenOne: responseOne.raw.usdPrice,
    tokenTwo: responseTwo.raw.usdPrice,
    ratio: responseOne.raw.usdPrice/responseTwo.raw.usdPrice
  }
  

  return res.status(200).json(usdPrices);
});

Moralis.start({
  apiKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6Ijk0NDMwMGQyLTEyMzctNDcyOS05YTA5LTM3ZDY1N2Y5NjUzYyIsIm9yZ0lkIjoiMzY3MzAwIiwidXNlcklkIjoiMzc3NDkwIiwidHlwZUlkIjoiZjRhZmE5ZmQtNjc4MC00ZjNkLThmZWItZGFlNWZmODkzMmRmIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MDE5NjU3OTYsImV4cCI6NDg1NzcyNTc5Nn0.KaXOyZSK6z9pFpXqMQovEK4Q4mrkh-L1DDS7ZYM52IQ",
}).then(() => {
  app.listen(port, () => {
    console.log(`Listening for API Calls`);
  });
});
