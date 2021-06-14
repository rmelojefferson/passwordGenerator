let caracteres = `0123456789!@#$%¨&*abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'"()´{}[]~^?,.<>;/|+-`;

let recebeSenha = '';
let novaSenha = document.getElementById("newPassword");
let senhasGeradas = document.getElementById("generatedPass");
let contador = '';

function newPassButton(){
    let check = document.getElementById("passwordLength").checked;    
    var node = document.createElement("ul");
    var senhaNode = document.createTextNode(recebeSenha);
    node.appendChild(senhaNode);
    if(check==true){
        contador = 8;
    }else{
        contador = 16;
    }
    recebeSenha= '';
    for(let c=0;c<contador;c++){
        let randomCaracter = Math.floor(Math.random()*caracteres.length);
        recebeSenha = caracteres[randomCaracter]+recebeSenha;
    }    
    novaSenha.innerHTML = `Sua nova senha:<br> ${recebeSenha}`;
    senhasGeradas.appendChild(node);
}