'use strict'

var feedbackArray =[];
// To check if the local storage works and push the elements newly created to its original place of storage

if (localStorage.getItem('feedbacks')!=null ) {
  feedbackArray = getFeedbackArray(JSON.parse(localStorage.getItem('feedbacks')))
}
// A temp storage for elements pushed into the array

function getFeedbackArray(array){
  console.log(array)
  var temp=[]
for (var index = 0; index < array.length; index++) {
  temp.push(new Feedback(array[index].firstName,array[index].lastName,array[index].email,array[index].question))
}
return temp;
}
 // Consturcter Function

function  Feedback  (firstName, lastName, email, question) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.question = question;
    //pushing the values into the array

  feedbackArray.push(this)
    
   }
  var form = document.getElementById('form')
  form.addEventListener('submit', formHandler);
  function formHandler(event) {
      event.preventDefault();

      //  variables below targets the values that have been inputed into from the html
  // (a link through the html form and the java scripts)

    var firstName = event.target.firstName.value
    var lastName = event.target.lastName.value
    var email = event.target.email.value
    var question = event.target.question.value

    // creating a new object

new Feedback (firstName , lastName ,email ,question);
savingData();
sweet();
//window.location.replace("http://127.0.0.1:5502/index.html");
console.log("test");


}
  


// create a local storge for one Question
function savingData() {
    localStorage.setItem('feedbacks', JSON.stringify(feedbackArray));
}


function time(){
  setInterval(sweet,3000);}
  function sweet(){
    swal("Good job!", "You clicked the button!", "success");} 
  async function sweet(){
    await swal("Thank you", "", "success");
     window.location.replace("http://127.0.0.1:5502/index.html");
  }
    // swal("Good job!", "You clicked the button!", "success", {
    //   button: "Aww yiss!",
    // });