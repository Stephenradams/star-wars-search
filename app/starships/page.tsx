import Link from "next/link";
import { getStarships } from "../lib/data";
import { Starship } from "../lib/definitions";
import { getIndexFromUrl } from "../lib/utils";

export default async function Page() {
    const starships = await getStarships();
    return (
        <>
            <h1 className="font-bold text-2xl">Starships</h1>
            <ul className="pt-4">
                {starships.map((starship: Starship) => (
                    <li key={starship.name}>
                        <Link href={`/starships/${getIndexFromUrl(starship.url)}`} className="text-blue-500 hover:underline">{starship.name}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
}