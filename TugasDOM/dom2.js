let singa = document.querySelector(".singa");
let sino = document.getElementById("img");

singa.onclick = function () {
    if (singa.classList.contains ("background-color")) {

        singa.classList.remove("background-color");
        sino.style.display = "block";
    } else {
        singa.classList.add("background-color");
        sino.style.display = "none";
    }
};

function animesino(){
    if (!sino){
        sino = document.createElement("img");
        sino.id = "image";
        sino.src = "img/5.png";
        sino.alt = "gambar defoult";
        singa.appendChild(sino);
    }
} 

// macan
let macan = document.querySelector(".macan");
let kiba = document.getElementById("img");

macan.onclick = function () {
    if (macan.classList.contains ("background-color")) {

        macan.classList.remove("background-color");
        kiba.style.display = "block";
    } else {
        macan.classList.add("background-color");
        kiba.style.display = "none";
    }
};

function animekiba(){
    if (!kiba){
        kiba = document.createElement("img");
        kiba.id = "image";
        kiba.src = "img/6.jpeg";
        kiba.alt = "gambar defoult";
        macan.appendChild(kiba);
    }
} 

// container
// harimau
let harimau = document.querySelector(".harimau");
let hinta = document.getElementById("img");

harimau.onclick = function () {
    if (harimau.classList.contains ("background-color")) {

        harimau.classList.remove("background-color");
        hinta.style.display = "block";
    } else {
        harimau.classList.add("background-color");
        hinta.style.display = "none";
    }
};

function animehinta(){
    if (!hinta){
        hinta = document.createElement("img");
        hinta.id = "image";
        hinta.src = "img/7.jpeg";
        hinta.alt = "gambar defoult";
        harimau.appendChild(hinta);
    }
} 

// cita
let cita = document.querySelector(".cita");
let rogli = document.getElementById("img");

cita.onclick = function () {
    if (cita.classList.contains ("background-color")) {

        cita.classList.remove("background-color");
        rogli.style.display = "block";
    } else {
        cita.classList.add("background-color");
        rogli.style.display = "none";
    }
};

function animerogli(){
    if (!rogli){
        rogli = document.createElement("img");
        rogli.id = "image";
        rogli.src = "img/15.png";
        //img yang di atas bisa di buka saat online
        rogli.alt = "gambar defoult";
        cita.appendChild(rogli);
    }
} 
// kucing
let kucing = document.querySelector(".kucing");
let niji = document.getElementById("img");

kucing.onclick = function () {
    if (kucing.classList.contains ("background-color")) {

        kucing.classList.remove("background-color");
        niji.style.display = "block";
    } else {
        kucing.classList.add("background-color");
        niji.style.display = "none";
    }
};

function animeniji(){
    if (!niji){
        niji = document.createElement("img");
        niji.id = "image";
        niji.src = "img/9.png";
        //img yang di atas bisa di buka saat online
        niji.alt = "gambar defoult";
        kucing.appendChild(niji);
    }
} 

// footer
let serigala = document.querySelector(".serigala");
let asuma = document.getElementById("img");

serigala.onclick = function () {
    if (serigala.classList.contains ("background-color")) {

        serigala.classList.remove("background-color");
        asuma.style.display = "block";
    } else {
        serigala.classList.add("background-color");
        asuma.style.display = "none";
    }
};

function animeasuma(){
    if (!asuma){
        asuma = document.createElement("img");
        asuma.id = "image";
        asuma.src = "img/12.jpg";
        //img yang di atas bisa di buka saat online
        asuma.alt = "gambar defoult";
        serigala.appendChild(asuma);
    }
} 