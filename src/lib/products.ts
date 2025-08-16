import { Server, Globe, Link2, CircleHelp } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Product = {
  icon: LucideIcon;
  title: string;
  slug: string;
  description: string;
  status: string;
  variant: string;
  link: string | null;
};

export const products: Product[] = [
  {
    icon: Link2,
    title: 'Linewize Link Checker',
    slug: 'linewize-link-checker',
    description: 'A tool to instantly check if a URL is blocked by Linewize filters.',
    status: 'Finished',
    variant: 'default',
    link: 'https://github.com/Lonely-Corporation/Is-the-Proxy-Blocked',
  },
  {
    icon: Server,
    title: 'Proxy',
    slug: 'proxy',
    description: 'A fast and reliable proxy service powered by Ultraviolet, under active development.',
    status: 'In Development',
    variant: 'secondary',
    link: 'https://github.com/Lonely-Corporation/The-Lonely-Proxy',
  },
  {
    icon: Globe,
    title: 'Proxy Integrated Browser',
    slug: 'proxy-integrated-browser',
    description: 'A custom browser with integrated proxy features for seamless access.',
    status: 'Not Started',
    variant: 'outline',
    link: null,
  },
  {
    icon: CircleHelp,
    title: 'Placeholder',
    slug: 'placeholder-1',
    description: 'Your next great idea could be here. Stay tuned for future developments.',
    status: 'Planned',
    variant: 'outline',
    link: null,
  },
  {
    icon: CircleHelp,
    title: 'Placeholder',
    slug: 'placeholder-2',
    description: 'Your next great idea could be here. Stay tuned for future developments.',
    status: 'Planned',
    variant: 'outline',
    link: null,
  },
];
