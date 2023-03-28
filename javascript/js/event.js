let button = document.getElementById('btn');

function randomColor(value) {
    return Math.floor(Math.random() * (value+1));
}

// button.onclick =function(){
//     document.body.style.backgroundColor= 'red';
// }

button.onclick =function(){
    document.body.style.backgroundColor= `rgb(${randomColor(255)},${randomColor(255)},${randomColor(255)})`;
}

window.onload = function(){
    document.body.style.backgroundColor='cyan';
}

button.onmouseover= function(){
    button.style.backgroundColor='yellow';
}

button.onmouseout =function(){
    button.style.backgroundColor='lightgrey';
}