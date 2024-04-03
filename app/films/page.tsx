import { getFilms } from "../lib/data";
import { Film } from "../lib/definitions";

export default async function Page() {
    const films = await getFilms();
    return (
        <>
            <h1 className="font-bold text-2xl">Films</h1>
            <ul className="pt-4">
                {films.map((film: Film) => (
                    <li key={film.episode_id}>
                        {film.title}
                    </li>
                ))}
            </ul>
        </>
    );
}