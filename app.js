let url = document.baseURI
let data = [];
url = url.split('?')[1];
let container = document.querySelector('.container');
let separate = url.split('&');

for(s of separate){
    s = s.split('=');
    let i = s[1].indexOf('+');
    if(i != -1)
    {
        s[1] = s[1].replace('+', ' ');
    }
    container.innerText += `${s[0]} ::::::::: ${decodeURIComponent(s[1])}\n`
    console.log(s);
}
