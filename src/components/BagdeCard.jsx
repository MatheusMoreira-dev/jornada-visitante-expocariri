import BadgeIcon from "@/components/BadgeIcon";

function BadgeCard({ badge }) {
  return (
    <div className="flex items-center gap-2 bg-secondary/50 rounded-xl ring ring-secondary/50 shadow-md p-4">
      <BadgeIcon badge={badge}></BadgeIcon>
      <h1 className="text-center text-xs font-bold">{badge.name}</h1>
    </div>
  );
}

export default BadgeCard;
