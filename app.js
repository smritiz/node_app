const server = require("express")();
// const db = require("./db/db-connect");
// const axios = require("axios");
app.listen(3000, () => { console.log("Server Started...") })
app.get("/", (req, res)=>{
    res.send("server started and listening at port 3000");
})