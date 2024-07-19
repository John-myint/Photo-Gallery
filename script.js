const nextBtn = document.getElementsByClassName("nextBtn")[0];
const preBtn = document.getElementsByClassName("preBtn")[0];
const img = document.getElementsByClassName("img")[0];
const imgName = document.getElementsByClassName("imgName")[0];
const images = [{src :"img/CuteDog1.jpg", name : "Cute Dog 1"},
                {src :"img/CuteDog2.jpg", name : "Cute Dog 2"},
                {src :"img/CuteDog3.jpg", name : "Cute Dog 3"},
                {src :"img/CuteDog4.jpg", name : "Cute Dog 4"},
                {src :"img/CuteDog5.jpg", name : "Cute Dog 5"},
                {src :"img/CuteDog6.jpg", name : "Cute Dog 6"},
                {src :"img/CuteDog7.jpg", name : "Cute Dog 7"},
];

let i = 0;

const changeImage = () => {
    img.src = images[i].src;
    imgName.textContent = images[i].name;
}

const nextImage = () => {
    if (i < images.length - 1) {
        ++i;
    } else {
        i = 0;
    }
changeImage();
}

const preImage = () => {
    if (i === 0) {
        i = images.length - 1;
    } else {
        --i;
    }
    changeImage();
}

nextBtn.addEventListener("click", () => {  
    nextImage();
})

preBtn.addEventListener("click", () => {  
    preImage();
})

document.addEventListener("keydown", (event) => {
    const key = event.key;
    if (key === "ArrowRight") {
        nextImage();
    } 
})

document.addEventListener("keydown", (event) => {
    const key = event.key;
    if(key === "ArrowLeft") {
    preImage();
    }
})
