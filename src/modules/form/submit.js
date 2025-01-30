import dayjs from "dayjs";

const form = document.querySelector("form")

const clientName = document.getElementById("client")

// data atual para o unput
const selectedDate = document.getElementById("date")
const inputToday = dayjs(new Date()).format("YYYY-MM-DD") // define o dia atual como a data minima 
selectedDate.value = inputToday 
// data minima 
selectedDate.min = inputToday

form.onsubmit = (event) =>{
    event.preventDefault()

    try{
        //  recuperando o nome do cliente 


    }   catch (error) {
            alert(" erro ao tentar agendar ")
            console.log(error);
            
    } 
}