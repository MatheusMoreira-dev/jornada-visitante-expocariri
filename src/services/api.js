import { db } from "@/services/firebase.js";
import { ref, set } from "firebase/database";

function addParticipante({ data }) {
  set(ref(db, "participantes", data.celular), {
    ...data,
  });
}

function login({}) {}

export { addParticipante };
