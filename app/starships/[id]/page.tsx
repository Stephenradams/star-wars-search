import { getStarship } from "@/app/lib/data";
import Link from "next/link";

export default async function Page({ params }: { params: { id: string } }) {
    const starshipDetails = await getStarship(params.id);

    return (
        <div>
            <h1 className="font-bold text-6xl pb-10">
                {starshipDetails.name}
            </h1>
            <p>Model: {starshipDetails.model}</p>
            <p>Manufacturer: {starshipDetails.manufacturer}</p>
            <p>Cost in credits: {starshipDetails.cost_in_credits}</p>
            <p>Length: {starshipDetails.length}</p>
            <p><Link href="/starships" className="text-blue-500 hover:underline">Back to Starships</Link></p>
        </div>
    );
}