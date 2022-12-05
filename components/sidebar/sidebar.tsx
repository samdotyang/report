import React, { useEffect, useState, useContext } from 'react';
import SidebarNav from '@components/Sidebar/SidebarNav';
import SidebarHeader from './SidebarHeader';
import { FaBars, FaTimes } from "react-icons/fa";
import { UpdateChartColor } from "@components/Cards/CardDoughnutChart";
import { ThemeContext } from "@components/Theme";
import { MdDarkMode } from "react-icons/md";
import { ThemeSwitch } from '@components/Theme/ThemeSwitch';

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = useState("hidden");
  const [isDarkTheme, setIsDarkTheme] = useState(`true`);

  useEffect(() => {
    setIsDarkTheme(localStorage.getItem("isDarkTheme")!);
    return () => {};
  }, [])

  const themeContext: { 
    isDarkMode?: boolean;
    toggleThemeHandler: () => void
  } = useContext(ThemeContext)

  // function toggleThemeHandler(): void {
  //   themeContext.toggleThemeHandler();
  //   UpdateChartColor(`${localStorage.getItem("isDarkTheme")}`);
  // }

  const switchHandler = (e) => {
    themeContext.toggleThemeHandler();
    setIsDarkTheme(`${localStorage.getItem("isDarkTheme")}`)
    UpdateChartColor(`${localStorage.getItem("isDarkTheme")}`)
  }

  return (
    <nav 
      className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-mac-sidebar-light dark:bg-mac-sidebar-gray flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4"
      id="sidebar"
    >
      <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
        {/* Toggler */}
        <button
          className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
          type="button"
          onClick={() => setCollapseShow("bg-mac-sidebar-light dark:bg-mac-sidebar-gray m-2 py-3 px-6")}
        >
          <FaBars style={{ color: isDarkTheme == "true" ? "white": "black" }} />
        </button>

        {/* Header */}
        <SidebarHeader>Automation ™️</SidebarHeader>

        {/* Collapse */}
        <div
          className={
            "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
            collapseShow
          }
        >
          {/* Collapse header */}
          <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
            <div className="flex flex-wrap">
              <div className="w-6/12">
                <SidebarHeader>Automation ™️</SidebarHeader>
              </div>
              <div className="w-6/12 flex justify-end">
                <button
                  type="button"
                  className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                  onClick={() => setCollapseShow("hidden")}
                >
                  <FaTimes style={{ color: isDarkTheme == "true" ? "white": "black" }}/>
                </button>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <SidebarNav />
        </div>
        <div className='sticky top-[100vh]'>
          {/* Footer */}
          <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
          <button
            type="button"
          >
            <ThemeSwitch isDarkTheme={isDarkTheme === `true` ? true : false} onchangeHandler={switchHandler}/>
          </button>
        </div>
        </div>
      </div>
      
    </nav>
  )
}
