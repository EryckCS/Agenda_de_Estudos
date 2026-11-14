# Agenda de Estudos

Mini projeto web para organizar atividades de estudo e acompanhar sessões com um cronômetro Pomodoro.

## Funcionalidades

- Cadastro e login locais usando o armazenamento do navegador (`localStorage`).
- Exibição do nome e e-mail do usuário conectado e opção para sair.
- Calendário mensal com navegação entre meses e indicação dos dias que têm atividades.
- Cadastro de atividades com título, descrição, data e hora.
- Remoção de uma atividade ao marcá-la como concluída.
- Cronômetro configurável com horas, minutos e segundos, além de iniciar, pausar e resetar.

## Como executar

1. Baixe ou extraia a pasta do projeto.
2. Abra `html/login.html` em um navegador atualizado.
3. Escolha **Cadastrar**, preencha os campos e envie o formulário.
4. Faça login com o e-mail e a senha cadastrados.
5. Na agenda, use **+ Nova Atividade** para adicionar uma atividade e configure o tempo de estudo no painel Pomodoro.

Não há dependências ou etapa de instalação. Os arquivos CSS, JavaScript e a imagem são carregados por caminhos relativos à pasta `html`.

## Estrutura

```text
Agenda_de_Estudos/
├── css/
│   ├── login.css
│   └── main.css
├── html/
│   ├── index.html
│   └── login.html
├── img/
│   └── agenda_de_estudos.png
├── js/
│   ├── atividades.js
│   ├── calendario.js
│   ├── cronometro.js
│   ├── login.js
│   └── main.js
└── README.md
```

## Limitações conhecidas

- As atividades existem apenas na memória da página. Ao atualizar ou fechar a agenda, elas são perdidas; o salvamento persistente está indicado como TODO no código.
- O cadastro e a sessão ficam no `localStorage` do navegador. Este projeto é demonstrativo e não implementa autenticação segura, servidor ou sincronização entre dispositivos.
- O descanso é calculado como 20% do tempo de estudo (a proporção clássica de 25 minutos de foco para 5 de pausa) e começa automaticamente ao fim do estudo. O ciclo termina quando o descanso acaba; para estudar novamente, basta iniciar outra sessão.