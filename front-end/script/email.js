// ebd5389c-6f46-4269-b06d-86eaf0acc200

const sendBtn = document.getElementById("sendBtn");

let userdata = {
    firstName: "",
    lastName: "",
    age: "",
    phone: "",
    passport: "",
}

sendBtn.addEventListener("click", function() {
    userdata.firstName = document.getElementById("firstName").value;
    userdata.lastName = document.getElementById("lastName").value;
    userdata.age = document.getElementById("age").value;
    userdata.phone = document.getElementById("number").value;
    userdata.passport = document.getElementById("passport").value;
})










// Email.send({
//     SecureToken: "ebd5389c-6f46-4269-b06d-86eaf0acc200",
//     Host : "smtp.elasticemail.com",
//     Username : "islomfarkhodov2@gmail.com",
//     Password : "E9D5A6821C9660FCE4E2B5E6C2B4DC841604",
//     To : 'farkhodovislom@icloud.com',
//     From : "farkhodovislom2006@gmail.com",
//     Subject : "Sign up",
//     Body : "Hello World!"
// }).then(
//   message => alert(message)
// );