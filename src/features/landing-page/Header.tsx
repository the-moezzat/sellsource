function Header() {
  return (
    <div className="flex items-center justify-between py-4">
      <img src="/logo.svg" alt="logo" className="h-6" />
      <ul className="flex items-center gap-12">
        <li>
          <a href="#business" className="text-lg text-gray-7">
            Business
          </a>
        </li>
        <li>
          <a href="#developer" className="text-lg  text-gray-7">
            Developer
          </a>
        </li>
        <li>
          <a href="#faq" className="text-lg  text-gray-7">
            {" "}
            FAQ{" "}
          </a>
        </li>
      </ul>
      <button className=" rounded-lg bg-primary-base px-6 py-2 text-tertiary-base transition-all hover:bg-primary-5">
        Join us
      </button>
    </div>
  );
}

export default Header;
