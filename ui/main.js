var element = document.getElementById('imad');
var marginLeft = 0;

function moveRight(){
    marginLeft = marginLeft + 1;
    element.style.marginLeft = marginLeft + 'px';
}

element.onclick =function(){
    var interval = setInterval(moveRight ,50);
}

//counter
var counter =0;
var button = document.getElementById('counter');
button.onclick = function() {
    //Make a request to the counter endpoint
    
    //Capture the response and store it in the variable
    
    //Render the variable in the correct span
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
};