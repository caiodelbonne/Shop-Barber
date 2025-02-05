import dayjs from "dayjs";

import { openingHours } from "../../utils/opening-hours.js";
import { hoursClick } from "./hours-click.js";

const hours = document.getElementById("hours");

export function hoursLoad({ date, dailySchedules }) {
  // limpa a lista de horario
  hours.innerHTML = "";

  // lista de horários já agendados
  const unavailableHours = dailySchedules.map((schedule) =>
    dayjs(schedule.when).format("HH:mm")
  );

  const opening = openingHours.map((hour) => {
    // recupera a hora e transforma em número
    const [scheduleHour] = hour.split(":");
    const scheduleHourNumber = parseInt(scheduleHour, 10); // Converte para número

    // adiciona a hora à data para verificar se está no passado
    const isHourPast = dayjs(date).hour(scheduleHourNumber).isBefore(dayjs());

    // se o horário está na lista de agendados ou está no passado, ele fica indisponível
    const available = !unavailableHours.includes(hour) && !isHourPast;

    return {
      hour,
      available,
    };
  });

  // renderiza os horários.
  opening.forEach(({ hour, available }) => { // Corrigido: "available"
    const li = document.createElement("li");
    li.classList.add("hour");
    li.classList.add(available ? "hour-available" : "hour-unavailable");

    li.textContent = hour;

    if (hour === "09:00") {
      hourHeaderAdd("Manhã");
    } else if (hour === "13:00") {
      hourHeaderAdd("Tarde");
    } else if (hour === "18:00") {
      hourHeaderAdd("Noite");
    }

    hours.append(li);
  });

  // adiciona evento de clique nos horários disponíveis
  hoursClick();
}

// separa por turno
function hourHeaderAdd(title) {
  const header = document.createElement("li");
  header.classList.add("hour-period");
  header.textContent = title;

  hours.append(header);
}
