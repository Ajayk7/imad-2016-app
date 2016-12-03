var element = document.getElementById('imad');
var marginLeft = 0;

function moveRight(){
    marginLeft = marginLeft + 1;
    element.style.marginLeft = marginLeft + 'px';
}

element.onclick =function(){
    var interval = setInterval(moveRight ,50);
};

//counter
var button = document.getElementById('counter');

button.onclick = function() {
    
    //Create a Request object
    var request = new XMLHttpRequest();
    
    //Capture the response and store it in the variable
    request.onreadystatechange = function() {
      if(request.readyState == XMLHttpReqeuest.DONE) {
          //Take some action
          if(request.status == 200) {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
          }
      }
    };
    //Make the request
    request.open('GET', 'http://ajayk7.imad.hasura-app.io/counter', true );
    request.send(null);
    
};