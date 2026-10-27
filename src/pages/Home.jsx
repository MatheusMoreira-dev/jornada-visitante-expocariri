import BadgePanel from "@/components/BadgePanel";

const badges = [
  {
    icon: "./src/assets/sunflower.svg",
    name: "Campo de girassol",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
        assumenda repellendus fugiat dolore, eligendi perspiciatis placeat
        inventore asperiores aperiam, accusantium quibusdam quos beatae
        voluptatum omnis dolorem reprehenderit? Consequuntur, aliquid beatae!`,
  },
  {
    icon: "./src/assets/sunflower.svg",
    name: "Campo de girassol",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
        assumenda repellendus fugiat dolore, eligendi perspiciatis placeat
        inventore asperiores aperiam, accusantium quibusdam quos beatae
        voluptatum omnis dolorem reprehenderit? Consequuntur, aliquid beatae!`,
  },
  {
    icon: "./src/assets/sunflower.svg",
    name: "Campo de girassol",
    description: `Lorem ipsum dolor sit`,
    blocked: true,
  },
];

function Home() {
  return (
    <div className="max-w-5xl mx-auto flex max-h-full flex-col overflow-hidden">
      <BadgePanel badges={badges}></BadgePanel>
    </div>
  );
}

export default Home;
