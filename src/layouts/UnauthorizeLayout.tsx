import { Outlet } from "react-router-dom";

import { Footer } from "@/components/Footer";
import { Headers } from "@/components/Headers";

export default function UnauthorizeLayout() {
  return (
    <div className="w-full bg-background text-foreground">
      <Headers />
      <Outlet />
      <Footer />
    </div>
  );
}
