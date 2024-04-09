import { getFilm } from "@/app/lib/data"
import { FilmDetails } from "@/app/lib/definitions";
import Link from "next/link";

export default async function Page({ params }: { params: { id: string } }) {
    const filmId = params.id;
    const filmDetails: FilmDetails = await getFilm(params.id);
    console.log(filmDetails.title);

    return (
        <div className="pt-12">
            <h1>
                <Link href="/films" className="text-blue-500 hover:underline">Films</Link>
            </h1>
            <h2>{filmDetails.title}</h2>
            <blockquote>{filmDetails.opening_crawl}</blockquote>
            <p>Director: {filmDetails.director}</p>
        </div>
    )
}