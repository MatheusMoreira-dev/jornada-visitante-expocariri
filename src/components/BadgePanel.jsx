import BadgeCard from "@/components/BagdeCard";

import SunflowerCelebration from "@/components/SunflowerCelebration";

import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/components/ui/progress";

import { QrCodeIcon } from "lucide-react";

import { Button } from "./ui/button";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogHeader,
} from "@/components/ui/dialog";

import { useEffect, useState } from "react";

import QRCodeReader from "./QRCodeReader";

import { unlockBadge } from "@/services/api";

function BadgePanel({ loadBadges, login }) {
  const [finish, setFinish] = useState(false);
  const [badges, setBadges] = useState({});
  const [scannerOpen, setScannerOpen] = useState(false);

  useEffect(() => {
    setBadges(loadBadges ?? {});
  }, [loadBadges]);

  const array = Object.values(badges);
  const totalBlockeds = array.filter((v) => v.blocked).length;

  const progress = {
    actualProgress: array.length - totalBlockeds,
    totalBadges: array.length,
  };

  async function onSucessScan(result) {
    try {
      const str = result[0].rawValue;
      const json = JSON.parse(str);
      const badgeID = json?.badgeID;

      if (!Object.hasOwn(badges, badgeID) || !badges[badgeID].blocked) {
        return;
      }

      await unlockBadge({
        celular: login,
        badgeID,
        timeStamp: Date.now(),
      });

      const updatedBadges = {
        ...badges,
        [badgeID]: {
          ...badges[badgeID],
          blocked: false,
        },
      };

      setBadges(updatedBadges);
      setScannerOpen(false);

      const allUnlocked =
        Object.keys(updatedBadges).length > 0 &&
        Object.values(updatedBadges).every((badge) => !badge.blocked);

      if (allUnlocked) {
        setFinish(true);
      }
    } catch (err) {
      console.error("Erro ao processar QR Code:", err);
    }
  }

  function onErrorScan(err) {
    console.log(err);
  }

  return (
    <div className="relative grid flex-1 min-h-0 gap-3 max-w-sm mx-auto p-2 my-5">
      <Progress
        value={
          progress.totalBadges
            ? (progress.actualProgress / progress.totalBadges) * 100
            : 0
        }
        className="w-full max-w-sm"
      >
        <ProgressLabel>
          {`${progress.actualProgress}/${progress.totalBadges}`}
        </ProgressLabel>
        <ProgressValue />
      </Progress>

      <div className="flex w-full">
        <Dialog open={scannerOpen} onOpenChange={setScannerOpen}>
          <DialogTrigger className="w-full">
            <Button
              variant="outline"
              className="border border-primary border-dashed shadow-sm rounded-sm w-full py-5 max-w-sm text-sm font-bold text-primary"
            >
              <QrCodeIcon />
              Escanear
            </Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader />

            <QRCodeReader onSucess={onSucessScan} onError={onErrorScan} />
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-2 overflow-y-auto scrollbar-thin scrollbar-thumb-tertiary px-1">
        {Object.entries(badges).map(([key, values]) => (
          <BadgeCard key={key} badge={values} />
        ))}
      </div>

      {/* Modal de conclusão */}
      <Dialog open={finish} onOpenChange={setFinish}>
        <DialogContent className="text-center overflow-hidden">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-primary text-center">
              Parabéns! 🌻
            </DialogTitle>

            <DialogDescription className="text-center text-base">
              Você desbloqueou todas as insígnias!
              <br />
              Sua jornada foi concluída com sucesso.
            </DialogDescription>
          </DialogHeader>

          <div className="text-6xl py-4 animate-bounce">🏆🌻</div>

          <Button onClick={() => setFinish(false)} className="w-full">
            Continuar
          </Button>
        </DialogContent>
      </Dialog>

      {/* Girassóis decorativos */}
      {finish && <SunflowerCelebration />}
    </div>
  );
}

export default BadgePanel;
