import { BestProductBanner } from "@/components/landing/BestProductBanner";
import { BrandStory } from "@/components/landing/BrandStory";
import { Introduction } from "@/components/landing/Introduction";
import { Issue } from "@/components/landing/Issue";
import { Main } from "@/components/landing/Main";
import { MainBanner } from "@/components/landing/MainBanner";
import { Video } from "@/components/landing/Prototype";

export const MainPage = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-0">
      <MainBanner />
      <Introduction />
      <BestProductBanner />
      <Main />
      <BrandStory />
      <Issue />
      <Video />
    </div>
  );
};
