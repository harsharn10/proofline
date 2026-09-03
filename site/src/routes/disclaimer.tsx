import { createFileRoute } from "@tanstack/react-router";
import { LegalContact, LegalNav, LegalPage } from "@/components/legal-page";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Disclaimer · Icarus" },
      {
        name: "description",
        content: "Important limits and risks for information published by Icarus.",
      },
    ],
  }),
  component: DisclaimerPage,
});

function DisclaimerPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Disclaimer"
      summary="Icarus reports information. It does not recommend projects, predict outcomes, or replace your own verification."
    >
      <LegalNav />

      <section>
        <h2>Information only</h2>
        <p>
          Icarus is an independent research and information service powered by Project Proofline.
          Nothing on this site or in an Icarus post is investment, financial, trading, legal, tax,
          accounting, cybersecurity, or other professional advice. Nothing is an offer,
          solicitation, or recommendation to buy, sell, hold, use, or avoid any asset, protocol,
          service, or project. No fiduciary, advisory, client, or professional relationship is
          created.
        </p>
      </section>

      <section>
        <h2>No endorsement, approval, or affiliation</h2>
        <p>
          Being listed or omitted, ordering, rankings, scores, labels, badges, links, alerts, and
          Telegram posts do not indicate endorsement, approval, support, sponsorship, partnership,
          affiliation, legitimacy, safety, or disapproval. Icarus does not certify or approve any
          project, developer, founder, operator, token, contract, claim, audit, or market. Project
          names and marks belong to their respective owners.
        </p>
      </section>

      <section>
        <h2>Not an audit or guarantee</h2>
        <p>
          A profile is a dated research snapshot, not a smart-contract audit, identity check,
          background check, legal review, valuation, solvency review, or continuous monitoring
          service. A contract being deployed, verified on an explorer, controlled by a multisig,
          audited by someone else, or assigned a favorable label does not make it safe. Missing risk
          language does not mean a risk is absent. Icarus cannot know or predict which projects will
          fail, be hacked, be exploited, change control, remove liquidity, manipulate a market,
          mislead users, or carry out a rug pull.
        </p>
      </section>

      <section>
        <h2>Automated and fallible information</h2>
        <p>
          Icarus combines automated collection, software rules, third-party data, public statements,
          on-chain reads, and human review. Any part of that process can fail. Information may be
          inaccurate, incomplete, duplicated, misclassified, mistranscribed, stale, unavailable, or
          delayed. Sources can be wrong, compromised, changed, deleted, or impersonated. Chain
          reorganizations, API failures, indexing delays, naming collisions, proxy upgrades, and
          address attribution errors can change the correct reading. Figures may use different time
          windows or definitions and should not be assumed comparable.
        </p>
        <p>
          Dates and “as of” labels indicate when information was observed, not that it remains true.
          Icarus has no duty to update any item on a particular schedule and may correct, revise, or
          remove content without notice.
        </p>
      </section>

      <section>
        <h2>Digital-asset and protocol risks</h2>
        <p>
          Digital assets and decentralized protocols are speculative and can be extremely volatile.
          You may lose some or all of what you commit. Risks include fraud, rug pulls,
          smart-contract bugs, malicious upgrades, privileged-key misuse, oracle or bridge failure,
          insolvency, market manipulation, illiquidity, slippage, front-running, stablecoin depegs,
          custody or wallet compromise, phishing, transaction mistakes, tax consequences, and legal
          or regulatory changes. Transactions may be irreversible, and recovery may be impossible.
        </p>
      </section>

      <section>
        <h2>Verify independently</h2>
        <p>
          Treat Icarus as a starting point only. Before acting, independently verify every material
          claim, contract address, token identity, permission, owner, fee, liquidity figure, and
          link using current primary sources and on-chain data. Confirm addresses through more than
          one trusted official channel. Review source code and qualified professional audits where
          appropriate, inspect approvals before signing, and never share a private key or seed
          phrase. You alone decide whether and how to act and are responsible for those decisions.
        </p>
      </section>

      <section>
        <h2>Third parties</h2>
        <p>
          Links and quoted or summarized material are provided for context. Icarus does not control
          third-party websites, wallets, interfaces, explorers, APIs, contracts, or services and is
          not responsible for their availability, accuracy, security, content, policies, or conduct.
          A link is not an endorsement. Check the destination and address before connecting a wallet
          or signing a transaction.
        </p>
      </section>

      <section>
        <h2>No warranties; limits on liability</h2>
        <p>
          The site and its content are provided “as is” and “as available.” To the fullest extent
          permitted by law, Icarus and its operator, maintainers, and contributors disclaim all
          express and implied warranties, including warranties of accuracy, completeness,
          timeliness, reliability, availability, security, merchantability, fitness for a particular
          purpose, title, and non-infringement.
        </p>
        <p>
          To the fullest extent permitted by law, those parties will not be liable for losses or
          damages arising from access to, use of, inability to use, or reliance on Icarus or any
          linked third party—including trading or investment losses, loss of tokens, profits,
          opportunity, goodwill, or data, and indirect, incidental, special, exemplary, punitive, or
          consequential damages. Nothing here excludes or limits liability that applicable law does
          not allow to be excluded or limited.
        </p>
      </section>

      <section>
        <h2>Corrections and contact</h2>
        <p>
          Icarus may make mistakes. If you identify one, provide the exact statement, the affected
          page, and current primary evidence. A submission does not guarantee a change, response, or
          publication, and disagreement with an analysis does not by itself establish a factual
          error.
        </p>
        <LegalContact />
      </section>
    </LegalPage>
  );
}
