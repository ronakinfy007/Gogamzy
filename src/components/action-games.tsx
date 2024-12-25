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

const ActionGame: Game[] = [
  {
    id: 1,
    name: "endlessninjarun",
    url: "endlessninjarun/index.html",
    poster: "/endlessninjarun/poster.png",
    description: "Defend Earth from alien invasions in this exciting game.",
  },
  {
    id: 2,
    name: "Protect Indian Man ",
    url: "protectredindianman/index.html",
    poster: "/protectredindianman/poster.png",
    description: "Protect indian man from that fire works. ",
  },
  {
    id: 3,
    name: "chickenshooter",
    url: "chickenshooter/index.html",
    poster: "/chickenshooter/poster.png",
    description: "Defend Earth from alien invasions in this exciting game.",
  },
  {
    id: 4,
    name: "firealarmrequers",
    url: "firealarmrequers/index.html",
    poster: "/firealarmrequers/poster.png",
    description: "Defend Earth from alien invasions in this exciting game.",
  },

  {
    id: 5,
    name: "gopanda",
    url: "gopanda/index.html",
    poster: "/gopanda/poster.png",
    description: "Defend Earth from alien invasions in this exciting game.",
  },
  {
    id: 6,
    name: "Air Battle Mission",
    url: "Air-Battle-Mission/index.html",
    poster: "/Air-Battle-Mission/icon-256.png",
    description:
      "Air Battle Mission is an action-packed game where players engage in thrilling aerial combat missions.",
  },

  {
    id: 7,
    name: "Jewelinthrow challenge",
    url: "jewelinthrowchallenge/index.html",
    poster: "/jewelinthrowchallenge/poster.png",
    description:
      "Jewelinthrow Challenge: Aim Get lost in the exciting and brilliant world of diamonds.",
  },
  {
    id: 8,
    name: "Space Battle ",
    url: "spacebattle/index.html",
    poster: "/spacebattle/poster.png",
    description:
      "Space Battle is an epic game of intergalactic warfare where players command their own starships and battle for control of the galaxy. ",
  },
  {
    id: 9,
    name: "Stick Man ",
    url: "stickman/index.html",
    poster: "/stickman/poster.png",
    description:
      "Stick Man is a fun and addictive mobile game that puts players in control of a stick figure character, challenging them to navigate through a variety of levels and obstacles",
  },
  {
    id: 10,
    name: "Shoot Giant Bats",
    url: "shoottogiantbats/index.html",
    poster: "/shoottogiantbats/poster.png",
    description:
      "A thrilling game of Shooting Flyting Giant Bats. It is a shooting skill game. Enjoy free and online games on ZenGgames.",
  },
  {
    id: 11,
    name: "Fighter Jet",
    url: "fighterjet/index.html",
    poster: "/fighterjet/poster.png",
    description:
      "Play and Save your Fighter Jet. Fighter Jet game play Online. Free games only on ZenGgames.",
  },
  {
    id: 12,
    name: "flowershooter",
    url: "flowershooter/index.html",
    poster: "/flowershooter/poster.png",
    description: "Defend Earth from alien invasions in this exciting game.",
  },
];


export default function ActionGames() {
  return (
    <div className={"flex flex-col w-full"}>
      {/* Action games */}
      <div className="flex flex-col w-full gap-7  p-3 lg:p-5">
        <h1 className="text-[24px] text-white sm:text-[28px]  font-bold ">
          Action Games
        </h1>
        <div className="game-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-6">
          {ActionGame.map((game) => (
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
