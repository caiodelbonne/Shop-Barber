import dayjs from "dayjs";
// seleciona o periodo manha tarde e noite

const periodMoring = document.getElementById("period-morning"); 
const periodAfternoon = document.getElementById("period-afternoon");
const periodNigth = document.getElementById("period-night");

export function scheduleShow( { dailySchedules }) {
  try {
    // limpa as listas
    periodMoring.innerHTML = "";
    periodAfternoon.innerHTML = "";
    periodNigth.innerHTML = "";

    // renderiza o agendamento por periodo

    dailySchedules.forEach((schedule) => {
      const item = document.createElement("li");
      const time = document.createElement("strong");
      const name = document.createElement("span");

      // adc o id do agendamento
      item.setAttribute("data-id", schedule.id);
      time.textContent = dayjs(schedule.when).format("HH:mm");
      name.textContent = schedule.name;

      // cria icone de cancelar
      const cancelIcon = document.createElement("img");
      cancelIcon.classList.add("cancel-icon");
      cancelIcon.setAttribute("src", "./src/assets/cancel.svg");
      cancelIcon.setAttribute("alt", "Cancelar");

      // adiciona tempo , nome e icone no item html

      item.append(time, name, cancelIcon);
      // obter somente a hora
      const hour = dayjs(schedule.when).hour();

      // renderiza na sessao  ( manha , tarde ou noite)

      if (hour <= 12) {
        periodMoring.appendChild(item);
      } else if (hour > 12 && hour < 18) {
        periodAfternoon.appendChild(item);
      } else {
        periodNigth.appendChild(item);
      }
    });
  } catch (error) {
    alert("Nao foi possivel carregar os agendamentos!");
    console.log(error);
  }
}
