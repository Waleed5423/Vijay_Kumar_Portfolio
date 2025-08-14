import NavigationClient from "./NavigationClient";
import { navItems } from "./navigation-data";

const Navigation = () => {
  return <NavigationClient navItems={navItems} />;
};

export default Navigation;