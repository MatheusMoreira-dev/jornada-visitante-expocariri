import { db } from "@/services/firebase.js";
import { ref, set, get } from "firebase/database";

async function cadastrar({ data }) {
  const celular = data.celular.replace(/\D/g, "");
  const participantesRef = ref(db, `participantes/${celular}`);

  const snapshot = await get(participantesRef);

  if (snapshot.exists()) throw new Error("Este telefone já está cadastrado!");

  await set(participantesRef, {
    ...data,
    celular,
  });
}

function login({ data }) {}

export { cadastrar, login };
