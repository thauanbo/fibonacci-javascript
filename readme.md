<img src="https://raw.githubusercontent.com/thauanbo/thauanbo/refs/heads/main/img/banner-project.png" alt="Banner" width="100%">

# Aula LTPO-Fibonacci

Este projeto foi desenvolvido para fins educacionais, demonstrando a implementação do cálculo de sequência Fibonacci usando recursividade em JavaScript.

## Funcionalidades

- Interface web interativa para cálculo Fibonacci;

- Validação de entrada (números entre 1 e 40);

- Implementação recursiva do algoritmo Fibonacci;

- Design responsivo com background animado;

- Feedback visual imediato do resultado;

## Estrutura do Projeto

```
meu-projeto/
├── index.html (Página principal)
├── css/
│ └── bootstrap.css (Estilos CSS)
├── js/
│ └── codigo.js (Lógica JavaScript)
├── img/
│ └── gif.gif (Background animado)
└── README.md
```
## Stack utilizada

**Front-end:**
- HTML5
- CSS3
- JavaScript
- Bootstrap


## Clone o Projeto

```bash
  git clone https://github.com/thauanbo/fibonacci-javascript.git
```

## Uso/Exemplos

Entrada:
```
Digite um numero: 7
```
Saída:
```
O número: 7 Fibonacci dele: 13
```
Validação:
```
Por favor, insira um número válido (acima de 0 e até 40).
```

## Implementação JavaScript

```JavaScript
function fibonacci(numero) {
    if(numero <= 1){
        return numero;
    } else {
        return fibonacci(numero - 1) + fibonacci(numero - 2);
    }
}
```


## 🔗 Links
[![github](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/thauanbo)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/thauan-barbosa/)