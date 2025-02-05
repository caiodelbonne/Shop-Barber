import { apiConfig } from "./api-config";
import dayjs from "dayjs";

export async function scheduleFetchByDay({ date }) {
  try {
    // buscar requisicao
    // faz a req
    const response = await fetch(`${apiConfig.baseURL}/schedules`);
    // converte para Json
    const data = await response.json();

    // filtra pelo dia selecionado
    const dailySchedules = data.filter((schedule) =>
      dayjs(date).isSame(schedule.when, "day")
    );
    
    return dailySchedules;
  } catch (error) {
    console.log(error);
    alert("nao foi possivel buscar o agendamento do dia selecionado");
  }
}
