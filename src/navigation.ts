import { getPermalink } from './utils/permalinks';
import { hub } from './hub';

const editionLinks = [
  ...(hub.upcoming
    ? [{ text: `SAIMI ${hub.upcoming.year} — ${hub.upcoming.city}`, href: hub.upcoming.url ?? getPermalink('/#upcoming') }]
    : []),
  ...hub.past.map((e) => ({
    text: `SAIMI ${e.year} — ${e.city}`,
    href: e.url ?? getPermalink('/#past'),
  })),
];

export const headerData = {
  links: [
    { text: 'About', href: getPermalink('/#about') },
    { text: 'Editions', links: editionLinks },
    { text: 'Sponsoring', href: getPermalink('/#sponsoring') },
    { text: 'Steering Committee', href: getPermalink('/#sc') },
    { text: 'Code of Conduct', href: getPermalink('/code-of-conduct') },
    { text: 'Contact', href: getPermalink('/#contact') },
  ],
};

export const footerData = {
  socialLinks: [{ ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: hub.linkedin }],
  footNote: `
    SAIMI — Symposium on Artificial Intelligence in Medical Imaging · Endorsed by the MICCAI Society<br />
    Maintained by the SAIMI steering committee. Based on the AstroWind template.
  `,
};
