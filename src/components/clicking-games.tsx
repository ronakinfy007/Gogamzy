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

const Clicking: Game[] = [
  {
    id: 1,
    name: "Balloonpop",
    url: "balloonpop/index.html",
    poster: "/balloonpop/images/balloons-sheet0-d12db7d999191.png",
    description:
      "In this game, you have a limited number of moves to pop every balloon by creating a domino effect.",
  },

  {
    id: 2,
    name: "Arrow Patching",
    url: "arrowpatching/index.html",
    poster: "/arrowpatching/poster.png",
    description:
      "Arrow Patching is a puzzle game where players connect arrows to complete challenging patterns.",
  },
  {
    id: 3,
    name: "Herobox jumping",
    url: "heroboxjumping/index.html",
    poster: "/heroboxjumping/poster.png",
    description:
      "HeroBoxJumping is an exciting game where players control a hero jumping through challenging obstacles.",
  },
  {
    id: 4,
    name: "Bottle Jump",
    url: "bottlejump/index.html",
    poster: "/bottlejump/poster.png",
    description:
      "Bottle Jump is a thrilling game where players bounce a bottle past obstacles to score points.",
  },
  {
    id: 5,
    name: "Mann equinhead jump",
    url: "mannequinheadjump/index.html",
    poster: "/mannequinheadjump/poster.png",
    description:
      "Bottle Jump is a thrilling game where players bounce a bottle past obstacles to score points.",
  },
  {
    id: 6,
    name: "Perfect Rotare",
    url: "perfectrotare/index.html",
    poster: "/perfectrotare/poster.png",
    description:
      "With Perfect Rotare, the ultimate game of accuracy and talent that will put your ability to rotate items flawlessly to the test, get ready for a captivating challenge!",
  },
  {
    id: 7,
    name: "Pocket jump arcade",
    url: "pocketjumparcade/index.html",
    poster: "/pocketjumparcade/poster.png",
    description:
      "The best pocket arArcade game that will keep you entertained and involved everywhere you go, you can plunge into a world of never-ending leaping pleasure! ",
  },
  {
    id: 8,
    name: "Pongs Dot",
    url: "pongsdot/index.html",
    poster: "/pongsdot/poster.png",
    description:
      "The ultimate dot challenge that blends accuracy, timing, and strategy to create a fun and addictive gaming experience. You must guide dots through a succession of sophisticated and difficult obstacles in this unusual game.",
  },

  {
    id: 10,
    name: "rocketpilot",
    url: "rocketpilot/index.html",
    poster: "/rocketpilot/poster.png",
    description:
      "Prepare to rule the universe in this exhilarating pilot game where you control a potent rocket.",
  },
  {
    id: 11,
    name: "Saws Escape",
    url: "sawsescapes/index.html",
    poster: "/sawsescapes/poster.png",
    description:
      "Prepare for a heart-pounding escape game that will put your brains and reflexes to the test.You find yourself in the dangerous realm of Saws Escape, entangled in a maze of lethal saws.",
  },
  {
    id: 12,
    name: "Shoot Zombie",
    url: "shootzombie/index.html",
    poster: "/shootzombie/poster.png",
    description:
      "Discover the adrenaline-pumping action of Shoot Zombie, the ultimate shooting game that will put your bravery and accuracy to the test.",
  },
  {
    id: 13,
    name: "Speed Square Runner",
    url: "speedsquarerunner/index.html",
    poster: "/speedsquarerunner/poster.png",
    description:
      "Prepare yourself for an exhilarating experience with Speed Square Runner.",
  },
  {
    id: 13,
    name: "Save Your Puppies",
    url: "saveyourpuppies/index.html",
    poster: "/saveyourpuppies/poster.png",
    description:
      "Put on your heart-shaped goggles for a mission called Save the Puppies.The central objective of this beautiful story is saving cute little puppies that are hidden in various levels.",
  },
  {
    id: 14,
    name: "Tap Counter Challenge",
    url: "tapcounterchallenge/index.html",
    poster: "/tapcounterchallenge/poster.png",
    description:
      "Engage yourself in the most thrilling environment of ultimate tap challenge that you will not consider quitting.",
  },
  {
    id: 15,
    name: "Egg Bucket Master ",
    url: "eggbucketmaster/index.html",
    poster: "/eggbucketmaster/poster.png",
    description:
      " the egg-citing game of 2023 that will put your skill and precision to the test, enter the realm of delectable challenges. To demonstrate your proficiency of handling fragile cargo, you must catch falling eggs in a bucket in this engaging bucket game.",
  },
];

export default function ClickingGames() {
  return (
    <div className={"flex flex-col w-full"}>
      {/* clicking games */}
      <div className="flex flex-col w-full gap-7 p-3 lg:p-5">
        <h1 className="text-[24px] text-white sm:text-[28px]  font-bold ">
          Clicking Games
        </h1>
        <div className="game-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-6">
          {Clicking.map((game) => (
             <Link
             href={`/games/${encodeURIComponent(btoa(game.url.split('/')[0]))}`}
             key={game.id}
             title="Play Game"
             className="flex flex-col gap-2 w-full items-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-md cursor-pointer text-center hover:scale-105 transform transition-all"
           >
              <Image
                src={game.poster}
                alt={game.name}
                width={1000}
                height={120}
                unoptimized
                className="h-[120px] md:h-[160px] w-full rounded-md"
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
