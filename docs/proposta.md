# Proposta e Especificação do Projeto: My Study

## 1. Proposta
O **My Study** é uma aplicação Web desenvolvida para auxiliar estudantes na organização de suas rotinas acadêmicas. O sistema centraliza o gerenciamento de disciplinas, a divisão de conteúdos por módulos/tópicos e o agendamento de tarefas em uma agenda inteligente com prevenção de conflitos de horário.

## 2. Problema
Estudantes enfrentam acúmulo de conteúdos e dificuldade para visualizar o progresso real em suas matérias. A falta de acompanhamento granular por tópicos gera incerteza sobre o que já foi estudado e o que falta concluir. Além disso, o controle manual em agendas físicas ou bloco de notas não impede a sobreposição acidental de compromissos e não oferece atualização automática de pendências atrasadas.

## 3. Público-Alvo
Estudantes universitários e de pós-graduação que precisam gerenciar múltiplas disciplinas, acompanhar prazos e manter uma rotina de estudos estruturada.

## 4. Objetivo (Principal e Secundário)
- **Objetivo Principal:** Oferecer uma plataforma Web centralizada para planejamento de estudos, controle de conteúdo programático e gestão de cronograma sem sobreposição de horários.
- **Objetivo Secundário:** Proporcionar autonomia ao estudante por meio de métricas visuais de progresso e identificação automática de tarefas em atraso.

## 5. Funcionalidades

### 5.1. Cadastro e Autenticação de Usuários
- **Descrição:** Permite que o estudante crie uma conta individual e acesse a aplicação de forma segura.
- **Passo a passo / Regras:**
  - O usuário informa `nome`, `e-mail` e `senha` para se cadastrar.
  - O sistema valida se o e-mail já está em uso antes de efetivar o registro.
  - Para usuários cadastrados, o sistema realiza o login via e-mail e senha, autenticando o acesso aos seus dados individuais.

### 5.2. Gerenciamento Hierárquico de Conteúdos (CRUD Encadeado)
- **Descrição:** Estruturação dos conteúdos acadêmicos respeitando a hierarquia rígida de dependência do domínio.
- **Passo a passo / Regras:**
  - **CRUD de Matérias:** O usuário pode criar, listar, editar e excluir disciplinas.
  - **CRUD de Módulos/Tópicos:** O usuário cria tópicos vinculados a uma matéria existente. *Regra de dependência:* Não é permitido criar um módulo sem que ele esteja associado a uma matéria.
  - **CRUD de Atividades:** O usuário cria tarefas de estudo vinculadas a um módulo existente. *Regra de dependência:* Não é permitido criar uma atividade sem que ela esteja associada a um módulo/tópico.

### 5.3. Agendamento com Trava Anti-Conflito de Horário
- **Descrição:** Planejamento temporal de atividades impedindo a sobreposição de compromissos na rotina.
- **Passo a passo / Regras:**
  - Ao criar ou editar uma atividade, o usuário define a `data`, o `horário de início` e o `horário de término`.
  - O sistema consulta a agenda do usuário e verifica se o intervalo solicitado entra em choque com outra atividade já agendada.
  - Caso haja sobreposição, o sistema bloqueia a criação e exibe um alerta informando o conflito.

### 5.4. Cronômetro Interativo de Estudo (Sessão Ativa)
- **Descrição:** Interface de execução da atividade com contagem de tempo em tempo real.
- **Passo a passo / Regras:**
  - Ao iniciar o horário previsto da atividade, o usuário pode acionar um cronômetro/timer interativo na tela.
  - O cronômetro contabiliza o tempo efetivamente dedicado àquela tarefa.
  - Ao finalizar a contagem, a atividade pode ter seu status atualizado para "Finalizado".

### 5.5. Atualização Automática de Status ("Atrasado")
- **Descrição:** Transição automática de estado para controle rigoroso de prazos expirados.
- **Passo a passo / Regras:**
  - O sistema compara continuamente o horário atual com o prazo/horário de término das atividades pendentes.
  - Se o horário limite for ultrapassado e a atividade permanecer com status "A Fazer" ou "Em Andamento", o sistema altera automaticamente seu status para "Atrasado".

