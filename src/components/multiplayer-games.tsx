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

const MultiplayerGame: Game[] = [
  {
    id: 1,
    name: "ludo multi player",
    url: "ludomultiplayer/index.html",
    poster: "/ludomultiplayer/icon-256.png",
    description:
      "Classic board game where you compete with friends in exciting online matches!",
  },
  {
    id: 2,
    name: "Moto racer",
    url: "motoracer/index.html",
    poster: "/motoracer/poster.png",
    description:
      "Moto Racer is an exciting racing game that puts players in control of a powerful motorbike as they race through various tracks and terrains.",
  },
  {
    id: 3,
    name: "Cricket World cup",
    url: "cricketbatter/index.html",
    poster: "/cricketbatter/poster.png",
    description:
      " Matches between all countries on Cricket game named as Batter. All major tournaments like IPL, PCL, BBL and cricket world cup can be played on online cricket game.",
  },
];

export default function MultiplayerGames() {
  return (
    <div className={"flex flex-col w-full"}>
      {/* Multiplayer games */}
      <div className="flex flex-col w-full gap-7  p-3 lg:p-5">
        <h1 className="text-[24px] text-white sm:text-[28px] font-bold ">
          Multiplayer Games
        </h1>
        <div className="game-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-6">
          {MultiplayerGame.map((game) => (
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
