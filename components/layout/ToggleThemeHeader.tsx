import { UpdateChartColor } from "@components/Cards/CardDoughnutChart";
import { ThemeContext } from "@components/Theme";
import { useContext } from "react";
import { MdDarkMode } from "react-icons/md";

export default function ToggleThemeHeader() {
  const themeContext: { 
    isDarkMode?: boolean;
    toggleThemeHandler: () => void
  } = useContext(ThemeContext)

  function toggleThemeHandler(): void {
    themeContext.toggleThemeHandler();
    UpdateChartColor(`${localStorage.getItem("isDarkTheme")}`);
  }

  return (
    <>
      <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
        <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
          <button
            type="button"
            // className="py-1 sm:py-2.5 px-2 sm:px-5 mr-2 bg-zinc-800 text-white dark:bg-zinc-200 dark:text-black rounded"
            onClick={toggleThemeHandler}
          >
            {/* <MdBrightnessMedium /> */}
            <MdDarkMode className="text-lg rounded dark:text-white text-black" />
          </button>
        </div>
      </nav>
      <div className="relative md:pt-32 pb-6 pt-12">
          <div className="px-4 md:px-10 mx-auto w-full"></div>
      </div>
    </>
  )
}