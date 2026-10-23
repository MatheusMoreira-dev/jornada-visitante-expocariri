import BadgePanel from "@/components/BadgePanel";

const badges = [
  { icon: "./src/assets/sunflower.svg", name: "Campo de girassol" },
  { icon: "./src/assets/sunflower.svg", name: "Campo de girassol" },
  { icon: "./src/assets/sunflower.svg", name: "Campo de girassol" },
  { icon: "./src/assets/sunflower.svg", name: "Campo de girassol" },
];

function Home() {
  return (
    <div className="max-w-5xl">
      <BadgePanel badges={badges}></BadgePanel>
    </div>
  );
}

export default Home;
