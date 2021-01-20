'use strict';


// clear comments from local storage 
//store comments in an array

// add all the books  one array to one local storage and if that key exists take it from that key so you don't lose the comments ..p.s same as buss mall guys.......

// only make  new boooks if the local storage key that you are using doesn't have the books that you made  ...
var books = JSON.parse(localStorage.getItem("books"));
var currentBookIndex=localStorage.getItem("currentBookIndex");
renderBookDetails(currentBookIndex);//the selected book index 
function renderBookDetails(index) {
    var pageImage = document.getElementById("img1");
    pageImage.src = books[index].img;

    var title = document.getElementById("title");
    title.textContent = "Book Title :" + books[index].title;

    var author = document.getElementById("Author");
    author.textContent = "Book's Author :" + books[index].author;

    var publisher = document.getElementById("Publisher");
    publisher.textContent = " Publisher :" + books[index].publisher;

    var topic = document.getElementById("topics");
    topic.textContent = " Topic :" + books[index].section;


    var description = document.getElementById("description");
    description.textContent = "Book Description: " + books[index].description;

    var downLoad = document.getElementById("down");//a
    console.log("bk link" + books[index].downLoadLink);
    downLoad.href = books[index].downLoadLink;


}
/** Comment Constructor*/
var commentsArray = [];
/** Comment Constructor*/
function Comment(name, comment,index) {
    this.name = name;
    this.comment = comment;
    this.index=(index);
    commentsArray.push(this);
}
if(localStorage.getItem("comments")!==null){
    if (localStorage.getItem("comments").length !== 0) {
        commentsArray = getComments();
        renderComment();
        console.log(commentsArray);
    }
}
//renderComment();
function getComments(){
     commentsArray=JSON.parse(localStorage.getItem("comments"))  
}
var bookComment = document.getElementById("bookComment");
bookComment.addEventListener("submit", function(event) {
     event.preventDefault();
    var commentText = event.target.comment.value;
    var name=event.target.name.value;
    var index=currentBookIndex;
    new Comment(name,commentText,currentBookIndex);
    saveComments(commentsArray);
    renderComment();});
function renderComment() {
    var commentDiv = document.getElementById("comments");
    clearComments();
    for (var i = 0; i < commentsArray.length; i++) {
        if(commentsArray[i].index==currentBookIndex){
        var p = document.createElement("p");
        var line = document.createElement("hr");
        p.textContent = commentsArray[i].name + " : " + commentsArray[i].comment;
        commentDiv.appendChild(p);
        commentDiv.appendChild(line);
    }
    }
    console.log(commentsArray);
}

function clearComments(commentDiv) {
    var commentDiv = document.getElementById("comments");
    commentDiv.textContent = "";
}

function saveComments(comments) {
    localStorage.setItem("comments", JSON.stringify(comments));
}

function getComments() {
    return JSON.parse(localStorage.getItem("comments"));
}

/*Search Code*/ 

var formSearch=document.getElementById("searchForm");

formSearch.addEventListener("submit",formSearchHandler);

function formSearchHandler(event) {
    event.preventDefault();
    var searchable=event.target.search.value;
    console.log(searchable);
    search(searchable);
}
function search(searchable){
    var bookTitles=getBookTitle();//get array of book title located in local storage
    console.log(bookTitles);
    for (let index = 0; index < bookTitles.length; index++) {
        var tiltle=bookTitles[index].toUpperCase();
        if(searchable.toUpperCase()==tiltle){
            clickHandler(index);
            return;
        } 
    }
    swal("No Such Result ", searchable);
}
function clickHandler(params) {
    localStorage.setItem('currentBookIndex', params);
    window.location.replace("../category/single.html"); 
}
function getBookTitle() {
    var titles=[]
    if(localStorage.length!=0)
    if(localStorage.getItem("books")!=null){
        var temp=JSON.parse(localStorage.getItem("books"));
        //console.log(temp);
        for (let index = 0; index < temp.length; index++) {
            titles.push(temp[index].title);      
        }//end for
    }
    return titles;
}





