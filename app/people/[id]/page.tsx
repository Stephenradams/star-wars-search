import { getPerson } from "@/app/lib/data";
import { PersonDetails } from "@/app/lib/definitions";
import Link from "next/link";

export default async function Page({ params }: { params: { id: string } }) {
    const personDetails: PersonDetails = await getPerson(params.id);

    return (
        <div className="pt-12">
            <h1>
                <Link href="/people" className="text-blue-500 hover:underline">Back to People</Link>
            </h1>
            <h2 className="text-2xl">Person</h2>
            <p>Name: {personDetails.name}</p>
            <p>Height: {personDetails.height}</p>
            <p>Mass: {personDetails.mass}</p>
            <p>Hair Color: {personDetails.hair_color}</p>
        </div>
    )
}