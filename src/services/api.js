import { db } from "@/services/firebase.js";
import { ref, set } from "firebase/database";

function addParticipante({ nome, celular }) {
  set(ref(db, "participantes", celular), {
    nome,
    celular,
  });
}

export { addParticipante };
