const $body = document.querySelector('body')
const $verde = document.getElementById('Verde')
const $azul = document.getElementById('Azul')
const $vermelho = document.getElementById('Vermelho')
const $laranja = document.getElementById('Laranja')

$verde.addEventListener('change', function(){
    $body.classList.remove('azul')
    $body.classList.remove('vermelho')
    $body.classList.remove('laranja')
})
$azul.addEventListener('change', function(){
    $body.classList.remove('vermelho')
    $body.classList.remove('laranja')
    $body.classList.toggle('azul')
})
$vermelho.addEventListener('change', function(){
    $body.classList.remove('azul');
    $body.classList.remove('laranja');
    $body.classList.toggle('vermelho');
})
$laranja.addEventListener('change', function(){
    $body.classList.remove('vermelho');
    $body.classList.remove('azul');
    $body.classList.toggle('laranja');
})

