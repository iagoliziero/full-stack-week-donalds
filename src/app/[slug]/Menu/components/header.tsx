'use client';

import { Button } from "@/components/ui/button";
import { Restaurant } from "@prisma/client";
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import { useRouter } from "next/router";

interface RestaurantHeaderProps {
    restaurant: Pick<Restaurant, 'coverImageUrl' | 'name' >
}

const RestaurantHeader = ({restaurant}: RestaurantHeaderProps) => {
    const router = useRouter()
    const handleBackClick = () => {
        router.back()
    }
    return ( 
        <div className="relative height-[250px] w-full">
                <Button
                onClick={() => handleBackClick}
                variant='secondary' size='icon' className="absolute top-4 left-4 rounded-full z-50">
                    <ChevronLeftIcon />
                </Button>
                <Image src={{restaurant?.coverImageUrl}} fill alt={restaurant.name} 
                className="object-cover"
                />
                <Button variant='secondary' size='icon' className="absolute top-4 right-4 rounded-full z-50">
                    <ScrollTextIcon />
                </Button>
            </div>
     );
}
 
export default RestaurantHeader;