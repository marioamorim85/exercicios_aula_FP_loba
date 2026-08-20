// Resolução Função qualificarLead

function qualificarLead(orc, interesse) {
    if (orc >= 10000 && interesse === "alto") 
        return "Quente";
    else if (orc >= 5000)
        return "Morno";
    else
        return "Frio";
}

// function qualificarLead(orc, interesse) {
//     if (orc >= 10000 && interesse === "alto") return "Quente";
//     if (orc >= 5000) return "Morno";
//     return "Frio";
// }

console.log(qualificarLead(12200,"alto")); 