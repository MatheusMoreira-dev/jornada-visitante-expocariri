import BadgeCard from "@/components/BagdeCard";

import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/components/ui/progress";

import { QrCodeIcon } from "lucide-react";

import { Button } from "./ui/button";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import QRCodeReader from "./QRCodeReader";

function BadgePanel({ badges = [] }) {
  let [atual, total] = [3, 5];

  function onSucessScan(result) {
    const str = result[0].rawValue;
    const json = JSON.parse(str);

    console.log(json);
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
            <QRCodeReader
              onSucess={onSucessScan}
              onError={onErrorScan}
            ></QRCodeReader>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-2 overflow-y-auto scrollbar-thin scrollbar-thumb-tertiary px-1">
        {badges.map((v) => (
          <BadgeCard badge={v}></BadgeCard>
        ))}
      </div>
    </div>
  );
}

export default BadgePanel;
