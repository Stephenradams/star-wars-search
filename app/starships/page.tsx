import { getStarships } from "../lib/data";
import { Starship } from "../lib/definitions";

export default async function Page() {
    const starships = await getStarships();
    return (
        <>
            <h1 className="font-bold text-2xl">Starships</h1>
            <ul className="pt-4">
                {starships.map((starship: Starship) => (
                    <li key={starship.name}>
                        {starship.name}
                    </li>
                ))}
            </ul>
        </>
    );
}