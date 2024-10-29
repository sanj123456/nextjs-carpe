import React from "react";
import "./privecy-policy.scss";
import MaxWidthWrapper from "@/Components/MaxWidthWrapper";
const PrivacyPolicy = () => {
  return (
    <MaxWidthWrapper>


      <div id="main-div-privecy-policy">
        <div className="section">
          <h1 className="heading">Privacy Policy</h1>
          <p>
            Car Pe Cash is committed to shielding our clients' individual and monetary data. However, we need to collect and maintain some private data points about our clients to provide funds and services.
          </p>
          <p>
            This Privacy Policy describes how Car Pe Cash accumulates, uses, works, stores, recovers, discloses, or exchanges data, including individual and delicate information, when you visit, are associated with, or use our website.
          </p>
          <p>
            This incorporates our iOS and Android mobile apps, mobile site, call centre, or any other platform on which we offer our services to you through the portal (as mentioned in the Terms and Conditions).
          </p>
          <p>
            To offer you (and any joint applicants, members, or nominees) services using the portal, Car Pe Cash and approved intermediaries are required to gather different data and information from you with your express consent.
          </p>
          <p>
            All terms and conditions for utilizing the portal and obtaining our services, as described in the Terms and Conditions, are incorporated into this Privacy Policy.
          </p>
          <p>
            Any capitalized terms not outlined here will have the interpretations given in the Terms and Conditions.
          </p>
        </div>

        <div className="section">
          <h2 className="heading">Non-Public Personal Information We Collect</h2>
          <p>When you apply for financial services with us or apply for a loan, we require the following information:</p>
          <ul>
            <li>KYC information such as your name, address, email, date of birth, phone numbers, PAN, employment details, financial status, salary certificates, and trading activity.
            </li>
            <li>
              Bank records, transaction information, services used by other banks/NBFCs, and other financial obligations.
            </li>
          </ul>
        </div>

        <div className="section">
          <h2 className="heading">Non-Public Personal Information We Share
          </h2>
          <p>Car Pe Cash does not share non-public personal information about existing or past clients except as needed or approved by law. Cases where this type of information may be provided include court orders, an investigation by the police, and authorities from the government who are in charge of matters, such as the Income Tax Department or the Securities and Exchange Board of India (SEBI). Any declaration requiring your precise written permission is allowed only with your authorization.          </p>
        </div>
        <div className="section">
          <h2 className="heading">Ensuring Confidentiality and Security of Clients' Personal Information</h2>
          <p>We have high-end technical settings for security purposes, which include physical, electronic, and procedural safeguards. Your account details are safeguarded on our website to prevent unauthorised attacks. We encrypt information shared between you and Car Pe Cash for added security. Only essential staff, like client operating personnel, have access to your information. To strengthen your network security, do not share your password; change it regularly. Also, upgrade your login and trading passwords with support from our team at any time.</p>
        </div>
        <div className="section">
          <h2 className="heading">Business Transitions</h2>
          <p>If Car Pe Cash undergoes a business change, including a merger, acquisition, or sale of assets, customer data, along with personally identifiable details, may be transmitted. We will inform clients using a prominent alert on our website for 30 days regarding a few changes in ownership or control of their information.
          </p>
        </div>
        <div className="section">
          <h2 className="heading">Amendments in this Privacy Policy</h2>
          <p>Car Pe Cash can upgrade this privacy policy at any time. If there are substantial changes, we will inform our clients through a notice on our website and may also post these updates in other applicable locations. Clients are urged to check the policy regularly for updates.</p>
        </div>
        <div className="section">
          <h2 className="heading">Options for our Clients:</h2>
          <p>You can withdraw from receiving our marketing emails, calls, or messages at any time.
            You have the authority to access and update your personal information whenever you need it.
          </p>
        </div>
        <div className="section">
          <h2 className="heading">Contact Us</h2>
          <p>If you have any questions or want advice about our Privacy Policy, you can contact us at  <span><a href="mailto:carpecash001@gmail.com">carpecash001@gmail.com</a></span></p>
        </div>
      </div> </MaxWidthWrapper>
  );
};

export default PrivacyPolicy;
