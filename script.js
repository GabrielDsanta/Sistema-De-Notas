
var names = []
var password = []

var index = 0
var choice = true


while(choice){
    var choice = prompt("1 // Cadastrar, 2 // Fazer Login, 3 // Encerrar 4 //Excluir Cadastro")
    if(choice == "1"){
            names[index] = prompt("Cadastre um Usuário")
            password[index] = prompt("Cadastre uma Senha")
            index++
    }
    
    if(choice == "2"){
        var comparador = 0
        var names2 = prompt("Qual seu usuário ?")
        var password2 = prompt("Qual sua Senha ?")
        for(var contador2 = 0; contador2 < names.length; contador2++){
            
            if(names2 == names[comparador] && password2 == password[comparador]){
                alert("Login Efetuado com sucesso !")  
            }

            if(names2 != names[comparador] && password2 != password[comparador]){
                comparador++
            }
        }

        if(names2 != names[comparador] || password2 != password[comparador]){
            alert("Usuário ou Senha incorretos")
        }

    }
    
    if(choice == "3"){
        choice = false
    }

    if(choice == "4"){
        var base = 0

        var finder = prompt("Qual o seu Usuário ?")
        for(var contador3 = 0; contador3 < user.length; contador3++){
            if(finder == user[base]){
                user[base] = user[base + 1]
                senha[base] = senha[base + 1]
                user.length--
                senha.length--
            }
            else{
                base++
            }
        }
        
    }

}

console.log(names, password)