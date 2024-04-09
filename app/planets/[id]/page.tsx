import { getPlanet } from "@/app/lib/data";
import Link from "next/link";

export default async function Page({ params }: { params: { id: string } }) {
    const planetDetails = await getPlanet(params.id);
    return (
        <div>
            <h1 className="font-bold text-6xl pb-10">Planet - {planetDetails.name}</h1>
            <p>Diameter: {planetDetails.diameter}</p>
            <p>Rotation Period: {planetDetails.rotation_period}</p>
            <p>Orbital Period: {planetDetails.orbital_period}</p>
            <p>Gravity: {planetDetails.gravity}</p>
            <p>Population: {planetDetails.population}</p>
            <p>
                <Link href="/planets" className="text-blue-500 hover:underline text-1xl">Back to Planets</Link>
            </p>
        </div>
    )
}