export type SiteExample = {
  id: string;
  title: string;
  summary: string;
  /** shipped = live MVP; idea = coming work. Defaults to idea when omitted. */
  status?: "shipped" | "idea";
};

/** Short blurbs for company-site examples. Source: macovin/project-ideas. */
export const siteExamples: SiteExample[] = [
  {
    id: "shimmering-stars",
    title: "Shimmering Stars",
    status: "shipped",
    summary:
      "A live astrology site we already run in the same factory. Birth charts and the product week around them. It shipped. Proof we can take something live, not a deck slide we’re still inventing.",
  },
  {
    id: "elder-care",
    title: "Elder care (end of life)",
    status: "idea",
    summary:
      "One place with what you need to know when you’re caring for a family member at the end of life. Not a clinic. Not a sales funnel. The practical stuff people scramble for when nobody handed them a packet.",
  },
  {
    id: "texas-workers-rights",
    title: "Texas workers’ rights (nurses first)",
    status: "idea",
    summary:
      "A Texas workers’ rights site with real answers for specific jobs, starting with nurses. What you’re allowed to refuse, what has to be in writing, who to call. Plain language. Not a law firm. Not a rant.",
  },
];