### 5.6. Dashboard e Relatórios Visuais de Desempenho
- **Descrição:** Painel central para acompanhamento diário e consolidação de métricas.
- **Passo a passo / Regras:**
  - Apresenta a listagem prioritária das atividades agendadas para o dia atual.
  - Exibe alertas de atividades com status "Atrasado".
  - Apresenta gráficos visuais (porcentagem de conclusão) mostrando o progresso acumulado de tópicos e matérias concluídas.

### 5.7. Trava de Segurança para Ações Críticas
- **Descrição:** Prevenção contra perda acidental de dados e históricos.
- **Passo a passo / Regras:**
  - Ao tentar excluir uma matéria, módulo ou atividade, o sistema exibe uma caixa de diálogo/modal de confirmação obrigatória.

## 6. Entidades e Conceitos do Domínio

### 6.1. Usuário (`User`)
- **Descrição:** Representa o estudante que utiliza a aplicação e possui acesso exclusivo aos seus dados.
- **Atributos principais:** `id`, `nome`, `email`, `senha_hash`, `data_cadastro`.
- **Relacionamentos:** Possui várias Matérias (1 para N).

### 6.2. Matéria (`Subject`)
- **Descrição:** Representa a disciplina acadêmica cadastrada pelo estudante.
- **Atributos principais:** `id`, `usuario_id`, `nome`, `cor_identificadora`.
- **Relacionamentos:** Pertence a um Usuário (N para 1) e possui vários Módulos/Tópicos (1 para N).

### 6.3. Módulo / Tópico (`Topic`)
- **Descrição:** Representa a divisão do conteúdo programático de uma matéria específica.
- **Atributos principais:** `id`, `materia_id`, `titulo`, `ordem_exibicao`.
- **Relacionamentos:** Pertence obrigatoriamente a uma Matéria (N para 1) e possui várias Atividades (1 para N).

### 6.4. Atividade (`Task`)
- **Descrição:** Representa a tarefa de estudo concreta vinculada a um módulo, contendo prazos, horários agendados e status de conclusão.
- **Atributos principais:** `id`, `topico_id`, `descricao`, `data_agendamento`, `horario_inicio`, `horario_fim`, `tempo_decorrido_minutos`, `status` (*A Fazer, Em Andamento, Finalizado, Atrasado*).
- **Relacionamentos:** Pertence obrigatoriamente a um Módulo/Tópico (N para 1) e possui vários registros de Sessões de Estudo (1 para N).

### 6.5. Histórico de Sessões de Estudo (`StudySession`)
- **Descrição:** Registro individual gerado a cada acionamento do cronômetro para medir o tempo gasto em uma atividade.
- **Atributos principais:** `id`, `atividade_id`, `data_execucao`, `horario_inicio_real`, `horario_fim_real`, `duracao_minutos`, `observacoes`.
- **Relacionamentos:** Pertence a uma Atividade (N para 1).

### 6.6. Relatório e Histórico Consolidado (`PerformanceReport`)
- **Conceito de Domínio / Visão Consolidada:** Entidade conceitual calculada pelo sistema para compilar e filtrar o histórico global do estudante.
- **Métricas e Filtros:**
  - **Histórico Passado:** Relatório de matérias/tópicos 100% concluídos e atividades finalizadas.
  - **Visão Diária:** Atividades programadas e executadas no dia atual.
  - **Projeção Futura:** Cronograma de atividades agendadas para os próximos dias/semanas.
  - **Indicadores:** Percentual de conclusão por matéria e total de horas estudadas acumuladas.

## 7. Interfaces Previstas

### 7.1. Tela de Login e Cadastro de Usuário
- **Objetivo:** Interface inicial para autenticação e criação de novas contas de estudantes.
- **Elementos:** Formulário alternável de Cadastro e Login com campos para `Nome`, `E-mail` e `Senha`; mensagens de validação visual e botão de ação principal.

