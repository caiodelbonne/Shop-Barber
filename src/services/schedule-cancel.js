import { apiConfig } from "./api-config.js";

export async function scheduleCancel({ id }) {
    try {
        const response = await fetch(`${apiConfig.baseURL}/schedules/${id}`, { 
            method: "DELETE",
        });

        if (!response.ok) {
            throw new Error("Erro ao excluir o agendamento.");
        }

        alert("Agendamento cancelado com sucesso");

    } catch (error) {
        console.error("Erro ao cancelar:", error);
        alert("Erro ao cancelar o agendamento");
    }
}
