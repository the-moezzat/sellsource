import { FacebookLogo, DiscordLogo } from "@phosphor-icons/react";

function Footer() {
  return (
    <footer className="grid grid-cols-[repeat(24,1fr)] gap-4 p-4 pt-14">
      <div className="col-start-2 col-end-9 max-lg:col-start-1 max-md:col-end-12 max-[500px]:col-span-full">
        <img src="/logo.svg" alt="logo" className="mb-4 h-6" />
        <p className="mb-6 text-lg text-gray-6 max-md:text-sm max-sm:mb-3">
          Connect, Explore, and Thrive - Empowering Businesses and Developers
          with SellSource!
        </p>
        <div className="flex items-center gap-6 text-3xl text-gray-7 max-md:text-2xl">
          <FacebookLogo weight="fill" />
          <DiscordLogo weight="fill" />
          <svg
            width="20"
            height="20"
            viewBox="0 0 300 300"
            version="1.1"
            fill="#495057"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66" />
          </svg>
        </div>
      </div>

      <div className="col-start-12 col-end-[24] flex justify-end gap-14 max-lg:col-end-[25] max-md:gap-7 max-[500px]:col-span-full max-[500px]:justify-start">
        <div className="space-y-4">
          <p className="text-lg text-gray-7 max-sm:text-base">Plan & Pricing</p>
          <ul className="space-y-2 text-gray-6 max-sm:text-xs">
            <li>Features</li>
            <li>news & blogs</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="space-y-4">
          <p className="text-lg text-gray-7 max-sm:text-base">About us</p>
          <ul className="space-y-2 text-gray-6 max-sm:text-xs">
            <li>Documentation</li>
            <li>Papers</li>
            <li>Press conference</li>
          </ul>
        </div>
      </div>
      <div className="col-start-2 col-end-[24] space-y-4 max-lg:col-span-full">
        <div className="h-0.5 bg-gray-3"></div>
        <div className="flex items-center justify-between gap-2 max-md:flex-col-reverse">
          <p className="text-sm text-gray-6 max-sm:text-xs">
            © 2023 sellsource.co All rights reserved.
          </p>
          <ul className="flex items-center gap-8">
            <li className="text-sm text-gray-6 max-sm:text-xs">
              Terms of Service
            </li>
            <li className="text-sm text-gray-6 max-sm:text-xs">
              Privacy Policy
            </li>
            <li className="text-sm text-gray-6 max-sm:text-xs">Cookies</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
