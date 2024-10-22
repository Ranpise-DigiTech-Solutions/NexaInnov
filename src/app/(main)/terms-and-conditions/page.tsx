import React from "react";

type Props = {};

const TermsAndConditionsPage = (props: Props) => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center pt-8">
      <div className="w-[90%] lg:w-[85%] h-full flex flex-col items-center justify-center gap-[3rem] lg:gap-[4rem]">
        <div className="w-full flex flex-col items-center justify-center gap-[1rem]">
          <p className="w-full text-center text-base text-primary-pink">T&C</p>
          <p className="w-full text-center text-3xl md:text-4xl lg:text-5xl font-semibold capitalize text-neutral-200">
            Terms and Conditions
          </p>
        </div>
        <p className="w-full text-start font-normal text-base lg:text-lg  text-neutral-300 leading-8">
          These Terms and Conditions (&quot;Terms&quot;) govern your use of
          Nexainnov Solutions’ website and services, including IT software
          development and training services. By accessing or using our services,
          you agree to be bound by these Terms.
        </p>
        <div className="w-full flex flex-col items-center justify-center gap-12">
          <div className="w-full flex flex-col items-start justify-center gap-6">
            <h2 className="w-full text-start text-xl lg:text-2xl text-neutral-100 uppercase">
              Acceptance of Terms
            </h2>
            <p className="w-full text-start text-base lg:text-lg  text-neutral-300 leading-8">
              By using our services, you agree to these Terms, our Privacy
              Policy, and any applicable agreements governing specific services,
              such as software development contracts or training program
              enrollments. If you do not agree, please refrain from using our
              services.
            </p>
          </div>
          <div className="w-full flex flex-col items-start justify-center gap-6">
            <h2 className="w-full text-start text-xl lg:text-2xl text-neutral-100 uppercase">
              Services Provided
            </h2>
            <div className="w-full flex flex-col items-center justify-center gap-4">
              <p className="w-full text-start text-base lg:text-lg  text-neutral-300 leading-8">
                Nexainnov Solutions offers a range of services, including but
                not limited to:
              </p>
              <ol className="w-full text-neutral-300 flex flex-col items-start gap-2 text-base lg:text-lg ">
                <li className="flex items-start gap-2 leading-8">
                  <span className="flex-shrink-0">1.</span>
                  <p>
                    IT software development, consulting, and related technical
                    services.
                  </p>
                </li>
                <li className="flex items-start gap-2 leading-8">
                  <span className="flex-shrink-0">2.</span>
                  <p>
                    Training programs on IBM i (AS/400), open systems, and other
                    relevant technologies.
                  </p>
                </li>
                <li className="flex items-start gap-2 leading-8">
                  <span className="flex-shrink-0">3.</span>
                  <p>Custom project development and support.</p>
                </li>
                <li className="flex items-start gap-2 leading-8">
                  <span className="flex-shrink-0">4.</span>
                  <p>
                    The specific scope of services will be outlined in
                    agreements for each project or training program.
                  </p>
                </li>
              </ol>
            </div>
          </div>
          <div className="w-full flex flex-col items-start justify-center gap-6">
            <h2 className="w-full text-start text-xl lg:text-2xl text-neutral-100 uppercase">
              User Responsibilities
            </h2>
            <div className="w-full flex flex-col items-center justify-center gap-4">
              <p className="w-full text-start text-base lg:text-lg  text-neutral-300 leading-8">
                As a user of our services, you agree to:
              </p>
              <ol className="w-full text-neutral-300 flex flex-col items-start gap-2 text-base lg:text-lg ">
                <li className="flex items-start gap-2 leading-8">
                  <span className="flex-shrink-0">1.</span>
                  <p>
                    Provide accurate and up-to-date information when creating an
                    account or entering into a service agreement.
                  </p>
                </li>
                <li className="flex items-start gap-2 leading-8">
                  <span className="flex-shrink-0">2.</span>
                  <p>
                    Use our services only for lawful purposes and in compliance
                    with applicable laws and regulations.
                  </p>
                </li>
                <li className="flex items-start gap-2 leading-8">
                  <span className="flex-shrink-0">3.</span>
                  <p>
                    Not engage in activities that could disrupt or harm the
                    functionality of our website or services.
                  </p>
                </li>
                <li className="flex items-start gap-2 leading-8">
                  <span className="flex-shrink-0">4.</span>
                  <p>
                    Safeguard your account credentials and notify us immediately
                    if you suspect unauthorized access.
                  </p>
                </li>
              </ol>
            </div>
          </div>
          <div className="w-full flex flex-col items-start justify-center gap-6">
            <h2 className="w-full text-start text-xl lg:text-2xl text-neutral-100 uppercase">
              Intellectual Property
            </h2>
            <p className="w-full text-start text-base lg:text-lg  text-neutral-300 leading-8">
              All content, software, and materials provided by Nexainnov
              Solutions, including but not limited to text, graphics, logos, and
              code, are the intellectual property of Nexainnov Solutions or its
              licensors. You may not use, reproduce, or distribute these
              materials without our express written permission.
            </p>
          </div>
          <div className="w-full flex flex-col items-start justify-center gap-6">
            <h2 className="w-full text-start text-xl lg:text-2xl text-neutral-100 uppercase">
              Confidentiality
            </h2>
            <p className="w-full text-start text-base lg:text-lg  text-neutral-300 leading-8">
              For software development and consulting services, you and
              Nexainnov Solutions may exchange confidential information. Both
              parties agree to protect such information and not disclose it to
              any third parties without prior written consent. This
              confidentiality obligation will survive the termination of these
              Terms.
            </p>
          </div>
          <div className="w-full flex flex-col items-start justify-center gap-6">
            <h2 className="w-full text-start text-xl lg:text-2xl text-neutral-100 uppercase">
              Payment Terms
            </h2>
            <div className="w-full flex flex-col items-center justify-center gap-4">
              <p className="w-full text-start text-base lg:text-lg  text-neutral-300 leading-8">
                For all paid services, including software development and
                training programs:
              </p>
              <ol className="w-full text-neutral-300 flex flex-col items-start gap-2 text-base lg:text-lg ">
                <li className="flex items-start gap-2 leading-8">
                  <span className="flex-shrink-0">1.</span>
                  <p>
                    Payment terms will be outlined in the respective agreements.
                  </p>
                </li>
                <li className="flex items-start gap-2 leading-8">
                  <span className="flex-shrink-0">2.</span>
                  <p>
                    Payments must be made according to the schedule agreed upon,
                    typically via bank transfer, credit card, or other approved
                    methods.
                  </p>
                </li>
                <li className="flex items-start gap-2 leading-8">
                  <span className="flex-shrink-0">3.</span>
                  <p>Late payments may incur additional fees or interest.</p>
                </li>
              </ol>
            </div>
          </div>
          <div className="w-full flex flex-col items-start justify-center gap-6">
            <h2 className="w-full text-start text-xl lg:text-2xl text-neutral-100 uppercase">
              Refunds and Cancellations
            </h2>
            <div className="w-full flex flex-col items-center justify-center gap-4">
              <ol className="w-full text-neutral-300 flex flex-col items-start gap-2 text-base lg:text-lg ">
                <li className="flex items-start gap-2 leading-8">
                  <span className="flex-shrink-0">1.</span>
                  <p>
                    <span className="font-semibold underline underline-offset-4">
                      Software Development:
                    </span>{" "}
                    Refunds or cancellations will be handled on a case-by-case
                    basis, as outlined in the project contract.
                  </p>
                </li>
                <li className="flex items-start gap-2 leading-8">
                  <span className="flex-shrink-0">2.</span>
                  <p>
                    <span className="font-semibold underline underline-offset-4">
                      Training Programs:
                    </span>{" "}
                    If you cancel your enrollment before the training program
                    starts, you may be eligible for a refund, subject to our
                    refund policy. Once training has begun, refunds will not be
                    issued unless otherwise stated in the specific
                    program&apos;s terms.
                  </p>
                </li>
              </ol>
            </div>
          </div>
          <div className="w-full flex flex-col items-start justify-center gap-6">
            <h2 className="w-full text-start text-xl lg:text-2xl text-neutral-100 uppercase">
              Limitation of Liability
            </h2>
            <p className="w-full text-start text-base lg:text-lg  text-neutral-300 leading-8">
              Nexainnov Solutions shall not be liable for any indirect,
              incidental, or consequential damages, including loss of profits,
              data, or business opportunities, arising out of or in connection
              with the use of our services.
            </p>
          </div>
          <div className="w-full flex flex-col items-start justify-center gap-6">
            <h2 className="w-full text-start text-xl lg:text-2xl text-neutral-100 uppercase">
              Termination
            </h2>
            <div className="w-full flex flex-col items-center justify-center gap-4">
              <p className="w-full text-start text-base lg:text-lg  text-neutral-300 leading-8">
                We reserve the right to terminate or suspend access to our
                services without prior notice if:
              </p>
              <ol className="w-full text-neutral-300 flex flex-col items-start gap-2 text-base lg:text-lg ">
                <li className="flex items-start gap-2 leading-8">
                  <span className="flex-shrink-0">1.</span>
                  <p>
                    <span className="font-semibold underline underline-offset-4">
                      Violation of Terms:
                    </span>{" "}
                    You violate any of these Terms or fail to comply with any of
                    the obligations outlined in this agreement.
                  </p>
                </li>
                <li className="flex items-start gap-2 leading-8">
                  <span className="flex-shrink-0">2.</span>
                  <p>
                    <span className="font-semibold underline underline-offset-4">
                      Illegal Activity or Misuse:
                    </span>{" "}
                    There is suspicion of illegal activity, fraud, or misuse of
                    our services that may harm the integrity, security, or
                    functionality of our platform.
                  </p>
                </li>
                <li className="flex items-start gap-2 leading-8">
                  <span className="flex-shrink-0">3.</span>
                  <p>
                    <span className="font-semibold underline underline-offset-4">
                      Non-Payment:
                    </span>{" "}
                    You fail to make any required payments for the services
                    provided, including but not limited to subscription fees or
                    service charges.
                  </p>
                </li>
                <li className="flex items-start gap-2 leading-8">
                  <span className="flex-shrink-0">4.</span>
                  <p>
                    <span className="font-semibold underline underline-offset-4">
                      Violation of Intellectual Property Rights:
                    </span>{" "}
                    You infringe on our intellectual property rights or those of
                    third parties.
                  </p>
                </li>
                <li className="flex items-start gap-2 leading-8">
                  <span className="flex-shrink-0">5.</span>
                  <p>
                    <span className="font-semibold underline underline-offset-4">
                      Security Concerns:
                    </span>{" "}
                    There is a breach or attempted breach of our security
                    systems, or unauthorized access to our systems is detected.
                  </p>
                </li>
                <li className="flex items-start gap-2 leading-8">
                  <span className="flex-shrink-0">6.</span>
                  <p>
                    <span className="font-semibold underline underline-offset-4">
                      Legal Requirement:
                    </span>{" "}
                    We are required to do so by law, regulation, or a court
                    order.
                  </p>
                </li>
                <li className="flex items-start gap-2 leading-8">
                  <span className="flex-shrink-0">7.</span>
                  <p>
                    <span className="font-semibold underline underline-offset-4">
                      Misrepresentation or Fraudulent Activity:
                    </span>{" "}
                    If any information provided by you is found to be false,
                    misleading, or fraudulent.
                  </p>
                </li>
                <li className="flex items-start gap-2 leading-8">
                  <span className="flex-shrink-0">8.</span>
                  <p>
                    <span className="font-semibold underline underline-offset-4">
                      Abuse or Harassment:
                    </span>{" "}
                    Any abusive, threatening, or harassing behavior towards our
                    staff, representatives, or other users.
                  </p>
                </li>
              </ol>
            </div>
          </div>
          <div className="w-full flex flex-col items-start justify-center gap-6">
            <h2 className="w-full text-start text-xl lg:text-2xl text-neutral-100 uppercase">
              Third-Party Services
            </h2>
            <p className="w-full text-start text-base lg:text-lg  text-neutral-300 leading-8">
              Our services may include third-party products or services, such as
              cloud hosting or payment processors. Nexainnov Solutions is not
              responsible for the performance or security of these third-party
              services. Your use of third-party services is subject to their
              respective terms and conditions.
            </p>
          </div>
          <div className="w-full flex flex-col items-start justify-center gap-6">
            <h2 className="w-full text-start text-xl lg:text-2xl text-neutral-100 uppercase">
              Governing Law
            </h2>
            <p className="w-full text-start text-base lg:text-lg  text-neutral-300 leading-8">
              These Terms are governed by and construed in accordance with the
              laws of the jurisdiction in which Nexainnov Solutions operates,
              without regard to its conflict of law provisions. Any disputes
              arising under or in connection with these Terms shall be resolved
              in the courts of the jurisdiction in which Nexainnov Solutions
              operates.
            </p>
          </div>
          <div className="w-full flex flex-col items-start justify-center gap-6">
            <h2 className="w-full text-start text-xl lg:text-2xl text-neutral-100 uppercase">
              Amendments
            </h2>
            <p className="w-full text-start text-base lg:text-lg  text-neutral-300 leading-8">
              Nexainnov Solutions reserves the right to modify or replace these
              Terms at any time. Any changes will be posted on our website, and
              it is your responsibility to review them periodically. Your
              continued use of our services after such changes constitutes your
              acceptance of the new Terms.
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

export default TermsAndConditionsPage;
