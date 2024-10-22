import React from "react";

type Props = {};

const PrivacyPolicyPage = (props: Props) => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center pt-8">
      <div className="w-[90%] lg:w-[85%] h-full flex flex-col items-center justify-center gap-[3rem] lg:gap-[4rem]">
        <div className="w-full flex flex-col items-center justify-center gap-[1rem]">
          <p className="w-full text-center text-base text-primary-pink">
            Policy
          </p>
          <p className="w-full text-center text-3xl md:text-4xl lg:text-5xl font-semibold capitalize text-neutral-200">
            Privacy Policy
          </p>
        </div>
        <p className="w-full text-start font-normal text-base lg:text-lg  text-neutral-300 leading-8">
          At Nexainnov Solutions, we are committed to protecting your privacy.
          This Privacy Policy explains how we collect, use, disclose, and
          safeguard your information when you visit our website or use our
          services, including IT software development and training solutions. By
          using our services, you agree to the practices described in this
          policy.
        </p>
        <div className="w-full flex flex-col items-center justify-center gap-12">
          <div className="w-full flex flex-col items-start justify-center gap-6">
            <h2 className="w-full text-start text-xl lg:text-2xl text-neutral-100 uppercase">
              Information We Collect
            </h2>
            <div className="w-full flex flex-col items-center justify-center gap-4">
              <p className="w-full text-start text-base lg:text-lg  text-neutral-300 leading-8">
                We may collect various types of information, including:
              </p>
              <ol className="w-full text-neutral-300 flex flex-col items-start gap-2 text-base lg:text-lg ">
                <li className="flex items-start gap-2 leading-8">
                  <span className="flex-shrink-0">1.</span>
                  <p>
                    <span className="font-semibold underline underline-offset-4">
                      Personal Identification Information:
                    </span>{" "}
                    Name, email address, phone number, job title, and company
                    details.
                  </p>
                </li>
                <li className="flex items-start gap-2 leading-8">
                  <span className="flex-shrink-0">2.</span>
                  <p>
                    <span className="font-semibold underline underline-offset-4">
                      Technical Information:
                    </span>{" "}
                    IP address, browser type, operating system, and website
                    usage patterns.
                  </p>
                </li>
                <li className="flex items-start gap-2 leading-8">
                  <span className="flex-shrink-0">3.</span>
                  <p>
                    <span className="font-semibold underline underline-offset-4">
                      Training and Program Data:
                    </span>{" "}
                    Information related to courses, certifications, and feedback
                    provided during your engagement with our training programs.
                  </p>
                </li>
                <li className="flex items-start gap-2 leading-8">
                  <span className="flex-shrink-0">4.</span>
                  <p>
                    <span className="font-semibold underline underline-offset-4">
                      Project Information:
                    </span>{" "}
                    Data relevant to IT software development projects, including
                    specifications, client feedback, and related documents.
                  </p>
                </li>
              </ol>
            </div>
          </div>
          <div className="w-full flex flex-col items-start justify-center gap-6">
            <h2 className="w-full text-start text-xl lg:text-2xl text-neutral-100 uppercase">
              How We Use Your Information
            </h2>
            <div className="w-full flex flex-col items-center justify-center gap-4">
              <p className="w-full text-start text-base lg:text-lg  text-neutral-300 leading-8">
                The information we collect may be used for the following
                purposes:
              </p>
              <ol className="w-full text-neutral-300 flex flex-col items-start gap-2 text-base lg:text-lg ">
                <li className="flex items-start gap-2 leading-8">
                  <span className="flex-shrink-0">1.</span>
                  <p>
                    <span className="font-semibold underline underline-offset-4">
                      Service Delivery:
                    </span>{" "}
                    To provide and manage our services, including software
                    development, training, and technical support.
                  </p>
                </li>
                <li className="flex items-start gap-2 leading-8">
                  <span className="flex-shrink-0">2.</span>
                  <p>
                    <span className="font-semibold underline underline-offset-4">
                      Communication:
                    </span>{" "}
                    To communicate with you regarding project updates, training
                    progress, and new services.
                  </p>
                </li>
                <li className="flex items-start gap-2 leading-8">
                  <span className="flex-shrink-0">3.</span>
                  <p>
                    <span className="font-semibold underline underline-offset-4">
                      Service Improvement:
                    </span>{" "}
                    To enhance our offerings and customize your user experience.
                  </p>
                </li>
                <li className="flex items-start gap-2 leading-8">
                  <span className="flex-shrink-0">4.</span>
                  <p>
                    <span className="font-semibold underline underline-offset-4">
                      Billing and Payments:
                    </span>{" "}
                    To process payments, maintain billing records, and manage
                    financial transactions.
                  </p>
                </li>
                <li className="flex items-start gap-2 leading-8">
                  <span className="flex-shrink-0">4.</span>
                  <p>
                    <span className="font-semibold underline underline-offset-4">
                      Marketing and Promotions:
                    </span>{" "}
                    To send marketing and promotional materials, only with your
                    explicit consent.
                  </p>
                </li>
                <li className="flex items-start gap-2 leading-8">
                  <span className="flex-shrink-0">4.</span>
                  <p>
                    <span className="font-semibold underline underline-offset-4">
                      Legal Compliance:
                    </span>{" "}
                    To comply with legal obligations, enforce our agreements,
                    and prevent fraudulent activities.
                  </p>
                </li>
              </ol>
            </div>
          </div>
          <div className="w-full flex flex-col items-start justify-center gap-6">
            <h2 className="w-full text-start text-xl lg:text-2xl text-neutral-100 uppercase">
              How We Protect Your Information
            </h2>
            <p className="w-full text-start text-base lg:text-lg  text-neutral-300 leading-8">
              We implement a variety of security measures to ensure the safety
              of your personal information. These measures include encryption,
              firewalls, and regular system monitoring. Additionally, we require
              any third-party service providers handling personal data to adhere
              to strict data security protocols.
            </p>
          </div>
          <div className="w-full flex flex-col items-start justify-center gap-6">
            <h2 className="w-full text-start text-xl lg:text-2xl text-neutral-100 uppercase">
              Sharing of Information
            </h2>
            <div className="w-full flex flex-col items-center justify-center gap-4">
              <p className="w-full text-start text-base lg:text-lg  text-neutral-300 leading-8">
                We may share your information under the following circumstances:
              </p>
              <ol className="w-full text-neutral-300 flex flex-col items-start gap-2 text-base lg:text-lg ">
                <li className="flex items-start gap-2 leading-8">
                  <span className="flex-shrink-0">1.</span>
                  <p>
                    <span className="font-semibold underline underline-offset-4">
                      Service Providers:
                    </span>{" "}
                    To facilitate the delivery of services, such as payment
                    processing, cloud storage, and data analytics.
                  </p>
                </li>
                <li className="flex items-start gap-2 leading-8">
                  <span className="flex-shrink-0">2.</span>
                  <p>
                    <span className="font-semibold underline underline-offset-4">
                      Business Partners:
                    </span>{" "}
                    With your consent, for joint marketing activities or
                    collaborative projects.
                  </p>
                </li>
                <li className="flex items-start gap-2 leading-8">
                  <span className="flex-shrink-0">3.</span>
                  <p>
                    <span className="font-semibold underline underline-offset-4">
                      Legal Authorities:
                    </span>{" "}
                    When required by law, to comply with legal processes or
                    protect the safety and rights of individuals.
                  </p>
                </li>
              </ol>
            </div>
          </div>
          <div className="w-full flex flex-col items-start justify-center gap-6">
            <h2 className="w-full text-start text-xl lg:text-2xl text-neutral-100 uppercase">
              Data Retention
            </h2>
            <p className="w-full text-start text-base lg:text-lg  text-neutral-300 leading-8">
              We retain your personal information only for as long as necessary
              to fulfill the purposes outlined in this Privacy Policy, comply
              with legal obligations, resolve disputes, and enforce our
              agreements.
            </p>
          </div>
          <div className="w-full flex flex-col items-start justify-center gap-6">
            <h2 className="w-full text-start text-xl lg:text-2xl text-neutral-100 uppercase">
              Your Rights
            </h2>
            <div className="w-full flex flex-col items-center justify-center gap-4">
              <p className="w-full text-start text-base lg:text-lg  text-neutral-300 leading-8">
                You have the following rights concerning your personal
                information:
              </p>
              <ol className="w-full text-neutral-300 flex flex-col items-start gap-2 text-base lg:text-lg ">
                <li className="flex items-start gap-2 leading-8">
                  <span className="flex-shrink-0">1.</span>
                  <p>
                    <span className="font-semibold underline underline-offset-4">
                      Access:
                    </span>{" "}
                    Request a copy of the personal information we hold about
                    you.
                  </p>
                </li>
                <li className="flex items-start gap-2 leading-8">
                  <span className="flex-shrink-0">2.</span>
                  <p>
                    <span className="font-semibold underline underline-offset-4">
                      Correction:
                    </span>{" "}
                    Request correction of any inaccurate or incomplete
                    information.
                  </p>
                </li>
                <li className="flex items-start gap-2 leading-8">
                  <span className="flex-shrink-0">3.</span>
                  <p>
                    <span className="font-semibold underline underline-offset-4">
                      Data Deletion:
                    </span>{" "}
                    Withdraw consent to data processing or request data
                    deletion, subject to legal requirements.
                  </p>
                </li>
                <li className="flex items-start gap-2 leading-8">
                  <span className="flex-shrink-0">3.</span>
                  <p>
                    <span className="font-semibold underline underline-offset-4">
                      Opt-Out:
                    </span>{" "}
                    Opt out of marketing communications at any time.
                  </p>
                </li>
              </ol>
            </div>
          </div>
          <div className="w-full flex flex-col items-start justify-center gap-6">
            <h2 className="w-full text-start text-xl lg:text-2xl text-neutral-100 uppercase">
              Cookies and Tracking Technologies
            </h2>
            <p className="w-full text-start text-base lg:text-lg  text-neutral-300 leading-8">
              Our website uses cookies and similar tracking technologies to
              enhance your browsing experience and monitor website activity. You
              can manage cookie preferences through your browser settings. By
              continuing to use our site, you consent to our use of cookies in
              accordance with this policy.
            </p>
          </div>
          <div className="w-full flex flex-col items-start justify-center gap-6">
            <h2 className="w-full text-start text-xl lg:text-2xl text-neutral-100 uppercase">
              Changes to This Privacy Policy
            </h2>
            <p className="w-full text-start text-base lg:text-lg  text-neutral-300 leading-8">
              We may update this Privacy Policy periodically to reflect changes
              in our practices or comply with legal requirements. Significant
              changes will be communicated through a notice on our website or
              direct communication with you. We encourage you to review this
              Privacy Policy periodically to stay informed about how we are
              protecting your information.
            </p>
          </div>
          <div className="w-full flex flex-col items-start justify-center gap-6">
            <h2 className="w-full text-start text-xl lg:text-2xl text-neutral-100 uppercase">
              Contact Information
            </h2>
            <div className="w-full flex flex-col items-center justify-center gap-4">
              <p className="w-full text-start text-base lg:text-lg  text-neutral-300 leading-8">
                For questions regarding these Terms or our services, please
                contact us at:
              </p>
              <ol className="w-full text-neutral-300 flex flex-col items-start gap-2 text-base lg:text-lg ">
                <li className="flex items-start gap-2 leading-8">
                  <span className="flex-shrink-0">1.</span>
                  <p>
                    <span className="font-semibold">Email:&nbsp;</span>{" "}
                    <a
                      href="mailto:info@nexainnov.com"
                      className="text-primary-light-blue hover:underline hover:text-primary-purple cursor-pointer"
                    >
                      info@nexainnov.com
                    </a>
                  </p>
                </li>
                <li className="flex items-start gap-2 leading-8">
                  <span className="flex-shrink-0">1.</span>
                  <p>
                    <span className="font-semibold">Phone:&nbsp;</span>{" "}
                    <a
                      href="tel:+919769919222"
                      className="text-primary-light-blue hover:underline hover:text-primary-purple cursor-pointer"
                    >
                      +919769919222 / +919819344106
                    </a>
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
