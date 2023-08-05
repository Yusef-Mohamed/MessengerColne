"use client";

import useConvesation from "@/app/hooks/useConversation";
import useRoutes from "@/app/hooks/useRoutes";
import MobileItem from "./MobileItem";

const MobileFooter = () => {
  const routes = useRoutes();
  const { isOpen } = useConvesation();
  if (isOpen) {
    return null;
  }
  return (
    <div
      className="lg:hidden fixed justify-between w-full bottom-0 z-40 flex items-center bg-white border-t-[1px]
  "
    >
      {routes.map((item) => (
        <MobileItem
          key={item.label}
          herf={item.href}
          icon={item.icon}
          active={item.active}
          onClick={item.onClick}
        />
      ))}
    </div>
  );
};

export default MobileFooter;
