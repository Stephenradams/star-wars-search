import { getPlanet } from "@/app/lib/data";
import Link from "next/link";

export default async function Page({ params }: { params: { id: string } }) {
    const planetDetails = await getPlanet(params.id);
    return (
        <div className="pt-12">
            <h1>
                <Link href="/planets" className="text-blue-500 hover:underline">Back to Planets</Link>
            </h1>
            <h2 className="text-2xl">Planet</h2>
            <p>Name: {planetDetails.name}</p>
            <p>Diameter: {planetDetails.diameter}</p>
            <p>Rotation Period: {planetDetails.rotation_period}</p>
            <p>Orbital Period: {planetDetails.orbital_period}</p>
            <p>Gravity: {planetDetails.gravity}</p>
            <p>Population: {planetDetails.population}</p>
        </div>
    )
}