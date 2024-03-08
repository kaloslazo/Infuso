import { useState } from "react";
import { NavLink } from "react-router-dom";
import { TbCoffee } from "react-icons/tb";
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
    <nav className={`inline-flex text-ctp-overlay0 ${isAuxiliarSidebarOpen ? 'w-56' : 'w-16'}`}>
      {/* Links sidebar */}
      <ul className="z-10 z-30 w-16 h-full px-4 py-4 border-r-2 bg-ctp-mantle border-ctp-base">
        <li className="flex flex-col items-center justify-between h-full gap-8">
          {
            sidebarLinks.map((eachCategory: SidebarLinksInterface) => (
              <div className="flex flex-col gap-4" key={eachCategory.links[0].name}>
                {
                  eachCategory.links.map((eachLink: LinksInterface) => {
                    if (eachLink.collapse) return ( <SidebarToggle className={'sidebar-link-icon'} icon={eachLink.icon} key={eachLink.name} onClick={toggleAuxiliarSidebar}/> );
                    return (
                      <NavLink to={eachLink.url} className={({ isActive }) => isActive ? 'sidebar-link-icon sidebar-link-icon-active'  : 'sidebar-link-icon'} key={eachLink.name}>
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
      <ul className={`${isAuxiliarSidebarOpen ? 'translate-x-0' : '-translate-x-full'} z-20 flex-shrink-0 bg-ctp-mantle transition-all ease-in-out duration-500 h-full overflow-hidden w-44`}>
        <li className="transition-opacity duration-500 ease-in-out " style={{opacity: isAuxiliarSidebarOpen ? 1 : 0}}>
          {/* Brand icon */}
          <div className="inline-flex items-center w-full gap-2 px-4 py-3 text-2xl font-semibold border-b-2 border-ctp-base text-ctp-mauve">
            <TbCoffee />
            <h2 className="text-xl font-bold">{siteConfig.name}</h2>
          </div>
          {/* Activity */}
          <div>
            <h3 className="px-4 py-2 mt-2 mb-2 text-sm font-medium">Activity</h3>
            <div className="flex flex-col gap-2">
              {
                auxiliarSidebarLinks.map((eachAuxiliarLink: LinksInterface) => (
                  <NavLink to={eachAuxiliarLink.url} className={({ isActive }) => isActive ? 'auxiliar-sidebar-link auxiliar-sidebar-link-active'  : 'auxiliar-sidebar-link'} key={eachAuxiliarLink.name}>
                    <span className="text-base">{eachAuxiliarLink.icon}</span>
                    <span>{eachAuxiliarLink.name}</span>
                  </NavLink>
                )
              )}
            </div> 
          </div>
          {/* Show feeds */}
          <div>
            <h3 className="px-4 py-2 mt-4 mb-2 text-sm font-medium">Feeds</h3>
            <div className="text-sm text-ctp-text">
              <ul className="flex flex-col gap-2">
                <li>
                  <NavLink className={({ isActive }) => isActive ? 'auxiliar-sidebar-link auxiliar-sidebar-link-active'  : 'auxiliar-sidebar-link'} to="/a">
                    <img src="https://theme.zdassets.com/theme_assets/968999/d8a347b41db1ddee634e2d67d08798c102ef09ac.jpg" alt="" className="w-5 border-2 rounded-md border-ctp-base"/>
                    <span>New York Times</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink className={({ isActive }) => isActive ? 'auxiliar-sidebar-link auxiliar-sidebar-link-active'  : 'auxiliar-sidebar-link'} to="/b">
                    <img src="https://pbs.twimg.com/profile_images/1726535737917489152/nfd5XGHy_400x400.png" alt="" className="w-5 border-2 rounded-sm border-ctp-base"/>
                    <span>Xataka</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink className={({ isActive }) => isActive ? 'auxiliar-sidebar-link auxiliar-sidebar-link-active'  : 'auxiliar-sidebar-link'} to="/c">
                    <img src="https://larepublica.cronosmedia.glr.pe/taxonomy/category/image/photos/2023/02/01/b564j63cf9-placeholder-author.jpg" alt="" className="w-5 border-2 rounded-md border-ctp-base"/>
                    <span>La República</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink className={({ isActive }) => isActive ? 'auxiliar-sidebar-link auxiliar-sidebar-link-active'  : 'auxiliar-sidebar-link'} to="/d">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ7CtyiWsooIunByI5SIvWzNwCSckljT3MOaHPYAlO37PkFijq4gzMH89CWtK7QW9mwgk&usqp=CAU" alt="" className="w-5 border-2 rounded-md border-ctp-base"/>
                    <span>The Verge</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </li>
    </ul>
    </nav>
  );
};