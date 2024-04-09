import { getSpecie } from "@/app/lib/data";
import Link from "next/link";


export default async function Page({ params }: { params: { id: string } }) {
    const specie = await getSpecie(params.id);
    return (
        <div>
            <h1 className="font-bold text-6xl pb-10">{specie.name}</h1>
            <p>Classification: {specie.classification}</p>
            <p>Designation: {specie.designation}</p>
            <p>Average Height: {specie.average_height}</p>
            <p>
                <Link href="/species" className="text-blue-500 hover:underline text-1xl">Back to Species</Link>
            </p>
        </div>
    )
}