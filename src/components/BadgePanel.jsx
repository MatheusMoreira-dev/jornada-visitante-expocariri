import BadgeCard from "@/components/BagdeCard";

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
  DialogTrigger,
  DialogHeader,
} from "@/components/ui/dialog";

import { useEffect, useState } from "react";

import QRCodeReader from "./QRCodeReader";

import { unlockBadge } from "@/services/api";

function BadgePanel({ loadBadges, login }) {
  const [badges, setBadges] = useState({});
  const [scannerOpen, setScannerOpen] = useState(false);

  useEffect(() => {
    setBadges(loadBadges);
  }, [loadBadges]);

  const handleProgress = () => {
    const array = Object.values(badges);
    const totalBlockeds = array.filter((v) => v.blocked).length;

    return {
      actualProgress: array.length - totalBlockeds,
      totalBadges: array.length,
    };
  };

  const progress = handleProgress();

  function onSucessScan(result) {
    const str = result[0].rawValue;
    const json = JSON.parse(str);
    const badgeID = json?.badgeID;

    if (!Object.hasOwn(badges, badgeID)) {
      return;
    }

    unlockBadge({ celular: login, badgeID });

    setBadges((prev) => ({
      ...prev,
      [badgeID]: {
        ...prev[badgeID],
        blocked: false,
      },
    }));

    setScannerOpen(false);
  }

  function onErrorScan(err) {
    console.log(err);
  }

  return (
    <div className="grid flex-1 min-h-0 gap-3 max-w-sm mx-auto p-2 my-5">
      <Progress
        value={(progress.actualProgress / progress.totalBadges) * 100}
        className="w-full max-w-sm"
      >
        <ProgressLabel>{`${progress.actualProgress}/${progress.totalBadges}`}</ProgressLabel>
        <ProgressValue></ProgressValue>
      </Progress>

      <div className="flex w-full">
        <Dialog open={scannerOpen} onOpenChange={setScannerOpen}>
          <DialogTrigger className="w-full">
            <Button
              variant="outline"
              className="border border-primary border-dashed shadow-sm rounded-sm w-full py-5 max-w-sm text-sm font-bold text-primary"
            >
              <QrCodeIcon></QrCodeIcon>
              Escanear
            </Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader></DialogHeader>

            <QRCodeReader
              onSucess={onSucessScan}
              onError={onErrorScan}
            ></QRCodeReader>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-2 overflow-y-auto scrollbar-thin scrollbar-thumb-tertiary px-1">
        {Object.entries(badges).map(([key, values]) => (
          <BadgeCard key={key} badge={values}></BadgeCard>
        ))}
      </div>
    </div>
  );
}

export default BadgePanel;
