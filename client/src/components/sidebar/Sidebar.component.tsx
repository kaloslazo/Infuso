import { useState } from "react";
import { NavLink } from "react-router-dom";
import { sidebarLinks, auxiliarSidebarLinks } from "@/config/site/sidebarLinks.config";
import { SidebarLinksInterface, LinksInterface } from "@/types/site/sidebarLinks.type";
import { siteConfig } from "@/config/site/metadata.config";

interface sidebarTogglePropsInterface {
  icon: JSX.Element;
  className: string;
  onClick: () => void;
}

const SidebarToggle = ({ icon, className, onClick }: sidebarTogglePropsInterface) => {
  return (
    <button className={className} onClick={onClick}>{icon}</button>
  );
};

export const SidebarComponent = () => {
  const [isAuxiliarSidebarOpen, setIsAuxiliarSidebarOpen] = useState(true);
  const toggleAuxiliarSidebar = () => setIsAuxiliarSidebarOpen(!isAuxiliarSidebarOpen);

  return (
    <nav className={`inline-flex text-ctp-overlay0 ${isAuxiliarSidebarOpen ? 'w-60' : 'w-16'}`}>
      {/* Links sidebar */}
      <ul className="z-10 w-16 h-full px-4 py-4 border-r-2 bg-ctp-mantle border-ctp-base">
        <li className="flex flex-col items-center justify-around h-full gap-8">
          {
            sidebarLinks.map((eachCategory: SidebarLinksInterface) => (
              <div className="flex flex-col gap-4" key={eachCategory.links[0].name}>
                {
                  eachCategory.links.map((eachLink: LinksInterface) => {
                    if (eachLink.collapse) return ( <SidebarToggle className={'sidebar-link-icon'} icon={eachLink.icon} key={eachLink.name} onClick={toggleAuxiliarSidebar}/> );
                    return (
                      <NavLink to={eachLink.url} className={({ isActive }) => isActive ? 'sidebar-link-icon sidebar-link-icon-active'  : 'sidebar-link-icon' } key={eachLink.name}>
                        {eachLink.icon}
                      </NavLink>
                    )
                  })
                }
              </div>
            ))
          }
        </li>
      </ul>
      {/* Auxiliar sidebar */}
      <ul className={`${isAuxiliarSidebarOpen ? 'translate-x-0' : '-translate-x-full'} flex-shrink-0 bg-ctp-mantle transition-all ease-in-out duration-500 h-full overflow-hidden w-44`}>
        <li className="transition-opacity duration-500 ease-in-out" style={{opacity: isAuxiliarSidebarOpen ? 1 : 0}}>
          <div className="w-full px-4 py-4 text-xl font-semibold border-b-2 border-ctp-base text-ctp-mauve">
            <h2>{siteConfig.name}</h2>
          </div>
          <div className="px-4 py-4 ">
            {
              auxiliarSidebarLinks.map((eachAuxiliarLink: LinksInterface) => (
                <NavLink to={eachAuxiliarLink.url} className="inline-flex items-center gap-2 text-base text-ctp-overlay0" key={eachAuxiliarLink.name}>
                  <span>{eachAuxiliarLink.icon}</span>
                  <span>{eachAuxiliarLink.name}</span>
                </NavLink>
              )
            )}
          </div>
        </li>
    </ul>
    </nav>
  );
};