import React from "react";
import styles from "./TermsOfUse.page.module.scss";

const TermsOfUsePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.mainTitle}>Terms Of Use</h2>
        <p>
          Welcome to Little Lantern’s website. By accessing and using our
          website, you agree to the following terms and conditions. If you do
          not agree with any part of these terms, please do not use our website.
        </p>

        <h3>1. Acceptance of Terms</h3>
        <p>
          By using our website, you accept and agree to comply with these Terms
          and Conditions. We reserve the right to modify these terms at any
          time, and such changes will be effective immediately upon posting.
        </p>

        <h3>2. Use of Website</h3>
        <ul>
          <li>
            The content on this website is for informational purposes only.
          </li>
          <li>
            You agree to use the website in accordance with all applicable laws
            and regulations of India.
          </li>
        </ul>

        <h3>3. Registration and Personal Information</h3>
        <p>
          Certain sections of the website may require you to provide personal
          information. By providing your information, you consent to our Privacy
          Policy.
        </p>

        <h3>4. Intellectual Property Rights</h3>
        <p>
          All content, including text, images, logos, and graphics, is the
          property of Little Lantern and is protected by the Copyright Act,
          1957. You may not copy, reproduce, or distribute any part of this
          website without our prior written consent.
        </p>

        <h3>5. Enrollment and Payments</h3>
        <ul>
          <li>
            Any fees for preschool enrollment, tuition, or other services must
            be paid as per the terms outlined on our website.
          </li>
          <li>
            Payments shall be made in Indian Rupees (INR) through approved
            payment methods.
          </li>
          <li>
            Failure to make payments on time may result in the termination of
            services.
          </li>
          <li>
            Any refund policies will be governed by the preschool’s specific
            refund policy, as stated at the time of enrollment.
          </li>
        </ul>

        <h3>6. Disclaimer and Limitation of Liability</h3>
        <ul>
          <li>
            We strive to provide accurate and updated information but do not
            guarantee completeness or accuracy.
          </li>
          <li>
            Little Lantern is not responsible for any losses or damages arising
            from the use of this website.
          </li>
          <li>
            Any disputes arising from the use of this website shall be subject
            to the jurisdiction of Indian courts.
          </li>
        </ul>

        <h3>7. Third-Party Links</h3>
        <p>
          Our website may contain links to third-party websites for additional
          resources. We do not endorse or assume responsibility for the content
          on these third-party websites.
        </p>

        <h3>8. Termination of Access</h3>
        <p>
          We reserve the right to terminate or suspend access to our website at
          any time, without prior notice, if we believe you have violated these
          terms.
        </p>

        <h3>9. Governing Law and Jurisdiction</h3>
        <p>
          These Terms and Conditions are governed by the laws of India, and any
          disputes shall be subject to the exclusive jurisdiction of the courts
          in Kolkata, West Bengal.
        </p>

        <h3>10. Contact Information</h3>
        <p>
          If you have any questions about these Terms and Conditions, please
          contact us at:
        </p>
        <p>
          <strong>Little Lantern</strong>
          <br />
          170, Harish Mukherjee Road, Kolkata - 700026
          <br />
          Email:{" "}
          <a href="mailto:info@littlelantern.in">info@littlelantern.in</a>
          <br />
          Phone: <a href="tel:+918910006463">8910006463</a>
        </p>

        <p>
          By using our website, you acknowledge that you have read, understood,
          and agreed to these terms.
        </p>
      </div>
    </div>
  );
};

export default TermsOfUsePage;
