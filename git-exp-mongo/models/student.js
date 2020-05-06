const mongoose=require('mongoose')

const StudentSchema=new mongoose.Schema({
    StudentName:{type:String},
    StudentId:{type:String},
    Studenet_Background:{type:String},
    Year:{type:String}
})

module.exports=mongoose.model('/product',productschema)