
var button = document.getElementsByClassName("question");
var i;

for (i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function() {
    console.log(this)

    var answer = this.nextElementSibling;
    var arrow = this.childNodes[1];



        if (answer.style.display === "block") {
            answer.style.display = "none";
            this.style.fontWeight = "100";
            arrow.style.transform ="rotate(360deg)";
        
        } else {
            answer.style.display = "block";
            this.style.fontWeight = "700";
            arrow.style.transform ="rotate(180deg)";
        
        }
  });
}



