// Resolução do exercício do slide 17 - C


// Comando instalação: npm install prompt-sync
// importar o módulo prompt-sync para permitir a entrada de dados pelo utilizador
const prompt = require('prompt-sync')();

// Função que classifica um lead em função do orçamento e interesse
// Retorna "Quente" se orçamento>= 10000 E interesse = "alto"
// Retorna "Morno" se orçamento>= 5000
// Retorna "Frio" para todos os outros casos

function qualificarLead(orc, interesse) {
    if (orc >= 10000 && interesse === "alto") 
        return "Quente";
    else if (orc >= 5000)
        return "Morno";
    else
        return "Frio";
}

//  Pedir o número de Leads a analisar
const numLeads = parseInt(prompt("Quantos leads pretende analisar: "));

// Arrays vazios para armazenar os dados introduzidos
const orcamentos = [];
const interesses = [];

// Ciclo for para pedir os dados de cada lead
for(i = 0; i < numLeads; i++) {
    // Pedir o orçamento do lead
    const orc = parseInt(prompt("Lead " + (i+1) + " - Orçamento: "));

    // Pedir o nível de interesse do Lead
    const interesse = prompt("Lead " + (i+1) + " - Interesse (alto/media/baixo): ");

    // Adiciona os valores aos arrays
    orcamentos.push(orc);
    interesses.push(interesse);
}

// Contadora para armazenar o número de leads classificados como "Quente"
let quentes = 0;

// Ciclo que processa cada lead
for (i=0; i < numLeads; i++) {
    // Classifica o lead actual
    const prioridade = qualificarLead(orcamentos[i], interesses[i]);

    // Mostra o resultado da classificação para cada lead
    console.log("Lead " + (i+1) + ": " + prioridade);

    // Se o lead é "Quente", incrementa o contador quentes
    if(prioridade === "Quente"){
        quentes = quentes + 1;
        // quentes++;
    }
}

// Mostra o total de Leads "Quentes"
console.log("Leads Quentes: ", quentes)