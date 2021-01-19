'use strict'

var feedbackArray =[];

 
function  Feedback  (firstName, lastName, email, question) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.question = question;
  feedbackArray.push(this)
    
   }
  var form = document.getElementById('form')
  form.addEventListener('submit', formHandler);
  function formHandler(event) {
      event.preventDefault();
    var firstName = event.target.firstName.value
    var lastName = event.target.lastName.value
    var email = event.target.email.value
    var question = event.target.question.value

new Feedback (firstName , lastName ,email ,question);
savingData();
  }

  

// create a local storge for one Question
function savingData() {

    localStorage.setItem('feedbacks', JSON.stringify(feedbackArray));

}

function checkAndRestore() {

    if (localStorage.length > 0) {
        feedbackArray = JSON.parse(localStorage.getItem('feedbacks'));
        console.log(feedbackArray);
    }
}