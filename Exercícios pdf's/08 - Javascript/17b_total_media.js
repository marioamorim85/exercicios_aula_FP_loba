// Resolução do exercício do slide 17 b

// Array com valores de orçamentos
const orcamentos = [12000, 5000, 8000, 20000, 3000];

// Acumular total com inicialização com valor 0
let total = 0;

// Ciclo for para percorrer o array e acumular o valor do orçamento ao total
for(i=0; i < orcamentos.length; i++) {
    // Adiciona o valor actual ao total
    total = total + orcamentos[i];
}

// Calcula o média dividindo o total pelo número de elementos
const media = total / orcamentos.length;

// Apresenta o resultado do total
console.log("Total: ", total);

// Apresenta o resultado da média
console.log("Média: ", media);

