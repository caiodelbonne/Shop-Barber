import {schedulesDay} from "../schedules/load"

// seleciona o inout de data

const selectedDate = document.getElementById("date")

// recarrega a lista de horario , qnd o input de data muda
selectedDate.onchange = () => schedulesDay()