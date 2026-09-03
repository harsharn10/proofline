import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalContact, LegalNav, LegalPage } from "@/components/legal-page";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy · Icarus" },
      { name: "description", content: "How Icarus handles visitor and maintainer information." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      summary="This policy explains what Icarus handles when you visit the site or use its private maintainer tools."
    >
      <LegalNav />

      <section>
        <h2>Scope</h2>
        <p>
          This policy applies to the Icarus website and its private maintainer review tools. It does
          not govern third-party projects, block explorers, social platforms, Telegram, GitHub, or
          other sites linked from Icarus. Those services apply their own privacy policies.
        </p>
      </section>

      <section>
        <h2>Information handled</h2>
        <h3>Public visitors</h3>
        <p>
          The public site does not currently offer visitor accounts, comments, purchases, or a
          public submission form. Icarus application code does not currently use advertising
          trackers or analytics cookies. Your browser stores a light-or-dark theme preference
          locally on your device. Icarus does not intentionally receive that preference.
        </p>
        <p>
          Like most web services, hosting, network, and security providers may automatically process
          technical request data such as IP address, browser and device information, requested URL,
          time, referring page, response status, and security signals. The exact fields and
          retention depend on the provider and configuration in use.
        </p>

        <h3>Private maintainer review</h3>
        <p>
          The restricted review area asks an authorized maintainer to provide a GitHub access token
          through browser HTTP authentication. The server uses it to verify the maintainer with
          GitHub and to perform the requested repository action. Successful verification is cached
          in memory for up to 30 seconds using a one-way hash. The application does not
          intentionally write the token to persistent storage, but it necessarily handles the
          credential in memory while processing the request. Browser, network, hosting, and GitHub
          systems may handle data under their own configurations and policies.
        </p>

        <h3>Research subjects</h3>
        <p>
          Icarus also processes publicly available or submitted information about projects and
          people acting publicly on their behalf, such as names, public handles, wallet and contract
          addresses, posts, repositories, and attributed statements. This is research content rather
          than visitor-account data. Do not submit private or sensitive personal information for
          publication.
        </p>
      </section>

      <section>
        <h2>How information is used</h2>
        <ul>
          <li>deliver, secure, diagnose, maintain, and improve the site;</li>
          <li>remember the theme selected on a device;</li>
          <li>authenticate authorized maintainers and carry out their review actions;</li>
          <li>research, verify, publish, correct, and preserve source-backed records;</li>
          <li>prevent abuse, investigate incidents, and comply with law; and</li>
          <li>respond to legal, privacy, or correction requests.</li>
        </ul>
      </section>

      <section>
        <h2>Legal bases where required</h2>
        <p>
          Where data-protection law requires a legal basis, processing is based on the legitimate
          interests of operating, securing, documenting, and improving an independent research
          service; performing an agreement or requested action for an authorized maintainer;
          complying with legal obligations; protecting legal rights and safety; or consent where it
          is specifically requested. Legitimate interests are weighed against the rights of affected
          people. Consent may be withdrawn for future processing, but withdrawal does not make prior
          processing unlawful.
        </p>
      </section>

      <section>
        <h2>Disclosure and sale</h2>
        <p>
          Information may be processed by providers needed to host, secure, and operate Icarus, and
          by GitHub when its authentication or repository services are used. It may also be
          disclosed when reasonably necessary to comply with law, protect rights or safety,
          investigate abuse, or complete a reorganization or transfer of the service, subject to
          applicable law.
        </p>
        <p>
          Icarus application code does not currently sell visitor personal information, share it for
          cross-context behavioral advertising, or use it for targeted advertising. If those
          practices change, this policy and any legally required notices or controls must be updated
          before the change is deployed.
        </p>
      </section>

      <section>
        <h2>Retention</h2>
        <p>
          The theme preference remains on your device until you change it, clear site data, or your
          browser removes it. Short-lived authentication cache entries expire after no more than 30
          seconds. Public research, sources, corrections, and repository history may be retained to
          preserve provenance and editorial accountability. Infrastructure providers may retain
          request and security data under their configurations and policies. Other information is
          kept only as long as reasonably needed for the purposes above, legal obligations, dispute
          resolution, and security.
        </p>
      </section>

      <section>
        <h2>Your choices and rights</h2>
        <p>
          You can clear the theme preference through your browser’s site-data controls. You can
          avoid sending referrer information by using browser privacy controls; Icarus also
          instructs browsers not to send referrer information from its pages. Do not use the private
          review area unless you are an authorized maintainer.
        </p>
        <p>
          Depending on where you live, you may have rights to request access, correction, deletion,
          restriction, portability, objection, or information about processing, and to appeal or
          complain to a regulator. Those rights can have legal exceptions, including for
          public-interest research, free expression, legal compliance, security, and recordkeeping.
          Icarus may need to verify a requester’s identity before acting. Icarus will not
          discriminate against you for exercising an applicable privacy right.
        </p>
      </section>

      <section>
        <h2>Security and international processing</h2>
        <p>
          Reasonable technical safeguards are used, but no website or transmission method is fully
          secure. Data may be processed in countries where Icarus or its providers operate, which
          may have different privacy laws from your location. Do not send wallet secrets, private
          keys, seed phrases, passwords, or unnecessary sensitive information to Icarus.
        </p>
      </section>

      <section>
        <h2>Children</h2>
        <p>
          Icarus is a general-audience research service and is not directed to children under 13. It
          does not knowingly collect personal information directly from children through public
          visitor accounts or forms. If you believe a child provided personal information, use the
          contact method below.
        </p>
      </section>

      <section>
        <h2>Changes and contact</h2>
        <p>
          This policy may change as the service, providers, or legal requirements change. The “Last
          updated” date identifies the current version. Material changes will be highlighted when
          reasonably practical. For important limitations on Icarus content, read the{" "}
          <Link to="/disclaimer">Disclaimer</Link>.
        </p>
        <LegalContact />
      </section>
    </LegalPage>
  );
}
