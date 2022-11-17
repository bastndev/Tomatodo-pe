let blueBtn = document.getElementById("blue")
let pinkBtn = document.getElementById("pink")
let blackBtn = document.getElementById("black")
let imgchange= document.getElementById("imgchange")

blueBtn.onclick = function(){
    imgchange.src = "./assets/img/on1.png";
}

pinkBtn.onclick = function(){
    imgchange.src = "./assets/img/on2.png";
}

blackBtn.onclick = function(){
    imgchange.src = "./assets/img/on3.png";
}
