export type SiteExample = {
  id: string;
  title: string;
  summary: string;
};

/** Short blurbs for company-site examples. Source: macovin/project-ideas. */
export const siteExamples: SiteExample[] = [
  {
    id: "elder-care",
    title: "Elder care (end of life)",
    summary:
      "One place with what you need to know when you’re caring for a family member at the end of life. Not a clinic. Not a sales funnel. The practical stuff people scramble for when nobody handed them a packet.",
  },
  {
    id: "texas-workers-rights",
    title: "Texas workers’ rights (nurses first)",
    summary:
      "A Texas workers’ rights site with real answers for specific jobs, starting with nurses. What you’re allowed to refuse, what has to be in writing, who to call. Plain language. Not a law firm. Not a rant.",
  },
];
