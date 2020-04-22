function toggleButton(x) {
    x.classList.toggle("change");
    var links = document.getElementById("links");
    if (links.style.display === "block") {
        links.style.display = "none";
    } else {
        links.style.display = "block";
    }
}


function openNav() {
    var nav = document.getElementById("mySidenav");
    if (nav.style.width == "300px") {
        nav.style.width = "0px";
    } else {
        nav.style.width = "300px";
    }
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0px";
}

function submitted() {
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var comment = document.getElementById("comment");
    alert("FORM SUBMITTED\n\nName: " + name.value + "\nEmail: " + email.value + "\nComment: " + comment.value);
    name.value = "";
    email.value = "";
    comment.value = "";
}