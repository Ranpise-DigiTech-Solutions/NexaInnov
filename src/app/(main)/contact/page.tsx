import React from "react";
import GetInTouchComponent from "./_components/get-in-touch"
import ContactDetailsComponent from "./_components/contact-details";
import FAQComponent from "../../../components/common/faq";

type Props = {};

const ContactPage = (props: Props) => {
  return (
    <div className="text-white w-full min-h-screen flex flex-col items-center justify-center gap-[5rem]">
      <ContactDetailsComponent />
      <GetInTouchComponent />
      <FAQComponent faqs={[
        {
          key: "faq1",
          question: "How can I get in touch with your team?",
          answer:
            "You can reach us via our contact form, email, or phone. Visit our 'Get in Touch' section for the details."
        },
        {
          key: "faq2",
          question: "What are your customer support hours?",
          answer:
            "Our support team is available Monday through Friday from 9.00 AM IST to 6.00 AM IST. After hours connect on contact@nexainnov.com, We aim to respond to all inquiries within 24 hours."
        },
        {
          key: "faq3",
          question: "How long will it take to receive a response?",
          answer:
            "We typically respond to inquiries within 1-2 business days, depending on the volume of requests."
        },
        {
          key: "faq4",
          question: "Is there an alternative way to contact you other than the form?",
          answer:
            "Yes, you can also email us directly at contact@nexainnov.com or call us at +919769919222."
        },
        {
          key: "faq5",
          question: "Where are you located?",
          answer:
            "We are based in Mangalore &amp; Mumbai , but we provide services globally. Please check our website for more information on our offerings."
        },
      ]} />
    </div>
  );
};

export default ContactPage;
