var displayName = document.getElementById("secret");

var button = document.getElementById("myButton");
button.addEventListener("click", displaySecret);         

function displaySecret(){
  //This variable must be in the function or it will not work
  var text = document.getElementById("myText").value;
  displayName.innerHTML = "I, " + text + " pledge to not bully or stand someone being bullied and take appropriate steps against it and raise awareness among everyone against bullying by promoting positive actions such as kindness, acceptance, and inclusion.";
}

var factList = [
 "Tell a trusted adult. Adults in positions of authority, like parents, teachers, or coaches, often can deal with bullying without the bully ever learning how they found out about it.", /*0*/
 "Ignore the bully and walk away. Bullies like getting a reaction. If you walk away or ignore them, you're telling them that you don't care.", /*1*/
  "Walk tall and hold your head high. Using this type of body language sends a message that you're not vulnerable.", /*2*/
  "Walk tall and hold your head high. Using this type of body language sends a message that you're not vulnerable.", /*3*/
  "Don't get physical. You're more likely to be hurt and get into trouble if you try to fight a bully. Work out your anger in another way, such as exercising or writing it down (make sure you delete or tear up any emails, posts, letters, or notes you write in anger).", /*4*/
  "Try to talk to the bully. Try to point out that his or her behavior is serious and harmful. This can work well if you notice that a member of your own group has started to pick on or shun another member.", /*5*/
  "Practice confidence. Practice ways to respond to the bully verbally or through your behavior. Practice feeling good about yourself (even if you have to fake it at first).", /*6*/
  "Talk about it. It may help to talk to a guidance counselor, teacher, or friend — anyone who can give you the support you need. Talking can be a good outlet for the fears and frustrations that can build when you're being bullied.", /*7*/
  "Find your (true) friends. If you've been bullied with rumors or gossip, tell your friends so that they can help you feel safe and secure. Avoid being alone, especially when the bullying is happening a lot.", /*8*/
  "Stand up for friends and others you see being bullied. Your actions help the victim feel supported and may stop the bullying.", /*9*/
  "Join your school's bullying or violence prevention programs. Peer mediation is another way you may be able to work things out with a bully. If your school doesn't have these programs, start one of your own.", /*10*/
 ]; 

var fact = document.getElementById("fact");
var myButton2 = document.getElementById("myButton2");
var count = 0;

myButton2.addEventListener("click", displayFact);

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}