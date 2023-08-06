import { List } from "@phosphor-icons/react";
import { Button } from "../../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTrigger,
} from "../../ui/sheet";

function SmallNav() {
  return (
    <Sheet>
      <SheetTrigger className="flex text-tertiary-base">
        <List size={20} />
      </SheetTrigger>
      <SheetContent className="" side={"center"}>
        <SheetDescription>
          <ul className={`flex flex-col items-center gap-10 text-lg`}>
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

            <li>
              <a href="#join">
                <Button size="lg">Join us</Button>
              </a>
            </li>
          </ul>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
}

export default SmallNav;
