window.addEventListener("load", function() {
    let emailButton = document.getElementById("emailCopy");
    let copyText = document.getElementById("copyText");

    emailButton.addEventListener("copy", function() {
        copyText.select();
        //idk what how setSelectionRange applies to mobile UI but I guess it does or something
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
        alert(`Copied ${copyText.value}`);
    })
})