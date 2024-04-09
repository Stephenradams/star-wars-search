import { getSpecie } from "@/app/lib/data";
import Link from "next/link";


export default async function Page({ params }: { params: { id: string } }) {
    const specie = await getSpecie(params.id);
    return (
        <div>
            <h1><Link href="/species" className="text-blue-500 hover:underline text-3xl"> Back to Species</Link></h1>
            <h2 className="text-2xl">{specie.name}</h2>
            <p>Classification: {specie.classification}</p>
            <p>Designation: {specie.designation}</p>
            <p>Average Height: {specie.average_height}</p>
        </div>
    )
}