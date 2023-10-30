const urlParams = new URLSearchParams(window.location.search);
let id = urlParams.get('vocabularyList');

// Remove extra double quotes if present
if (id && id.startsWith('"') && id.endsWith('"')) {
  id = id.slice(1, -1);
}

const wordList = JSON.parse(localStorage.getItem(id)) || [];
const extractedWords = [];

wordList.forEach(item => {
    const parts = item.split('<br> &nbsp;&nbsp;&nbsp;');
    const word = parts[0].trim();
    extractedWords.push(word);
});

const token = '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';
const get_gpt = document.getElementById('result_word');
let resultText = '';

for (let i = 0; i < extractedWords.length; i++) {
    var message = "[word: " + extractedWords[i] + "]" + ' please make a sentence using this word. only sentence';

    fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
        body: JSON.stringify({
            "model": "gpt-3.5-turbo",
            "messages": [{ "role": "system", "content": "You are a helpful assistant." },
            { "role": "user", "content": message }]
        })
    })
        .then(response => response.json())
        .then(data => {
            resultText += "[" + extractedWords[i] + "]" + "<br>";
            resultText += data.choices[0].message.content + "<br><br>";
            get_gpt.innerHTML = resultText;
        });
}
