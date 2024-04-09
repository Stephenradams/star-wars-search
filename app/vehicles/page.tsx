import Link from "next/link";
import { getVehicles } from "../lib/data";
import { Vehicle } from "../lib/definitions";
import { getIndexFromUrl } from "../lib/utils";


export default async function Page() {
    const vehicles = await getVehicles();
    return (
        <>
            <h1 className="font-bold text-6xl pb-10">
                Vehicles
            </h1>
            {/* <p>
                This is a list of vehicles in the Star Wars universe.
            </p>
            <p>You can view information about the following vehicles:</p> */}

            <ul className="pt-4">

                {vehicles.map((vehicle: Vehicle) => (
                    <li key={vehicle.name}>
                        <Link href={`/vehicles/${getIndexFromUrl(vehicle.url)}`} className="text-blue-500 hover:underline">
                            {vehicle.name}
                        </Link>
                    </li>
                ))}
            </ul>

        </>
    );
}