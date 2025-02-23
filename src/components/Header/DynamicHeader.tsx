"use client";
import { usePathname } from "next/navigation";
import { matchRoute } from "./routeConfigs";
import TransparentHeader from "./TransparentHeader";
import FullHeader from "./FullHeader";

const DynamicHeader: React.FC = () => {
  const pathname = usePathname() || "/";
  const headerType = matchRoute(pathname)?.headerType || "full";

  const headerComponents = {
    transparent: TransparentHeader,
    full: FullHeader,
  };

  const SelectedHeader = headerComponents[headerType];

  return <SelectedHeader pathname={pathname} />;
};

export default DynamicHeader;
