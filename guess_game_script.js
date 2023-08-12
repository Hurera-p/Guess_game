
let rand_numb = Math.round(Math.random()*10);
let txt = "Play again?"
let count = 1;
document.getElementById("user_input").addEventListener("click",  checkn);

function checkn() {
    
let usr_numb = parseInt(document.getElementById("uu").value, 10)

if (usr_numb==rand_numb) {
text= `You guessed it right! :) in ${count} attempts`

document.getElementById("user_input").innerHTML = txt; 
document.getElementById("user_input").addEventListener("click",  play_again);

}
else if (usr_numb>rand_numb) {
text = "Your number is bigger, try again :("

}
else if (usr_numb<rand_numb) {
text = "Your number is smaller, try again :( "
}
count +=1;
document.getElementById("demo").innerHTML = text; 
}

function play_again() {
location.reload();
}

