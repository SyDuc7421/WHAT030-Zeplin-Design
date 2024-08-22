import { useNavigate } from "react-router-dom";

export const Headers = () => {
  const navigate = useNavigate();
  return (
    <div className="sticky top-0 flex h-fit w-full items-center justify-between bg-black p-4 text-white lg:p-5">
      <span className="cursor-pointer text-xl font-semibold hover:opacity-75 md:text-xl lg:text-2xl">
        What Happened
      </span>
      <div className="flex items-center gap-4 md:gap-6">
        <div className="flex items-center gap-4">
          <HeaderItem label="Introduction" />
          <HeaderItem label="Solution" />
          <HeaderItem label="Rate Plan" />
        </div>
        <div className="h-6 border-r-2 border-gray-300" />
        <div className="flex items-center gap-4">
          <HeaderItem label="Login" onClick={() => navigate("/login")} />
          <HeaderItem
            label="Apply for free use"
            onClick={() => navigate("/register")}
          />
        </div>
      </div>
    </div>
  );
};

interface HeaderItemProps {
  label: string;
  onClick?: () => void;
}

const HeaderItem = ({ label, onClick }: HeaderItemProps) => {
  return (
    <span
      className="cursor-pointer text-xs uppercase hover:opacity-75 md:text-sm"
      onClick={onClick}
    >
      {label}
    </span>
  );
};
