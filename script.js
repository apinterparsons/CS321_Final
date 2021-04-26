function makeColorValue() {
    return Math.round(Math.random() * 255);
}
  
function setButtonColor(button, red, green, blue) {
    button.setAttribute('style','background-color: rgb(' + red + ',' + green + ',' + blue + ');'
    );
}

function startGame(){
    var buttons = document.getElementsByClassName('colorButton');
    var heading = document.getElementById('colorValue');
    var answerMessage = document.getElementById('answer');

    answerMessage.innerHTML = "";
    var answerButton = Math.round(Math.random() * (buttons.length - 1));
  
    for (var i = 0; i < buttons.length; i++) {
        var red = makeColorValue();
        var green = makeColorValue();
        var blue = makeColorValue();
  
        setButtonColor(buttons[i], red, green, blue);
  
        if (i === answerButton) {
            heading.innerHTML =`(${red}, ${green}, ${blue})`;
        }
  
        buttons[i].addEventListener('click', function(){
            if (this === buttons[answerButton]) {
                answerMessage.innerHTML = "Correct!";
            } 
            else {
                answerMessage.innerHTML = "Wrong answer! Guess again.";
            }
        });
    }
}

function restart(){
  location.reload();
  return false;
}

function showVid() {
  var x = document.getElementById("video");
  if(x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


