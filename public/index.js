const inputVal = document.getElementById('inp');
const btn = document.getElementById('btn');
const question = document.getElementById('question');
const answer = document.getElementById('answer');
const loading = document.getElementById('loading');
const URL = 'http://localhost:5000/api/v1/ai/generate';

let loader = true;

const generate = async() => {
    loader = true
    try {
        question.innerText = inputVal.value;
        answer.innerText = '';
        if(loader){
            loading.style.display = 'block';
        }
        const response = await axios.post(URL, {prompt: inputVal.value});
        answer.innerText = response.data;
        inputVal.value = '';
        loader = false;
        if(!loader){
            loading.style.display = 'none';
        }
    } catch (error) {
        console.log(error.message);
        loader = false;
        if(!loader){
            loading.style.display = 'none';
        }

    }
}

btn.addEventListener('click', async() => {
    await generate();
})
