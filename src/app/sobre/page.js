import Link from "next/link";
import Button from "../components/Button";

export default function Sobre() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <p>Sobre</p>
        <Link href="/" className="bg-black text-white">ir para página home </Link>
        <Button style={{color: "red", fontSize: 8}} name="click me" id="2" />
      </main>
    )
  }