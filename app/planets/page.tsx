import { getPlanets } from "../lib/data";
import { Planet } from "../lib/definitions";

export default async function Page() {
    const planets = await getPlanets();

    return (
        <>
            <h1 className="font-bold text-2xl">Planets</h1>
            <ul className="pt-4">
                {planets.map((planet: Planet) => (
                    <li key={planet.name}>{planet.name} - {planet.diameter}</li>
                ))}
            </ul>
        </>
    );
}