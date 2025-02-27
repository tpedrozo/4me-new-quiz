import React from "react";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="w-full fixed z-10 bottom-0 text-white bg-[#252525] p-4 px-10 flex flex-col sm:flex-row justify-between items-center gap-4">
      <h6 className="text-sm order-2 sm:order-1">
        @2018 - 4me. Todos os Direitos Reservados 2024.
      </h6>
      <div className="flex items-center gap-5 order-1 sm:order-2">
        <FaFacebookSquare />
        <FaInstagram />
        <FaXTwitter />
        <FaLinkedin />
      </div>
    </footer>
  );
}
