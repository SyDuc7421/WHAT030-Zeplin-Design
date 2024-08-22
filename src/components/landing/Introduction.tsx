import IntroductionImage from "@/assets/materials/introduction-bg.png";

export const Introduction = () => {
  return (
    <div className="relative h-fit w-full">
      <img src={IntroductionImage} alt="intro-image" />
      <div className="absolute left-[15%] top-1/2 flex -translate-y-1/2 flex-col gap-6 text-white">
        <span className="text-xl font-bold uppercase md:text-2xl lg:text-4xl">
          What happend!
        </span>
        <span className="text-wrap text-base md:w-[60%] md:text-xl lg:w-[40%] lg:text-2xl">
          How to create mobile-optimized videos in minutes. Not a designer,
          every team makes a lot of videos Can be trimmed. Take the first step
          to your brand's success. How to create mobile-optimized videos in
          minutes.
        </span>
      </div>
    </div>
  );
};
