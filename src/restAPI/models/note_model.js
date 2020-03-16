const mongoose =require ('mongoose');
const NoteSchema=  mongoose.Schema({
    Name:{type:String},
    Phone:{type:Number},
    Email:{type:String},
})
module.exports=mongoose.model("Note",NoteSchema)