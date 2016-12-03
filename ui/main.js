console.log('Loaded!');
var element = document.getElementById('imad');
var marginLeft = 0;

function moveRight(){
    marginLeft = marginLeft + 10;
    element.style.marginLeft = marginLeft + 'px';
}

element.onclick =function(){
    var interval = setInterval(moveRight ,100);
}