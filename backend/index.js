// Connecting to database

require('dotenv').config();

const uri = process.env.MONGO_CONNECTION_STRING;

const { MongoClient, ServerApiVersion } = require('mongodb');

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect(err => {
  const collection = client.db("tos1").collection("tos");
  client.close();
});

const express = require("express");
const app = express();
const cors = require("cors");

console.log("App listen at port 5000");