import { FaBookQuran, FaRegLightbulb, FaPrayingHands } from "react-icons/fa";

export default function AboutCard({ icon, title, description }) {
  return (
    <div className="p-6 border rounded-lg my-6   w-full rtl flex flex-row-reverse gap-6  justify-start  transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r from-green-200 to-green-400 hover:shadow-xl shadow-md bg-white">
      <div className="text-mainText text-5xl text-green-600">{icon}</div>
      <div className="text-right">
        <h3 className="text-mainText font-bold text-xl">{title}</h3>
        <p className="text-secondaryTextColor mt-2 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
