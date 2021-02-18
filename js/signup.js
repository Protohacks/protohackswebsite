function registration() {
   var counter = 0;
   let email = document.getElementById("email");
   let name = document.getElementById("name");
   let lastname = document.getElementById("lastname");
   let age = document.getElementById("age");
   let grade = document.getElementById("grade");
   let school = document.getElementById("school");

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

         counter++;
         console.log(counter)

      } else if (counter == 0){
         textBoxes[i].style.backgroundColor = null;
      }
   }

   if (!document.getElementById("check1").checked || !document.getElementById("check2").checked && counter == 0) {
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
      alert("Please Make Sure To Check The Boxes!")
   }  else if (counter == 0) {
         if (!validateEmail(email.value)) {
               //invalid email
            email.style.backgroundColor = "#ff4c4c";
            email.classList.add("error");
      
            setTimeout(function() {
               email.classList.remove('error');
               email.style.backgroundColor = null;
            }, 300);
         } else {
            var client = new HttpClient();
            client.get(`https://emailverification.whoisxmlapi.com/api/v1?apiKey=at_2kANjaEyrF2lJfKzPd0weyVlPlgdR&emailAddress=${email.value}`, function(response) {
               console.log(response);
               var validation = JSON.parse(response);
               if (validation.dnsCheck == "false" || validation.disposableCheck == "true"|| validation.smtpCheck == "false") {
                  email.style.backgroundColor = "#ff4c4c";
                  email.classList.add("error");
               
                  setTimeout(function() {
                     email.classList.remove('error');
                     email.style.backgroundColor = null;
                  }, 300);
               } else if (validation.dnsCheck == "true" || validation.disposableCheck == "false"|| validation.smtpCheck == "true") {
                  //ADD ACTION
                  window.location.replace("postsignup.html");
               }
            });
         }
      }
   }

function validateEmail(emailparam) {
   const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return re.test(emailparam);
 }

 var HttpClient = function() {
   this.get = function(aUrl, aCallback) {
       var anHttpRequest = new XMLHttpRequest();
       anHttpRequest.onreadystatechange = function() { 
           if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
               aCallback(anHttpRequest.responseText);
       }

       anHttpRequest.open( "GET", aUrl, true );            
       anHttpRequest.send( null );
   }
}
