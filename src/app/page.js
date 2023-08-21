import Link from "next/link";
import Button from "./components/Button";

export default function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>hello world</p>
      <Button name="botão da home" id="1234" />
      <Link href="/sobre">ir para página sobre </Link>
    </main>
  )
}
