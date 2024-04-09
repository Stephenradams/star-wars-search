import { getVehicle } from "@/app/lib/data";
import Link from "next/link";

export default async function Page({ params }: { params: { id: string } }) {
    const vehicle = await getVehicle(params.id);
    return (
        <>
            <h1 className="font-bold text-6xl pb-10">
                {vehicle.name}
            </h1>
            <p>Model: {vehicle.model}</p>
            <p>Manufacturer: {vehicle.manufacturer}</p>
            <p>Cost in credits: {vehicle.cost_in_credits}</p>
            <p>Length: {vehicle.length}</p>
            <p>
                <Link href="/vehicles" className="text-blue-500 hover:underline">
                    Back to Vehicles
                </Link>
            </p>
        </>
    );
}
