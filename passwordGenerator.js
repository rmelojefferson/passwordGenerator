let caracteres = [0,1,2,3,4,5,6,7,8,9,'!','@','#','$','%','¨','&','*','(',')','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',"'",'"','(',')','´','`','{','}','[',']','~','^','?',',','.','<','>',';','/','|','+','-']

let recebeSenha = '';
let senha = '';
let senhaGerada = document.getElementById("generatedPass");
let novaSenha = document.getElementById("newPassword");

function newPass(){
    let check = document.getElementById("passwordLength").checked;
    if(check==true){
        pass8();
    }else{
        pass16();
    }
}
function pass8(){
    for(let c=0;c<8;c++){
        let randomCaracter = Math.floor(Math.random()*caracteres.length);
        //variável que armazena um número que representará um caractere do array caracteres.
        senha = caracteres[randomCaracter];    
        recebeSenha = senha+recebeSenha;
    }
    novaSenha.innerHTML = recebeSenha;    
    senhaGerada.innerHTML = recebeSenha;

}
function pass16(){    
    for(let c=0;c<16;c++){
        let randomCaracter = Math.floor(Math.random()*caracteres.length);
        senha = caracteres[randomCaracter];    
        recebeSenha = senha+recebeSenha;    
    }
    novaSenha.innerHTML = recebeSenha;
    senhaGerada.innerHTML = recebeSenha;
}

/*
- Precisa inserir quebra de linha a cada senha gerada no campo "Suas senhas"
- Inserir a nova senha no lugar de "Clique no botão para gerar uma nova senha:" e fazer ele limpar cada vez que o botão for clicado novamente.*/