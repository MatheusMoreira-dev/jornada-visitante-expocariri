import BadgeIcon from "@/components/BadgeIcon";

import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";

import { FaLock } from "react-icons/fa6";

function BadgeCard({ badge }) {
  return (
    <div className="relative">
      <Item
        variant="outline"
        className="shadow-sm bg-surface border-dashed border-2"
      >
        <ItemMedia>
          <BadgeIcon badge={badge}></BadgeIcon>
        </ItemMedia>

        <ItemContent>
          <ItemTitle>{badge.name}</ItemTitle>
          <ItemDescription className="line-clamp-3">
            {badge.description}
          </ItemDescription>
        </ItemContent>
      </Item>

      {badge.blocked && (
        <div className="absolute inset-0 z-10 gap-2 rounded-xl bg-zinc-500/20 cursor-not-allowed">
          <FaLock className="size-4 text-quaternary/70 absolute top-3 right-3" />
        </div>
      )}
    </div>
  );
}

export default BadgeCard;
