import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

const SocialMediaLinks = () => {
  const instagramProfileUrl = "https://www.instagram.com/myracasual/";
  const whatsappChatUrl = "https://wa.me/9653217981"; // Replace with your WhatsApp number

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-center gap-4">
      {/* Instagram Logo */}
      <a
        href={instagramProfileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-pink-500 hover:text-pink-600 text-4xl bg-white p-2 rounded-full shadow-md"
      >
        <FaInstagram />
      </a>

      {/* WhatsApp Logo */}
      <a
        href={whatsappChatUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-500 hover:text-green-600 text-4xl bg-white p-2 rounded-full shadow-md"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default SocialMediaLinks;
