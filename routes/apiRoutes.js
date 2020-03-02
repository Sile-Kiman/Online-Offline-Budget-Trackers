var db = require("../models");

module.exports = app =>{
  app.get("/api/transaction", (req, res) =>{
    db.transactions.find({})
    .then((dbTransaction)=>{
      res.json(dbTransaction );
    })
    .catch(err =>{
        res.status(400).json(err)
    })
  });
  
  app.post("/api/transaction/bulk", ({body}, res) => {
    db.transactions.insertMany(body)
    .then((dbTransaction) =>{
        res.json(dbTransaction);
    })
    .catch(err =>{
        res.status(400).json(err)
    });
  });

  app.post("/api/transaction", ({ body }, res) => {
    db.transactions.create(body)
      .then(dbTransaction => {
        res.json(dbTransaction);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  app.get("/api/transaction", (req, res) => {
   db.transactions.find({})
   .sort({ date: -1 })
   .then(dbTransaction =>{
       res.json(dbTransaction)
   })
   .catch(err =>{
       res.status(400).json(err)
  })
}) 
};
