function exibeMenu(){
    menuHamburguer.style.display = "block"
    botaoHamburguer.style.display = "none"
    botaoFechar.style.display = "inline"
}

function ocultaMenu(){
    menuHamburguer.style.display = "none"
    botaoHamburguer.style.display = "inline"
    botaoFechar.style.display = "none"
}


const botaoFechar = document.getElementById("btn-fechar")
const menuHamburguer = document.getElementById("menu")
const botaoHamburguer = document.getElementById("btn-menu")

botaoHamburguer.addEventListener('click', exibeMenu)
botaoFechar.addEventListener('click', ocultaMenu)

window.addEventListener('resize', function(){
    this.location.reload()
})

/* limpar dados caixa atualização */
function limpar_dados(){
    document.location.reload()
}

const btn_inscricao = document.getElementById("btn-se-escrever")
btn_inscricao.addEventListener('click', limpar_dados)
