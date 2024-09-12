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
      <FAQComponent />
    </div>
  );
};

export default ContactPage;
