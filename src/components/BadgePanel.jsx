import BadgeCard from "@/components/BagdeCard";

import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/components/ui/progress";

import { QrCodeIcon, Trophy } from "lucide-react";

import { Button } from "./ui/button";

function BadgePanel({ badges = [] }) {
  let [atual, total] = [3, 5];

  return (
    <div className="grid flex-1 min-h-0 gap-3 max-w-sm mx-auto px-2 mb-5">
      <div className="flex gap-2">
        <Trophy className="text-yellow-400"></Trophy>
        <h1 className="text-xl text-primary-text font-bold"> Missões</h1>
      </div>

      <Progress value={(atual / total) * 100} className="w-full max-w-sm">
        <ProgressLabel>{`${atual}/${total}`}</ProgressLabel>
        <ProgressValue></ProgressValue>
      </Progress>

      <div className="flex justify-end">
        <Button
          variant="outline"
          className="ring shadow-md w-full h-16 max-w-sm text-sm font-bold text-primary"
        >
          <QrCodeIcon></QrCodeIcon>
          Escanear
        </Button>
      </div>

      <div className="grid gap-2 overflow-y-auto scrollbar-thin scrollbar-thumb-tertiary">
        {badges.map((v) => (
          <BadgeCard badge={v}></BadgeCard>
        ))}
      </div>
    </div>
  );
}

export default BadgePanel;
