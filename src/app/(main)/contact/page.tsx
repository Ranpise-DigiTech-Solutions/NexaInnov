import React from "react";
import GetInTouchComponent from "./_components/get-in-touch"
import ContactDetailsComponent from "./_components/contact-details";
import FAQComponent from "../../../components/global/faq";

type Props = {};

const ContactPage = (props: Props) => {
  return (
    <div className="text-white">
      <ContactDetailsComponent />
      <GetInTouchComponent />
      <FAQComponent className="py-[4rem]"/>
    </div>
  );
};

export default ContactPage;
