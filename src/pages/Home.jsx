import BadgePanel from "@/components/BadgePanel";
import Header from "@/components/Header";

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
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
        assumenda repellendus fugiat dolore, eligendi perspiciatis placeat
        inventore asperiores aperiam, accusantium quibusdam quos beatae
        voluptatum omnis dolorem reprehenderit? Consequuntur, aliquid beatae!`,
    blocked: true,
  },
  {
    icon: "./src/assets/sunflower.svg",
    name: "Campo de girassol",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
        assumenda repellendus fugiat dolore, eligendi perspiciatis placeat
        inventore asperiores aperiam, accusantium quibusdam quos beatae
        voluptatum omnis dolorem reprehenderit? Consequuntur, aliquid beatae!`,
    blocked: true,
  },
];

function Home() {
  return (
    <div className="max-w-5xl flex h-full flex-col overflow-hidden">
      <Header></Header>
      <BadgePanel badges={badges}></BadgePanel>
      <footer className="h-8 bg-primary"></footer>
    </div>
  );
}

export default Home;
