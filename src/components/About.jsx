import React from "react";

const About = () => {
  // const downloadResume = () => {
  //   // Create a temporary link element
  //   const link = document.createElement("a");
  //   link.href = "/resume/resume.pdf"; // Adjust path as needed
  //   link.download = "Vrushabh_Rajaghatta_Resume.pdf";
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };

  // const printResume = () => {
  //   window.print();
  // };

  return (
    <section id="about" className="section">
      <div className="about-image-centered">
        <div className="profile-photo-bg">
          <img
            src="/portfolio-website/images/profile.jpeg"
            alt="Vrushabh Rajaghatta"
            className="profile-image-passport"
          />
        </div>
        <h2 className="about-job-title">Software Development Engineer 4</h2>
        <div className="about-company">IQVIA</div>
      </div>
    </section>
  );
};

export default About;
