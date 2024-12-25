"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link"

interface Game {
  id: number;
  name: string;
  url: string;
  poster: string;
  description: string;
}

const AdventureGame: Game[] = [
  {
    id: 1,
    name: "Christmas Santa Run ",
    url: "christmassantarun/index.html",
    poster: "/christmassantarun/poster.png",
    description:
      "In this captivating Christmas game, go out on an amazing holiday adventure. Join Santa Claus as he races over snowy vistas in his sleigh, gathering gifts and bringing cheer to all.",
  },
  {
    id: 2,
    name: "Zombie Attack ",
    url: "zombieattack/index.html",
    poster: "/zombieattack/poster.png",
    description:
      "Warrior Attack is an online game that is fun to play. Lets have a game and enjoy while defending warrior attack.",
  },
  {
    id: 3,
    name: "Alien on earth ",
    url: "alienonearth/index.html",
    poster: "/alienonearth/poster.png",
    description:
      "ZenGgames provides alien games free for games who is interested to interact with cartoon alien. Alien isolation is very simple and interactive. Find the alan game is very easy and addictive.",
  },
  {
    id: 4,
    name: "Crossy road",
    url: "crossyroad/index.html",
    poster: "/crossyroad/poster.png",
    description:
      "Crossy Road Racing is a fast-paced and addictive  that combines the classic gameplay of the hit game Crossy Road with the thrill of high-speed racing.",
  },
  {
    id: 5,
    name: "Diamond robber road",
    url: "diamondrobber/index.html",
    poster: "/diamondrobber/poster.png",
    description:
      "Diamond Robber games, dash online game, samurai dash game, dash games, evade game, switch dash, knight games online, go up dash.",
  },
  {
    id: 6,
    name: "Drag on Fish",
    url: "dragonfish/index.html",
    poster: "/dragonfish/poster.png",
    description:
      "Diamond Robber games, dash online game, samurai dash game, dash games, evade game, switch dash, knight games online, go up dash",
  },
  {
    id: 7,
    name: "Fish catcher",
    url: "fishcatcher/index.html",
    poster: "/fishcatcher/poster.png",
    description:
      "Do Fishing and Catch the fish like shark and all. Play Fishing game Free online on ZenGgames.",
  },
  {
    id: 8,
    name: "Joy toy Train",
    url: "joytoytrain/index.html",
    poster: "/joytoytrain/poster.png",
    description:
      "Fun-filled game simulating toy train adventures with exciting tracks! joy Toy Train game Free online on ZenGgames.",
  },
  {
    id: 9,
    name: " Pixel Ninza",
    url: "pixelninza/index.html",
    poster: "/pixelninza/poster.png",
    description:
      "With Pixel Ninza, the ultimate pixel ninja game that whisks you away to a world of stealth, action, and pixelated excitement",
  },
  {
    id: 10,
    name: "Running Ninja",
    url: "runningninja/index.html",
    poster: "/runningninja/poster.png",
    description:
      "Running Ninja is an exciting and fast-paced mobile game that puts players in control of a ninja, challenging them to run and jump through a variety of levels and obstacles.",
  },
];

export default function AdventureGames() {
  return (
    <div className={"flex flex-col w-full"}>
      {/* Adventure games */}
      <div className="flex flex-col w-full gap-7  p-3 lg:p-5">
        <h1 className="text-[24px] text-white sm:text-[28px] font-bold ">
          Adventure Games
        </h1>
        <div className="game-list grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-6">
          {AdventureGame.map((game) => (
            <Link
             href={`/games/${encodeURIComponent(btoa(game.url.split('/')[0]))}`}

              key={game.id}
              title="Play Game"
              className="flex flex-col gap-2 w-auto items-center rounded-md cursor-pointer text-center hover:scale-105 transform transition-all"
              style={{
                background:
                  "linear-gradient(105.87deg, rgba(255, 255, 255, 0.15) 3.04%, rgba(255, 255, 255, 0) 96.05%)",
                backdropFilter: "saturate(180%) blur(40px)",
                boxShadow:
                  "0px 18.26px 22.83px 0px #0000000D, -0.76px 0.76px 0.76px -1.52px #FFFFFF59 inset, 0px 0.76px 3.09px 0px #FFFFFF59 inset",
              }}
            >
              <Image
                src={game.poster}
                alt={game.name}
                width={1000}
                height={120}
                className="h-[120px] md:h-[160px] w-full rounded-t-md"
              />
              <div className="flex flex-col gap-2 p-3">
                <p className="font-medium text-white">{game.name}</p>
                {/* <p className="self-start font-normal text-[14px]">
                  {game.description}
                </p> */}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
