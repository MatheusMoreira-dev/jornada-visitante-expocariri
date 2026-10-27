import { db } from "@/services/firebase.js";
import { ref, set } from "firebase/database";

function addParticipante({ nome, celular, cidade, perguntaConhecerPlanos }) {
  set(ref(db, "participantes", celular), {
    nome,
    celular,
    cidade,
    perguntaConhecerPlanos,
  });
}

function login({}) {}

export { addParticipante };
