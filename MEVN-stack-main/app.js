let express = require('express'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    path = require("path")
    
    
    const postAPI = require('./routes/post.route')
    const app = express()
    app.use(express.json());
    app.use(express.static("client/dist/"))

//API
app.use('/api', postAPI)

app.get("*",(req,res)=>{
    console.log(path.resolve(__dirname,"client","dist","index.html"));
    res.sendFile(path.resolve(__dirname,"client","dist","index.html"))
})

//create port
const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log('Connected to port ' + port)
})

mongoose.connect("mongodb+srv://enjoyliving11:fernwah259@cluster0.iw44f5r.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("Connected to DB");
})
.catch(err=>{
    console.log(err)
})

//error hanler
app.use(function(err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});
