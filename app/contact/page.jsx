import React from "react";

// components
import Title from "@/components/Title";
import ContactDetail from "@/components/contact/ContactDetail";

const Contact = () => {
  return (
    <main>
      <div className="container mx-auto mt-12">
        <Title content="Contact" />
        <ContactDetail />
      </div>
    </main>
  );
};

export default Contact;
