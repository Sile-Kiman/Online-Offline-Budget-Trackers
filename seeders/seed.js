const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/budget",
  { useNewUrlParser: true }
);

const budgetSeed = [
  {
    name: "Pay check",
    value: "5000",
    date: new Date(Date.now())
  },
  {
    name: "Pay lunch",
    value: -50,
    date: new Date(Date.now())
  },
  {
    name: "buy bed",
    value: "788",
    date: new Date(Date.now())
  },
   
];

db.transaction.deleteMany({})
  .then(() => db.transaction.collection.insertMany(budgetSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

