import Image from "next/image";
import PomodoroTimer from "./components/PomodoroTimer";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-[#241571]">
      <Header />

      <main className="flex flex-1 w-full flex-col items-center 
      justify-between py-32 px-16 bg-white dark:bg-[#241571]
       sm:items-start">
        <PomodoroTimer />
      </main>
    </div>
  );
}
