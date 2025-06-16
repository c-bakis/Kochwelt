
function sendMail(event){﻿
    event.preventDefault();
    const data = new FormData(event.target);

    fetch("YOUR_URL", {
        method: "POST",
        body: new FormData(event.target),
        headers: {
            'Accept': 'application/json'
        }
    }).then(() => {
        window.location.href = "./send_mail.html";
    }).catch((error) => {
        console.log(error);
    });
}