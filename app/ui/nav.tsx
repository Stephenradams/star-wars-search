import Link from "next/link";

export default function Nav() {
    return (
        <nav className="flex items-center justify-between p-4 bg-gray-600 text-white">
            <h1 className="text-2xl font-bold">Star Wars API</h1>
            <Link href="/films">Films</Link>
            <Link href="/people">People</Link>
            <Link href="/species">Species</Link>
            <Link href="/planets">Planets</Link>
            <Link href="/starships">Starships</Link>
        </nav>
    )
}