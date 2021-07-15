let jogador = prompt('Jogador: ')
function jogar(){
    let pedra = document.getElementById('pedra')
    let papel = document.getElementById('papel')
    let tesoura = document.getElementById('tesoura')
    if(pedra.checked == false && papel.checked == false && tesoura.checked == false){
        alert('Escolha uma opção')
    } else {
        //lógica:comparar a opção que o jogador escolheu com o número que o computador sorteou
        //0 = pedra
        //1 = papel
        //2 = tesoura
        let sortear = Math.floor(Math.random()*3)
        if(pedra.checked == true && sortear == 0 || papel.checked == true && sortear == 1 || tesoura.checked == true && sortear == 2){
            alert('Empate')
        } else if(pedra.checked == true && sortear == 2 || papel.checked == true && sortear == 0 || tesoura.checked == true && sortear == 1){
            alert(jogador + ' venceu')

        } else {
            alert('Computador venceu')
        }
    }
    
}

function resetar() {
    document.querySelector('reset').innerHTML = ""
}