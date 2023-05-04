
var bt_kuldes = document.getElementById("bt_kuldes");
var mailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// var mailFormat = /\S+@\S+\.\S+/;
var email = document.getElementById("email");


bt_kuldes.addEventListener("click", (e) => {
    e.preventDefault()
    console.log("gomb megnyomva");


    if (!(email.value.match(mailFormat))) {
        email.setCustomValidity('helytelen emailcím');
        email.reportValidity();
        return false;
    } else {
        alert("Az email cím helyes");
        return true;
    }

    /*
        if (email.value.match(mailFormat)) {
            alert("Az email cím helyes");
            return true;
        } else {
            // alert("helytelen emailcím");
            email.setCustomValidity('helytelen emailcím');
            email.reportValidity();
            return false;
        }
        */

    // return pattern.test(value.toLowerCase()); 
}
)










