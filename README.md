# My Study — Plataforma de Gestão de Estudos e Acompanhamento Acadêmico

## Sobre o Projeto
O **My Study** é uma aplicação Web desenvolvida para auxiliar estudantes na organização de suas rotinas acadêmicas. O sistema centraliza o gerenciamento de disciplinas, a divisão de conteúdos por módulos/tópicos e o agendamento de tarefas em uma agenda inteligente com prevenção de conflitos de horário e acompanhamento por cronômetro interativo.

## Problema
Estudantes enfrentam acúmulo de conteúdos e dificuldade para visualizar o progresso real em suas matérias. A falta de acompanhamento granular por tópicos gera incerteza sobre o que já foi estudado e o que falta concluir. Além disso, o controle manual em agendas físicas ou bloco de notas não impede a sobreposição acidental de compromissos e não oferece atualização automática de pendências atrasadas.

## Objetivo
- **Objetivo Principal:** Oferecer uma plataforma Web centralizada para planejamento de estudos, controle de conteúdo programático e gestão de cronograma sem sobreposição de horários.
- **Objetivo Secundário:** Proporcionar autonomia ao estudante por meio de métricas visuais de progresso e identificação automática de tarefas em atraso.

## Principais Funcionalidades
- **Cadastro e Autenticação de Usuários:** Registro e login seguro com validação de e-mail único.
- **Gerenciamento Hierárquico de Conteúdos (CRUD Encadeado):** Estruturação dependente em Matérias ➔ Módulos/Tópicos ➔ Atividades.
- **Agendamento com Trava Anti-Conflito de Horário:** Validação que impede a sobreposição de tarefas no mesmo intervalo de tempo.
- **Cronômetro Interativo de Estudo (Sessão Ativa):** Interface de execução de estudo com contagem de tempo em tempo real e registro de sessões.
- **Atualização Automática de Status ("Atrasado"):** Transição automática para tarefas com horário limite ultrapassado.
- **Dashboard e Relatórios Visuais de Desempenho:** Painel com pendências do dia, alertas de atraso e gráficos de progresso por matéria.
- **Trava de Segurança para Ações Críticas:** Confirmação obrigatória antes da exclusão de dados do sistema.

## Domínio
O domínio da aplicação compreende a gestão do tempo, organização da rotina acadêmica universitária/pós-graduação e acompanhamento do rendimento escolar de estudantes.

## Entidades Principais
- **Usuário (`User`):** Representa o estudante cadastrado no sistema.
- **Matéria (`Subject`):** Disciplina acadêmica cadastrada pelo estudante.
- **Módulo / Tópico (`Topic`):** Divisão do conteúdo programático de uma matéria.
- **Atividade (`Task`):** Tarefa de estudo vinculada a um tópico, com horários e status de conclusão.
- **Histórico de Sessões de Estudo (`StudySession`):** Registro de tempo cronometrado dedicado a uma atividade.
- **Relatório e Histórico Consolidado (`PerformanceReport`):** Entidade conceitual calculada para compilar métricas globais e histórico.

## Tecnologias

### Front End
- HTML5 / CSS3 / JavaScript (ES6+)
- React

### Back End
- Node.js
- Express
- JavaScript / TypeScript
- API REST
- JSON

### Banco de Dados
- PostgreSQL

### Arquitetura Inicial
Ainda não desenvolvida inicialmente para esta etapa.

### Estrutura Prevista do Projeto

```text
[ Cliente / Browser (HTML5 / CSS3 / JS + React) ]
       │
       ▼ (Requisições HTTP / JSON - API REST)
[ Servidor Web (Node.js + Express / JS ou TS) ]
       │
       ▼ (Consultas / Persistência)
[ Banco de Dados (PostgreSQL) ]
```text
