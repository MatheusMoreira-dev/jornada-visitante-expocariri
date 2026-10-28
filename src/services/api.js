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

async function listAvailableBadges() {
  const badges = {
    "21ada16d": {
      icon: "/badgeIcons/sunflower.svg",
      name: "Hidrate-se!",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
        assumenda repellendus fugiat dolore, eligendi perspiciatis placeat
        inventore asperiores aperiam, accusantium quibusdam quos beatae
        voluptatum omnis dolorem reprehenderit? Consequuntur, aliquid beatae!`,
    },
    "5e9bbe37": {
      icon: "/badgeIcons/sunflower.svg",
      name: "Proteja-se do sol!",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
        assumenda repellendus fugiat dolore, eligendi perspiciatis placeat
        inventore asperiores aperiam, accusantium quibusdam quos beatae
        voluptatum omnis dolorem reprehenderit? Consequuntur, aliquid beatae!`,
    },
    "12914c30": {
      icon: "/badgeIcons/sunflower.svg",
      name: "Biopedância",
      description: `Lorem ipsum dolor sit`,
    },
    "1829caf0": {
      icon: "/badgeIcons/sunflower.svg",
      name: "Check-in rápido",
      description: `Lorem ipsum dolor sit`,
    },
    "05dd0a10": {
      icon: "/badgeIcons/sunflower.svg",
      name: "Campo de girassol",
      description: `Lorem ipsum dolor sit`,
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

async function unlockBadge({ celular, badgeID }) {
  const caminho = `participantes/${celular}/badges/${badgeID}`;
  await update(ref(db, caminho), { blocked: false });
}

export { cadastrar, login, listAvailableBadges, unlockBadge };
