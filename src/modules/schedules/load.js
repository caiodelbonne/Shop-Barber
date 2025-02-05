import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";

import { scheduleShow } from "../schedules/show.js";
import { hoursLoad } from "../form/hours-load.js";

// seleciona o input de data
const selectedDate = document.getElementById("date");

export async function schedulesDay() {
  // obtem data
  const date = selectedDate.value;

  // busca na api os agendamentos
  const dailySchedules = await scheduleFetchByDay({ date });

  // Exibe os agendamentos
  scheduleShow({ dailySchedules });

  // busca na api os agendamentos lado direito  // renderiza as horas disponivel
  hoursLoad({ date, dailySchedules });

  // horario disponivel lado esquerdo do form
}
