/* =============================================================================
 * SAIMI hub configuration for saimi.ch
 * =============================================================================
 *
 * The hub is permanent and maintained by the steering committee. It is the one
 * SAIMI site that keeps changing; individual editions live at YYYY.saimi.ch and
 * are frozen once their event is over.
 *
 * After each edition:
 *   1. move the finished edition from `upcoming` into `past`
 *   2. set `upcoming` to the next edition (or `null` while the host is unknown)
 * -------------------------------------------------------------------------- */

export interface Edition {
  year: number;
  /** e.g. '6 July 2027' */
  date: string;
  /** e.g. 'University of Lucerne' */
  venue: string;
  city: string;
  /** e.g. 'https://2027.saimi.ch', or null if the site is not up yet. */
  url: string | null;
  /** Optional one-liner shown on the card. */
  note?: string;
}

export interface Person {
  name: string;
  role?: string;
  image?: string;
}

export const hub = {
  /** The next edition, or null while no host has been confirmed. */
  upcoming: {
    year: 2027,
    date: '6 July 2027',
    venue: 'University of Lucerne',
    city: 'Lucerne',
    url: 'https://2027.saimi.ch',
    note: 'Main Building, Frohburgstrasse 3',
  } as Edition | null,

  /** Most recent first. */
  past: [
    {
      year: 2026,
      date: '18 June 2026',
      venue: 'University of Bern',
      city: 'Bern',
      url: 'https://2026.saimi.ch',
      note: 'The first SAIMI edition',
    },
  ] as Edition[],

  steeringCommittee: [
    {
      name: 'Christian F. Baumgartner',
      role: 'University of Lucerne, Switzerland',
      image: '~/assets/images/christian.jpg',
    },
    {
      name: 'Meritxell Bach Cuadra',
      role: 'CIBM Center for Biomedical Imaging, Lausanne University (UNIL), Radiology Department (CHUV)',
      image: '~/assets/images/meritxell.jpeg',
    },
    { name: 'Ece Özkan Elsen', role: 'University of Basel, Switzerland', image: '~/assets/images/ece.jpeg' },
    { name: 'Lisa M. Koch', role: 'University of Bern, Switzerland', image: '~/assets/images/lisa.png' },
    { name: 'Ender Konukoglu', role: 'ETH Zürich, Switzerland', image: '~/assets/images/ender.jpg' },
    { name: 'Henning Müller', role: 'HES-SO Valais, Switzerland', image: '~/assets/images/henning.jpg' },
    { name: 'Mauricio Reyes', role: 'University of Bern, Switzerland', image: '~/assets/images/mauricio.jpg' },
  ] as Person[],

  /**
   * TODO: replace with a role address (e.g. info@saimi.ch) once it exists, so
   * the contact point survives changes in the organising teams.
   */
  contactEmail: null as string | null,

  linkedin:
    'https://www.linkedin.com/company/symposium-on-artificial-intelligence-in-medical-imaging',
};

export default hub;
