function registration() {
   var email = document.getElementById("email");
   var name = document.getElementById("name");
   var lastname = document.getElementById("lastname");
   var age = document.getElementById("age");
   var grade = document.getElementById("grade");
   var school = document.getElementById("school");

   var textBoxes = document.getElementsByClassName("input-box");
   for (let i = 0; i < textBoxes.length; i++) {
      if (textBoxes[i].value == "" || textBoxes[i].value.split(" ").join("") == "") {
         textBoxes[i].style.backgroundColor = "#ff4c4c";
            // Add a class that defines an animation
         textBoxes[i].classList.add('error');
          
            // remove the class after the animation completes
         setTimeout(function() {
            textBoxes[i].classList.remove('error');
            textBoxes[i].style.backgroundColor = null;
         }, 300);

      } else {
         textBoxes[i].style.backgroundColor = null;
      }
   }

   if (!document.getElementById("check1").checked || !document.getElementById("check2").checked) {
      alert("Please Make Sure To Check The Boxes!")
      for (let i = 0; i < textBoxes.length; i++) {
         if (textBoxes[i].value == "" || textBoxes[i].value.split(" ").join("") == "") {
            textBoxes[i].style.backgroundColor = "#ff4c4c";
               // Add a class that defines an animation
            textBoxes[i].classList.add('error');
             
               // remove the class after the animation completes
            setTimeout(function() {
               textBoxes[i].classList.remove('error');
               textBoxes[i].style.backgroundColor = null;
            }, 300);
   
         } else {
            textBoxes[i].style.backgroundColor = null;
         }
      }
   }
}