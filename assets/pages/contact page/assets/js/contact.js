let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    // navbar.classList.toggle("bx-x");
    navbar.classList.toggle("navbar-active");
};


function sendEmail(){
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "piumikadil@gmail.com",
        Password: "FFAD95D4C29B75AF4D9EE8D922C95D5B78A1",
        To: 'piumikadil@gmail.com',
        From: document.getElementById("email").value,
        Subject: document.getElementById("subject").value,
        Body: "Name : " + document.getElementById("name").value
            + "<br> Email: " + document.getElementById("email").value
            + "<br> Message : " + document.getElementById("msg").value
    }).then(
        message => alert(message)
    );
}
