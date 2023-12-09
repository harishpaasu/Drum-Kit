 var pressKey = document.querySelectorAll('.drum').length;
for ( var i=0 ; i < pressKey  ; i++){
    document.querySelectorAll('.drum')[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML)
         
    }
    )
document.addEventListener("keypress",function(event){
    makeSound(event.key);

});
    
    }


function makeSound(key) {
    switch (key) {
        case 'A': var crash = new Audio('sounds/crash.mp3');
        crash.play()
            break;

            case 'B': var kick = new Audio('sounds/kick-bass.mp3');
        kick.play()
            break;

    case 'C': var snare = new Audio('sounds/snare.mp3');
        snare.play()
            break;

            case 'D': var tom1 = new Audio ('sounds/tom-1.mp3');
        tom1.play()
            break;

            case 'E': var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play()
            break;

            case 'F': var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play()
            break;

            case 'G': var tom4 = new Audio("sounds/tom4.mp3");
        tom4.play()
            break;
            
     
        default: console.log(key)
            
     }}
