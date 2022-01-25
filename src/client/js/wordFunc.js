const addBtn = document.getElementById("add");
const wordTxt = document.getElementById("word");
const meaningTxt = document.getElementById("mean");

const wordBox = document.getElementById("word-list")

window.onload=async function(){
	const list = await getAllWords();
	list.forEach(i=>{
		let t = `
		<div class="cardBox">
			<div>${i.title}</div>
			<div>${i.mean}</div>
		</div>
		`
		wordBox.innerHTML+=t;
	})
	
}
addBtn.addEventListener('click', async function () {
	if (wordTxt.value === '' || meaningTxt.value === '') {
		alert("빈칸을 입력해주세요");
	}
	await createWord(wordTxt.value, meaningTxt.value);
});


const createWord = async (title, mean, desc) => {
	
	try {
		const result = (await axios.post('/api/words', {
				title,
				mean
		})).data;
		if(result.status === 200){
			window.location.reload()
		}
	} catch (e) {
		console.log('error ', e.response.data)
	}
}

const getAllWords=async()=>{
	try{
		const result = (await axios.get('/api/words')).data;
		return result.data;
	}catch(e){
		console.log('error ', e.response.data)
	}
}