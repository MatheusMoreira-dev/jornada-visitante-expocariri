import BadgeIcon from "@/components/BadgeIcon";

import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";

import { LockKeyhole } from "lucide-react";

function BadgeCard({ badge }) {
  return (
    <div className="relative">
      <Item variant="outline" className="border-secondary shadow-sm bg-surface">
        <ItemMedia>
          <BadgeIcon badge={badge}></BadgeIcon>
        </ItemMedia>

        <ItemContent>
          <ItemTitle>{badge.name}</ItemTitle>
          <ItemDescription>{badge.description}</ItemDescription>
        </ItemContent>
      </Item>

      {badge.blocked && (
        <div className="absolute inset-0 z-10 gap-2 rounded-xl bg-zinc-500/20 cursor-not-allowed">
          <LockKeyhole className="size-5 text-red-500 absolute top-3 right-3" />
        </div>
      )}
    </div>
  );
}

export default BadgeCard;
