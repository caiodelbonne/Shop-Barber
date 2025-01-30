export function hoursClick() {
    const hours = document.querySelectorAll(".hour-available")

    hours.forEach( (available) =>{
        available.addEventListener("click", (selected) =>{

            hours.forEach((hours)=> {
                // remove a classe hour-selected de todas as li n selecionadAS
                hours.classList.remove("hour-selected")
            })

            // add a classe na li 
            selected.target.classList.add("hour-selected")
        })
    })    
}