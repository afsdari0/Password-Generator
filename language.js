let headerH1Lan = document.getElementById("headerH1Lan");
let spanContainerInput = document.getElementById("spanContainer-input");
let titlePassword = document.getElementById("title");
let tooltip = document.getElementById("tooltip");
let button = document.getElementById("button");


function switchCheck(){
let switchElement = document.getElementById("switch-checkbox").checked

if(switchElement == false){
    headerH1Lan.innerHTML = "Password Generator";
    spanContainerInput.innerHTML = "Number of characters:";
    button.innerHTML = "Generate password";
    titlePassword.innerHTML = "Your generated password!";
    tooltip.innerHTML = "Click on the password to copy!"
}else{
    headerH1Lan.innerHTML = "Gerador de Senha"
    spanContainerInput.innerHTML = "Quantidade de caracteres:";
    button.innerHTML = "Gerar senha";
    titlePassword.innerHTML = "Sua senha gerada!";
    tooltip.innerHTML = "Clique na senha para copiar!";
}
}