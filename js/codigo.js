function verificar(){
    let numero = parseInt(document.getElementById('numero').value);
    let result = document.getElementById('resultado');

    if (isNaN(numero) || numero <= 0 || numero > 40) {
        result.innerText = "Por favor, insira um número válido (acima de 0 e ate 40).";
        return;
    }

    let fib = fibonacci(numero);
    result.innerText = "O número : " + numero + " Fibonacci dele : " + fib;
}

function fibonacci(numero) {
    if(numero <= 1){
        return numero;
    } else {
        return fibonacci(numero - 1) + fibonacci(numero - 2);
    }
}