import React from "react";
import contact1 from "../../../assets/images/10.png.png";
import contact2 from "../../../assets/images/12.png.png";
import contact3 from "../../../assets/images/11.png(1).png";

function ContactCards() {
  return (
    <div className="w-[95vw] lg:w-[90vw] xl:w-[80vw] mx-auto flex-wrap flex justify-between">
      <div className=" flex flex-col items-center justify-center py-6 px-20 gap-6 border rounded">
        <img
          src={contact1}
          className="w-[200px] h-[200px] object-cover"
          alt="con"
        />
        <h4 className="text-2xl font-semibold text-mainText">Email Address</h4>
        <p>
          hayatyasser160@gmail.com
          <br />
          nadiagamal132@gmail.com
        </p>
      </div>
      <div className=" flex flex-col items-center justify-center py-6 px-20 gap-6 border rounded">
        <img
          src={contact1}
          className="w-[200px] h-[200px] object-cover"
          alt="con"
        />
        <h4 className="text-2xl font-semibold text-mainText">Email Address</h4>
        <p>
          hayatyasser160@gmail.com
          <br />
          nadiagamal132@gmail.com
        </p>
      </div>
      <div className=" flex flex-col items-center justify-center py-6 px-20 gap-6 border rounded">
        <img
          src={contact1}
          className="w-[200px] h-[200px] object-cover"
          alt="con"
        />
        <h4 className="text-2xl font-semibold text-mainText">Email Address</h4>
        <p>
          hayatyasser160@gmail.com
          <br />
          nadiagamal132@gmail.com
        </p>
      </div>
    </div>
  );
}

export default ContactCards;
