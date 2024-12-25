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

const ColorGame: Game[] = [
  {
    id: 1,
    name: "Dashcolor switch",
    url: "dashcolorswitch/index.html",
    poster: "/dashcolorswitch/poster.png",
    description:
      "DashColor Switch is a fast-paced game where players match colors to navigate through obstacles.",
  },
  {
    id: 2,
    name: "Choose true colors",
    url: "choosetruecolors/index.html",
    poster: "/choosetruecolors/poster.png",
    description:
      "ChooseTrueColors is a puzzle game where players select the correct colors to solve challenges.",
  },
  {
    id: 3,
    name: "Color jump",
    url: "colorjumpgame/index.html",
    poster: "/colorjumpgame/poster.png",
    description:
      "Get ready for a colorful and exciting jump challenge that will have you jumping for joy. As you maneuver a dynamic ball through a sequence of platforms in the game Color Jump, your timing and reflexes will be put to the test.",
  },
  {
    id: 4,
    name: "Color match",
    url: "colormatch/index.html",
    poster: "/colormatch/poster.png",
    description:
      "Color Match is a fun and addictive mobile game that challenges players to match colors and shapes.",
  },
];

export default function ColorGames() {
  return (
    <div className={"flex flex-col w-full"}>
      {/* Color games */}
      <div className="flex flex-col w-full gap-7 p-3 lg:p-5">
        <h1 className="text-[24px] text-white sm:text-[28px] font-bold ">
          Color Games
        </h1>
        <div className="game-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-6">
          {ColorGame.map((game) => (
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
