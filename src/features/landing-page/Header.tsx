function Header() {
  return (
    <nav className="flex min-h-[68px] items-center justify-between py-4">
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
      <button className=" rounded-lg bg-primary-base px-5 py-2 text-sm text-tertiary-base transition-all hover:bg-primary-5">
        Join us
      </button>
    </nav>
  );
}

export default Header;
