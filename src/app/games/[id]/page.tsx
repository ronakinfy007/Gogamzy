"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { Key, useEffect, useState } from "react";
import { games } from "./gameData";

export default function GamePage() {
  const { id } = useParams();
  const [selectedGame, setSelectedGame] = useState<any | null>(null);
  const [isGameLoaded, setIsGameLoaded] = useState(false);

  // Function to handle game selection
  const handleGameSelection = (game: any) => {
    setSelectedGame(game); // Set the new selected game
    setIsGameLoaded(false); // Reset to show the Play Game button
  };

  // Function to enable fullscreen for the iframe
  const handleFullscreen = () => {
    const iframe = document.getElementById("game-iframe");
    if (iframe?.requestFullscreen) {
      iframe.requestFullscreen();
    }
  };

  useEffect(() => {
    const decodedFolder = atob(decodeURIComponent(id as string));
    const game = games.find((game) => game.url.split("/")[1] === decodedFolder);
    setSelectedGame(game || null);
  }, [id]);

  if (!selectedGame) {
    return <p>Game not found</p>;
  }

  const leftGames = games.slice(0, 4);
  const rightGames = games.slice(6, 10);

  const leftMultiGames = games.slice(0, 12);
  const rightMultiGames = games.slice(13, 25);

  return (
    <div className="flex flex-col items-center p-5 mt-20">
      <div className="flex flex-col lg:flex-row justify-center items-center w-full">
        {/* Left Games - Hidden on small screens */}
        <div className="hidden lg:flex flex-col gap-4 items-center">
          {leftGames.map((game) => (
            <div
              key={game.id}
              className="flex flex-col w-56 items-center shadow-md rounded-md cursor-pointer text-center hover:scale-105 transition-all"
              onClick={() => handleGameSelection(game)}
            >
              <Image
                src={game.poster}
                alt={game.name}
                width={50}
                height={50}
                unoptimized
                className="h-[120px] md:h-[160px] w-56 rounded-md cursor-pointer"
              />
            </div>
          ))}
        </div>

        {/* Main Game Section */}
        <div className="flex flex-col w-full">
          <div className="iframe-container w-full lg:w-[96%] h-[688px] mx-5 relative">
            {!isGameLoaded ? (
              <div className="relative w-full h-full bg-black flex items-center justify-center rounded-md">
                {/* Poster Image */}
                <img
                  src={selectedGame.poster}
                  alt="Game Poster"
                  className="w-full h-full object-cover rounded-md"
                />

                {/* Play Button */}
                <button
                  onClick={() => setIsGameLoaded(true)}
                  className="absolute bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  style={{ zIndex: 10 }}
                >
                  Play Game
                </button>
              </div>
            ) : (
              <iframe
                id="game-iframe"
                src={selectedGame.url}
                width="100%"
                height="100%"
                title="Game Frame"
                className="border-none rounded-md"
              />
            )}
          </div>

          {/* Fullscreen Button */}
          <div className="flex justify-center">
            {isGameLoaded && (
              <button
                onClick={handleFullscreen}
                className="mt-4 bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded"
              >
                Play in Fullscreen
              </button>
            )}
          </div>
        </div>

        {/* Right Games - Hidden on small screens */}
        <div className="hidden lg:flex flex-col gap-4 items-center">
          {rightGames.map((game) => (
            <div
              key={game.id}
              className="flex flex-col w-56 items-center shadow-md rounded-md cursor-pointer text-center hover:scale-105 transition-all"
              onClick={() => handleGameSelection(game)}
            >
              <Image
                src={game.poster}
                alt={game.name}
                width={50}
                height={50}
                unoptimized
                className="h-[120px] md:h-[160px] w-56 rounded-md cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section for Tablet/Mobile */}
      <div className="flex flex-col lg:flex-row w-full gap-6 mt-5">
        {/* Left Multi Games */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-1 xl:grid-cols-2 gap-6">
          {leftMultiGames.map((game) => (
            <div
              key={game.id}
              className="flex flex-col w-32 items-center shadow-md rounded-md cursor-pointer text-center hover:scale-105 transition-all"
              onClick={() => handleGameSelection(game)}
            >
              <Image
                src={game.poster}
                alt={game.name}
                width={50}
                height={50}
                unoptimized
                className="h-[120px] md:h-[160px] w-32 rounded-md cursor-pointer"
              />
            </div>
          ))}
        </div>

        {/* Description Section */}
        <div className="w-full lg:w-[46rem] xl:w-[54rem] gap-6">
          <h1 className="font-medium text-xl text-white">
            {selectedGame.name}
          </h1>
          <div className="flex flex-col gap-2 mt-4">
            <h1 className="text-[#767A8E] text-xl font-semibold">
              Description
            </h1>

            {selectedGame.description
              .split("\n")
              .filter((line: string) => line.trim() !== "")
              .map((paragraph: string, index: Key | null | undefined) => (
                <p key={index} className="text-white leading-6">
                  {paragraph.trim()}
                </p>
              ))}
          </div>
        </div>

        {/* Right Multi Games */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-1 xl:grid-cols-2 gap-6">
          {rightMultiGames.map((game) => (
            <div
              key={game.id}
              className="flex flex-col w-32 items-center shadow-md rounded-md cursor-pointer text-center hover:scale-105 transition-all"
              onClick={() => handleGameSelection(game)}
            >
              <Image
                src={game.poster}
                alt={game.name}
                width={50}
                height={50}
                unoptimized
                className="h-[120px] md:h-[160px] w-32 rounded-md cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>

      {/* All Games Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-10 gap-6 mt-5">
        {games
          .filter((game) => game.id !== selectedGame.id)
          .map((game) => (
            <div
              key={game.id}
              className="flex flex-col w-auto items-center shadow-md rounded-md cursor-pointer text-center hover:scale-105 transition-all"
              onClick={() => handleGameSelection(game)}
            >
              <Image
                src={game.poster}
                alt={game.name}
                width={50}
                height={50}
                unoptimized
                className="h-[120px] md:h-[160px] w-full rounded-md cursor-pointer"
              />
            </div>
          ))}
      </div>
    </div>
  );
}
