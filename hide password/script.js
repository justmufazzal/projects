let eyeicon = document.getElementById('eyeicon')
let password = document.getElementById('password')
let eyeicon1 = document.getElementById('icon1')


eyeicon.addEventListener("click", function() {
   if(password.type == "password") {
       password.type = "text"
     eyeicon.src = "eyes_open-removebg-preview (1).png"
   } else {
       password.type = "password"
       eyeicon.src = "eyes_close-removebg-preview.png"
   }
})