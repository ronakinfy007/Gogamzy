"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Game {
  id: number;
  name: string;
  url: string;
  poster: string;
  description: string;
}

const RacingGame: Game[] = [
  {
    id: 1,
    name: "Road Race 2d",
    url: "roadrace2d/index.html",
    poster: "/roadrace2d/poster.png",
    description:
      "Road Race 2D online play on ZenGgames. craziest racing ever have you played now available to play online. just play and enjoy.",
  },
  {
    id: 2,
    name: "Nano Race Escape ",
    url: "nanoraceescape/index.html",
    poster: "/nanoraceescape/poster.png",
    description:
      "The ultimate nano racing game, will reduce you to a minuscule size so you can experience high-speed action like never before. Get ready for a microscopic racing adventure!",
  },
  {
    id: 3,
    name: " Romeo Swift Race",
    url: "romeoswiftracer/index.html",
    poster: "/romeoswiftracer/poster.png",
    description:
      "The ultimate racing game that will put your talents to the test on the virtual courses, get ready for high-speed excitement! You'll assume the role of Romeo Swift in this gripping challenge.",
  },
  {
    id: 4,
    name: "Drive Safe",
    url: "drivesafe/index.html",
    poster: "/drivesafe/poster.png",
    description:
      "Drive car and reach at destination with safe driving. Car need to reach at destination with safe car. Real driving experience with drive. Unblock drive game levels one by one.",
  },
  {
    id: 5,
    name: "highwayhero",
    url: "highwayhero/index.html",
    poster: "/highwayhero/poster.png",
    description:
      "Highway Hero game 3d online play on ZenGgames. craziest racing ever have you played now available to play online. just play and enjoy.",
  },
];

export default function RacingGames() {
  return (
    <div className={"flex flex-col w-full"}>
      {/* Racing games */}
      <div className="flex flex-col w-full gap-7 p-3 lg:p-5">
        <h1 className="text-[24px] sm:text-[28px]  font-bold text-white">
          Racing Games
        </h1>
        <div className="game-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-6">
          {RacingGame.map((game) => (
            <Link
              href={`/games/${encodeURIComponent(
                btoa(game.url.split("/")[0])
              )}`}
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
                {/* <p className="self-start text-white font-normal text-[14px]">
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
