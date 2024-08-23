import { Button } from "@/components/ui/button";

import VideoImage from "@/assets/materials/video.png";
import VideoObjectOne from "@/assets/materials/video-object-01.png";
import VideoObjectTwo from "@/assets/materials/video-object-02.png";
import VideoObjectThree from "@/assets/materials/video-object-03.png";
import VideoObjectFour from "@/assets/materials/video-object-04.png";
import VideoObjectFive from "@/assets/materials/video-object-05.png";
import VideoObjectSix from "@/assets/materials/video-object-06.png";
import VideoObjectSeven from "@/assets/materials/video-object-07.png";
import VideoObjectEight from "@/assets/materials/video-object-08.png";
import VideoObjectNine from "@/assets/materials/video-object-09.png";

export const Video = () => {
  return (
    <div className="relative flex w-full flex-col items-center gap-12 bg-white py-20 text-black">
      <div className="flex flex-col items-center gap-6 text-center">
        <span className="text-xl font-bold uppercase tracking-[12px] md:text-2xl lg:text-4xl">
          what happened
        </span>
        <span className="w-[70%] text-sm md:text-base lg:w-[55%]">
          How to create mobile-optimized videos in minutes. Not a designer,
          every team makes a lot of videos Can be trimmed. Take the first
        </span>

        <Button
          variant="outline"
          className="border-2 border-black bg-transparent p-6 text-xl font-bold uppercase hover:bg-transparent/10"
        >
          See more
        </Button>
      </div>
      <img
        src={VideoImage}
        alt="video-image"
        className="z-40 w-full max-w-[1200px] object-cover p-4 lg:mb-[200px]"
      />

      {/* absolute object */}
      <div className="hidden h-full w-full lg:block">
        <img
          src={VideoObjectOne}
          alt="video-object1"
          className="absolute bottom-10 left-1/4 w-[350px] object-cover"
        />

        <img
          src={VideoObjectTwo}
          alt="video-object2"
          className="absolute bottom-36 left-[60%] w-[75px] object-cover"
        />

        <img
          src={VideoObjectThree}
          alt="video-object3"
          className="absolute bottom-[200px] left-[17%] w-[120px] object-cover"
        />

        <img
          src={VideoObjectFour}
          alt="video-object4"
          className="absolute left-0 top-1/2 -ms-[150px] w-[400px] -translate-y-1/2 object-cover"
        />

        <img
          src={VideoObjectFive}
          alt="video-object5"
          className="absolute left-[15%] top-0 w-[120px] object-cover"
        />

        <div className="absolute right-20 top-20 flex flex-col">
          <img
            src={VideoObjectSeven}
            alt="video-object7"
            className="w-[120px] object-cover"
          />
          <img
            src={VideoObjectSix}
            alt="video-object6"
            className="-ms-16 -mt-10 w-[100px] object-cover"
          />
        </div>

        <img
          src={VideoObjectEight}
          alt="video-object8"
          className="absolute right-0 top-1/2 z-20 -me-[100px] w-[500px] object-cover"
        />

        <img
          src={VideoObjectNine}
          alt="video-object9"
          className="absolute right-0 top-[45%] z-10 -me-[80px] w-[250px] -translate-y-1/2 object-cover"
        />
      </div>
    </div>
  );
};
