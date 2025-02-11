import React from "react";
import { FaLocationArrow, FaVoicemail } from "react-icons/fa";
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";

function TopNav() {
  return (
    <div className="bg-mainText">
      <div className="w-[80vw] mx-auto flex items-center justify-between">
        {/* Contact Info */}
        <div className=" flex  gap-12 items-center justify-between">
          <div className="flex items-center gap-4 p-2">
            <FaVoicemail size={25} className="text-primary font-thin" />
            <p className="text-white font-bold">hayatyasser160@gmail.com</p>
          </div>

          <div className="flex items-center gap-4 p-2">
            <FaLocationArrow size={25} className="text-primary font-thin" />
            <p className="text-white font-bold">15 street of moustafa</p>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className=" flex items-center  gap-12  justify-between">
          <ul className="flex gap-4 p-2">
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook
                  size={25}
                  className="text-primary hover:text-blue-600"
                />
              </a>
            </li>
            <li>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter
                  size={25}
                  className="text-primary hover:text-blue-500"
                />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram
                  size={25}
                  className="text-primary hover:text-pink-500"
                />
              </a>
            </li>
            <li>
              <a
                href="https://whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp
                  size={25}
                  className="text-primary hover:text-green-500"
                />
              </a>
            </li>
          </ul>
          <button className=" p-3 bg-primary  text-white   font-bold">
            Make Request
          </button>
        </div>
      </div>
    </div>
  );
}

export default TopNav;
