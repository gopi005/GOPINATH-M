
function sendMail(){
var params={
    name : document.getElementById("name").value,
    email : document.getElementById("email").value,
    message : document.getElementById("message").value
}
emailjs.send("service_ga6pu3o","template_h7rj0ld",params).then(alert("Email Sent!!"))

}
