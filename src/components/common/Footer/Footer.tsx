import { Link } from "react-router-dom";
import img from "../../../assets/images/logo.jpeg";
import {
  FaYoutube,
  FaTwitter,
  FaTiktok,
  FaFacebook,
  FaInstagram,
  FaLocationArrow,
  FaTelegramPlane,
  FaPhone,
  FaGooglePlay,
  FaApple,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const SocialLink = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white p-2 rounded-full shadow-lg hover:shadow-xl transition-all hover:text-blue-500"
    aria-label={label}
  >
    {icon}
  </a>
);

const ContactInfo = ({ icon, text }) => (
  <div className="flex items-center mt-1 justify-center gap-3">
    {icon}
    <p className="text-gray-300 text-sm">{text}</p>
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-[#020809] text-white pt-10">
      <div className="container mx-auto px-4 text-center">
        <img src={img} alt="Logo" className="mx-auto max-w-xs h-32 mb-4" />
        <p className="mb-6 text-md font-thin">
          تطبيق حفظني لتحفيظ وتعليم القرآن الكريم بطريقة سهلة وممتعة.
        </p>
        <ContactInfo
          icon={<FaLocationArrow />}
          text="العنوان: شارع 25، المنطقة التعليمية"
        />
        <ContactInfo icon={<FaPhone />} text="+0120-6115962" />
        <ContactInfo icon={<MdEmail />} text="hafzni.support@gmail.com" />
        <div className="flex flex-col items-center gap-3 mt-4">
          <a
            href="#"
            className="bg-black text-white flex items-center px-4 py-2 rounded-md shadow-lg"
          >
            <FaGooglePlay className="mr-2" /> تحميل من Google Play
          </a>
          <a
            href="#"
            className="bg-black text-white flex items-center px-4 py-2 rounded-md shadow-lg"
          >
            <FaApple className="mr-2" /> تحميل من App Store
          </a>
        </div>
        <div className="flex justify-center gap-4 mt-6">
          <SocialLink
            href="#"
            icon={<FaYoutube className="text-red-600" size={25} />}
            label="YouTube"
          />
          <SocialLink
            href="#"
            icon={<FaTwitter className="text-blue-500" size={25} />}
            label="Twitter"
          />
          <SocialLink
            href="#"
            icon={<FaTiktok className="text-black" size={25} />}
            label="TikTok"
          />
          <SocialLink
            href="#"
            icon={<FaFacebook className="text-blue-700" size={25} />}
            label="Facebook"
          />
          <SocialLink
            href="#"
            icon={<FaInstagram className="text-pink-600" size={25} />}
            label="Instagram"
          />
        </div>
      </div>
      <div className="text-center p-4 mt-7 bg-gray-800">
        <p>© 2025 جميع الحقوق محفوظة لتطبيق حفظني</p>
      </div>
    </footer>
  );
};

export default Footer;
