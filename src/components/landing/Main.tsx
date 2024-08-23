import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

import ImageOne from "@/assets/materials/img-01.png";
import ImageTwo from "@/assets/materials/img-02.png";
import ImageThree from "@/assets/materials/img-03.png";
import ImageFour from "@/assets/materials/img-06.png";
import ImageFive from "@/assets/materials/img-08.png";

const sample_data = [
  {
    label: "[What happened] How to create",
    img_url: ImageOne,
    favorites: 236,
    price: 3500,
  },
  {
    label: "[What happened] How to create",
    img_url: ImageTwo,
    favorites: 236,
    price: 4500,
  },
  {
    label: "[What happened] How to create",
    img_url: ImageThree,
    favorites: 2326,
    price: 2500,
  },
  {
    label: "[What happened] How to create",
    img_url: ImageFour,
    favorites: 200,
    price: 2000,
  },
  {
    label: "[What happened] How to create",
    img_url: ImageFive,
    favorites: 123,
    price: 5000,
  },
  {
    label: "[What happened] How to create",
    img_url: ImageTwo,
    favorites: 236,
    price: 4500,
  },
  {
    label: "[What happened] How to create",
    img_url: ImageThree,
    favorites: 2326,
    price: 2500,
  },
  {
    label: "[What happened] How to create",
    img_url: ImageFour,
    favorites: 200,
    price: 2000,
  },
  {
    label: "[What happened] How to create",
    img_url: ImageFive,
    favorites: 123,
    price: 5000,
  },
  {
    label: "[What happened] How to create",
    img_url: ImageThree,
    favorites: 2326,
    price: 2500,
  },
  {
    label: "[What happened] How to create",
    img_url: ImageFour,
    favorites: 200,
    price: 2000,
  },
  {
    label: "[What happened] How to create",
    img_url: ImageFive,
    favorites: 123,
    price: 5000,
  },
  {
    label: "[What happened] How to create",
    img_url: ImageTwo,
    favorites: 236,
    price: 4500,
  },
  {
    label: "[What happened] How to create",
    img_url: ImageThree,
    favorites: 2326,
    price: 2500,
  },
  {
    label: "[What happened] How to create",
    img_url: ImageFour,
    favorites: 200,
    price: 2000,
  },
];

export const Main = () => {
  return (
    <div className="flex w-full flex-col items-center gap-8 p-[60px]">
      <div className="grid grid-cols-2 items-center justify-center gap-6 md:grid-cols-3 xl:grid-cols-5">
        {sample_data.map((item, index) => (
          <MainItem
            key={index}
            label={item.label}
            img_url={item.img_url}
            favorites={item.favorites}
            price={item.price}
          />
        ))}
      </div>
      <Button
        variant="outline"
        className="border-2 border-black p-6 font-bold uppercase md:text-xl lg:text-2xl"
        size="lg"
      >
        See more
      </Button>
    </div>
  );
};

interface MainItemProps {
  label: string;
  price: number;
  img_url: string;
  favorites: number;
}

const MainItem = ({ label, price, img_url, favorites }: MainItemProps) => {
  return (
    <div className="flex aspect-[3/4] max-w-[300px] flex-col gap-3">
      <img
        src={img_url}
        alt={label}
        className="aspect-square max-h-[300px] w-full max-w-[300px] cursor-pointer object-cover"
      />
      <span className="cursor-pointer font-bold">{label}</span>
      <div className="flex items-center justify-between">
        <span>{price} won</span>
        <div className="flex cursor-pointer items-center">
          <Heart className="mr-2 h-4 w-4 border-none fill-[rgb(249,131,8)] stroke-none" />
          <span>{favorites}</span>
        </div>
      </div>
    </div>
  );
};
