// name of file: index.js

// var number = 5;
// let name = "Martin";
// number = 12;
// name = "Pluralsight";

// // writing to document (DOM)
// document.writeln(name + number);
//alert("Hello World");

let hasJob = false;
if (hasJob) {
  // I have a job
  showMessage("Thanks for visiting, I'm currently employed.");
} else {
  // I need a job
  showMessage("Please look around, I'm currently looking for a position.");
}

//sunday
let today = new Date();
//let today = new Date();
let dayOfWeek = today.getDay();

if (dayOfWeek === 0 || dayOfWeek === 6) {
  showMessage(
    "Since it is the weekend, please be patient with my returning your email."
  );
}

const formInfo = document.getElementById("formInfo");

function showMessage(message) {
  formInfo.innerHTML = "<p>" + message + "</p>";
}

function clearMessage() {
  formInfo.innerHTML = "";
}
