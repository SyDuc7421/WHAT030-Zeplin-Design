import ItemOneImage from "@/assets/materials/best-image-01.png";
import ItemTwoImage from "@/assets/materials/best-image-02.webp";
import ItemThreeImage from "@/assets/materials/best-image-03.png";

const sample_data = [
  {
    index: "01",
    label: "How to create mobile-optimized",
    img_url: ItemOneImage,
  },
  {
    index: "02",
    label: "How to create mobile-optimized",
    img_url: ItemTwoImage,
  },
  {
    index: "03",
    label: "How to create mobile-optimized",
    img_url: ItemThreeImage,
  },
];

export const BestProductBanner = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-6 bg-[rgb(252,212,38)] p-8 lg:py-12">
      <div className="flex flex-col items-center gap-6 bg-transparent text-center text-[rgb(249,131,8)]">
        <span className="mg:text-2xl text-xl font-bold uppercase lg:text-4xl">
          Best product
        </span>
        <span className="w-full text-base md:w-[80%] lg:w-[60%] lg:text-xl">
          How to create mobile-optimized videos in minutes. Not a designer,
          every team makes a lot of videos Can be trimmed. Take the first
        </span>
      </div>
      <div className="flex items-center gap-0">
        {sample_data.map((item) => (
          <ProductItem
            key={item.index}
            index={item.index}
            label={item.label}
            img_url={item.img_url}
          />
        ))}
      </div>
    </div>
  );
};

interface ProductItemProps {
  index: string;
  label: string;
  img_url: string;
}

const ProductItem = ({ index, label, img_url }: ProductItemProps) => {
  return (
    <div className="relative flex aspect-[4/5] min-w-[150px] max-w-[350px] flex-col items-center">
      <div className="absolute left-1 top-1 flex h-12 w-12 items-center justify-center rounded-full border-2 border-dashed border-black bg-[rgb(252,212,38)]">
        <span className="text-2xl font-bold underline">{index}</span>
      </div>
      <img
        src={img_url}
        alt={label}
        className="aspect-[4/5] w-full object-cover"
      />
      <div className="-mt-6 flex w-[80%] items-center justify-between border-2 border-black bg-white p-2 text-black">
        <span className="w-[60%] font-bold">{label}</span>
        <button className="hover rounded-full bg-black p-2 font-semibold text-white hover:opacity-85">
          GO
        </button>
      </div>
    </div>
  );
};
