import Link from "next/link";
import { getPlanets } from "../lib/data";
import { Planet } from "../lib/definitions";
import { getIndexFromUrl } from "../lib/utils";

export default async function Page() {
    const planets = await getPlanets();

    return (
        <>
            <h1 className="font-bold text-2xl">Planets</h1>
            <ul className="pt-4">
                {planets.map((planet: Planet) => (
                    <li key={planet.name}>
                        <Link href={`/planets/${getIndexFromUrl(planet.url)}`} className="text-blue-500 hover:underline">{planet.name}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
}