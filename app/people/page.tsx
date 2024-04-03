import { getPeople } from "../lib/data";
import { Character } from "../lib/definitions";

export default async function Page() {
    const people = await getPeople();

    return (
        <>
            <h1 className="font-bold text-2xl">People</h1>
            <ul className="pt-4">
                {people.map((person: Character) => (
                    <li key={person.name}>
                        {person.name}
                    </li>
                ))}
            </ul>
        </>
    );
}