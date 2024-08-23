import { useNavigate } from "react-router-dom";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";

export const Headers = () => {
  const navigate = useNavigate();
  return (
    <div className="fixed top-0 z-[100] flex h-[64px] w-full items-center justify-between bg-black p-4 text-white lg:p-5">
      <span
        className="cursor-pointer text-xl font-semibold hover:opacity-75 md:text-xl lg:text-2xl"
        onClick={() => navigate("/main")}
      >
        What Happened
      </span>
      <div className="hidden items-center gap-4 md:gap-6 lg:flex">
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
      <div className="flex lg:hidden">
        <MobileNav />
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

const MobileNav = () => {
  const navigate = useNavigate();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Menu className="h-6 w-6" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" side="bottom" sideOffset={20}>
        <DropdownMenuItem className="font-semibold uppercase">
          Introduction
        </DropdownMenuItem>
        <DropdownMenuItem className="font-semibold uppercase">
          Solution
        </DropdownMenuItem>
        <DropdownMenuItem className="font-semibold uppercase">
          Rate plan
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="font-semibold uppercase"
          onClick={() => navigate("/login")}
        >
          Login
        </DropdownMenuItem>
        <DropdownMenuItem className="font-semibold uppercase">
          Apply for free user
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
