# Documentação da Etapa 04 - Interatividade com JavaScript

## 1. Descrição das Funcionalidades Implementadas

Nesta etapa, foram implementadas as funcionalidades de interatividade client-side utilizando JavaScript Vanilla, sem dependência de bibliotecas externas:

1. **Validação do Formulário de Cadastro (`cadastro.html`):** Interceptação do evento `submit`, verificação de igualdade de senhas e tamanho mínimo, impedindo o envio do formulário em caso de inconformidade e exibindo mensagem de erro dinâmica.
2. **Cadastro e Persistência de Matérias (`cadastrar-materia.html`):** Captura dos dados digitados, armazenamento no `localStorage` do navegador e sincronização com a estrutura de lista.
3. **Renderização Dinâmica e Filtro (`grade.html`):** Criação dinâmica de elementos no DOM para exibição das matérias e busca em tempo real com filtragem reativa conforme a digitação do usuário.

---

## 2. Arquivos Modificados e Criados

- `frontend/script.js`: Script principal contendo as funções de validação, renderização do DOM, manipuladores de eventos e persistência.
- `cadastro.html`: Inclusão do container de erro e IDs de formulário.
- `cadastrar-materia.html`: Ajuste de IDs de formulário para integração com JS.
- `grade.html`: Inclusão do campo de busca e container para renderização dinâmica das matérias.
- `docs/etapa-04.md`: Relatório de documentação e matriz de evidências.

---

## 3. Matriz de Evidências

| Requisito | Funcionalidade Relacionada | Arquivo(s) | Evidência de Código |
| :--- | :--- | :--- | :--- |
| **Manipulação do DOM** | Criação dinâmica dos cards de matérias | `script.js` | `document.createElement("div")` e `appendChild()` |
| **Tratamento de Eventos** | Escuta de envios de formulário e digitação | `script.js` | `addEventListener("submit")` e `addEventListener("input")` |
| **Validação de Formulários** | Verificação de igualdade e tamanho de senhas | `script.js` | Condicional `senha !== confirmarSenha` no evento de submissão |
| **Alteração Dinâmica do DOM** | Exibição de avisos e limpeza de campos | `script.js` | `msgErro.textContent` e atualização de `innerHTML` |
| **Uso de Funções** | Organização da renderização | `script.js` | Declaração e chamada de `renderizarMaterias()` |
| **Uso de Arrays e Objetos** | Armazenamento temporário e manipulação | `script.js` | Declaração de `listaMaterias` e inserção com `push()` |
| **Métodos de Iteração** | Varredura e filtragem de elementos | `script.js` | Métodos `.forEach()` para montagem e `.filter()` para busca |
| **Tratamento de Casos Limite** | Bloqueio de submissão inválida | `script.js` | `evento.preventDefault()` e validação com `.trim()` |
| **Persistência de Dados** | Armazenamento entre navegações | `script.js` | `localStorage.setItem()` e `localStorage.getItem()` |