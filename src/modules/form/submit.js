import dayjs from "dayjs";

import {scheduleNew} from "../../services/schedule-new.js"
import { schedulesDay} from "../schedules/load.js"

const form = document.querySelector("form")

const clientName = document.getElementById("client")

// data atual para o unput
const selectedDate = document.getElementById("date")
const inputToday = dayjs(new Date()).format("YYYY-MM-DD") // define o dia atual como a data minima 
selectedDate.value = inputToday 
// data minima 
selectedDate.min = inputToday

form.onsubmit = async (event) =>{
    event.preventDefault()

    try{
        //  recuperando o nome do cliente 
        const name = clientName.value.trim()

        if(!name) {
            return alert(" insira o nome do cliente !")
        }
        // recupera o horario selecionado
        const hourSelecetd = document.querySelector(".hour-selected")

        if(!hourSelecetd) {
            return alert("selecione a hora ")
        }

        // recuperar a hora
        const [hour] = hourSelecetd.innerText.split(":")

        // inserir a hora na DATA 
        const when = dayjs(selectedDate.value).add(hour,"hour") // quando 

        // gerar um id
        const id = String(new Date().getTime())

        // agendamento aqui
        await scheduleNew({
            id,
            name,
            when
        });
        // recarregar os agendamentos 
        await schedulesDay()
        // limpa o nome do cliente 
        clientName.value =""
    }   catch (error) {
            alert(" erro ao tentar agendar ")
            console.log(error);
            
    } 
}