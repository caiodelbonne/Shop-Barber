import { apiConfig } from "./api-config.js";

export async function scheduleNew({ id, name, when }) {
  try {
    // faz a requi para enviar o agendamento
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
         id:String(id), 
         name, 
         when }),
    });
    // exibe msgm de confirmacao
    alert("agendamento realizado com sucesso!");
  } catch (error) {
    console.log(error);
    alert("nao foi possivel agendar, tente novamente mais tarde");
  }
}
