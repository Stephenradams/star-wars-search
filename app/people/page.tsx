import Link from "next/link";
import { getPeople } from "../lib/data";
import { Character } from "../lib/definitions";
import { getIndexFromUrl } from "../lib/utils";

export default async function Page() {
    const people = await getPeople();
    return (
        <>
            <h1 className="font-bold text-6xl">People</h1>
            <ul className="pt-4">
                {people.map((person: Character) => (
                    <li key={person.name}>
                        <Link href={`/people/${getIndexFromUrl(person.url)}`} className="text-blue-500 hover:underline">{person.name}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
}