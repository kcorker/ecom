var express=require('express');
var mongoose=require('mongoose');
var Schema = mongoose.Schema
mongoose.connect("mongodb+srv://rgupta1842005:cCVP3RRwnICNUAGM@cluster0.sfidbtj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",{ useUnifiedTopology: true, useNewUrlParser: true  })

// Page schema 
const CartSchema=new Schema({
    title:{
        type:String,
        required:true,
        trim: true
    },
    qt:{
        type:Number,
        
    },
    price:{
        type:Number,
        trim: true,
        required:true
    },
    image:{
        type:String,
        
    },
    username:{
        type:String,
        trim:true
    }
});
module.exports = CartSchema;

// var Page=mongoose.exports=mongoose.model('Page',PageSchema);