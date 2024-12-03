const imageContainer = document.querySelector(".image-container");
const btnEl = document.querySelector(".btn");


btnEl.addEventListener("click", ()=>{
    imageNum = 10;
    addNewImages();
    
})

function addNewImages(){
    for (let index = 0; index < imageNum; index++) {
        const newImagEl = document.createElement("img");
        newImagEl.src = `https://picsum.photos/300?random=${Math.floor(Math.random()*2000)}`;

        imageContainer.appendChild(newImagEl);
        
    }
    
}