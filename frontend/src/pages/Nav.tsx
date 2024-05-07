let items = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];


const Nav = () => {
    return (
          <nav className="bg-secondary py-4">
            <div className="container mx-auto flex justify-between items-center">
              <div className="text-white font-bold text-lg">My website.</div>
              <div className="hidden md:block">
                <ul className="flex space-x-4">
                  {items.map((item) => (
                    <li key={item.path} className="text-white hover:text-gray-300"><a href={item.path} className="text-white hover:text-gray-300">{item.name}</a></li>
                    ))}
                </ul>
              </div>
              <div className="md:hidden">
                <button id="mobile-menu-toggle" className="text-white focus:outline-none">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                </button>
              </div>
            </div>
            <div id="mobile-menu" className="hidden md:hidden bg-gray-700">
              <ul className="flex flex-col space-y-4">
                {items.map((item) => (
                    <li key={item.path} className="block py-2 px-4 text-white hover:bg-gray-600"><a href={item.path} className="text-white hover:text-gray-300">{item.name}</a></li>
                ))}
              </ul>
            </div>
          </nav>
    );
};

export default Nav;