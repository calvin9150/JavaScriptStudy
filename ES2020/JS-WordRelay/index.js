document.querySelector('#input').focus()
const btn = document.querySelector('#button');

const dictionary = [];
btn.addEventListener('click', () => {
    const word = document.querySelector('#word').textContent;
    const input = document.querySelector('#input').value;
    const lastIndex = word.length - 1;
    const w = word[lastIndex];
    const i = input[0];
    if(dictionary.includes(input)) {
        document.querySelector('#error').textContent = '중복입니다.'
    } else {
        if (w===i) {
            document.querySelector('#word').textContent = input
            document.querySelector('#error').textContent = ''
            document.querySelector('#input').value = ''
            document.querySelector('#input').focus()
            dictionary.push(input)
     
         } else {
             document.querySelector('#error').textContent = '땡'
             document.querySelector('#input').value = ''
             document.querySelector('#input').focus()
         }
    }
    
})

