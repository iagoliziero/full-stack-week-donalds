import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

import { db } from "@/lib/prisma";

import RestaurantHeader from "./components/header";



interface RestaurantMenuPage {
    params: Promise<{slug: string}>;
    searchParams: Promise<{consumptionMethod: string}>
}

const isConsumptionMethodValid = (consumptionMethod: string) => {
    return ['DINE_IN', "TAKEAWAY"].includes(consumptionMethod)
}

const RestaurantMenuPage = async ({params, searchParams}: RestaurantMenuPage) => {
    const {slug} = await params
    const { consumptionMethod } = await searchParams;
    if (!isConsumptionMethodValid(consumptionMethod)) {
        return notFound()
    }
    const restaurant = await db.restaurant.findUnique({where: {slug}})

    if (!restaurant) {
        return notFound()
    }

    return ( <h1> ola
        <div>
            <RestaurantHeader restaurant={restaurant}/>
        </div>
    </h1>  );
}
 
export default RestaurantMenuPage;