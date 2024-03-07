export interface SiteDataInterface {
  name: string;
  defaultTitle: string;
  author: string;
  twitterAuthor: string;
  description: string;
  keywords: string[];
  url: UrlDataInterface;
  social: SocialDataInterface;  
}

interface UrlDataInterface {
  base: string;
  author: string;
}

interface SocialDataInterface {
  github?: string;
  twitter?: string;
  mastodon?: string;
  linkedin?: string;
}