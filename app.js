
let telefonbuton = document.querySelector(".telef");
let compbuton = document.querySelector(".comp");
let cambuton = document.querySelector(".camm");
let aksesuarbuton = document.querySelector(".acss");
let tümünügöster = document.querySelector(".all");

let tele = document.querySelectorAll(".tele");
let cam = document.querySelectorAll(".cam")
let pc = document.querySelectorAll(".pc")
let acs = document.querySelectorAll(".acs")


telefonbuton.addEventListener("click", () => {
   

    for (let i = 0; i < tele.length; i++) {
        
        tele[i].style.display = "block";
    }

    for (let i = 0; i < cam.length; i++) {
        
        cam[i].style.display = "none";

    }
    for (let i = 0; i < pc.length; i++) {
        pc[i].style.display = "none";
       


    }
    for (let i = 0; i < acs.length; i++) {
        acs[i].style.display = "none";

    }


})

compbuton.addEventListener("click", () => {
    

    for (let i = 0; i < pc.length; i++) {
       
        pc[i].style.display = "block";
    }

    for (let i = 0; i < cam.length; i++) {
        
        cam[i].style.display = "none";

    }
    for (let i = 0; i < tele.length; i++) {
        tele[i].style.display = "none";
       
    }
    for (let i = 0; i < acs.length; i++) {
        acs[i].style.display = "none";

    }


})


cambuton.addEventListener("click", () => {


    for (let i = 0; i < cam.length; i++) {
     
        cam[i].style.display = "block";
    }

    for (let i = 0; i < pc.length; i++) {
      
        pc[i].style.display = "none";

    }
    for (let i = 0; i < tele.length; i++) {
        tele[i].style.display = "none";
        
    }
    for (let i = 0; i < acs.length; i++) {
        acs[i].style.display = "none";

    }


})


aksesuarbuton.addEventListener("click", () => {
  
    for (let i = 0; i < acs.length; i++) {
      
        acs[i].style.display = "block";
    }

    for (let i = 0; i < pc.length; i++) {
       
        pc[i].style.display = "none";

    }
    for (let i = 0; i < tele.length; i++) {
        tele[i].style.display = "none";
       


    }
    for (let i = 0; i < cam.length; i++) {
        cam[i].style.display = "none";

    }


})

tümünügöster.addEventListener("click", () => {

    for (let i = 0; i < acs.length; i++) {

        acs[i].style.display = "block";
    }

    for (let i = 0; i < pc.length; i++) {
   
        pc[i].style.display = "block";

    }
    for (let i = 0; i < tele.length; i++) {
        tele[i].style.display = "block";
     

    }
    for (let i = 0; i < cam.length; i++) {
        cam[i].style.display = "block";

    }
})





let valueDisplays =document.querySelectorAll(".sayi");
let interval = 4000;

valueDisplays.forEach(valueDisplay =>{
    let startValue=0;
    let endValue=parseInt(valueDisplay.getAttribute("data-val"));
    // console.log(endValue)
    let duration = Math.floor(interval/endValue);
    let counter = setInterval( function () {
        startValue +=1;
        valueDisplay.textContent=startValue;
        if (startValue==endValue) {
            clearInterval(counter);
        }
    }, duration)
} );



let sepetButton = document.getElementById("deger");
let sepetEkle= document.querySelectorAll(".sepet-ekle")
// console.log(sepetButton)
// console.log(sepetEkle)
// console.log(sepetButton.innerText)
let can=0;
let texts= parseInt(sepetButton.innerText);
texts=can;

for (let i = 0; i < sepetEkle.length; i++) {
    const element = sepetEkle[i];
    element.addEventListener("click", ()=>{
        texts=texts+1;
        sepetButton.innerText=texts;
    });
}




