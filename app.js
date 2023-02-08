//Requirements
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

//Using express
const app = express()
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}))

//Database setting
mongoose.set('strictQuery',false)
mongoose.connect('mongodb://127.0.0.1:27017/engineering',{
    useNewUrlParser : true,
    useUnifiedTopology : true
})


//Schema and model creation
const messageSchema =new mongoose.Schema({
    fName : String,
    lName : String,
    email : String,
    phone : String,
    topic : String,
    message : String
})

const Message = new mongoose.model('message',messageSchema)


//Home route
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/html/index.html')
})

//About route
app.get('/about',(req,res)=>{
    res.sendFile(__dirname+'/html/about.html')
})

//Trabalhos route
app.get('/trabalhos',(req,res)=>{
    res.sendFile(__dirname+'/html/trabalhos.html')
})

//Fale connosco route
app.get('/fale-connosco',(req,res)=>{
    res.sendFile(__dirname+'/html/fale-connosco.html')
})

app.post('/fale-connosco',(req,res)=>{
    const message = new Message({
        fName : req.body.fName,
        lName : req.body.lName,
        email : req.body.email,
        phone : req.body.phone,
        topic : req.body.topic,
        message : req.body.message
    })
    console.log(`User data : ${message}`);
    message.save()

    res.redirect('/')
})

//Icon
app.get('/icon',(req,res)=>{
    res.sendFile(__dirname+'/icon.svg')
})



//Port setting
app.listen(8080,()=>{
    console.log('Server is up and running on port 8080');
})
