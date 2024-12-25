"use client";
import React from "react";
import AllGames from "./all-game";
import FeatureGame from "./feature-game";
import ClickingGames from "./clicking-games";
import ActionGames from "./action-games";
import RacingGames from "./racing-games";
import MultiplayerGames from "./multiplayer-games";
import ColorGames from "./color-game";
import HorrorGames from "./horror-game";
import BrainStrongGames from "./brainstrong-games";
import AdventureGames from "./adventure-games";
import DressUpGames from "./dressup-games";
import MusicalGames from "./musical-games";

export default function Sidebar() {
  return (
    <div className="flex w-full gap-5">
      <div className={"flex flex-col w-full"}>
        <AllGames />
        <AdventureGames/>
        <FeatureGame />
        <ClickingGames />
        <ActionGames />
        <BrainStrongGames />
        <RacingGames />
        <DressUpGames/>
        <MultiplayerGames />
        <MusicalGames/>
        <HorrorGames />
        <ColorGames />
      </div>
    </div>
  );
}
