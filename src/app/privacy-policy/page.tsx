import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - ZenGgames",
  description:
    "Explore ZenGgames Privacy Policy to understand how we protect and manage your data while providing online games that you can play without downloading.",
  openGraph: {
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/privacy-policy`,
    type: "website",
    title: "Privacy Policy - ZenGgames",
    description:
      "Explore ZenGgames Privacy Policy to understand how we protect and manage your data while providing online games that you can play without downloading.",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/privacy-policy`,
  },
};

export default async function PrivacyPolicy() {
  return (
    <>
      <main className="flex flex-col w-full bg-white px-5 md:px-10 my-10">
        <h1 className="text-center text-2xl sm:text-4xl font-bold text-white bg-gradient-to-br from-[#0d7ba3] to-[#d3f3ff] shadow-md rounded-md p-6 mt-2">
          Privacy Policy
        </h1>

        <div className=" p-6 space-y-3 text-gray-800">
          <p className="mt-8 font-semibold text-gray-700 ">
            Last updated: October 12, 2024
          </p>

          <p className="text-base ">
            This Privacy Policy describes Our policies and procedures on the
            collection, use, and disclosure of Your information when You use the
            Service and tells You about Your privacy rights and how the law
            protects You.
          </p>

          <p className="text-base ">
            We use Your Personal data to provide and improve the Service. By
            using the Service, You agree to the collection and use of
            information in accordance with this Privacy Policy.
          </p>

          <h2 className="text-xl font-semibold text-[#0d7ba3] ">
            Interpretation and Definitions
          </h2>

          <h3 className="text-lg font-semibold text-gray-700 ">
            Interpretation
          </h3>
          <p className="text-base ">
            The words of which the initial letter is capitalized have meanings
            defined under the following conditions. The following definitions
            shall have the same meaning regardless of whether they appear in
            singular or plural.
          </p>

          <h3 className="text-lg font-semibold text-gray-700 ">Definitions</h3>
          <p className="text-base ">For the purposes of this Privacy Policy:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Account</strong> means a unique account created for You to
              access our Service or parts of our Service.
            </li>
            <li>
              <strong>Affiliate</strong> means an entity that controls, is
              controlled by or is under common control with a party.
            </li>
            <li>
              <strong>Company</strong> (referred to as either &quot;the
              &quot;Company&quot;, &quot;We&quot;, &quot;Us&quot; or
              &quot;Our&quot; in this Agreement) refers to ZenGgames.
            </li>
            <li>
              <strong>Cookies</strong> are small files that are placed on Your
              device, containing details of Your browsing history.
            </li>
            <li>
              <strong>Country</strong> refers to: Gujarat, India.
            </li>
            <li>
              <strong>Device</strong> means any device that can access the
              Service, such as a computer, mobile phone, or tablet.
            </li>
            <li>
              <strong>Personal Data</strong> refers to any information that
              relates to an identified or identifiable individual.
            </li>
            <li>
              <strong>Service</strong> refers to the Website.
            </li>
            <li>
              <strong>Service Provider</strong> means any natural or legal
              person who processes the data on behalf of the Company.
            </li>
            <li>
              <strong>Usage Data</strong> refers to data collected automatically
              when using the Service.
            </li>
            <li>
              <strong>Website</strong> refers to ZenGgames, accessible from{" "}
              <a
                href="https://www.zenggames.com/"
                className="text-[#3b82f6] underline"
                target="_blank"
              >
                https://zenggames.com
              </a>
            </li>
            <li>
              <strong>You</strong> refers to the individual accessing or using
              the Service.
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-[#0d7ba3] ">
            Collecting and Using Your Personal Data
          </h2>

          <h3 className="text-lg font-semibold text-gray-700 ">
            Types of Data Collected
          </h3>

          <h4 className="text-lg font-semibold text-gray-700 ">
            Personal Data
          </h4>
          <p className="text-base ">
            While using Our Service, We may ask You to provide Us with certain
            personally identifiable information that can be used to contact or
            identify You. This may include:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Email address</li>
            <li>Usage Data</li>
          </ul>

          <h4 className="text-lg font-semibold text-gray-700 ">Usage Data</h4>
          <p className="text-base ">
            Usage Data is collected automatically when using the Service,
            including:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Device&quot;s Internet Protocol address (IP address)</li>
            <li>Browser type and version</li>
            <li>Pages visited and time spent on those pages</li>
            <li>Mobile device information (when applicable)</li>
          </ul>

          <h4 className="text-lg font-semibold text-gray-700 ">
            Tracking Technologies and Cookies
          </h4>
          <p className="text-base ">
            We use Cookies and similar tracking technologies to track activity
            on Our Service and store certain information. These technologies
            include:
          </p>
          <ul className="list-disc pl-6 space-y-4">
            <li>
              <strong>Cookies:</strong> Small files placed on Your Device to
              track activity.
            </li>
            <li>
              <strong>Web Beacons:</strong> Small electronic files used for
              counting users or tracking usage.
            </li>
          </ul>

          <p className="text-base  ">
            For more details on cookies, visit our{" "}
            <a
              href="https://www.freeprivacypolicy.com/blog/sample-privacy-policy-template/#Use_Of_Cookies_And_Tracking"
              target="_blank"
              className="text-[#3b82f6] hover:underline"
            >
              Cookies Policy
            </a>
            .
          </p>

          <h3 className="text-lg font-semibold text-gray-700 ">
            Use of Your Personal Data
          </h3>
          <p className="text-base ">
            We may use Your Personal Data for the following purposes:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>To provide and maintain our Service, monitor its usage.</li>
            <li>To manage Your Account and its functionalities.</li>
            <li>
              For performance of a contract, including the purchase of services.
            </li>
            <li>
              To contact You for updates, security, and other notifications.
            </li>
            <li>
              To provide You with news, special offers, and information on
              similar products or services.
            </li>
            <li>For business transfers and mergers.</li>
            <li>For analysis and improvement of our Service.</li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-700 ">
            Retention of Your Personal Data
          </h3>
          <p className="text-base ">
            We will retain Your Personal Data only for as long as necessary to
            fulfill the purposes described in this Privacy Policy.
          </p>

          <h3 className="text-lg font-semibold text-gray-700 ">
            Transfer of Your Personal Data
          </h3>
          <p className="text-base ">
            Your information may be transferred to, and maintained on, systems
            outside of Your country. By using our Service, You consent to this
            transfer.
          </p>

          <h3 className="text-lg font-semibold text-gray-700 ">
            Delete Your Personal Data
          </h3>
          <p className="text-base ">
            You have the right to request deletion of your Personal Data at any
            time.
          </p>

          <h3 className="text-lg font-semibold text-gray-700 ">
            Disclosure of Your Personal Data
          </h3>
          <p className="text-base ">
            We may disclose Your Personal Data in the following situations:
          </p>
          <ul className="list-disc pl-6 space-y-4">
            <li>In case of business transactions (merger or acquisition).</li>
            <li>To comply with legal obligations.</li>
            <li>To protect the rights and safety of the Company and Users.</li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-700 ">
            Security of Your Personal Data
          </h3>
          <p className="text-base ">
            While We use commercially reasonable means to protect Your Personal
            Data, no method of electronic transmission is 100% secure.
          </p>

          <h2 className="text-xl font-semibold text-[#0d7ba3] ">
            Children&quot;s Privacy
          </h2>
          <p className="text-base ">
            Our Service does not address anyone under the age of 13. We do not
            knowingly collect personal information from children under 13.
          </p>

          <h2 className="text-xl font-semibold text-[#0d7ba3] ">
            Links to Other Websites
          </h2>
          <p className="text-base ">
            Our Service may contain links to external sites. We do not control
            these sites, and we encourage You to review their Privacy Policies.
          </p>

          <h2 className="text-xl font-semibold text-[#0d7ba3] ">
            Changes to this Privacy Policy
          </h2>
          <p className="text-base ">
            We may update Our Privacy Policy from time to time. Any changes will
            be posted on this page with the updated &quot;Last updated&quot;
            date.
          </p>

          <h2 className="text-xl font-semibold text-[#0d7ba3] ">Contact Us</h2>
          <p className="text-base ">
            If you have any questions about this Privacy Policy, please contact
            us:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              By email: <p className="text-[#3b82f6] ">contact@zenggames.com</p>
            </li>
            <li>
              By visiting this page on our website:
              <a
                href="https://www.zenggames.com/"
                target="_blank"
                className="text-[#3b82f6] underline"
              >
                https://zenggames.com
              </a>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
