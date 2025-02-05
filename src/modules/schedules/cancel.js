import { schedulesDay } from "./load.js";
import { scheduleCancel } from "../../services/schedule-cancel.js";

const periods = document.querySelectorAll(".period");

// Gera evento de clique para cada lista
periods.forEach((period) => {
    period.addEventListener("click", async (event) => {
        if (event.target.classList.contains("cancel-icon")) {
            // Obtém o elemento <li> mais próximo
            const item = event.target.closest("li");
            if (!item) return;

            // Obtém o ID do dataset
            const id = item.dataset.id;
            if (!id) return;

            // Confirmação do usuário
            const isConfirm = confirm("Deseja cancelar o agendamento?");
            if (!isConfirm) return;

            // Chama a função para deletar o item
            await scheduleCancel({ id });

            // Remove o item da interface
            item.remove();

            // Recarrega a lista de agendamentos (caso necessário)
            schedulesDay();
        }
    });
});
