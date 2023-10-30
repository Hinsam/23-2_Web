const token = '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';
const gptEl = document.getElementById('result_of_gpt');

fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers:{
        'Content-Type': 'application/json', 
        'Authorization': 'Bearer ' + token,
    },
    body: JSON.stringify({
        "model": "gpt-3.5-turbo",
        "messages": [{"role": "system", "content": "You are a helpful assistant."}, 
                    {"role": "user", "content": "Who is Elon Musk?"}]
    })
}).then(response => {
    return response.json();
}).then(data => {
    gptEl.innerText = data.choices[0].message.content;
});
