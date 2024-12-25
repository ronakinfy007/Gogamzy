import GameList from "@/components/Gamelist";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const keywordsArray = [
    "online games",
    "play games without downloading",
    "free online gaming",
    "browser games",
    "instant play games",
    "ZenGgames",
    "web games",
    "no download games",
    "online arcade",
    "free to play games",
    "gaming website",
    "play games now",
    "games on web",
    "instant gaming",
    "multiplayer online games",
    "fun games online",
    "games for free",
    "play instantly",
    "online game platform",
    "web browser games",
    "gaming without download",
  ];
  const title = "Play Online Games | No Download Needed - ZenGgames";
  const description =
    "ZenGgames offers a variety of online games you can play instantly, without downloading. Dive into fun and exciting games anytime, directly from your browser!";
  const keywords = keywordsArray.toString();
  return {
    title,
    description,
    keywords,
    openGraph: {
      url: process.env.NEXT_PUBLIC_SITE_URL,
      type: "website",
      title,
      description,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/images/logo.png`,
        },
      ],
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}`,
    },
  };
}

export default async function Home() {
  return (
    <main className="flex w-full flex-col flex-wrap gap-24 my-10">
      <GameList />
    </main>
  );
}
