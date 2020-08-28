window.addEventListener("load", function() {
    let emailButton = document.getElementById("emailCopy");

    emailButton.addEventListener("click", function() {
       
        let copyText = document.getElementById("email");
        copyText.focus();
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
        alert("Copied " + copyText.value);
    })
})