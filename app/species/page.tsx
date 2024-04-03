import { getSpecies } from "../lib/data";

export default async function Page() {
    const species = await getSpecies();
    return (
        <>
            <h1 className="font-bold text-2xl">Species</h1>
            <ul className="pt-4">
                {species.map((specie: any) => (
                    <li key={specie.name}>
                        {specie.name}
                    </li>
                ))}
            </ul>
        </>
    );
}