export interface SidebarLinksInterface {
  links: LinksInterface[]
}

export interface LinksInterface {
  name: string;
  url: string;
  icon: JSX.Element;
  break?: boolean;
  collapse?: boolean;
}