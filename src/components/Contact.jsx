import React from "react";

const Contact = () => {
  const contactItems = [
    {
      icon: "fas fa-phone",
      title: "Phone",
      content: "+91 9591085366",
      link: "tel:+919591085366",
    },
    {
      icon: "fas fa-envelope",
      title: "Email",
      content: "vrishabhrajaghatta@gmail.com",
      link: "mailto:vrishabhrajaghatta@gmail.com",
    },
    {
      icon: "fab fa-linkedin",
      title: "LinkedIn",
      content: "linkedin.com/in/vrushabh-rajaghatta",
      link: "https://www.linkedin.com/in/vrushabh-rajaghatta",
    },
    {
      icon: "fab fa-github",
      title: "GitHub",
      content: "github.com/Vrushi007",
      link: "https://github.com/Vrushi007",
    },
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-icons-simple">
          {contactItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target={item.link.startsWith("http") ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="contact-icon-simple"
              title={item.title}
              aria-label={item.title}
            >
              <i className={item.icon}></i>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
