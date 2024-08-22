import MainBannerImage from "@/assets/materials/main-banner.png";

export const MainBanner = () => {
  return (
    <img
      src={MainBannerImage}
      alt="main-banner"
      className="w-full object-cover"
    />
  );
};
