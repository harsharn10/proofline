import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalContact, LegalNav, LegalPage } from "@/components/legal-page";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use · Icarus" },
      { name: "description", content: "Terms governing access to and use of Icarus." },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Use"
      summary="These terms govern your access to and use of the Icarus website and published material."
    >
      <LegalNav />

      <section>
        <h2>Acceptance</h2>
        <p>
          By accessing or using Icarus, you agree to these Terms and the{" "}
          <Link to="/privacy">Privacy Policy</Link>. If you do not agree, do not use the service.
          You must be legally capable of agreeing to these Terms. If you use Icarus for an
          organization, you represent that you are authorized to bind it.
        </p>
      </section>

      <section>
        <h2>The service</h2>
        <p>
          Icarus is an independent, automated research and information service powered by Project
          Proofline. It publishes dated observations about third-party projects, markets, contracts,
          public statements, and on-chain activity. Icarus does not custody assets, execute trades,
          operate the covered projects, or act as a broker, exchange, investment adviser, auditor,
          ratings agency, fiduciary, or insurer.
        </p>
      </section>

      <section>
        <h2>No advice, endorsement, or reliance</h2>
        <p>
          The <Link to="/disclaimer">Disclaimer</Link> is part of these Terms. Icarus does not
          recommend, endorse, certify, support, or guarantee any covered project or outcome. Content
          may be incomplete, delayed, or wrong. You must perform your own current verification and
          obtain qualified professional advice when needed. You assume all risk from decisions you
          make or transactions you sign.
        </p>
      </section>

      <section>
        <h2>Your responsibilities</h2>
        <ul>
          <li>Comply with laws and rules that apply to you and your location.</li>
          <li>
            Verify identities, links, contract addresses, permissions, and transaction details.
          </li>
          <li>Protect your devices, wallets, credentials, private keys, and seed phrases.</li>
          <li>Pay any taxes, fees, or reporting obligations arising from your activity.</li>
          <li>
            Use your own judgment; do not treat a listing, score, label, or omission as a safety
            signal.
          </li>
        </ul>
      </section>

      <section>
        <h2>Prohibited use</h2>
        <p>You may not:</p>
        <ul>
          <li>use Icarus to violate law, infringe rights, defraud, mislead, or harm anyone;</li>
          <li>
            misrepresent Icarus content as an endorsement, audit, guarantee, or live trading signal;
          </li>
          <li>falsely imply affiliation with Icarus, Project Proofline, or a covered project;</li>
          <li>
            introduce malware, bypass access controls, probe non-public systems, or disrupt the
            service;
          </li>
          <li>
            send automated traffic that materially impairs the service or evades reasonable limits;
            or
          </li>
          <li>
            remove source attribution or present altered content as an unmodified Icarus
            publication.
          </li>
        </ul>
      </section>

      <section>
        <h2>Content and third-party rights</h2>
        <p>
          Icarus content may include facts, original analysis, software output, links, quotations,
          names, logos, and material belonging to third parties. Rights in third-party material stay
          with their owners. No right to use a third party’s trademark or other protected material
          is granted. Unless a separate license expressly applies, no license is granted beyond the
          limited right to access and use the site for lawful personal or internal informational
          purposes. Applicable exceptions and mandatory rights remain unaffected.
        </p>
      </section>

      <section>
        <h2>Availability and changes</h2>
        <p>
          Icarus may add, revise, correct, suspend, restrict, or remove content or functionality at
          any time. It does not promise continuous availability, complete coverage, a particular
          update schedule, preservation of historical material, or support for any device or region.
          Access may be limited or terminated when reasonably necessary for security, maintenance,
          legal compliance, or suspected misuse.
        </p>
      </section>

      <section>
        <h2>No warranties and limitation of liability</h2>
        <p>
          Icarus is provided “as is” and “as available.” To the fullest extent permitted by law,
          Icarus and its operator, maintainers, and contributors disclaim all express and implied
          warranties and will not be liable for losses or damages arising from the service, its
          content, reliance on it, or third-party services—including lost assets, trading losses,
          lost profits, lost opportunity, lost data, and indirect, incidental, special,
          consequential, exemplary, or punitive damages.
        </p>
        <p>
          If applicable law does not permit a particular exclusion or limitation, that exclusion or
          limitation applies only to the maximum extent permitted. Nothing in these Terms limits a
          right or liability that cannot lawfully be limited.
        </p>
      </section>

      <section>
        <h2>Changes to these Terms</h2>
        <p>
          These Terms may be updated as the service changes. The “Last updated” date identifies the
          current version. Continuing to use Icarus after an update means you accept the revised
          Terms to the extent permitted by law. If a provision is unenforceable, the remaining
          provisions continue in effect. A failure to enforce a provision is not a waiver.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <LegalContact />
      </section>
    </LegalPage>
  );
}
