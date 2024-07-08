//detecting button press

for(var buttonNumber=0; buttonNumber<=6; buttonNumber++){
    document.querySelectorAll(".drum")[buttonNumber].addEventListener("click", respondToClick);
}

function respondToClick(){
var buttonInnerHtml=this.innerHTML;
makeSound(buttonInnerHtml);
buttonAnimation(buttonInnerHtml);
}

//detecting keyboard press

document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})

//Make sound function

function makeSound(x){
    switch (x) {
        case "w":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick=new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;              

        default:
            console.log(buttonInnerHtml);
    }
}

function buttonAnimation(y){
    document.querySelector("."+y).classList.add("pressed");
    
    setTimeout(function(){
        document.querySelector("."+y).classList.remove("pressed");
    },100);

}