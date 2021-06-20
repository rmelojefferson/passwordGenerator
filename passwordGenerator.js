let caracteres = `0123456789!@#$%¨&*abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'"()´{}[]~^?,.<>;/|+-`;

let recebeSenha = '';
let contador = '';

let senhasGeradas = document.getElementById("generatedPass");
let botaoNovaSenha = document.getElementById("newPassButton");
    botaoNovaSenha.onclick = newPassButton;
let limpaSenha = document.getElementById("clean");
    limpaSenha.onclick = cleanButton;

function newPassButton(){
    let check = document.getElementById("passwordLength").checked;    
    //var senhaNode = document.createTextNode(recebeSenha); - Tirando função para teste
    //var node = document.createElement("ul"); - Tirando função para teste
      //  node.appendChild(senhaNode); - Tirando função para teste
    if(check==true){
        contador = 8;
    }else{
        contador = 16;
    }

    recebeSenha = '';
    
    for(let c=0;c<contador;c++){
        let randomCaracter = Math.floor(Math.random()*caracteres.length);
            recebeSenha = caracteres[randomCaracter]+recebeSenha;
    }

    let novaSenha = document.getElementById("newPassword");
        novaSenha.value = recebeSenha;
        novaSenha.style.color = "#ba86fd";
    
        //senhasGeradas.appendChild(node); - Tirando função para teste
        //document.getElementById("suasSenhasButton").innerText = "Suas senhas:"; - Tirando função para teste
    
    let copyPass = document.getElementById("newPassword");
        copyPass.select();
        document.execCommand("copy");
}

function cleanButton( ){
    location.reload()  
}
