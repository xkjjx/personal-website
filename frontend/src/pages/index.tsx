import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div className="justify-center">
        <h1 className="text-5xl text-center text-700 my-8">My Thoughts</h1>
      </div>
    </main>
  );
}
