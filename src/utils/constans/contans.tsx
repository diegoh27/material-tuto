import HomeIcon from "@mui/icons-material/Home";
import CoffeeMakerIcon from "@mui/icons-material/CoffeeMaker";
import CollectionsIcon from "@mui/icons-material/Collections";

export const ListNavItems: NavLink[] = [
  { name: "Home", id: "home", icon: <HomeIcon /> },
  { name: "Card Section", id: "content-card", icon: <CollectionsIcon /> },
  { name: "Nav Section", id: "nav-section", icon: <CoffeeMakerIcon /> },
];

export const scrollView = (id: string) => {
  const idScroll: HTMLElement | null = document.getElementById(`${id}`);
  idScroll?.scrollIntoView({ behavior: "smooth" });
};
