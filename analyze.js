
document.getElementById("beginners").style.display="none";
document.getElementById("intermediate").style.display="none";


function analyze(){
  var ans1=Number(document.getElementById('answer1').value);
  var ans2= Number(document.getElementById('answer2').value);
  var ans3= Number(document.getElementById('answer3').value);
  var ans4= Number(document.getElementById('answer4').value);
  var ans5= Number(document.getElementById('answer5').value);



var tot=ans1+ans2+ans3+ans4+ans5;

if(Number(tot)<=7&&Number(tot)>0)
{
  var span=document.getElementById('close1');
document.getElementById("beginners").style.display="block";
span.onclick = function() {
document.getElementById("beginners").style.display = "none";
}

}
else if(tot>7&&tot<=12)
{
  var span=document.getElementById('close2');
document.getElementById("intermediate").style.display="block";
span.onclick = function() {
document.getElementById("intermediate").style.display = "none";
}
}
else
{
alert("please fill the survey properly");

}




}
