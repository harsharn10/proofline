declare module "virtual:proofline-content" {
  const content: {
    site: string;
    changelog: Record<string, string>;
    accounts: string;
    census: string;
    methodology: string;
    derived: string;
    taxonomy: string;
    dependencies: Record<string, string>;
    projects: Record<string, string>;
    sources: Record<string, string>;
    research: Record<string, string>;
    feed: Record<string, string>;
  };
  export default content;
}
