import mongoose from 'mongoose';

const wordSchema = new mongoose.Schema({
	title:{type:String, required:true},
	mean:{type:String, required:true},
	desc:{type:String},
	// owner:{type:mongoose.Schema.userId,required:true,ref:"User"}
});


const Word = mongoose.model("Word",wordSchema);
export default Word;