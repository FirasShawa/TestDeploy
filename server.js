const express = require("express")

const app = express()

const bodyParser = require("body-parser")
const cors = require("cors")
const path = require("path")

const port = process.env.PORT || 4000 

app.use(cors(),bodyParser.json())


//Route
 app.get('/', (req, res) => {
     res.send('root route');
    console.log("work!");
    });

// app.get("/myapi/Firas",(req,res) => {
//     res.send("hi Firas");
// })

// app.post("/myapi/Name",(req,res)=>{
//     // let username = req.body.name;
//     res.send("Hi " + req.body.name)
// })


// // if(process.env.NODE_ENV === "production"){
//     app.use(express.static(path.join(__dirname,"client/bulid")))

//     app.get("*",(req,res)=>{
//         res.sendFile(path.join(__dirname,"client/build","index.html"))
//     })
// // }



app.listen(port,()=>{
    console.log("Server is running on port 4000")
})