### 7.2. Tela do Dashboard Principal (Visão do Dia e Indicadores)
- **Objetivo:** Painel de controle de entrada do estudante, focado no planejamento diário e visão resumida do progresso.
- **Elementos:** Seção "Atividades de Hoje", painel de Alertas de Atraso e gráfico visual (Chart.js) de desempenho geral por matéria.

### 7.3. Tela de Gestão de Matérias, Módulos e Atividades (Visão Hierárquica)
- **Objetivo:** Central de gerenciamento do conteúdo programático com navegação em árvore encadeada.
- **Elementos:** Lista de Matérias com indicação de cor, expansão de Módulos com barra de progresso e listagem de Atividades vinculadas com ações de edição/status.

### 7.4. Tela de Agenda Interativa e Agendamento com Anti-Conflito
- **Objetivo:** Visualização do cronograma de estudos diário/semanal e agendamento seguro de horários.
- **Elementos:** Grade horária em formato de calendário/agenda, modal de criação de atividades e componente de alerta em caso de sobreposição de horários.

### 7.5. Tela do Cronômetro Interativo de Estudo (Sessão Ativa)
- **Objetivo:** Interface limpa acionada durante a execução real de uma atividade.
- **Elementos:** Relógio/Timer em destaque, dados da atividade ativa, controles (`Iniciar`, `Pausar`, `Finalizar Estudo`) e campo para anotações da sessão.

### 7.6. Tela de Histórico e Relatórios Consolidados
- **Objetivo:** Central de consulta ao histórico passado de estudos e projeções de cronogramas futuros.
- **Elementos:** Filtros por período/matéria, relatório de matérias concluídas, histórico de sessões do cronômetro e projeção para os próximos dias.

## 8. Operações Previstas

### 8.1. Autenticação e Gestão de Usuários
- Registrar um novo usuário no sistema salvando nome, e-mail e senha (com verificação de e-mail único).
- Autenticar o usuário e retornar o token de sessão para acesso restrito às suas disciplinas.

### 8.2. Gerenciamento Hierárquico de Conteúdos (CRUD Encadeado)
- Cadastrar uma nova matéria vinculada ao usuário logado.
- Cadastrar um novo módulo/tópico associado obrigatoriamente a uma matéria existente.
- Criar uma nova atividade vinculada a um módulo, recebendo `descricao`, `data`, `horario_inicio` e `horario_fim`.

### 8.3. Agendamento com Anti-Conflito e Atualização de Status
- Consultar a agenda do usuário para verificar se o intervalo solicitado entra em choque com outra atividade agendada. Bloqueia a criação em caso de sobreposição.
- Atualizar o status de uma atividade (*A Fazer, Em Andamento, Finalizado*).
- Rotina do sistema que verifica tarefas pendentes com horário expirado e altera seu status para *Atrasado*.

### 8.4. Execução do Cronômetro e Histórico
- Registrar uma sessão de estudo concluída via cronômetro, salvando a duração em minutos e as observações no histórico.

### 8.5. Relatórios e Indicadores
- Buscar o resumo de tarefas do dia e a lista de pendências atrasadas para o usuário.
- Calcular e retornar a taxa de conclusão de tópicos por matéria para alimentar os gráficos do cliente.
- Consultar o histórico consolidado de matérias finalizadas, sessões realizadas e projeção de compromissos futuros com base em filtros por período.

## 9. Tecnologias Pretendidas
- **Cliente (Frontend):** HTML5, CSS3, JavaScript e React.
- **Servidor (Backend):** Node.js, Express, JavaScript/TypeScript, API REST, JSON
- **Persistência:** PostgreSQL.

## 10. Diagrama Inicial
```text
[ Cliente Web / Mobile (HTML5 / CSS3 / JS + React) ]
              │
              ├──> Requisições HTTP (API REST / JSON)
              ▼
[ Servidor Backend (Node.js + Express/ JS ou TS) ]
              │
              ├──> Operações e Consultas SQL
              ▼
[ Banco de Dados Relacional (PostgreSQL) ]
