var express=require('express');
var mongoose=require('mongoose');
var Schema = mongoose.Schema
mongoose.connect("mongodb+srv://rgupta1842005:cCVP3RRwnICNUAGM@cluster0.sfidbtj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",{ useUnifiedTopology: true, useNewUrlParser: true  })

// Category schema 
const CategorySchema=new Schema({

        title:{
            type:String,
            required:true,
            trim: true
        },
        slug:{
            type:String,
            trim: true
        }, 
      
});
module.exports = CategorySchema;