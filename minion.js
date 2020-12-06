var minion = 'https://api.funtranslations.com/translate/';
var submit = document.getElementById('submit');
var display = document.getElementById('display');
var language = document.getElementById('language');
submit.addEventListener('click',()=>{
    var text = document.getElementById('input').value;
    var addon = minion+language.value+'.json';
    var get = addon+'?text='+text;
    getrequestvalue(get);
});

language.addEventListener('click',()=>{
    submit.innerText = `Translate to ${language.value.toUpperCase()} Language`
})
function getrequestvalue(url) {
    display.innerText = 'Please wait.....';
    fetch(url)
    .then(response => response.json())
    .then(json =>{
        display.innerText = json.contents.translated;
    })
    .catch(data =>{
        display.innerText = '';
        alert("Too Many Requests: Rate limit of 5 requests per hour exceeded");
    })
}