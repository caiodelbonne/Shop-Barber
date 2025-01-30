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
        const id = new Date().getTime()

        console.log({
            id,
            name,
            when
        });
        
    }   catch (error) {
            alert(" erro ao tentar agendar ")
            console.log(error);
            
    } 
}