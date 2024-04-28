import { useEffect, useState } from "react";
import { Bounce, Slide } from "react-awesome-reveal";

const ThemeNav = () => {
  const [theme, setTheme] = useState();
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
    setTheme(result);
  };
  return (
    <>
      <dialog id="theme_page" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box relative">
          <div className="modal-action flex items-center justify-between mb-5">
              <Bounce dumping={0.1}>
            <h1 className="text-xl flex gap-2 items-center">Choses Your Theme <span className="font-montserrat font-medium">({theme})</span></h1>
            <form method="dialog">
                <button className="btn btn-ghost px-8 font-light">Close</button>
            </form>
              </Bounce>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content space-y-3 z-[1] p-2 w-full"
          >
            {themeNames.map((themeName, idx) => (
              <li key={idx}>
                <Slide dumping={0.1}>
                  <input
                    type="radio"
                    name="theme_dropdown"
                    onChange={handleThemeName}
                    className="theme-controller font-montserrat btn btn-sm btn-block btn-ghost justify-start"
                    aria-label={themeName}
                    value={themeName}
                  />
                </Slide>
              </li>
            ))}
          </ul>
        </div>
      </dialog>
    </>
  );
};

export default ThemeNav;
