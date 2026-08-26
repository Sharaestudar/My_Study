# Proposta e Especificação do Projeto: My_Study

## 1. Nome da Aplicação
**My_Study** (Plataforma de Gestão de Estudos e Acompanhamento Acadêmico)

## 2. Descrição do Problema
Estudantes universitários frequentemente enfrentam dificuldades para gerenciar o tempo e acumulam conteúdos, atividades 
e revisões pós-aula. A falta de uma ferramenta centralizada para listar, priorizar e acompanhar o progresso de entregas 
(como listas de exercícios, trabalhos e provas) gera desorganização e o efeito "bola de neve", onde prazos são perdidos 
e a reprogramação de tarefas se torna caótica.

## 3. Público-Alvo
- Estudantes universitários de graduação e pós-graduação.
- Alunos que precisam gerenciar simultaneamente disciplinas, trabalhos e rotinas de estudo autônomo.

## 4. Objetivo Principal da Aplicação
Fornecer um sistema web intuitivo para centralização, planejamento e execução de obrigações acadêmicas. A ferramenta 
permite o controle de pendências por disciplina através de quadro Kanban, acompanhamento visual de progresso, temporizador 
flexível de estudo (livre e Pomodoro) e realocação de prazos para evitar o acúmulo de tarefas.

---

## 5. Funcionalidades da Aplicação (Mínimo de 5)
1. **Painel do Dia (Dashboard de Controle):** Exibição centralizada das tarefas agendadas para o dia, alerta de pendências 
atrasadas e progresso percentual de cada disciplina.
2. **Quadro Kanban de Tarefas por Disciplina:** Organização visual das atividades (A Fazer, Em Andamento, Concluído) filtradas 
por matéria (ex: listas, provas, trabalhos).
3. **Registro de Sessões com Timer Flexível:** Cronômetro integrado para execução de estudos, permitindo contagem livre ou técnica 
Pomodoro (ciclos de 15 min com 5 min de intervalo).
4. **Reagendamento de Tarefas Atrasadas:** Sistema de reprogramação de prazos pendentes para o próximo horário disponível antes da 
data limite final.
5. **Gerenciador de Disciplinas e Prioridades:** Cadastro de matérias com sinalização de nível de dificuldade, conteúdos acumulados 
e barra de progresso de conclusão da ementa/atividades.

---

## 6. Entidades do Domínio (Mínimo de 3)
1. **Usuário (`User`):** Credenciais de acesso e preferências de notificação (`id`, `nome`, `email`, `senha_hash`).
2. **Disciplina (`Subject`):** Cadastro da matéria (`id`, `nome`, `cor_identificadora`, `nivel_dificuldade`, `tem_conteudo_acumulado`, `usuario_id`).
3. **Atividade/Tarefa (`Task`):** Item a ser executado (`id`, `disciplina_id`, `titulo`, `tipo_atividade`, `data_limite`, `status`, `prioridade`).
4. **SessaoEstudo (`StudySession`):** Registro do tempo dedicado (`id`, `tarefa_id`, `duracao_minutos`, `tipo_timer`, `data_execucao`).

---

## 7. Descrição de Telas / Interfaces (Mínimo de 3)
1. **Dashboard Principal:** Apresenta o resumo do dia ("O que fazer hoje"), alertas de tarefas atrasadas, atalhos rápidos de execução 
e cards do progresso geral por disciplina.
2. **Visão Kanban por Disciplina:** Interface em colunas ("A Fazer", "Em Andamento", "Concluído") permitindo filtrar por matéria específica 
(ex: Criptografia) para ver sublistas de exercícios, provas e trabalhos.
3. **Estação de Estudo Focado (Timer):** Tela de execução com seleção de modo (Tempo Livre ou Pomodoro 15/5), seletor de disciplina/tarefa 
ativa e botão para finalizar e salvar o tempo estudado.

---

## 8. Descrição de Operações / Requisitos Funcionais (Mínimo de 5)
1. `POST /api/subjects` — Cadastrar uma nova disciplina e seus parâmetros de prioridade.
2. `POST /api/tasks` — Criar uma nova tarefa (prova, trabalho ou lista de exercício) vinculada a uma disciplina.
3. `PATCH /api/tasks/{id}/status` — Atualizar o status da tarefa no quadro Kanban (A Fazer -> Em Andamento -> Concluído).
4. `PATCH /api/tasks/{id}/reschedule` — Reprogramar a data de execução de uma tarefa atrasada.
5. `POST /api/sessions` — Gravar o tempo e tipo de sessão de estudo realizada no timer.
6. `GET /api/dashboard/today` — Consultar as tarefas do dia atual e os índices de progresso por disciplina.

---

## 9. Tecnologias Utilizadas

### Cliente (Frontend)
- HTML5 / CSS3 / JavaScript (ES6+)
- React.js

### Servidor (Backend)
- Node.js com Express

### Persistência (Banco de Dados)
- PostgreSQL

---

## 10. Visão Geral da Solução (Diagrama Simples)

```text
[ Cliente Web / Mobile (React.js) ]
              │
              ├──> Requisições HTTP (API REST / JSON)
              ▼
[ Servidor Backend (Node.js + Express) ]
              │
              ├──> Operações e Consultas SQL
              ▼
[ Banco de Dados Relacional (PostgreSQL) ]
