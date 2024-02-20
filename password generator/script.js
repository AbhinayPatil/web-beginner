let passwordBox = document.querySelector("input");
let generateBtn = document.querySelector("button");
let copyBtn = document.querySelector(".copy-icon");


function generatePassword(){
    copyBtn.classList.remove("animate");
    let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowerCase = "abcdefghijklmnopqrstuvwxyz";
    let numbers = "0123456789";
    let symbols = "!@#$%^&*()+_=-/?,.<>{}[]~|:;\\|";

    let collection = upperCase+lowerCase+numbers+symbols;
    let passwordLength = 12;

    let password="";

    while(password.length<passwordLength){
        password +=  collection[Math.floor(Math.random() * (collection.length))];
    }

    passwordBox.value = password;
}

function copyPassword(){
    copyBtn.classList.add("animate");
    passwordBox.select();
    document.execCommand("copy");
}

generateBtn.addEventListener("click",generatePassword);
copyBtn.addEventListener("click",copyPassword);