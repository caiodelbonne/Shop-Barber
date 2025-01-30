import { hoursLoad } from "../form/hours-load.js";

// seleciona o input de data
const selectdDate = document.getElementById("date");

export function schedulesDay() {
  // obtem data
  const date = selectdDate.value;
  // busca na api os agendamentos lado direito  // renderiza as horas disponivel
  hoursLoad({ date });

  // horario disponivel lado esquerdo do form
}
