import { Button } from "../../ui/button";
import SmallNav from "./SmallNav";

function Header({
  isSticky,
  activeSection,
}: {
  isSticky: boolean;
  activeSection: number;
}) {
  return (
    <nav
      className={`${
        isSticky
          ? "sticky border-b border-gray-6/30 bg-white/30 px-4 py-2 shadow-sm backdrop-blur-md"
          : "relative px-4 py-4"
      } top-0 z-50 flex items-center justify-between  `}
    >
      <img src="/logo.svg" alt="logo" className="h-5" />
      <div className="md:hidden">
        <SmallNav />
      </div>
      <ul className={`z-40 flex items-center gap-16 max-md:hidden`}>
        <li>
          <a href="#business" className="relative text-gray-7">
            Business
            <div
              className={`${
                activeSection === 1 ? "block" : "hidden"
              } absolute -left-4 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-primary`}
            ></div>
          </a>
        </li>
        <li>
          <a href="#developer" className=" relative text-gray-7">
            Developer
            <div
              className={`${
                activeSection === 2 ? "block" : "hidden"
              } absolute -left-4 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-primary`}
            ></div>
          </a>
        </li>
        <li>
          <a href="#faq" className="relative text-gray-7">
            FAQ
            <div
              className={`${
                activeSection === 3 ? "block" : "hidden"
              } absolute -left-4 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-primary`}
            ></div>
          </a>
        </li>
      </ul>
      <a href="#join" className="max-md:hidden">
        <Button size="sm" className="px-5">
          Join us
        </Button>
      </a>
    </nav>
  );
}

export default Header;
