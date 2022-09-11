let sliderElement = document.getElementById("slider");
let valueElement = document.getElementById("valor");
let buttonElement = document.getElementById("button");
let password = document.getElementById("password");
let containerPassword = document.getElementById("container-password");
let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
let novaSenha = "";
let confcopy = "";



valueElement.innerHTML = sliderElement.value;
sliderElement.oninput = function(){
    valueElement.innerHTML = this.value;
}

function generatePassword(){
    let pass = "";
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n));
    }
    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;
    document.getElementById("password").style.color = '#fff'
}

function copyPassword(){
    navigator.clipboard.writeText(novaSenha);
    confcopy = novaSenha;
    if(novaSenha == confcopy){
        document.getElementById("password").style.color = '#3eb72b';
        document.getElementById("password").style.transform = "1s";
    }
}