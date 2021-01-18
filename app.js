'use strict'
/*Global variable*/

var commentsArray=[];

/*
* Comment Constructor
*/ 

function Comment(name,comment){
    this.name=name;
    this.comment=comment;
    commentsArray.push(this);
}

if(localStorage.length!==0){
var commentsArray=getComments();
console.log(commentsArray);
}

renderComment();
var bookComment = document.getElementById("bookComment");


bookComment.addEventListener("submit", function (event) {
   // event.preventDefault();
    var commentText = event.target.comment.value;
    var name=event.target.name.value;
    new Comment(name,commentText);
    saveComments(commentsArray);
    renderComment();
});

function renderComment(){
    var commentDiv=document.getElementById("comments");
    clearComments();
    for(var i=0;i<commentsArray.length;i++){
    var p =document.createElement("p");
    var line=document.createElement("hr");
    p.textContent=commentsArray[i].name +" : "+commentsArray[i].comment;
    commentDiv.appendChild(p);
    commentDiv.appendChild(line);
    }
    console.log(commentsArray);
}
function clearComments(commentDiv){
    var commentDiv=document.getElementById("comments");
    commentDiv.textContent="";
}
 function saveComments(comments){
    localStorage.setItem("comments",JSON.stringify(comments));
 }
 function getComments(){
    return JSON.parse(localStorage.getItem("comments"));
 }