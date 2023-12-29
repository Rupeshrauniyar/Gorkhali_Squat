function emailSend(){
var userNameone = document.getElementById('fname').value;
var userNametwo = document.getElementById('sname').value;
var address = document.getElementById('address').value;
var phone = document.getElementById('number').value;
var email = document.getElementById('email').value;
var productName = document.getElementById('product').value;
var messageBody ="First Name-" + userNameone +
"<br/> Second Name- " + userNametwo +
"<br/> Address- " + address +
"<br/> Phone- " + phone +
"<br/> Product Name- " + productName +
"<br/> Email- " + email;

Email.send({
    Host : "smtp.elasticemail.com",
    Username : "rupeshrauniyar80@gmail.com",
    Password : "58AA305153294CB96DBF7F0BA477958ADFAD",
    To : 'rupeshrauniyaryt@gmail.com',
    From : "rupeshrauniyar80@gmail.com",
    Subject : "Gorkhali Squats Booking",
    Body : messageBody
}).then(
 alert("Your details Have been submitted successfully."))
 window.location.assign("index.html")  
}


