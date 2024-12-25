"use client";

import React from "react";

const DictionaryContext = React.createContext<Record<string, string> | null>(
  null,
);

export default function DictionaryProvider({
  dictionary,
  children,
}: {
  dictionary: Record<string, string>;
  children: React.ReactNode;
}) {
  return (
    <DictionaryContext.Provider value={dictionary}>
      {children}
    </DictionaryContext.Provider>
  );
}

export function useDictionary(): Record<string, string> {
  const dictionary = React.useContext(DictionaryContext);
  if (dictionary === null) {
    throw new Error(
      "useDictionary hook must be used within DictionaryProvider",
    );
  }

  return dictionary;
}
