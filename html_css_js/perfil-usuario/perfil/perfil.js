document.addEventListener("DOMContentLoaded", () => {
    let dados = null;
    try {
        dados = JSON.parse(localStorage.getItem("usuarioDados"));
    } catch (e) {}

    if (!dados) return;

    const set = (id, valor) => {
        const el = document.getElementById(id);
        if (el && valor) el.textContent = valor;
    };

    set("nome-usuario-lateral", dados.nome); // menu lateral
    set("perfil-nome", dados.nome);          // centro da página
    set("perfil-email", dados.email);        // centro da página
});