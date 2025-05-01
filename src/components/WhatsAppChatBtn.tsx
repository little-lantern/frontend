import React from "react";
import whatsAppIcon from "../assets/images/whatsapp-social-media-svgrepo-com.svg";
import Styles from "./WhatsAppChatBtn.module.scss";

const WhatsAppButton: React.FC = () => {
  const phoneNumber = "918910006463"; // Use international format without '+'
  const message = "Hello";

  return (
    <div className={Styles.container}>
      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
          message
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          backgroundColor: "#25D366",
          color: "white",
          borderRadius: "50%",
          padding: "10px",
          textAlign: "center",
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        }}
        title="Chat on WhatsApp"
      >
        <img src={whatsAppIcon} alt="whatsapp Btn" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
