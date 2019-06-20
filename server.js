const express = require("express")
const app = express()
// const bodyParser = require("body-parser")
// const cors = require("cors")
const path = require("path")

const port = process.env.PORT || 4000 

// app.use(cors(),bodyParser.json())


//Route


    //Static file declaration
app.use(express.static(path.join(__dirname, 'client/build')));
//production mode
 if(process.env.NODE_ENV === 'production') {
       app.use(express.static(path.join(__dirname, 'client/build'))); 
       app.get('*', (req, res) => { 
              res.sendfile(path.join(__dirname = 'client/build/index.html'));
                }
                )
    }

//build mode
app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname+'/client/public/index.html'));
      }
    )

    app.get('/', (req, res) => {
        console.log("server listening on port: " + port);
        res.send('root route');
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



app.listen(port,(req,res)=>{
    console.log("Server is running on port 4000")
})