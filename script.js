let frutas = ["m","u","r","i","c","i"];
let letra = document.querySelector('#label');
let palavra = document.querySelector('.palavra');
let click = document.querySelector("#butao");


let m = document.querySelector("#m");
let u = document.querySelector("#u");
let r = document.querySelector("#r");
let i = document.querySelector("#i");
let c = document.querySelector("#c");
let ii = document.querySelector("#ii");

function apertar(){
    
    if (label.value == frutas[0]) {
        alert("vc acertou a letra");
        m.innerHTML += frutas[0];
    }
    
    else if(label.value == frutas[1]){
        alert("vc acertou a letra");
        u.innerHTML += frutas[1]();   
    }
    
    else if(label.value == frutas[2]){   
        alert("vc acertou a letra");
        r.innerHTML += frutas[2];  
    }
    
    else if(label.value == frutas[3]){
        alert("vc acertou a letra");
        i.innerHTML += frutas[3];  
    }
    
    else if(label.value == frutas[4]){ 
        alert("vc acertou a letra");
        c.innerHTML += frutas[4];  
    }
    
    else if(label.value == frutas[5]){
        alert("vc acertou a letra ");  
        ii.innerHTML += frutas[5];   
    }

    else{
        alert("vc errou a letra");    
    }
}

click.onclick = apertar;