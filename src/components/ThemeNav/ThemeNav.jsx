import { useEffect, useState } from "react";

const ThemeNav = () => {
  const [theme, setTheme] = useState('');
  useEffect(() => {
      setTheme(localStorage.getItem("theme"));
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);
  const themeNames = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
    "dim",
    "nord",
    "sunset",
  ];
  const handleThemeName = (tme) => {
    const result = tme.target.value;
    localStorage.setItem("theme", result);
  };
  return (
    <>
      <dialog id="theme_page" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box relative">
            <h1 className="text-2x mb-5">Choses Your Theme</h1>
          <ul
            tabIndex={0}
            className="dropdown-content space-y-3 z-[1] p-2 w-full"
          >
            {themeNames.map((themeName, idx) => (
              <li key={idx}>
                <input
                  type="radio"
                  name="theme_dropdown"
                  onChange={handleThemeName}
                  className="theme-controller font-montserrat btn btn-sm btn-block btn-ghost justify-start"
                  aria-label={themeName}
                  value={themeName}
                />
              </li>
            ))}
          </ul>
          <div className="modal-action absolute top-1 right-4">
            <form method="dialog" onSubmit={handleThemeName}>
              <button className="btn btn-ghost px-8 font-light">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default ThemeNav;
