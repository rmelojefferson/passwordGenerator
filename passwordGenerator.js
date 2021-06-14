let caracteres = [0,1,2,3,4,5,6,7,8,9,'!','@','#','$','%','¨','&','*','(',')','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',"'",'"','(',')','´','`','{','}','[',']','~','^','?',',','.','<','>',';','/','|','+','-']

let recebeSenha = '';
let senha = '';
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
        //variável que armazena um número que representará um caractere do array caracteres.
        senha = caracteres[randomCaracter];    
        recebeSenha = senha+recebeSenha;
    }    
    novaSenha.innerHTML = `Sua nova senha:<br> ${recebeSenha}`;
    senhasGeradas.appendChild(node);
}