// =========================
// Mock de usuários da escola
// =========================
const usuarios = [
    {
      id: 1,
      nome: "Ana Julia",
      turma: "2º Ano A",
      email: "ana@escola.pr.gov.br"
    },
    {
      id: 2,
      nome: "Joao de Lima",
      turma: "3º Ano B",
      email: "joao@escola.pr.gov.br"
    },
    {
      id: 3,
      nome: "Mariana Alves",
      turma: "1º Ano C",
      email: "mariana@escola.pr.gov.br"
    }
  ];
  
  // =========================
  // Mock de avisos
  // =========================
  const avisos = [
    {
      id: 1,
      titulo: "Reunião de Pais",
      data: "10/07/2026"
    },
    {
      id: 2,
      titulo: "Prova de Matemática",
      data: "12/07/2026"
    },
    {
      id: 3,
      titulo: "Feira de Ciências",
      data: "18/07/2026"
    },
    {
      id: 4,
      titulo: "Entrega de Boletins",
      data: "22/07/2026"
    }
  ];
  
  // =========================
  // Mock de tarefas
  // =========================
  const tarefas = [
    {
      id: 1,
      titulo: "Fazer atividade de Português",
      prioridade: "Alta"
    },
    {
      id: 2,
      titulo: "Preparar apresentação de História",
      prioridade: "Média"
    },
    {
      id: 3,
      titulo: "Resolver exercícios de Matemática",
      prioridade: "Baixa"
    }
  ];
  
  // =========================
  // Mock de reservas de sala
  // =========================
  const reservas = [
    {
      id: 1,
      sala: "Laboratório de Informática",
      turma: "2º Ano A",
      horario: "08:00"
    },
    {
      id: 2,
      sala: "Sala Multimídia",
      turma: "3º Ano B",
      horario: "10:00"
    }
  ];
  
  // =========================
  // Exibindo os dados
  // =========================
  console.log("=== Usuários ===");
  console.log(usuarios);
  
  console.log("=== Avisos ===");
  console.log(avisos);
  
  console.log("=== Tarefas ===");
  console.log(tarefas);
  
  console.log("=== Reservas ===");
  console.log(reservas);