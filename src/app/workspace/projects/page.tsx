import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex flex-row justify-center text-center bg-blue-400 self-center">
      Projects
    </div>
  );
}
