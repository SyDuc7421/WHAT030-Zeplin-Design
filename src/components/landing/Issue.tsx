import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import NewImageOne from "@/assets/materials/news-img-03.png";
import NewImageTwo from "@/assets/materials/news-img-04.png";
import NewImageThree from "@/assets/materials/news-img-05.png";
import NewImageFour from "@/assets/materials/news-img-04.png";
import NewObjectOne from "@/assets/materials/news-object-01.png";
import NewObjectTwo from "@/assets/materials/news-object-02.png";
import NewObjectThree from "@/assets/materials/news-object-03.png";
import NewObjectFour from "@/assets/materials/news-object-04.png";
import NewObjectFive from "@/assets/materials/news-object-05.png";

const sample_data = [
  {
    label: "Brand B",
    img_url: NewImageOne,
  },
  {
    label: "Brand C",
    img_url: NewImageTwo,
  },
  {
    label: "Brand D",
    img_url: NewImageThree,
  },
  {
    label: "Brand E",
    img_url: NewImageFour,
  },
];

export const Issue = () => {
  return (
    <div className="relative flex w-full flex-col items-center gap-10 bg-[rgb(252,212,38)] py-20 text-black">
      <div className="absolute right-16 top-16 hidden flex-col items-end gap-8 lg:flex">
        <img
          src={NewObjectTwo}
          alt="dice-object1"
          className="w-[90px] object-cover"
        />
        <img
          src={NewObjectThree}
          alt="dice-object2"
          className="w-[100px] object-cover"
        />
      </div>
      <div className="flex flex-col items-center gap-6 text-center">
        <span className="text-xl font-bold uppercase md:text-2xl lg:text-4xl">
          Happened’s issue
        </span>
        <span className="w-[70%] text-sm md:text-base lg:w-[55%]">
          모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가
          아니더라도, 모든 팀에서 다듬을 수 있습니다. 브랜드의 성공을 위한 첫
          걸음을 내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
        </span>

        <Button
          variant="outline"
          className="border-2 border-black bg-transparent p-6 text-xl font-bold uppercase hover:bg-transparent/10"
        >
          See more
        </Button>
      </div>
      <div className="my-8 flex items-stretch justify-between">
        <div className="relative hidden w-full max-w-[350px] flex-1 flex-col items-center justify-around gap-12 border-2 border-black bg-[rgb(255,84,0)] p-12 lg:flex lg:h-[480px]">
          <span className="w-1/2 text-2xl font-bold uppercase md:text-4xl lg:text-5xl">
            whpn issue
          </span>
          <div className="border-8 border-black bg-white p-4">
            <MoveRight className="h-20 w-20" />
          </div>
          {/* absolute object */}
          <img
            src={NewObjectOne}
            alt="new-object1"
            className="absolute bottom-0 right-0 -mb-20 -me-8 hidden w-[120px] lg:block"
          />

          <img
            src={NewObjectFour}
            alt="new-object4"
            className="absolute right-0 top-0 -me-[100px] -mt-5 hidden w-[100px] lg:block"
          />

          <img
            src={NewObjectFive}
            alt="new-object1"
            className="absolute bottom-0 right-0 -mb-10 -me-[800px] hidden w-[100px] lg:block"
          />
        </div>
        {sample_data.map((item, index) => (
          <BrandItem
            key={`${item.label}-${index}`}
            label={item.label}
            img_url={item.img_url}
            odd={index % 2 === 0}
          />
        ))}
      </div>
    </div>
  );
};

interface BrandItemProps {
  label: string;
  img_url: string;
  odd?: boolean;
}

const BrandItem = ({ label, img_url, odd }: BrandItemProps) => {
  return (
    <div className="flex w-full max-w-[350px] flex-1 flex-col items-center border-2 border-black lg:h-[480px]">
      <div
        className={cn(
          "w-full flex-grow p-3 text-center text-xl font-bold text-white md:text-2xl lg:text-3xl",
          odd && odd ? "bg-black" : "bg-[rgb(255,84,0)]",
        )}
      >
        {label}
      </div>
      <img
        src={img_url}
        alt={label}
        className="aspect-[5/6] w-full max-w-[350px] flex-grow object-cover"
      />
    </div>
  );
};
