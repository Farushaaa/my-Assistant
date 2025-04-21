import React from "react";
import { contactsContent } from "../content/sectionContents";
const Footer = () => {
  return (
    <div className="flex flex-row items-center justify-around mb-20">
      <div className="flex flex-col ">
        {contactsContent.map((contact) => (
          <a
            href={contact.href}
            key={contact.id}
            className="flex flex-row justify-between"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-2xl font-medium mr-4">{contact.item}</p>
            <img
              className="h-[30px] w-[30px]"
              src={contact.imgSource}
              alt={contact.imgSource}
            />
          </a>
        ))}
      </div>
      <div>
        <p className="text-4xl font-bold">My Assistant</p>
      </div>
    </div>
  );
};

export default Footer;
