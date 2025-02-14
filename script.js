/* .js files add interaction to your website */
var score = 0;
var questionCount = 0;

var button = document.getElementById("myButton3");
button.addEventListener("click", displayResult);

function displayResult() {
  updateResult()
}

var q1 = document.getElementById("q1");
var q2 = document.getElementById("q2");
var q3 = document.getElementById("q3");
var q4 = document.getElementById("q4");
var q5 = document.getElementById("q5");
var q6 = document.getElementById("q6");
var q7 = document.getElementById("q7");
var q8 = document.getElementById("q8");
var q9 = document.getElementById("q9");
var q10 = document.getElementById("q10");
var q11 = document.getElementById("q11");
var q12 = document.getElementById("q12");
var q13 = document.getElementById("q13");
var q14 = document.getElementById("q14");
var q15 = document.getElementById("q15");
var q16 = document.getElementById("q16");

var result = document.getElementById("result");

q1.addEventListener("change", point);
q2.addEventListener("change", point);
q3.addEventListener("change", point);
q4.addEventListener("change", point);
q5.addEventListener("change", point);
q6.addEventListener("change", point);
q7.addEventListener("change", point);
q8.addEventListener("change", point);
q9.addEventListener("change", point);
q10.addEventListener("change", point);
q11.addEventListener("change", point);
q12.addEventListener("change", point);
q13.addEventListener("change", point);
q14.addEventListener("change", point);
q15.addEventListener("change", point);
q16.addEventListener("change", point);

function point() {
  score = score + 1;
  questionCount += 1;
  console.log(score)
  if (questionCount >= 1){
    console.log("The quiz is done")
  }
  
}

function updateResult(){
  if (score >= 9){
    console.log("Resources")
    result.innerHTML = "Here are some Bullying Helpline</br></br>U.S.: 1-800-273-8255 – Crisis Call Center</br>UK: 0845 22 55 787 – National Bullying Helpline</br>Canada: 1-877-352-4497 – BullyingCanada</br>Australia:1800 551 800 – Kids Helpline</br>New Zealand: 0800 54 37 54 – Kidsline</br>India: 1098 – Childline India</br></br>To get more information on how to deal with bullying head over to 'Take Action' section";
  } else if (score <=8){
    console.log("Info")
    result.innerHTML = "• No one ever deserves to be bullied</br>• You have the right to ask for help to stop the behavior</br>• Your opinion about what to do is important</br>• You don’t have to go through the bullying experience alone</br></br>Remember the bullying is not your fault and know that it’s natural to feel emotions such as sadness, fear, loneliness, anger, or confusion as a result of it. Sometimes, we have the tendency to minimize how bullying makes us feel, but it’s so important to pay attention to and recognize your feelings and how the actions of others affect how you feel. The next step is to start thinking through what you can do.</br> To get more information on how to deal with bullying head over to 'Take Action' section";
  }
  
}