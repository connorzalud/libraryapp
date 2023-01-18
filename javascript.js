const library = document.querySelector(".library-container");
const form = document.querySelector(".form-input");
const main = document.querySelector(".main-container");
const formContainer = document.querySelector(".form-container");
const submitBtn=document.querySelector(".submit");
const userTitle = document.querySelector("#title");
const userAuthor = document.querySelector("#author");
const userPages = document.querySelector("#pages");
const userRead = document.querySelector("#read");
const enterForm = document.querySelector("#form-id");


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
        if(document.getElementById("title" + i)){
            continue;
        }
        const titleDiv = document.createElement("div");
        const authorDiv = document.createElement("div");
        const pagesDiv = document.createElement("div");
        const readDiv = document.createElement("div");
        const editBtn = document.createElement("button");
        const deleteBtn = document.createElement("button");
        titleDiv.setAttribute("id", "title" + i);
        titleDiv.setAttribute("class", "book-row");
        authorDiv.setAttribute("id","author" + i);
        authorDiv.setAttribute("class","book-row");
        pagesDiv.setAttribute("id", "pages"+i);
        pagesDiv.setAttribute("class","book-row");
        readDiv.setAttribute("id","read"+i);
        readDiv.setAttribute("class","book-row");
        titleDiv.textContent = myLibrary[i].title;
        library.append(titleDiv);
        authorDiv.innerText = myLibrary[i].author;
        library.append(authorDiv);
        pagesDiv.innerHTML=myLibrary[i].pages;
        library.append(pagesDiv);
        readDiv.innerText=myLibrary[i].read;
        library.append(readDiv);
        editBtn.setAttribute("id",i);
        editBtn.textContent="Edit";
        library.append(editBtn);
        deleteBtn.setAttribute("class",i);
        deleteBtn.textContent="Delete";
        library.append(deleteBtn);


        editBtn.addEventListener("click",function(){
            let index = this.id;
            console.log(index);
            console.log(typeof index)
            const editHeading = document.createElement("p");
            editHeading.textContent="Edit Book"

            const editTitle = document.createElement("input");
            editTitle.setAttribute("id","editTitle");
            editTitle.value=myLibrary[index].title;
            const labelTitle = document.createElement("label");
            labelTitle.setAttribute("for","editTitle");
            labelTitle.textContent="Title:"

            const editAuthor = document.createElement("input");
            editAuthor.setAttribute('id',"editAuthor");
            editAuthor.value = myLibrary[index].author;
            const labelAuthor = document.createElement("label");
            labelAuthor.setAttribute("for","editAuthor");
            labelAuthor.textContent= "Author:"

            const editPages = document.createElement("input");
            editPages.setAttribute("id","editPages");
            editPages.value = myLibrary[index].pages;
            const labelPages = document.createElement("label");
            labelPages.setAttribute("for","editPages");
            labelPages.textContent="Pages:";

            const editRead = document.createElement("input");
            editRead.setAttribute("id","editRead");
            editRead.value = myLibrary[index].read;
            const labelRead = document.createElement("label");
            labelRead.setAttribute("for","editRead");
            labelRead.textContent="Read?"

            const newBtn = document.createElement("button");
            newBtn.textContent="Edit Book";
            const editContainer = document.createElement("div");
            editContainer.classList.add("edit-container");
            editContainer.append(labelTitle);
            editContainer.append(editTitle);
            editContainer.append(labelAuthor);
            editContainer.append(editAuthor);
            editContainer.append(labelPages);
            editContainer.append(editPages);
            editContainer.append(labelRead);
            editContainer.append(editRead);
            editContainer.append(newBtn);
            form.remove();
            formContainer.append(editContainer);

            newBtn.addEventListener("click",function(){
                editBook(index);
                updateRow();
                editContainer.remove();
                formContainer.append(form);
            })
            
        })

        deleteBtn.addEventListener("click", function(){
            let index = this.classList;
            removeBook(index);
            let deleteTitle = document.querySelector("#title"+index);
            let deleteAuthor = document.querySelector("#author"+index);
            let deletePages = document.querySelector("#pages"+index);
            let deleteRead = document.querySelector("#read"+index);
            let deleteEdit = document.getElementById(index);
            deleteTitle.remove();
            deleteAuthor.remove();
            deletePages.remove();
            deleteRead.remove();
            deleteEdit.remove();
            this.remove();
           // for(i=0;i<myLibrary.length;i++){
             //   let updateTitle = document.querySelector("#title"+i);
           // }

        })

    }

   
}

function editBook(index){
    let newUserTitle = editTitle.value;
    myLibrary[index].title = newUserTitle
    let newUserAuthor = editAuthor.value;
    myLibrary[index].author= newUserAuthor;
    let newUserPages = editPages.value;
    myLibrary[index].pages = newUserPages;
    let newUserRead = editRead.value;
    myLibrary[index].read = newUserRead;
}


function updateRow(){
    for(i=0;i<myLibrary.length;i++){
    let newTitle = document.querySelector("#title"+i);
    newTitle.textContent = myLibrary[i].title;
    let newAuthor = document.querySelector("#author"+i);
    newAuthor.textContent=myLibrary[i].author;
    let newPages = document.querySelector("#pages"+i);
    newPages.textContent=myLibrary[i].pages;
    let newRead = document.querySelector("#read"+i);
    newRead.textContent = myLibrary[i].read;
    }
}


function reset(){
    userTitle.value="";
    userAuthor.value = "";
    userPages.value="";
    userRead.value="";
}

function validateInput(){
    if(userTitle.value === "" || userAuthor.value==="" || userPages.value===""||userRead.value===""){
        alert("Enter all information.");
        return true
    }
}

/*submitBtn.addEventListener("click",function(e){
    if(validateInput()===true){
        e.stopPropagation
       }
})*/

enterForm.addEventListener("submit",function(e){
    e.preventDefault();
    addBookToList();
    addBookItem();
    reset();
})

function removeBook(index){
    myLibrary.splice(index,1);

}
