let container = document.querySelector(".indah");
let gambar = document.getElementById("img");

container.onclick = function () {
    if (container.classList.contains ("background-color")) {

        container.classList.remove("background-color");
        gambar.style.display = "block";
    } else {
        container.classList.add("background-color");
        gambar.style.display = "none";
    }
};

function tambarGambar(){
    if (!gambar){
        gambar = document.createElement("img");
        gambar.id = "image";
        gambar.src = "img/1.jpg";
        gambar.alt = "gambar defoult";
        container.appendChild(gambar);
    }
}

// nav
let ihwanul = document.querySelector(".cantik");
let foto = document.getElementById("img");

ihwanul.onclick = function () {
    if (ihwanul.classList.contains ("background-color")) {

        ihwanul.classList.remove("background-color");
        foto.style.display = "block";
    } else {
        ihwanul.classList.add("background-color");
        foto.style.display = "none";
    }
};

function tambar(){
    if (!foto){
        foto = document.createElement("img");
        foto.id = "image";
        foto.src = "img/2.png";
        foto.alt = "gambar defoult";
        ihwanul.appendChild(foto);
    }
}

// container
// sabi
let fikri = document.querySelector(".sabi");
let img = document.getElementById("img");

fikri.onclick = function () {
    if (fikri.classList.contains ("background-color")) {

        fikri.classList.remove("background-color");
        img.style.display = "block";
    } else {
        fikri.classList.add("background-color");
        img.style.display = "none";
    }
};

function tambarimg(){
    if (!img){
        img = document.createElement("img");
        img.id = "image";
        img.src = "img/3.png";
        img.alt = "gambar defoult";
        fikri.appendChild(img);
    }
}
// ini
let fikrirama = document.querySelector(".ini");
let naruto = document.getElementById("img");

fikrirama.onclick = function () {
    if (fikrirama.classList.contains ("background-color")) {

        fikrirama.classList.remove("background-color");
        naruto.style.display = "block";
    } else {
        fikrirama.classList.add("background-color");
        naruto.style.display = "none";
    }
};

function tambarimg1(){
    if (!naruto){
        naruto = document.createElement("img");
        naruto.id = "image";
        naruto.src = "img/4.jpeg";
        naruto.alt = "gambar defoult";
        fikrirama.appendChild(naruto);
    }
}
// itu
let indra = document.querySelector(".itu");
let sasuke = document.getElementById("img");

indra.onclick = function () {
    if (indra.classList.contains ("background-color")) {

        indra.classList.remove("background-color");
        sasuke.style.display = "block";
    } else {
        indra.classList.add("background-color");
        sasuke.style.display = "none";
    }
};

function tambahan(){
    if (!sasuke){
        sasuke = document.createElement("img");
        sasuke.id = "image";
        sasuke.src = "img/NobitaNobi.png";
        sasuke.alt = "gambar defoult";
        indra.appendChild(sasuke);
    }
}

// footer
let ikram = document.querySelector(".dengki");
let sakura = document.getElementById("img");

ikram.onclick = function () {
    if (ikram.classList.contains ("background-color")) {

        ikram.classList.remove("background-color");
        sakura.style.display = "block";
    } else {
        ikram.classList.add("background-color");
        sakura.style.display = "none";
    }
};

function tambahan45(){
    if (!sakura){
        sakura = document.createElement("img");
        sakura.id = "image";
        sakura.src = "img/13.jpeg";
        sakura.alt = "gambar defoult";
        ikram.appendChild(sakura);
    }
}


const button = document.getElementById('play-sound');
const audio = new Audio('mp3/nt.mp3', 'mp3/2.mp3'); // replace with your sound file

button.addEventListener('click', () => {
  audio.play();
});
