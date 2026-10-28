import BadgePanel from "@/components/BadgePanel";
import { useEffect, useState } from "react";
import { login, listAvailableBadges } from "@/services/api";

function Home() {
  const participante = JSON.parse(
    sessionStorage.getItem("participante") || "null",
  );

  const [dados, setDados] = useState(null);
  const [badges, setBadges] = useState({});

  useEffect(() => {
    async function buscarDados() {
      const data = await login({ data: participante });
      let availableBadges = await listAvailableBadges();

      availableBadges = Object.fromEntries(
        Object.entries(availableBadges).map(([id, badge]) => [
          id,
          {
            ...badge,
            ...data.badges?.[id],
          },
        ]),
      );

      setDados(data);
      setBadges(availableBadges);
    }

    buscarDados();
  }, []);

  return (
    <div className="max-w-5xl mx-auto flex max-h-full flex-col overflow-hidden">
      <BadgePanel loadBadges={badges} login={participante.celular}></BadgePanel>
    </div>
  );
}

export default Home;
