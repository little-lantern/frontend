import React from "react";
import styles from "./PrivacyPolicy.page.module.scss";

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.mainTitle}>Privacy Policy</h2>
        <p>
          Little Lantern is committed to protecting your privacy. This Privacy
          Policy outlines how we collect, use, disclose, and safeguard your
          information when you visit our website. By using our website, you
          agree to the terms of this Privacy Policy.
        </p>

        <h3>1. Information We Collect</h3>
        <ul>
          <li>
            <strong>Personal Information:</strong> Name, email address, phone
            number, and other details provided through contact forms or
            enrollment applications.
          </li>
          <li>
            <strong>Non-Personal Information:</strong> Browser type, IP address,
            and website usage data collected through cookies and analytics
            tools.
          </li>
        </ul>

        <h3>2. How We Use Your Information</h3>
        <ul>
          <li>To process inquiries, admissions, and enrollments.</li>
          <li>To communicate with parents and guardians.</li>
          <li>To improve our website and services.</li>
          <li>To comply with legal obligations.</li>
        </ul>

        <h3>3. Sharing of Information</h3>
        <p>
          We do not sell, trade, or rent your personal information. However, we
          may share information with:
        </p>
        <ul>
          <li>Service providers assisting us in operating our website.</li>
          <li>
            Legal authorities if required by law or to protect our rights.
          </li>
        </ul>

        <h3>4. Cookies and Tracking Technologies</h3>
        <p>
          Our website may use cookies to enhance user experience. You can choose
          to disable cookies in your browser settings, but some website features
          may not function properly.
        </p>

        <h3>5. Data Security</h3>
        <p>
          We implement appropriate security measures to protect your personal
          information.
        </p>

        <h3>6. Third-Party Links</h3>
        <p>
          Our website may contain links to external websites. We are not
          responsible for their privacy practices and encourage you to review
          their policies.
        </p>

        <h3>7. Children’s Privacy</h3>
        <p>
          We do not knowingly collect personal information from children without
          parental consent. If we become aware of such data, we will take
          appropriate steps to remove it.
        </p>

        <h3>8. Your Rights</h3>
        <p>
          As per the Information Technology (Reasonable Security Practices and
          Procedures and Sensitive Personal Data or Information) Rules, 2011,
          you have the right to:
        </p>
        <ul>
          <li>Access, update, or correct your personal information.</li>
          <li>
            Request deletion of your personal data, subject to legal
            obligations.
          </li>
        </ul>

        <h3>9. Changes to This Policy</h3>
        <p>
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with an updated revision date.
        </p>

        <h3>10. Contact Us</h3>
        <p>
          If you have any questions about this Privacy Policy, please contact us
          at:
        </p>
        <p>
          <strong>Little Lantern</strong>
          <br />
          170, Harish Mukherjee Road, Kolkata - 700026
          <br />
          Email:{" "}
          <a href="mailto:info@littlelantern.in">info@littlelantern.in</a>
        </p>

        <p>
          By using our website, you acknowledge that you have read and agree to
          this Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
