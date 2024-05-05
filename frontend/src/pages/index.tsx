import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div className="justify-center">
        <h1 className="text-center">Home</h1>
      </div>
    </main>
  );
}
