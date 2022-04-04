 
 let player1dice = ""
 let player2dice = ""
 

 function rollDices(){
    var x = document.getElementById("btn1")
    var y = document.getElementById("btn2")
    x.style.display = "none";
    y.style.display = "block";
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomDiceImages1 = "images/dice" + randomNumber1 + ".png";
    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", randomDiceImages1);
    
    var randomNumber2 = Math.floor(Math.random () * 6) + 1;
    var randomDiceImages2 = "images/dice" + randomNumber2 + ".png";
     var image2 = document.querySelectorAll("img")[1];
     image2.setAttribute("src", randomDiceImages2);

     document.getElementById("testImg").setAttribute("src", randomDiceImages1);
     document.getElementById("RImg").setAttribute("src", randomDiceImages2);
    player1dice = (randomNumber1 + randomNumber2)
    sessionStorage.setItem("player1", player1dice)
document.getElementById("result").innerHTML = " "

image1.classList.add('animate__animated', 'animate__wobble');
image2.classList.add('animate__animated', 'animate__wobble');

} 
function rollDices2(){
    var x = document.getElementById("btn1")
    var y = document.getElementById("btn2")
    y.style.display = "none";
    x.style.display = "block";
    
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomDiceImages1 = "images/dice" + randomNumber1 + ".png";
    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", randomDiceImages1);
    var randomNumber2 = Math.floor(Math.random () * 6) + 1;
    var randomDiceImages2 = "images/dice" + randomNumber2 + ".png";
     var image2 = document.querySelectorAll("img")[1];
     image2.setAttribute("src", randomDiceImages2);
     image1.classList.add('animate__animated', 'animate__wobble');
     image2.classList.add('animate__animated', 'animate__wobble');
     document.getElementById("KImg").setAttribute("src", randomDiceImages1);
     document.getElementById("SImg").setAttribute("src", randomDiceImages2);
    player2dice = (randomNumber1 + randomNumber2)
    
    sessionStorage.setItem("player2", player2dice)
    var player1result = sessionStorage.getItem("player1")
    var player2result = sessionStorage.getItem("player2")
       if (player1result > player2result) {
            document.getElementById("result").innerHTML = "player 1 wins"
        
       }else if (player1result == player2result){
           document.getElementById("result").innerHTML = "it is a draw"
       }else{
           document.getElementById("result").innerHTML = "player 2 wins"
       }
      
} 
 
 


 