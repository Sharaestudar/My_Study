const formCadastro = document.querySelector("#form-cadastro");

if (formCadastro) {
    formCadastro.addEventListener("submit", function (evento) {
        const senha = document.querySelector("#senha").value;
        const confirmarSenha = document.querySelector("#confirmar-senha").value;
        const msgErro = document.querySelector("#msg-erro");

        if (senha !== confirmarSenha) {
            evento.preventDefault();
            msgErro.textContent = "As senhas não coincidem! Tente novamente.";
            msgErro.style.color = "#ef4444";
        } else if (senha.length < 6) {
            evento.preventDefault();
            msgErro.textContent = "A senha deve ter pelo menos 6 caracteres!";
            msgErro.style.color = "#ef4444";
        }
    });
}

// Busca as matérias salvas no navegador ou inicia um array vazio
let listaMaterias = JSON.parse(localStorage.getItem("materias")) || [];

const formMateria = document.querySelector("#form-materia");
const containerLista = document.querySelector("#lista-materias");
const campoBusca = document.querySelector("#campo-busca");

// Função para desenhar os cards na tela
function renderizarMaterias(materiasParaExibir) {
    if (!containerLista) return;

    if (materiasParaExibir.length === 0) {
        containerLista.innerHTML = `
            <div class="card-panel">
                <h3>Minhas Matérias</h3>
                <p>Nenhuma matéria encontrada.</p>
            </div>`;
        return;
    }

    containerLista.innerHTML = "";

    materiasParaExibir.forEach(function (item) {
        const card = document.createElement("div");
        card.className = "card-panel";
        card.style.marginTop = "1rem";
        card.innerHTML = `
            <h3>${item.nome}</h3>
            <p><strong>Tópico:</strong> ${item.topico || "Geral"}</p>
            <p>${item.descricao || "Sem descrição."}</p>
        `;
        containerLista.appendChild(card);
    });
}

if (formMateria) {
    formMateria.addEventListener("submit", function (evento) {
        evento.preventDefault();

        const nome = document.querySelector("#nome-materia").value;
        const topico = document.querySelector("#topico").value;
        const descricao = document.querySelector("#descricao").value;

        if (nome.trim() === "") {
            alert("Preencha o nome da matéria!");
            return;
        }

        listaMaterias.push({ nome: nome, topico: topico, descricao: descricao });
        localStorage.setItem("materias", JSON.stringify(listaMaterias));

        alert("Matéria cadastrada com sucesso!");
        window.location.href = "grade.html";
    });
}

if (containerLista) {
    renderizarMaterias(listaMaterias);
}

//Pesquisa / Filtro em Tempo Real
if (campoBusca) {
    campoBusca.addEventListener("input", function () {
        const termoBusca = campoBusca.value.toLowerCase();

        const materiasFiltradas = listaMaterias.filter(function (item) {
            return item.nome.toLowerCase().includes(termoBusca);
        });

        renderizarMaterias(materiasFiltradas);
    });
}