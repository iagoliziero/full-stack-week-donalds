import Image from "next/image";
import { notFound } from "next/navigation";

import { getRestaurantBySlug } from "@/data/get-restaurant-by-slug";

import ConsumptionMethodOption from "./components/consumption-method-option";

interface RestaurantPageProps {
  params: Promise<{ slug: string }>;
}

const RestaurantPage = async ({ params }: RestaurantPageProps) => {
  const { slug } = await params;
  const restaurant = await getRestaurantBySlug(slug);
  if (!restaurant) {
    return notFound();
  }
  return (
    <div className="flex h-screen flex-col items-center justify-center px-6 pt-24">
      <div className="flex flex-col items-center gap-2">
        {/* Logo */}
        <Image
          src={restaurant?.avatarImageUrl}
          alt={restaurant.name}
          width={82}
          height={82}
        />
        <h2 className="font-semibold">{restaurant.name}</h2>
        {/* Bem-vindo */}
        <div className="pt-24 text-center space-y-2">
          <h3 className="text-2xl font-semibold">Seja Bem-vindo!</h3>
          <p className="opacity-55">
            Escolha como prefere aproveitar sua refeição. Estamos aqui para
            oferecer praticidade e sabor em cada detalhe!
          </p>
        </div>
        {/* Box */}
        <div className="grid grid-cols-2 gap-4 pt-14">

          <ConsumptionMethodOption
          slug={slug}
          option='DINE_IN'
          buttonText="Para comer aqui"
          imageAlt="Comer aqui"
          imageUrl="/dine_in.png"
          /> 
          <ConsumptionMethodOption
          slug={slug}
          option='TAKEAWAY'
          buttonText="Para levar"
          imageAlt="Para levar"
          imageUrl="/takeaway.png"
          /> 
        </div>
      </div>
    </div>
  );
};

export default RestaurantPage;
