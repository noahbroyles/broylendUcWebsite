function toggleButton(x) {
    x.classList.toggle("change");
    var links = document.getElementById("links");
    if (links.style.display === "block") {
        links.style.display = "none";
    } else {
        links.style.display = "block";
    }
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