import { getPerson } from "@/app/lib/data";
import { PersonDetails } from "@/app/lib/definitions";
import Link from "next/link";

export default async function Page({ params }: { params: { id: string } }) {
    const personDetails: PersonDetails = await getPerson(params.id);

    return (
        <div>
            <h1 className="font-bold text-6xl pb-10">{personDetails.name}</h1>
            <p>Height: {personDetails.height}</p>
            <p>Mass: {personDetails.mass}</p>
            <p>Hair Color: {personDetails.hair_color}</p>
            <p>
                <Link href="/people" className="text-blue-500 hover:underline text-1xl">Back to People</Link>
            </p>
        </div>
    )
}