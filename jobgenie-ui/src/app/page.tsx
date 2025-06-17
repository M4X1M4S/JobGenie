import Link from "next/link";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to JobGenie!</h1>
      <button>
        <Link href="/login">Login</Link>
      </button>
      <button>
        <Link href="/signup">SignUp</Link>
      </button>
      <p className="mt-4 text-lg">Your AI-powered job search assistant.</p>
    </main>
  );
}
