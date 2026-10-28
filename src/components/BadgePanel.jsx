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

function BadgePanel() {
  let [atual, total] = [3, 5];
  const [badges, setBadges] = useState({});

  // Carrega uma vez os dados da API
  useEffect(() => {
    const dadosAPI = {
      123456: {
        icon: "./src/assets/sunflower.svg",
        name: "Campo de girassol",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
        assumenda repellendus fugiat dolore, eligendi perspiciatis placeat
        inventore asperiores aperiam, accusantium quibusdam quos beatae
        voluptatum omnis dolorem reprehenderit? Consequuntur, aliquid beatae!`,
        blocked: true,
      },
      32144214: {
        icon: "./src/assets/sunflower.svg",
        name: "Campo de girassol",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
        assumenda repellendus fugiat dolore, eligendi perspiciatis placeat
        inventore asperiores aperiam, accusantium quibusdam quos beatae
        voluptatum omnis dolorem reprehenderit? Consequuntur, aliquid beatae!`,
        blocked: false,
      },
      4214214214: {
        icon: "./src/assets/sunflower.svg",
        name: "Campo de girassol",
        description: `Lorem ipsum dolor sit`,
        blocked: true,
      },
    };

    setBadges(dadosAPI);
  }, []);

  function onSucessScan(result) {
    const str = result[0].rawValue;
    const json = JSON.parse(str);
    const badgeID = json?.badgeID;

    if (!Object.hasOwn(badges, badgeID)) {
      return;
    }

    setBadges((prev) => ({
      ...prev,
      [badgeID]: {
        ...prev[badgeID],
        blocked: false,
      },
    }));
  }

  function onErrorScan(err) {
    console.log(err);
  }

  return (
    <div className="grid flex-1 min-h-0 gap-3 max-w-sm mx-auto p-2 my-5">
      <Progress value={(atual / total) * 100} className="w-full max-w-sm">
        <ProgressLabel>{`${atual}/${total}`}</ProgressLabel>
        <ProgressValue></ProgressValue>
      </Progress>

      <div className="flex w-full">
        <Dialog>
          <DialogTrigger className="w-full">
            <Button
              variant="outline"
              className="ring shadow-sm rounded-sm w-full py-5 max-w-sm text-sm font-bold text-primary"
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
