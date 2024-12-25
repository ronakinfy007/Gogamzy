"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Game {
  id: number | string;
  name: string;
  url: string;
  poster: string;
  description: string;
}
const AllGame: Game[] = [
  {
    id: 1,
    name: "2048-Master",
    url: "2048-master/index.html",
    poster: "/2048-master/meta/apple-touch2.JPEG",
    description: "Join the numbers and get to the 2048 tile!",
  },
  {
    id: 2,
    name: "Adventurous Boy Run",
    url: "Adventurous-Boy-Run/index.html",
    poster: "/Adventurous-Boy-Run/images/cowyruun.webp",
    description:
      "An action-packed endless runner game where players take on the role of a daring young adventurer exploring.",
  },
  {
    id: 3,
    name: "Bottle Climbing",
    url: "bottleclimbing/index.html",
    poster: "/bottleclimbing/bottle-climbing.webp",
    description:
      "Bottle Climbing is an exciting vertical adventure game where players navigate a bottle up challenging obstacles. Bottle Garbage is an engaging, eco-conscious game designed to teach players about proper waste disposal and recycling. In the game, players encounter different types of waste, including bottles, paper, plastic, and organic trash. The objective is to sort these items into the correct bins before time runs out.",
  },
  {
    id: 4,
    name: "Bottle Garbage",
    url: "bottlegarbage/index.html",
    poster: "/bottlegarbage/bottel-garbage.webp",
    description:
      "Bottle Garbage is a fun, eco-themed game where players sort and dispose of waste into correct bins.",
  },
  {
    id: 5,
    name: "Car Breaker",
    url: "carbreaker/index.html",
    poster: "/carbreaker/car-breaker.webp",
    description:
      "Car Breaker is an action-packed game where players destroy cars to earn points and upgrades.",
  },
  {
    id: 6,
    name: "Fill the dot",
    url: "fillthedot/index.html",
    poster: "/fillthedot/fill-dot.webp",
    description:
      "Play Fill the Dot, a compelling dot challenge game, to exercise your brain and reflexes while putting your timing to test",
  },
  {
    id: 7,
    name: "Happy Mood",
    url: "happymood/index.html",
    poster: "/happymood/happy-mood.webp",
    description:
      "With this captivating smiley game, immerse yourself in a world of happiness and positivity. Your key to creating the ideal mood-making experience is Happy Mood.",
  },
  {
    id: 8,
    name: "Flying Triangle",
    url: "flyingtriangle/index.html",
    poster: "/flyingtriangle/flying-triangle.webp",
    description:
      "FlyingTriangle is a fast-paced game where players navigate a triangle through challenging obstacles.",
  },
  {
    id: 9,
    name: "Ice Match",
    url: "icymatch/index.html",
    poster: "/icymatch/ice-match.webp",
    description:
      "Slide and match ice gems in a fun puzzle game with frosty twists!",
  },
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
    name: "Running Ninja",
    url: "runningninja/index.html",
    poster: "/runningninja/running-ninja.webp",
    description:
      "Running Ninja is an exciting and fast-paced mobile game that puts players in control of a ninja, challenging them to run and jump through a variety of levels and obstacles.",
  },
  {
    id: 16,
    name: "Square Escape",
    url: "squareescape/index.html",
    poster: "/squareescape/squareescape.webp",
    description:
      "The ultimate escape challenge game that will capture your attention and put your problem-solving abilities to the test, set out on a fascinating adventure!",
  },
  {
    id: 17,
    name: "star Falles Escape",
    url: "starfallescape/index.html",
    poster: "/starfallescape/starfallescape.webp",
    description:
      "The top website for star-falling games, invites you to set out on a cosmic voyage. Get lost in a fascinating realm where stars fall in a breathtaking show.",
  },
  {
    id: 18,
    name: "Balloonpop",
    url: "balloonpop/index.html",
    poster: "/balloonpop/images/balloonpop.webp",
    description:
      "In this game, you have a limited number of moves to pop every balloon by creating a domino effect.",
  },

  {
    id: 19,
    name: "Arrow Patching",
    url: "arrowpatching/index.html",
    poster: "/arrowpatching/arrowpatching.webp",
    description:
      "Arrow Patching is a puzzle game where players connect arrows to complete challenging patterns.",
  },
  {
    id: 20,
    name: "Herobox jumping",
    url: "heroboxjumping/index.html",
    poster: "/heroboxjumping/heroboxjumping.webp",
    description:
      "HeroBoxJumping is an exciting game where players control a hero jumping through challenging obstacles.",
  },
  {
    id: 21,
    name: "Bottle Jump",
    url: "bottlejump/index.html",
    poster: "/bottlejump/bottlejump.webp",
    description:
      "Bottle Jump is a thrilling game where players bounce a bottle past obstacles to score points.",
  },
  {
    id: 22,
    name: "Mann equinhead jump",
    url: "mannequinheadjump/index.html",
    poster: "/mannequinheadjump/mannequinheadjump.webp",
    description:
      "Bottle Jump is a thrilling game where players bounce a bottle past obstacles to score points.",
  },
  {
    id: 23,
    name: "Perfect Rotare",
    url: "perfectrotare/index.html",
    poster: "/perfectrotare/perfectrotare.webp",
    description:
      "With Perfect Rotare, the ultimate game of accuracy and talent that will put your ability to rotate items flawlessly to the test, get ready for a captivating challenge!",
  },
  {
    id: 24,
    name: "Pocket jump arcade",
    url: "pocketjumparcade/index.html",
    poster: "/pocketjumparcade/pocketjumparcade.webp",
    description:
      "The best pocket arArcade game that will keep you entertained and involved everywhere you go, you can plunge into a world of never-ending leaping pleasure! ",
  },
  {
    id: 25,
    name: "Pongs Dot",
    url: "pongsdot/index.html",
    poster: "/pongsdot/pongsdot.webp",
    description:
      "The ultimate dot challenge that blends accuracy, timing, and strategy to create a fun and addictive gaming experience. You must guide dots through a succession of sophisticated and difficult obstacles in this unusual game.",
  },

  {
    id: 26,
    name: "rocketpilot",
    url: "rocketpilot/index.html",
    poster: "/rocketpilot/poster.png",
    description:
      "Prepare to rule the universe in this exhilarating pilot game where you control a potent rocket.",
  },
  {
    id: 27,
    name: "Saws Escape",
    url: "sawsescapes/index.html",
    poster: "/sawsescapes/sawsescapes.webp",
    description:
      "Prepare for a heart-pounding escape game that will put your brains and reflexes to the test.You find yourself in the dangerous realm of Saws Escape, entangled in a maze of lethal saws.",
  },
  {
    id: 28,
    name: "Shoot Zombie",
    url: "shootzombie/index.html",
    poster: "/shootzombie/shootzombie.webp",
    description:
      "Discover the adrenaline-pumping action of Shoot Zombie, the ultimate shooting game that will put your bravery and accuracy to the test.",
  },
  {
    id: 29,
    name: "Speed Square Runner",
    url: "speedsquarerunner/index.html",
    poster: "/speedsquarerunner/speedsquarerunner.webp",
    description:
      "Prepare yourself for an exhilarating experience with Speed Square Runner.",
  },
];

export default function AllGames() {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col w-full gap-7">
        <h1 className="text-[24px] sm:text-[28px] font-bold text-white">
          Games
        </h1>
        <div className="game-list grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-6">
          {AllGame.map((game) => (
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
                unoptimized
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
