function copyPhone(){
    console.log("Hehe");
    var copyText = document.getElementById("phone-copy");
    navigator.clipboard.writeText(copyText.innerText);
}