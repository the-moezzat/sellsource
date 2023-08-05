import { Button } from "../../ui/button";

function Header() {
  return (
    <nav className="flex min-h-[68px] items-center justify-between px-4 py-4">
      <img src="/logo.svg" alt="logo" className="h-5" />
      <ul className="flex items-center gap-16">
        <li>
          <a href="#business" className="text-gray-7">
            Business
          </a>
        </li>
        <li>
          <a href="#developer" className=" text-gray-7">
            Developer
          </a>
        </li>
        <li>
          <a href="#faq" className=" text-gray-7">
            FAQ
          </a>
        </li>
      </ul>
      <a href="#join">
        <Button size="sm" className="px-5">
          Join us
        </Button>
      </a>
    </nav>
  );
}

export default Header;
