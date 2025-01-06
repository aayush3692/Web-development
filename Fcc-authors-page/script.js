const authorContainer = document.getElementById("author-container");
const loadMoreBtn = document.getElementById("load-more-btn");

let  startingIndex = 0;
let endingIndex = 8;
let authorDataArr = [];

fetch('https://cdn.freecodecamp.org/curriculum/news-author-page/authors.json')
    .then((res)=>res.json())
    .then((data)=>{
        authorDataArr = data;
        displayAuthors(authorDataArr.slice(startingIndex, endingIndex));
})
    .catch((err)=> {
        authorContainer.innerHTML = `<p class = "error-msg">There was a error loading the author</p>`
    });

const fetchMoreAuthors = () => {
    startingIndex += 8;
    endingIndex += 8;

    displayAuthors(authorDataArr.slice(startingIndex, endingIndex));

    if(authorDataArr.length <= endingIndex){
        loadMoreBtn.disabled = true;
        loadMoreBtn.style.cursor = "not-allowed";
        loadMoreBtn.textContent = "No more authors to show";
    }
}

loadMoreBtn.addEventListener("click", fetchMoreAuthors);

const displayAuthors = (authors) =>{
    authors.forEach(({author, bio, image, url}, index)=> {
        authorContainer.innerHTML += `
            <div id ="${index}" class="user-card">
            <h2 class="author-name">${author}</h2>
            <img class="user-img" src = "${image}" alt="${author} avatar">
            <div class="purple-divider"></div>
            <p class="bio">${bio.length > 5? bio.slice(0, 50)+'...':bio}</p>
            <a class="author-link" href="${url}" target="_blank">${author} author page</a>
                </div>
        `;
    });
};