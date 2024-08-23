import { Button } from "@/components/ui/button";

import WindowImage from "@/assets/materials/window.png";
import ObjectOneImage from "@/assets/materials/object-01.png";
import ObjectTwoImage from "@/assets/materials/object-02.png";
import ObjectThreeImage from "@/assets/materials/object-03.png";
import ObjectFourImage from "@/assets/materials/object-04.png";
import ObjectFiveImage from "@/assets/materials/object-05.png";
import ObjectSixImage from "@/assets/materials/object-06.png";
import ObjectSevenImage from "@/assets/materials/object-07.png";

export const BrandStory = () => {
  return (
    <div className="relative flex w-full flex-col items-center bg-[rgb(1,101,188)] py-20 text-[rgb(252,212,38)]">
      <div className="flex w-full flex-col items-center justify-center gap-6">
        <span className="text-xl font-bold uppercase md:text-2xl lg:text-4xl">
          Brand Story
        </span>
        <span className="w-[80%] text-center text-sm md:w-[60%] lg:w-[42%] lg:text-base">
          모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가
          아니더라도, 모든 팀에서 다듬을 수 있습니다. 브랜드의 성공을 위한 첫
          걸음을 내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
        </span>

        <div className="relative z-40 mt-6 flex w-full max-w-[1200px] flex-col items-center">
          <img
            src={WindowImage}
            alt="window-image"
            className="hidden max-w-[1200px] object-cover lg:block"
          />
          <div className="flex flex-col gap-7 p-8 text-black lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:items-start lg:ps-5">
            <span className="text-xl font-bold uppercase md:text-2xl">
              What Happened’s Brand story
            </span>
            <span className="lg:w-4/5">
              청춘이 있는 바이며, 말이다. 같지 노년에게서 어디 모래뿐일 무엇을
              풀이 옷을 봄바람이다. 새 천고에 놀이 내는 찾아 창공에 광야에서
              살았으며, 듣는다. 수 있는 긴지라 사는가 낙원을 웅대한 아니다. 내는
              이상 할지라도 피다. 피부가 불러 피고 인간의 타오르고 이성은 끝까지
              칼이다. 쓸쓸한 희망의 못할 것은 목숨을 수 그들을 아름답고 고행을
              끝에 설산에서 황금시대를 이상을 운다.
            </span>
            <Button
              variant="outline"
              className="max-w-[200px] self-center border-2 border-black p-6 px-8 text-xl font-bold uppercase"
            >
              See more
            </Button>
          </div>
        </div>

        <div className="absolute left-0 top-1/2 hidden -translate-y-1/2 flex-col items-end lg:flex">
          <img
            src={ObjectOneImage}
            alt="note1-image"
            className="w-full max-w-[144px] object-cover"
          />
          <div className="flex items-end gap-0">
            <img
              src={ObjectSixImage}
              alt="book6-image"
              className="w-full max-w-[164px] object-cover"
            />
            <img
              src={ObjectSevenImage}
              alt="book7-image"
              className="w-full max-w-[140px] object-cover"
            />
          </div>
        </div>

        <div className="right-[80px] top-5 hidden flex-col gap-0 lg:absolute lg:flex">
          <img
            src={ObjectTwoImage}
            alt="note2-image"
            className="w-[110px] object-cover"
          />
          <img
            src={ObjectThreeImage}
            alt="note3-image"
            className="-mt-10 ms-10 w-[110px] object-cover"
          />
        </div>

        <div className="right-0 top-[30%] hidden items-end gap-0 lg:absolute lg:flex">
          <img
            src={ObjectFiveImage}
            alt="calendar5-image"
            className="z-20 h-[170px] w-[250px]"
          />
          <img
            src={ObjectFourImage}
            alt="tree4-image"
            className="z-10 -ms-[100px] mb-[20px] w-[250px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};
