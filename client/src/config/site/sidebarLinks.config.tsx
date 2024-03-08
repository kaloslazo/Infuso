import { TbArchive, TbArticle, TbBookmark, TbBrandGithub, TbClock, TbInfoCircle, TbLayoutGrid, TbLayoutSidebar, TbRocket, TbSettings, TbUser } from "react-icons/tb";
import { SidebarLinksInterface, LinksInterface } from "@/types/site/sidebarLinks.type";

export const sidebarLinks: SidebarLinksInterface[] = [
  {
    links: [
      { name: 'Infuso', url: 'https://www.github.com/kaloslazo/infu', icon: <TbBrandGithub  /> },
      { name: 'Collapse', url: '/', icon: <TbLayoutSidebar  />, break: true, collapse: true },
    ],
  },
  {
    links: [
      { name: 'Home', url: '/feed', icon: <TbLayoutGrid  /> },
      { name: 'Library', url: '/library', icon: <TbArchive  />, break: true },
      { name: 'Discover', url: '/discover', icon: <TbRocket  />, break: true },
    ],
  },
  {
    links: [
      { name: 'Preferences', url: '/preferences', icon: <TbSettings  /> },
      { name: 'Account', url: '/account', icon: <TbUser  /> },
      { name: 'About', url: '/about', icon: <TbInfoCircle  /> },
    ],
  },
];

export const auxiliarSidebarLinks: LinksInterface[] = [
  { name: 'Latest', url: '/feed', icon: <TbArticle  /> },
  { name: 'Bookmark', url: '/feed/starred', icon: <TbBookmark  /> },
  { name: 'Read Later', url: '/feed/read-later', icon: <TbClock  /> },
];