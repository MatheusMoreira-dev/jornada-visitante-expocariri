import BadgeCard from "@/components/BagdeCard";

import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/components/ui/progress";

function BadgePanel({ badges = [] }) {
  let [atual, total] = [3, 5];

  return (
    <div className="grid gap-5 px-6 max-w-md mx-auto">
      <Progress value={(atual / total) * 100} className="w-full max-w-sm">
        <ProgressLabel></ProgressLabel>
        <ProgressValue>{() => `${atual}/${total}`}</ProgressValue>
      </Progress>

      <div className=" grid grid-cols-2 gap-2">
        {badges.map((v) => (
          <BadgeCard badge={v}></BadgeCard>
        ))}
      </div>
    </div>
  );
}

export default BadgePanel;
