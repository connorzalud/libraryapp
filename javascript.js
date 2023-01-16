const library = document.querySelector(".library-container");

let myLibrary = []

class Book {
    constructor(title, author, pages, read){
        this.title=title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
    
}

function addBookToList(title,author,pages,read){
    const book = new Book(title,author,pages,read);
    myLibrary.push(book)
    }


//add book info to DOM, check to see if div id already exists to avoid duplicating book info    
function addBookItem(){
    for(i=0;i<=myLibrary.length;i++){
        if(document.getElementById("div" + i)){
            continue;
        }
        const titleDiv = document.createElement("div");
        const authorDiv = document.createElement("div");
        titleDiv.setAttribute("id", "div" + i);
        titleDiv.innerText = myLibrary[i].title;
        library.append(titleDiv);
        authorDiv.innerText = myLibrary[i].author;
        library.append(authorDiv);

    }
}

