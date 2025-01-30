import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours.js";
import { hoursClick } from "./hours-click.js";

const hours = document.getElementById("hours");

export function hoursLoad({ date }) {
  const opening = openingHours.map((hour) => {
    // recupera a hora
    const [scheduleHour] = hour.split(":");

    //  adiciona a hora e date p verificar se esta no passado

    const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs()); // data esta no passado

    // hr disponivel
    return {
      hour,
      avaliable: isHourPast,
    };
  });

  //  renderiza os horarios.
  opening.forEach(({ hour, avaliable }) => {
    const li = document.createElement("li");
    li.classList.add("hour");
    li.classList.add(avaliable ? "hour-available" : "hour-unavailable");

    li.textContent = hour;

    if (hour === "9:00") {
      hourHeaderAdd("Manha");
    } else if (hour === "13:00") {
      hourHeaderAdd("Tarde");
    } else if (hour === "18:00") {
      hourHeaderAdd("Noite");
    }

    hours.append(li);
  });


  // adic event de click no hor disponivel
  hoursClick()
}

// separar por turno

function hourHeaderAdd(title) {
  const header = document.createElement("li");
  header.classList.add("hour-period");
  header.textContent = title;

  hours.append(header);
}
