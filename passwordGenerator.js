let caracteres = [0,1,2,3,4,5,6,7,8,9,'!','@','#','$','%','¨','&','*','(',')','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',"'",'"','(',')','´','`','{','}','[',']','~','^','?',',','.','<','>',';','/','|','+','-']

let passLength = false;
let recebeSenha = ''

function pass8(){
    for(let c=0;c<8;c++){
        let senha = ''
        let randomCaracter = Math.floor(Math.random()*caracteres.length);
        //variável que armazena um número que representará um caractere do array caracteres.
        senha = caracteres[randomCaracter];    
        recebeSenha = senha+recebeSenha;
    }
    return recebeSenha
}

function pass16(){
    for(let c=0;c<16;c++){
        let senha = ''
        let randomCaracter = Math.floor(Math.random()*caracteres.length);
        senha = caracteres[randomCaracter];    
        recebeSenha = senha+recebeSenha;    
    }
    return recebeSenha
}

if(passLength==true){
    pass8()
    console.log(recebeSenha)
}else{
    pass16()
    console.log(recebeSenha)
}
