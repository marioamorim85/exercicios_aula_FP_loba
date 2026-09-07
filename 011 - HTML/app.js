// Array para guardar todos os leads
// let leads = [];

// Array para guardar leads e verificar se estão em localStorage
let leads = JSON.parse(localStorage.getItem("leads")) || [];

// Classifica o lead de acordo com o valor do orçamento apresentado
function qualificar(lead) {
    if (lead.orcamento >= 10000) return "Quente";
    if (lead.orcamento >= 5000) return "Morno";
    return "Frio";
}

// Atualiza a lista e o contador visiveis na página com os dados atuais
function mostrarLeads() {
    let lista = document.getElementById("lista");
    lista.innerHTML = ""; // limpa a lista (string vazia, sem dados do utilizador)
    for (let i = 0; i < leads.length; i++) {
        let li = document.createElement("li");
        // textContent trata o nome como TEXTO, não como HTML, para evitar ataques
        li.textContent = leads[i].nome + " - " + leads[i].orcamento + " - " + "(" + qualificar(leads[i]) + ")";
        
        let accoes = document.createElement("div");

        // Pede os novos dados e atualiza directamente o lead escolhido
        let botaoEditar = document.createElement("button");
        botaoEditar.textContent = "Editar";
        botaoEditar.type = "button";
        botaoEditar.addEventListener("click", function() {
            let novoNome = prompt("Nome:", leads[i].nome);
            let novoOrc = Number(prompt("Orçamento:", leads[i].orcamento));

            // Atualiza os dados do lead
            leads[i].nome = novoNome;
            leads[i].orcamento = novoOrc;
            guardarLeads();
            mostrarLeads();
        });

        // Criar um botão para eliminar este lead da lista
        let botaoEliminar = document.createElement("button");
        botaoEliminar.textContent = "Eliminar";
        botaoEliminar.type = "button";
        botaoEliminar.addEventListener("click", function() {
            leads.splice(i, 1); // Remove o lead do array
            guardarLeads(); // Atualiza o localStorage
            mostrarLeads(); // Atualiza a lista visível
        })
        
        accoes.appendChild(botaoEditar);
        accoes.appendChild(botaoEliminar);
        li.appendChild(accoes);
        lista.appendChild(li);
    }
    // Atualiza o contador de leads
    document.getElementById("total").textContent = "Total de leads: " + leads.length;
}

// Guardar os leads no navegador para continuarem disponíveis em outra abertura
function guardarLeads() {
    localStorage.setItem("leads", JSON.stringify(leads))
}

// Ligar o formulário à lógica JavaScript
let form = document.getElementById("formLead");
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio do formulário (recarregar a página)

    // Ler os valores introduzidos pelo utilizador
    let nome = document.getElementById("nome").value;
    let orc = Number(document.getElementById("orc").value);

    // Fazer push do lead para o array
    leads.push({nome: nome, orcamento: orc});
    guardarLeads()
    mostrarLeads();

    // Limpar os campos do formulário
    form.reset();
})

// Mostra os leads guardados logo que a página é aberta
mostrarLeads();
