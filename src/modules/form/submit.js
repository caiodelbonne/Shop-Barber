import dayjs from "dayjs";

const form = document.querySelector("form")

// data atual para o unput
const selectedDate = document.getElementById("date")
const inputToday = dayjs(new Date()).format("YYYY-MM-DD") // define o dia atual como a data minima 
selectedDate.value = inputToday 
// data minima 
selectedDate.min = inputToday

form.onsubmit = (event) =>{
    event.preventDefault()

    console.log("enviado");
    
}