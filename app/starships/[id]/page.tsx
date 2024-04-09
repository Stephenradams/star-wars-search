import { getStarship } from "@/app/lib/data";
import Link from "next/link";

export default async function Page({ params }: { params: { id: string } }) {
    const starshipDetails = await getStarship(params.id);

    return (
        <>
            <h1 className="font-bold text-2xl">
                <Link href="/starships" className="text-blue-500 hover:underline">Back to Starships</Link>
            </h1>
            <p className="text-2xl">Starship</p>
            <p>Name: {starshipDetails.name}</p>
            <p>Model: {starshipDetails.model}</p>
            <p>Manufacturer: {starshipDetails.manufacturer}</p>
            <p>Cost in credits: {starshipDetails.cost_in_credits}</p>
        </>
    );
}