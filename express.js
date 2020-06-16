const express=require('express');
const mongoose=require('mongoose');
const morgan=require('morgan');
const path=require('path');
const mongo=require('mongo');

const app=express();
const PORT=process.env.PORT||8080;
app.get('/api',(req,res)=>{
    const data={
        
        name: "saumya",
       email:"saumya@gmail.com"
    };
    res.json(data);
})

//const Schema =mongo.Schema;
//const detailsSchema=new Schema({
//    name: String,
//        email:String
//            
//});
//const details=mongo.model('details',detailsSchema);
//const data={
//    name: "saumya",
//        email:"saumya@gmail.com"
//}
//const newdetails=new details(data);
//newdetails.save((error)=>{
//    if(error)
//    console.log('error bro');
//    else
//        console.log('data has been saved')
//    
//});
//
//


app.use(morgan('tiny'));
app.get('/',(req,res)=>{
    
    res.send('saumya');
})
app.listen(PORT);


