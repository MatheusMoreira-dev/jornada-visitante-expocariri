import { getAuth, signInAnonymously, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();

async function criarUsuario() {
  const resultado = await signInAnonymously(auth);
  return resultado.user;
}

function recuperarUsuario() {
  return new Promise((resolve) => {
    const cancelar = onAuthStateChanged(auth, (user) => {
      cancelar();
      resolve(user);
    });
  });
}

export { recuperarUsuario, criarUsuario };
