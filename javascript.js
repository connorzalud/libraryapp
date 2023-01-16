const library = document.querySelector(".library-container");
const submitBtn=document.querySelector(".submit");
const userTitle = document.querySelector("#title");
const userAuthor = document.querySelector("#author");
const userPages = document.querySelector("#pages");
const userRead = document.querySelector("#read");


let myLibrary = []

class Book {
    constructor(title, author, pages, read){
        this.title=title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
    
}

function addBookToList(){
    title = userTitle.value;
    author = userAuthor.value;
    pages=userPages.value;
    read = userRead.value;
    const book = new Book(title,author,pages,read);
    myLibrary.push(book)
    }


//add book info to DOM, check to see if div id already exists to avoid duplicating book info    
function addBookItem(){
    for(i=0;i<myLibrary.length;i++){
        if(document.getElementById("div" + i)){
            continue;
        }
        const titleDiv = document.createElement("div");
        const authorDiv = document.createElement("div");
        const pagesDiv = document.createElement("div");
        const readDiv = document.createElement("div");
        titleDiv.setAttribute("id", "div" + i);
        titleDiv.setAttribute("class", "book-row")
        authorDiv.setAttribute("class","book-row");
        pagesDiv.setAttribute("class","book-row");
        readDiv.setAttribute("class","book-row");
        titleDiv.innerText = myLibrary[i].title;
        library.append(titleDiv);
        authorDiv.innerText = myLibrary[i].author;
        library.append(authorDiv);
        pagesDiv.innerHTML=myLibrary[i].pages;
        library.append(pagesDiv);
        readDiv.innerText=myLibrary[i].read;
        library.append(readDiv);


    }
}

function reset(){
    userTitle.value="";
    userAuthor.value = "";
    userPages.value="";
    userRead.value="";
}

submitBtn.addEventListener("click",function(){
    addBookToList();
    addBookItem();
    reset();
})

