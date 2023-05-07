
document.getElementById("demo").innerHTML = "Hello World!";
const x = document.forms["frm1"];
let text = "";
for (let i = 0; i < x.length ;i++) {
  text += x.elements[i].value + "<br>";
}
document.getElementById("demo").innerHTML = text;
const x1 = document.querySelectorAll("p.intro");
document.getElementById("demo1").innerHTML = 
'The first paragraph (index 0) with class="intro" is: ' + x1[1].innerHTML;

document.getElementById("image").src = "download.jpg";
document.getElementById("p2").style.color = "blue";
document.getElementById("p2").style.fontFamily = "Arial";
document.getElementById("p2").style.fontSize = "larger";
const parent = document.getElementById("div1");
const child = document.getElementById("p11");
parent.removeChild(child);
function changeText(id) {
  id.innerHTML = "Ooops!";
}