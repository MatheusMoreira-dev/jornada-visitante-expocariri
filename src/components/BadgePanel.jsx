import BadgeCard from "@/components/BagdeCard";

import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/components/ui/progress";

import { QrCodeIcon, Trophy } from "lucide-react";

import { Button } from "./ui/button";
import { useState } from "react";

function BadgePanel({ badges = [] }) {
  let [atual, total] = [3, 5];

  return (
    <div className="grid flex-1 min-h-0 gap-3 max-w-sm mx-auto p-2 my-5">
      <Progress value={(atual / total) * 100} className="w-full max-w-sm">
        <ProgressLabel>{`${atual}/${total}`}</ProgressLabel>
        <ProgressValue></ProgressValue>
      </Progress>

      <div className="flex justify-end">
        <Button
          variant="outline"
          className="ring shadow-sm rounded-sm w-full py-5 max-w-sm text-sm font-bold text-primary"
        >
          <QrCodeIcon></QrCodeIcon>
          Escanear
        </Button>
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
