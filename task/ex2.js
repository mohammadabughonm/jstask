function myFunction1(selectTag) {
    var listValue = selectTag.options[selectTag.selectedIndex].text;
    document.getElementById("text").style.fontFamily = listValue;
  }
  function myFunction2(selectTag) {
    var listValue = selectTag.options[selectTag.selectedIndex].text;
    document.getElementById("text").style.fontSize = listValue;
  }
  function myFunction3() {
    document.getElementById("text").value = document.getElementById("text").style.fontFamily='Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }
  function myFunction4() {
    document.getElementById("text").value = document.getElementById("text").style.fontFamily=Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  }
  function myFunction5() {
    document.getElementById("text").value = document.getElementById("text").style.textDecoration='underline';}