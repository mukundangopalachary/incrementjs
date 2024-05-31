let count = 0;

let countel = document.getElementById("count-element")

function increment(){
    count+=1;
    countel.innerText = count;
    console.log("The button was clicked!")
}
