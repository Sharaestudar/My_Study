# Relatório de Interface Responsiva com CSS — Etapa 03

## 1. Interfaces Apresentadas
As três interfaces selecionadas para demonstração da responsividade foram:
- **Tela 01 (`index.html`):** Autenticação e Login.
- **Tela 02 (`dashboard.html`):** Painel Geral e Métricas.
- **Tela 03 (`cronograma.html`):** Agenda Semanal em CSS Grid.

## 2. Viewports Utilizados nas Evidências
- **Desktop:** 1440 × 900 px
- **Tablet:** 768 × 1024 px
- **Smartphone:** 390 × 844 px

## 3. Breakpoints Utilizados
- `max-width: 767px`: Dispositivos móveis (Smartphones). Converte o menu lateral para exibição no topo (fluxo vertical) e reorganiza a grade do cronograma em 1 coluna.
- `min-width: 768px` e `max-width: 1023px`: Tablets. Redimensiona o menu e reorganiza a grade do cronograma em 2 colunas para melhor aproveitamento do espaço.
- `min-width: 1024px`: Desktop. Menu lateral fixo (240px) e exibição completa dos cards e da agenda de 7 colunas em telas grandes.

## 4. Decisões de Responsividade e Arquitetura CSS
- **Mobile First / Fluid Layout:** Uso de regras universais de `box-sizing: border-box` e variáveis CSS (`:root`) para consistência do tema escuro com tons de roxo (`#0f172a` e `#8b5cf6`).
- **Flexbox:** Aplicado no layout global da aplicação (`app-layout`), alinhamento centralizado dos formulários de login/cadastro e navegação.
- **CSS Grid:** Aplicado na distribuição dos cards no Dashboard e na construção da grade do Cronograma Semanal.

## 5. Localização dos Arquivos
- **Estilos CSS:** `frontend/style.css`
- **Evidências Visuais:** `/docs/evidencias/etapa-03/`