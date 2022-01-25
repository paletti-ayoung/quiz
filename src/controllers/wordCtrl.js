import Word from "../models/Word";

export const createWord = async(ctx) => {
	const { title, mean, desc } = ctx.request.body;
	const newWord = await Word.create({
		title,
		desc,
		mean
	});
	await newWord.save();
	return ctx.body={
		status:200
	};
}

export const getAllWords=async(ctx)=>{
	const words = await Word.find({});
	
	return ctx.body={
		status:200,
		data:words
	}
}