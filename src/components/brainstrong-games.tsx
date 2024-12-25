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

const BrainStrong: Game[] = [
  {
    id: 1,
    name: "BeMillionaire",
    url: "bemillionaire/index.html",
    poster: "/bemillionaire/poster.png",
    description:
      "BeMillionaire is a trivia game where players answer questions to win virtual millions.",
  },
  {
    id: 2,
    name: "Brain Exercise game",
    url: "brainexcercisegame/index.html",
    poster: "/brainexcercisegame/poster.png",
    description:
      "BrainExerciseGame is a fun and challenging game designed to improve memory and cognitive skills.",
  },
  {
    id: 3,
    name: "Goal post challenge",
    url: "goalpostchallenge/index.html",
    poster: "/goalpostchallenge/poster.png",
    description:
      "GoalPostChallenge is a sports game where players aim to score by hitting the goalposts accurately.",
  },
  {
    id: 4,
    name: "Icecandy",
    url: "icecandy/index.html",
    poster: "/icecandy/poster.png",
    description:
      "IceCandy is a fun match-3 game where players swap ice candies to create combos and score.",
  },
  {
    id: 5,
    name: "Christmas Gift",
    url: "christmasgift/index.html",
    poster: "/christmasgift/poster.png",
    description:
      "Christmas Gift is a festive game where players collect gift matched.",
  },
  {
    id: 6,
    name: "Dark Forest",
    url: "darkforest/index.html",
    poster: "/darkforest/poster.png",
    description:
      "Dark Forest is an adventure game where players collect fruits, birds and flower matched.",
  },
  {
    id: 7,
    name: "Learn Alphabet ",
    url: "touchthealphabetintheorder/index.html",
    poster: "/touchthealphabetintheorder/poster.png",
    description:
      "Dark Forest is an adventure game where players collect fruits, birds and flower matched.",
  },
  {
    id: 8,
    name: "Universal Adventure",
    url: "universaladvanture/index.html",
    poster: "/universaladvanture/poster.png",
    description:
      "Titan space adventure is online game to play with with Joy . where players collect Diamond , stone matched.",
  },
  {
    id: 9,
    name: "Yummy Candies",
    url: "yummycandies/index.html",
    poster: "/yummycandies/poster.png",
    description:
      "Yummy Candies is players progress through the levels by match colored candies and get high scores. its good and colorful graphics and simple to understand.",
  },
  {
    id: 10,
    name: "Christmas Holiday",
    url: "christmasholiday/index.html",
    poster: "/christmasholiday/poster.png",
    description:
      "Christmas Holiday is a festive mobile game that captures the spirit of the holiday season with its cheerful graphics, joyful music, and fun gameplay.",
  },
  {
    id: 11,
    name: "Cookies Bookies",
    url: "coockiesboockies/index.html",
    poster: "/coockiesboockies/poster.png",
    description:
      "Yummi Cookies is match 3 cookie game to play online. Play on ZenGgames.",
  },
  {
    id: 12,
    name: "Harvest Veggie",
    url: "harvestveggie/index.html",
    poster: "/harvestveggie/poster.png",
    description: "Play farm game with unlimited fun. Let's do farming.",
  },
  {
    id: 13,
    name: "Jelly Belly Jam",
    url: "jellybellyjam/index.html",
    poster: "/jellybellyjam/poster.png",
    description:
      "jelly Belly Jam game is same as candy crush match 3 games. Unblock levels and try to clear all levels in Sweet Mania.",
  },
  {
    id: 14,
    name: "Jelly World",
    url: "jellyworld/index.html",
    poster: "/jellyworld/poster.png",
    description:
      "Jelly World is a players navigate through a world made entirely out of colorful and wobbly jelly. With its bright and colorful graphics, fun characters.",
  },
];

export default function BrainStrongGames() {
  return (
    <div className={"flex flex-col w-full"}>
      {/* BrainStrong games */}
      <div className="flex flex-col w-full gap-7  p-3 lg:p-5">
        <h1 className="text-[24px] text-white sm:text-[28px]  font-bold ">
          BrainStrong Games
        </h1>
        <div className="game-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-6">
          {BrainStrong.map((game) => (
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
