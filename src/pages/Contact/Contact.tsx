import React from "react";
import OverLay from "../../components/common/OverLay/OverLay";
import ContactCards from "../../components/features/Contact/ContactCards";
import ContactForm from "../../components/features/Contact/ContactForm";

function Contact() {
  return <div className="mt-28"> 
  <OverLay title="Contact" /> 
  <div className="mt-12"> 
    <ContactCards /> 
    <ContactForm />
  </div>
  </div>;
}

export default Contact;
