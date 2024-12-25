import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions - ZenGgames",
  description:
    "Review the Terms and Conditions for using ZenGgames services. Understand your rights and responsibilities while enjoying online games without downloading.",
  openGraph: {
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/terms-conditions`,
    type: "website",
    title: "Terms and Conditions - ZenGgames",
    description:
      "Review the Terms and Conditions for using ZenGgames services. Understand your rights and responsibilities while enjoying online games without downloading.",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/terms-conditions`,
  },
};

export default async function TermsAndCondition() {
  return (
    <>
      <main className="flex w-full flex-col h-auto bg-white px-5 md:px-10 my-10">
        <h1 className="text-xl sm:text-4xl font-bold shadow-lg rounded-md p-6 w-full text-center mt-4 text-white bg-gradient-to-br from-[#0d7ba3] to-[#d3f3ff]">
          Terms and Conditions
        </h1>

        <p className="mt-4 font-semibold text-gray-700">
          Last updated: October 12, 2024
        </p>
        <p className="text-base mt-2 text-gray-800">
          Please read these terms and conditions carefully before using Our
          Service.
        </p>

        <h2 className="text-xl font-semibold mt-4 text-[#0d7ba3]">
          Interpretation and Definitions
        </h2>

        <h3 className="text-xl font-bold mt-2 text-gray-800">Interpretation</h3>
        <p className="text-base mt-2 text-gray-600">
          The words of which the initial letter is capitalized have meanings
          defined under the following conditions. The following definitions
          shall have the same meaning regardless of whether they appear in
          singular or in plural.
        </p>

        <h3 className="text-xl font-bold mt-2 text-gray-800">Definitions</h3>
        <p className="text-base mt-2 text-gray-600">
          For the purposes of these Terms and Conditions:
        </p>
        <ul className="list-disc pl-6 space-y-1 mt-2 text-gray-600">
          <li>
            <strong>Affiliate:</strong> means an entity that controls, is
            controlled by or is under common control with a party...
          </li>
          <li>
            <strong>Country:</strong> refers to: Gujarat, India
          </li>
          <li>
            <strong>Company:</strong> (referred to as &quot;the Company&quot;,
            &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot;) refers to
            ZenGgames.
          </li>
          <li>
            <strong>Device:</strong> means any device that can access the
            Service such as a computer, a cellphone, or a digital tablet.
          </li>
          <li>
            <strong>Service:</strong> refers to the Website.
          </li>
          <li>
            <strong>Terms and Conditions:</strong> mean these Terms and
            Conditions that form the entire agreement between You and the
            Company regarding the use of the Service...
          </li>
          <li>
            <strong>Third-party Social Media Service:</strong> means any
            services or content provided by a third-party...
          </li>
          <li>
            <strong>Website:</strong> refers to ZenGgames, accessible from{" "}
            <a
              href="https://www.zenggames.com/"
              className="text-blue-600 underline"
              target="_blank"
            >
              https://zenggames.com
            </a>
          </li>
          <li>
            <strong>You:</strong> means the individual accessing or using the
            Service, or the company, or other legal entity on behalf of which
            such individual is accessing or using the Service.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-4 text-[#0d7ba3]">
          Acknowledgment
        </h2>
        <p className="text-base mt-2 text-gray-800">
          These are the Terms and Conditions governing the use of this Service
          and the agreement that operates between You and the Company...
        </p>
        <p className="text-base mt-2 text-gray-800">
          Your access to and use of the Service is conditioned on Your
          acceptance of and compliance with these Terms and Conditions...
        </p>
        <p className="text-base mt-2 text-gray-800">
          You represent that you are over the age of 18. The Company does not
          permit those under 18 to use the Service.
        </p>
        <p className="text-base mt-2 text-gray-800">
          Your access to and use of the Service is also conditioned on Your
          acceptance of and compliance with the Privacy Policy of the Company...
        </p>

        <h2 className="text-xl font-semibold mt-4 text-[#0d7ba3]">
          Links to Other Websites
        </h2>
        <p className="text-base mt-2 text-gray-800">
          Our Service may contain links to third-party web sites or services
          that are not owned or controlled by the Company.
        </p>
        <p className="text-base mt-2 text-gray-800">
          The Company has no control over, and assumes no responsibility for,
          the content, privacy policies, or practices of any third party
          websites or services...
        </p>

        <h2 className="text-xl font-semibold mt-4 text-[#0d7ba3]">
          Termination
        </h2>
        <p className="text-base mt-2 text-gray-800">
          We may terminate or suspend Your access immediately, without prior
          notice or liability, for any reason whatsoever...
        </p>
        <p className="text-base mt-2 text-gray-800">
          Upon termination, Your right to use the Service will cease
          immediately.
        </p>

        <h2 className="text-xl font-semibold mt-4 text-[#0d7ba3]">
          Limitation of Liability
        </h2>
        <p className="text-base mt-2 text-gray-800">
          Notwithstanding any damages that You might incur, the entire liability
          of the Company and any of its suppliers under any provision of this
          Terms...
        </p>

        <h2 className="text-xl font-semibold mt-4 text-[#0d7ba3]">
          &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; Disclaimer
        </h2>
        <p className="text-base mt-2 text-gray-800">
          The Service is provided to You &quot;AS IS&quot; and &quot;AS
          AVAILABLE&quot; and with all faults and defects without warranty of
          any kind...
        </p>

        <h2 className="text-xl font-semibold mt-4 text-[#0d7ba3]">
          Governing Law
        </h2>
        <p className="text-base mt-2 text-gray-800">
          The laws of the Country, excluding its conflicts of law rules, shall
          govern this Terms and Your use of the Service...
        </p>

        <h2 className="text-xl font-semibold mt-4 text-[#0d7ba3]">
          Disputes Resolution
        </h2>
        <p className="text-base mt-2 text-gray-800">
          If You have any concern or dispute about the Service, You agree to
          first try to resolve the dispute informally by contacting the
          Company...
        </p>

        <h2 className="text-xl font-semibold mt-4 text-[#0d7ba3]">
          For European Union (EU) Users
        </h2>
        <p className="text-base mt-2 text-gray-800">
          If You are a European Union consumer, you will benefit from any
          mandatory provisions of the law of the country in which You are
          resident.
        </p>

        <h2 className="text-xl font-semibold mt-4 text-[#0d7ba3]">
          United States Legal Compliance
        </h2>
        <p className="text-base mt-2 text-gray-800">
          You represent and warrant that (i) You are not located in a country
          that is subject to the United States government embargo...
        </p>

        <h2 className="text-xl font-bold mt-4 text-[#0d7ba3]">
          Severability and Waiver
        </h2>
        <h3 className="text-[17px] font-semibold mt-2 text-gray-800">
          Severability
        </h3>
        <p className="text-base mt-2 text-gray-600">
          If any provision of these Terms is held to be unenforceable or
          invalid, such provision will be changed and interpreted to accomplish
          the objectives...
        </p>
        <h3 className="text-[17px] font-semibold mt-2 text-gray-800">Waiver</h3>
        <p className="text-base mt-2 text-gray-600">
          Except as provided herein, the failure to exercise a right or to
          require performance of an obligation under these Terms shall not
          affect a party&quot;s ability...
        </p>

        <h2 className="text-xl font-semibold mt-4 text-[#0d7ba3]">
          Translation Interpretation
        </h2>
        <p className="text-base mt-2 text-gray-800">
          These Terms and Conditions may have been translated if We have made
          them available to You on our Service. You agree that the original
          English text shall prevail...
        </p>

        <h2 className="text-xl font-semibold mt-4 text-[#0d7ba3]">
          Changes to These Terms and Conditions
        </h2>
        <p className="text-base mt-2 text-gray-800">
          We reserve the right, at Our sole discretion, to modify or replace
          these Terms at any time. If a revision is material We will make
          reasonable efforts...
        </p>
        <p className="text-base mt-2 text-gray-800">
          By continuing to access or use Our Service after those revisions
          become effective, You agree to be bound by the revised terms.
        </p>

        <h2 className="text-xl font-semibold mt-4 text-[#0d7ba3]">
          Contact Us
        </h2>
        <p className="text-base mt-2 text-gray-800">
          If you have any questions about these Terms and Conditions, You can
          contact us:
        </p>
        <ul className="list-disc pl-6 mt-2 text-gray-800">
          <li>
            By email: <p className="text-blue-600">contact@zenggames.com</p>
          </li>
        </ul>
      </main>
    </>
  );
}
