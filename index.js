let count = 0;
let savel = document.getElementById("save-element")
let countel = document.getElementById("count-element")

function increment(){
    count+=1;
    countel.textContent = count;
    console.log("The button was clicked!")
}

function save(){
    let countstr = count + " - "
    savel.textContent += countstr
    console.log(count)
    count = 0;
    countel.textContent = count;
}


