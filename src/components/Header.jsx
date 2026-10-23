import logo from "../assets/logo.png";

function Header() {
  return (
    <>
      <header className="sticky top-0 h-16 bg-primary z-50 py-2 shrink-0 shadow-sm mb-10">
        <div className="flex items-center size-full mx-auto max-w-7xl px-6 ">
          <img src={logo} alt="" className="object-contain h-full" />
          <h1 className="text-background mx-5 text-base font-bold"></h1>
        </div>
      </header>
    </>
  );
}

export default Header;
