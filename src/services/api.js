import { db } from "@/services/firebase.js";
import { ref, set, get, update } from "firebase/database";

async function cadastrar({ data }) {
  const celular = data.celular.replace(/\D/g, "");
  const participantesRef = ref(db, `participantes/${celular}`);

  const snapshot = await get(participantesRef);

  if (snapshot.exists()) throw new Error("Este telefone já está cadastrado!");

  await set(participantesRef, {
    ...data,
    celular,
  });

  return { celular, nome: data?.nome };
}

/*
  "05dd0a10": {
      icon: "/badgeIcons/sunflower.svg",
      name: "Campo de girassóis",
      description: `Entre os girassóis, aprecie a beleza e registre seu melhor ângulo!`,
    },
*/

async function listAvailableBadges() {
  const badges = {
    "21ada16d": {
      icon: "/badgeIcons/sunflower.svg",
      name: "Hidrate-se!",
      description: `Seu corpo merece esse gole de cuidado!`,
    },
    "5e9bbe37": {
      icon: "/badgeIcons/sunflower.svg",
      name: "Proteja-se do sol!",
      description: `Passe o protetor solar: curta o dia sem descuidar da pele! `,
    },
    "12914c30": {
      icon: "/badgeIcons/sunflower.svg",
      name: "Bioimpedância",
      description: `Seu corpo tem muito a te contar. Que tal conhecer mais sobre ele?`,
    },
    "1829caf0": {
      icon: "/badgeIcons/sunflower.svg",
      name: "Dê uma olhada na sua saúde!",
      description: `Pare um minutinho por você. Sua saúde merece esse cuidado!`,
    },
  };

  return badges;
}

async function login({ data }) {
  const celular = data.celular.replace(/\D/g, "");
  const participanteRef = ref(db, `participantes/${celular}`);

  const snapshot = await get(participanteRef);

  if (!snapshot.exists()) {
    throw new Error("Telefone não cadastrado.");
  }

  const participante = snapshot.val();

  if (
    participante.nome.trim().toLowerCase() !== data.nome.trim().toLowerCase()
  ) {
    throw new Error("Nome ou telefone incorreto.");
  }

  return participante;
}

async function unlockBadge({ celular, badgeID, timeStamp }) {
  const caminho = `participantes/${celular}/badges/${badgeID}`;
  await update(ref(db, caminho), { blocked: false, timeStamp });
}

export { cadastrar, login, listAvailableBadges, unlockBadge };
