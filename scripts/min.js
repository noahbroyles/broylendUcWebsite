function toggleButton(x){x.classList.toggle("change");var links=document.getElementById("links");"block"===links.style.display?links.style.display="none":links.style.display="block"}function openNav(){var nav=document.getElementById("mySidenav");"300px"==nav.style.width?nav.style.width="0px":nav.style.width="300px"}function closeNav(){document.getElementById("mySidenav").style.width="0px"}function submitted(){var name=document.getElementById("name"),email=document.getElementById("email"),comment=document.getElementById("comment");alert("FORM SUBMITTED\n\nName: "+name.value+"\nEmail: "+email.value+"\nComment: "+comment.value),name.value="",email.value="",comment.value=""}