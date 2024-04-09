import { getFilm } from "@/app/lib/data"
import { FilmDetails } from "@/app/lib/definitions";
import Link from "next/link";

export default async function Page({ params }: { params: { id: string } }) {
    const filmDetails: FilmDetails = await getFilm(params.id);

    return (
        <div>
            <h1 className="font-bold text-6xl pb-10">
                {filmDetails.title}
            </h1>
            <pre>{filmDetails.opening_crawl}</pre>
            <p>Director: {filmDetails.director}</p>
            <p>Producer: {filmDetails.producer}</p>

            <p>
                <Link href="/films" className="text-blue-500 hover:underline text-1xl">Back to Films</Link>
            </p>
        </div>
    )
}