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

const FeaturedGames: Game[] = [
  {
    id: 10,
    name: "lemon juicer",
    url: "lemonjuicer/index.html",
    poster: "/lemonjuicer/lemonjuicer.webp",
    description:
      "it's greatest juice game that will quench your desire for challenge, go on a cool trip! You assume the role of a competent lemon juicer in this intriguing game.",
  },
  {
    id: 11,
    name: "Stress Releasing Dots",
    url: "stressreleasingdots/index.html",
    poster: "/stressreleasingdots/stressreleasingdots.png",
    description:
      "Play the ultimate 2023 dot game tension Releasing Dots to relax and unwind while melting away your tension. Enter the realm of dots gaming, where calm meets simplicity. ",
  },
  {
    id: 12,
    name: "Mr Ping Jumping joy",
    url: "mrpingjumpingjoy/index.html",
    poster: "/mrpingjumpingjoy/ping-jumping.webp",
    description:
      "With Mr. Ping Jumping Joy, the ultimate jump game that will make your gaming experience full of enjoyment and excitement",
  },

  {
    id: 13,
    name: "Noob vs Pro",
    url: "noobvspro/index.html",
    poster: "/noobvspro/noob-pro.webp",
    description:
      "Play our Noob vs. Pro battle to take on the ultimate gaming challenge!",
  },
  {
    id: 14,
    name: "Rolling Cube Adventures",
    url: "rollingcubeadvantures/index.html",
    poster: "/rollingcubeadvantures/rolling-cube-adventures.webp",
    description:
      "Embark on an exhilarating journey with the Rolling Cube Adventure game!",
  }, 
  {
    id: 15,
    name: "Square Escape",
    url: "squareescape/index.html",
    poster: "/squareescape/poster.png",
    description:
      "The ultimate escape challenge game that will capture your attention and put your problem-solving abilities to the test, set out on a fascinating adventure!",
  },
  {
    id: 16,
    name: "star Falles Escape",
    url: "starfallescape/index.html",
    poster: "/starfallescape/starfallescape.webp",
    description:
      "The top website for star-falling games, invites you to set out on a cosmic voyage. Get lost in a fascinating realm where stars fall in a breathtaking show.",
  },
  {
    id: 17,
    name: "Tennis Ball Arcade",
    url: "tennisballarcade/index.html",
    poster: "/tennisballarcade/poster.png",
    description:
      "The ultimate tennis arcade game that promises tons of action game play hours, is sure to bring you the fast-paced world of excitement. ",
  },
  {
    id: 18,
    name: "Tower Balancer",
    url: "towerbalancer/index.html",
    poster: "/towerbalancer/poster.png",
    description:
      "Brace yourself for the most anticipated tower-building game of the year, Tower Balancer, and go on an amazing quest filled with fun and suspense of shooting and constructing.",
  },
  {
    id: 19,
    name: "Coin snake",
    url: "coinsnake/index.html",
    poster: "/coinsnake/poster.png",
    description:
      " Snake collects coin from place and get lengthy. It is quite different than google snake game. It is similar to Nokia snake game. but difference is that here is only colored snake game. ",
  },
  {
    id: 20,
    name: "Angry Bubble",
    url: "angrybubble/index.html",
    poster: "/angrybubble/poster.png",
    description:
      "Angry Bubble game on ZenGgames is very popular and trending game of the year. play balloon shoot game online and get leader place in leader board ON balloon shoot game.",
  },
  {
    id: 21,
    name: "Animal and Star",
    url: "animalandstar/index.html",
    poster: "/animalandstar/poster.png",
    description:
      "Animal and star kid's game. play online game on ZenGgames free.",
  },

  {
    id: 22,
    name: "Collect the same Balls",
    url: "collectthesameballs/index.html",
    poster: "/collectthesameballs/poster.png",
    description:
      " Free ball game to play on online platform is very exciting to gain joy. It is ranked game in popularity.  This game has no download option. ",
  },
  {
    id: 23,
    name: "Golf Post",
    url: "golfpost/index.html",
    poster: "/golfpost/poster.png",
    description:
      "Play Golf Strokes game on ZenGgames and Just set ball on right direction to send it in golf post. Play Golf on ZenGgames online.",
  },
  {
    id: 24,
    name: "Perfect pool shot",
    url: "perfectpoolshot/index.html",
    poster: "/perfectpoolshot/poster.png",
    description:
      "Perfect Pool Shot is entertaining game for all user who gets bored. Spend your leisure time in play rolling ball game on ZenGgames online. ",
  },
  {
    id: 25,
    name: "Pot filler",
    url: "potfiller/index.html",
    poster: "/potfiller/poster.png",
    description:
      "Introducing the ultimate convenience in culinary innovation - the Pot Filler. Elevate your cooking experience with this elegant and practical addition to your kitchen.",
  },
];

export default function FeatureGame() {
  return (
    <div className={"flex flex-col w-full"}>
      {/* featured game */}
      <div className="flex flex-col w-full gap-7 p-3 lg:p-5">
        <h1 className="text-[24px] text-white sm:text-[28px]  font-bold ">
          Featured Games
        </h1>
        <div className="game-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-6">
          {FeaturedGames.map((game) => (
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
