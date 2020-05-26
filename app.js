let numofbtn=document.querySelectorAll(".drum").length;

for(let i=0;i<numofbtn;i++){
    let btn=document.querySelectorAll(".drum")[i];
    btn.addEventListener("click", function(e) {
        addMusic(e.target.innerHTML);
        addAnimation(e.target.innerHTML);
    })
}


document.addEventListener("keypress", function(e) {
    addMusic(e.key);
    addAnimation(e.key);
})

function addMusic(key){
    let music;

    switch(key){
        case "w":
            music=new Audio("sounds/tom-1.mp3");
            music.play();
            break;
            
        case "a":
            music=new Audio("sounds/tom-2.mp3");
            music.play();
            break;

        case "s":
            music=new Audio("sounds/tom-3.mp3");
            music.play();
            break;

        case "d":
            music=new Audio("sounds/tom-4.mp3");
            music.play();
            break;
        
        case "j":
            music=new Audio("sounds/snare.mp3");
            music.play();
            break;

        case "k":
            music=new Audio("sounds/crash.mp3");
            music.play();
            break;

        case "l":
            music=new Audio("sounds/kick-bass.mp3");
            music.play();
            break;

        default: console.log(key);

    }
}

function addAnimation(key){
    document.querySelector("."+key).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+key).classList.remove("pressed");
    }, 100);
        
}
