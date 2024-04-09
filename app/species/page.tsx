import Link from "next/link";
import { getSpecies } from "../lib/data";
import { getIndexFromUrl } from "../lib/utils";
import { Species } from "../lib/definitions";

export default async function Page() {
    const species = await getSpecies();
    return (
        <>
            <h1 className="font-bold text-2xl">Species</h1>
            <ul className="pt-4">
                {species.map((specie: Species) => (
                    <li key={specie.name}>
                        <Link href={`/species/${getIndexFromUrl(specie.url)}`} className="text-blue-500 hover:underline">
                            {specie.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}